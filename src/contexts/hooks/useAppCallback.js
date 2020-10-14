import { useCallback } from 'react';
import * as types from '../actionsType';
import * as data from '../fakeData';

const useAppCallback = (state, dispatch) => {
  const setState = useCallback(state => {
    dispatch({
      type: types.SET_STATE,
      payload: state
    });
  }, []);

  const initializeData = useCallback(() => {
    setState({ students: [] });
    setState({ payments: [] });
    setState({ studentClasses: data.studentClasses });
  }, [setState]);

  const getStudentClasse = useCallback(
    codeClasse => {
      return state.studentClasses.find(cls => cls.codeClasse === codeClasse);
    },
    [state.studentClasses]
  );

  const getStudentPayments = useCallback(
    noStudent => {
      return !!state.payments
        ? state.payments.filter(pym => pym.noStudent === noStudent)
        : null;
    },
    [state.payments]
  );

  const handleAddStudent = useCallback(
    (studentData, codeClasse) => {
      // if (!classes) return;
      const { noClasse } = getStudentClasse(codeClasse);
      const noStudent = `${codeClasse}${noClasse + 1}`;
      const student = { ...studentData, noStudent, codeClasse };

      const studentClasses = state.studentClasses.map(stc => {
        if (stc.codeClasse === codeClasse) {
          return { ...stc, noClasse: stc.noClasse + 1 };
        } else {
          return stc;
        }
      });
      setState({ studentClasses });

      dispatch({
        type: types.ADD_STUDENT,
        payload: { student }
      });
    },
    [state.studentClasses]
  );

  const handlePayment = useCallback(payment => {
    dispatch({
      type: types.ADD_PAYMENT,
      payload: { payment }
    });
  }, []);

  return {
    initializeData,
    setState,
    handleAddStudent,
    getStudentClasse,
    getStudentPayments,
    handlePayment
  };
};

export default useAppCallback;
