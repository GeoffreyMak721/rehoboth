import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useGlobalState } from '../../contexts/GlobalState';

import { UsersToolbar, StudentsTable, FormToolbar } from './components';
import { columns } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const StudentList = () => {
  const classes = useStyles();

  const { students, studentClasses } = useGlobalState();

  return (
    <div className={classes.root}>
      <FormToolbar studentClasses={studentClasses} />
      <div className={classes.content}>
        {!!students && <StudentsTable columns={columns} rows={students} />}
      </div>
    </div>
  );
};

export default StudentList;
