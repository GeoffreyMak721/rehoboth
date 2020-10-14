import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/core/styles';
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

import { useGlobalState } from '../../../../contexts/GlobalState';

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

const StudentsTable = props => {
  const { className, rows, columns, ...rest } = props;
  const { currentStudentClasse } = useGlobalState();
  // const classes = useStyles();
  const [students, setStudents] = useState(rows);

  useEffect(() => {
    if (!!currentStudentClasse) {
      const students = rows.filter(
        student => student.codeClasse === currentStudentClasse.codeClasse
      );
      setStudents(students);
    } else {
      setStudents([]);
    }
  }, [currentStudentClasse, rows]);

  return (
    <Paper style={{ height: 350, width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={students}
        pageSize={10}
        rowHeight={40}
        // checkboxSelection
        showCellRightBorder
        // showColumnRightBorder
        // onRowSelected={console.log}
      />
    </Paper>
  );
};

StudentsTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default StudentsTable;
