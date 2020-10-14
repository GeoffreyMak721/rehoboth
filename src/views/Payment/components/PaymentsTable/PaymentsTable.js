import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/core/styles';
import uuid from 'uuid/v1';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Paper,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  TextField,
  FormHelperText,
  InputLabel,
  FormControl,
  Select,
  // TableContainer,
  MenuItem
} from '@material-ui/core';

import { DataGrid } from '@material-ui/data-grid';

import TableFooter from '../TableFooter';

import {
  useGlobalState,
  useGlobalCallback
} from '../../../../contexts/GlobalState';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    // minWidth: 1050
    overflow: 'auto',
    maxHeight: 500
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const PaymentsTable = props => {
  const { className, columns, rows, ...rest } = props;

  const [paymentData, setPaymentData] = useState([]);
  const { currentStudent, payments } = useGlobalState();
  const {
    setState,
    getStudentClasse,
    getStudentPayments
  } = useGlobalCallback();

  useEffect(() => {
    if (!!currentStudent) {
      const { codeClasse, noStudent } = currentStudent;
      const studentClasse = getStudentClasse(codeClasse);
      const payments = getStudentPayments(noStudent);
      const paymentInit = {
        id: uuid(),
        date: '01/08/2020',
        libelle: `Initialisation frais scolaires 2020-2021`,
        debit: studentClasse.fees,
        credit: null
      };
      setPaymentData([paymentInit, ...payments]);
    }
  }, [currentStudent, getStudentClasse, getStudentPayments]);
  // const classes = useStyles();

  return (
    <Paper style={{ height: 350 }}>
      <DataGrid
        columns={columns}
        rows={paymentData}
        autoPageSize
        // hideFooterRowCount
        rowHeight={40}
        showCellRightBorder
        components={{ pagination: TableFooter }}
        // pagination
        pageSize={10}
        // showColumnRightBorder
      />
    </Paper>
  );
};

PaymentsTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default PaymentsTable;
