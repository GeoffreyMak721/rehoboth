import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';
import {
  useGlobalState,
  useGlobalCallback
} from '../../../../contexts/GlobalState';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: 650,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pagination: {
    display: 'flex'
  }
}));

const TableFooter = props => {
  const classes = useStyles();
  const [footerData, setFooterData] = useState({
    solde: 0,
    credit: 0
  });
  const { students, currentStudent } = useGlobalState();
  const {
    setState,
    getStudentClasse,
    getStudentPayments,
    handlePayment
  } = useGlobalCallback();

  useEffect(() => {
    if (!!currentStudent) {
      let totalCredit = 0;
      const { codeClasse, noStudent } = currentStudent;
      const classe = getStudentClasse(codeClasse);
      const payments = getStudentPayments(noStudent);

      payments.forEach(payment => {
        totalCredit += payment.credit;
      });

      const solde = classe.fees - totalCredit;

      setFooterData({ solde, credit: totalCredit });
    }
  }, [currentStudent, getStudentClasse, getStudentPayments]);

  const { paginationProps } = props;
  console.log(props);
  return (
    <div className={classes.root}>
      <Pagination
        className={classes.pagination}
        color="primary"
        page={paginationProps.page}
        count={paginationProps.pageCount}
        onChange={(event, value) => paginationProps.setPage(value)}
      />
      <Box display="flex" justifyContent="space-between" width={210} mx={2}>
        <Box color="success.main">
          <Typography color="inherit" variant="h6">
            {`Total Crédit: ${footerData.credit}`}
          </Typography>
        </Box>
        <Box color="error.main">
          <Typography color="inherit" variant="h6">
            {`Solde: ${footerData.solde}`}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default TableFooter;
