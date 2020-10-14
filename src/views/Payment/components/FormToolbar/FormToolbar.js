import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  Typography,
  Box,
  Fab
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
/* eslint-disable no-use-before-define */

import Autocomplete from '@material-ui/lab/Autocomplete';
import RefreshIcon from '@material-ui/icons/Refresh';
import DoneIcon from '@material-ui/icons/Done';

import moment from 'moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import 'moment/locale/fr';

import {
  useGlobalState,
  useGlobalCallback
} from '../../../../contexts/GlobalState';

moment.locale('fr');
const useStyles = makeStyles(theme => ({
  root: {},
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  cardActions: {
    justifyContent: 'flex-end'
  },
  buttonDone: {
    boxShadow: 'none',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    }
  },
  buttonRefresh: {
    boxShadow: 'none'
  }
}));

const currencies = ['USD', 'FC'];
const defaultFieldValue = {
  montant: ''
};
const FormToolbar = props => {
  const { className, ...rest } = props;
  const { students, currentStudent } = useGlobalState();
  const {
    setState,
    getStudentClasse,
    getStudentPayments,
    handlePayment
  } = useGlobalCallback();

  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());
  const [studentsData, setStudentsData] = useState([]);
  const [currencieVal, setCurrencieVal] = useState('USD');
  const [values, setValues] = useState(defaultFieldValue);
  const montantRef = useRef();
  const currencieRef = useRef();
  const dateRef = useRef();

  useEffect(() => {
    if (!!students) {
      const studentsData = students.map(student => {
        const { codeClasse, name, sexe } = student;
        const { classe } = getStudentClasse(codeClasse);
        return { student, classe, label: `${name} - ${sexe} - ${classe}` };
      });
      setStudentsData(studentsData);
    }
  }, [students]);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleClearField = () => {
    setValues(defaultFieldValue);
    setCurrencieVal('USD');
    handleDateChange(new Date());
    montantRef.current.focus();
  };

  const onComboChange = (event, value, reason) => {
    if (reason === 'select-option') {
      setState({ currentStudent: value.student });
    } else if (reason === 'clear') {
      setState({ currentStudent: null });
    }
  };

  const onPayClick = () => {
    if (!!+values.montant) {
      let totalCredit = 0;
      const { codeClasse, noStudent } = currentStudent;
      const classe = getStudentClasse(codeClasse);
      const payments = getStudentPayments(noStudent);

      payments.forEach(payment => {
        totalCredit += payment.credit;
      });

      const solde = classe.fees - totalCredit;

      if (+values.montant <= classe.fees && +values.montant <= solde) {
        const libelle =
          solde - values.montant > 0
            ? 'Acompte sur frais scolaire 2020-2021'
            : 'Solde sur frais scolaire 2020-2021';
        const payment = {
          id: uuid(),
          date: selectedDate,
          libelle,
          debit: null,
          credit: +values.montant,
          noStudent
        };
        handlePayment(payment);
        handleClearField();
      } else {
        alert('superieur au solde');
        montantRef.current.focus();
      }
    } else {
      alert('Entrez un montant valide !');
      montantRef.current.focus();
    }
  };

  const handleKeyPress = name => event => {
    if (event.key === 'Enter') {
      if (name === 'student') {
        montantRef.current.focus();
      } else if (name === 'montant') {
        currencieRef.current.focus();
      } else if (name === 'currencie') {
        dateRef.current.focus();
      } else if (name === 'date') {
        onPayClick();
      }
    }
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form autoComplete="off" noValidate>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Box color="success.main">
                <Typography color="inherit" variant="h5">
                  Paiement des frais scolaires
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box>
                <Autocomplete
                  id="combo-box-student"
                  options={studentsData}
                  onKeyPress={handleKeyPress('student')}
                  autoHighlight
                  getOptionLabel={option => option.label}
                  renderOption={option => (
                    <>
                      <Box color="secondary.main">
                        <Typography color="inherit">
                          {option.student.name}
                        </Typography>
                      </Box>
                      <Box color="warning.main" mx={1}>
                        <Typography color="inherit">
                          {option.student.sexe}
                        </Typography>
                      </Box>
                      <Box color="error.main">
                        <Typography color="inherit">{option.classe}</Typography>
                      </Box>
                    </>
                  )}
                  onChange={onComboChange}
                  // style={{ width: 300 }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label="Nom de l'éleve"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      autoFocus
                    />
                  )}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            {/* <Divider /> */}
            <Grid item md={5} xs={12}>
              <Grid container spacing={1}>
                <Grid item md={9} xs={12}>
                  <TextField
                    fullWidth
                    inputRef={montantRef}
                    disabled={!currentStudent}
                    onKeyPress={handleKeyPress('montant')}
                    label="Montant Payé"
                    type="number"
                    margin="dense"
                    name="montant"
                    onChange={handleChange}
                    required
                    value={values.montant}
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={3} xs={12}>
                  <Autocomplete
                    id="combo-box-currencie"
                    autoSelect
                    onKeyPress={handleKeyPress('currencie')}
                    disabled={!currentStudent}
                    options={currencies}
                    autoCapitalize
                    value={currencieVal}
                    onChange={(event, newValue) => {
                      setCurrencieVal(newValue);
                    }}
                    disableClearable
                    autoHighlight
                    // style={{ width: 300 }}
                    renderInput={params => (
                      <TextField
                        {...params}
                        inputRef={currencieRef}
                        label="Devise"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={3} xs={12}>
              <MuiPickersUtilsProvider
                libInstance={moment}
                utils={MomentUtils}
                locale={'fr'}>
                <KeyboardDatePicker
                  autoOk
                  variant="inline"
                  inputProps={{ ref: dateRef }}
                  margin="dense"
                  onKeyPress={handleKeyPress('date')}
                  fullWidth
                  disabled={!currentStudent}
                  inputVariant="outlined"
                  label="Date Paiement"
                  format="DD/MM/YYYY"
                  value={selectedDate}
                  InputAdornmentProps={{ position: 'end' }}
                  onChange={date => handleDateChange(date)}
                />
              </MuiPickersUtilsProvider>
            </Grid>{' '}
            <Grid item md={2} xs={12} />
            <Grid item md={2} xs={12}>
              <Box display="flex" justifyContent="flex-end">
                <Box width={110} display="flex" justifyContent="space-between">
                  <Fab
                    onClick={onPayClick}
                    className={classes.buttonDone}
                    size="medium"
                    color="primary"
                    aria-label="add"
                    disabled={!currentStudent || !+values.montant}>
                    <DoneIcon />
                  </Fab>

                  <Fab
                    onClick={handleClearField}
                    size="medium"
                    color="secondary"
                    className={classes.buttonRefresh}
                    aria-label="add"
                    disabled={!currentStudent}>
                    <RefreshIcon />
                  </Fab>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        {/* <Divider /> */}
        {/* <CardActions className={classes.cardActions}>
          <Button color="primary" variant="contained">
            Enregistrer
          </Button>
        </CardActions> */}
      </form>
    </Card>
  );
};

FormToolbar.propTypes = {
  className: PropTypes.string
};

export default FormToolbar;
