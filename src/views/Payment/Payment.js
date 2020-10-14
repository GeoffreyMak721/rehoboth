import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useGlobalState } from '../../contexts/GlobalState';

import { PaymentsTable, UsersTable, FormToolbar } from './components';
import { columns } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Payment = () => {
  const classes = useStyles();

  const { payments } = useGlobalState();

  return (
    <div className={classes.root}>
      <FormToolbar />
      <div className={classes.content}>
        {!!payments && <PaymentsTable columns={columns} rows={payments} />}
      </div>
    </div>
  );
};

export default Payment;
