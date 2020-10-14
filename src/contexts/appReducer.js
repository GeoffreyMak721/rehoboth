import * as types from './actionsType';

export const initialState = {
  studentClasses: null,
  currentStudentClasse: null,
  students: null,
  currentStudents: null,
  schoolYears: null,
  schoolFees: null,
  payments: null
};

export default (state, action) => {
  switch (action.type) {
    case types.SET_STATE:
      return {
        ...state,
        ...action.payload
      };

    case types.ADD_PAYMENT:
      const newPayment = action.payload.payment;
      const paymentsCopy = !!state.payments ? [...state.payments] : [];
      const newPayments = [...paymentsCopy, newPayment];
      return {
        ...state,
        payments: newPayments
      };

    case types.ADD_STUDENT:
      const newStudent = action.payload.student;
      const studentsCopy = !!state.students ? [...state.students] : [];
      const newStudents = [...studentsCopy, newStudent];
      return {
        ...state,
        students: newStudents
      };
    default:
      break;
  }
};
