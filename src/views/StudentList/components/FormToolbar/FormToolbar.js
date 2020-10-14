import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import uuid from 'uuid/v1';
import { green } from '@material-ui/core/colors';

import Autocomplete from '@material-ui/lab/Autocomplete';
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

import RefreshIcon from '@material-ui/icons/Refresh';
import DoneIcon from '@material-ui/icons/Done';

import {
  useGlobalCallback,
  useGlobalState
} from '../../../../contexts/GlobalState';

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

const sexes = ['M', 'F'];

const defaultInputValues = {
  name: '',
  phone: '',
  sexe: 'M'
};

const FormToolbar = props => {
  const { className, studentClasses, ...rest } = props;
  const { currentStudentClasse, students } = useGlobalState();
  const { setState, handleAddStudent } = useGlobalCallback();
  const classes = useStyles();
  const nameRef = useRef();
  const sexeRef = useRef();
  const phoneRef = useRef();

  const [values, setValues] = useState(defaultInputValues);

  useEffect(() => {
    if (!currentStudentClasse && !!studentClasses) {
      setState({ currentStudentClasse: studentClasses[0] });
    }
  }, [currentStudentClasse, studentClasses]);

  const handleChange = event => {
    let { name, value } = event.target;
    if (name === 'name') {
      value = value.toUpperCase();
    }
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleClearField = () => {
    setValues(defaultInputValues);
    nameRef.current.focus();
  };

  const onAddStudent = () => {
    if (!currentStudentClasse) return;

    if (!!values.name.trim()) {
      const findedStudent = students.find(
        student =>
          student.codeClasse === currentStudentClasse.codeClasse &&
          student.name.toUpperCase().trim() === values.name.toUpperCase().trim()
      );

      if (!findedStudent) {
        const student = { id: uuid(), ...values };
        handleAddStudent(student, currentStudentClasse.codeClasse);
        handleClearField();
      } else {
        alert('Il existe déja un éleve avec ce nom dans cette classe !');
        nameRef.current.focus();
      }
    } else {
      alert("Vous devez entrer le nom de l'élèves !");
      handleClearField();
    }
  };

  const handleKeyPress = name => event => {
    if (event.key === 'Enter') {
      if (name === 'classe') {
        nameRef.current.focus();
      } else if (name === 'name') {
        sexeRef.current.focus();
      } else if (name === 'sexe') {
        phoneRef.current.focus();
      } else if (name === 'phone') {
        onAddStudent();
      }
    }
  };

  const onComboChange = (event, value, reason) => {
    console.log(reason);
    if (reason === 'select-option') {
      setState({ currentStudentClasse: value });
      handleClearField();
    } else if (reason === 'clear') {
      setState({ currentStudentClasse: null });
    }
  };

  const onSexeChange = (event, value, reason) => {
    if (reason === 'select-option') {
      setValues({ ...values, sexe: value });
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
                  Saisie des Eleves
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box>
                <Autocomplete
                  id="combo-box-classe"
                  options={studentClasses}
                  disableClearable
                  onChange={onComboChange}
                  onKeyPress={handleKeyPress('classe')}
                  autoComplete
                  autoHighlight
                  value={currentStudentClasse}
                  getOptionLabel={option => option.classe}
                  // style={{ width: 300 }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label="Classe"
                      variant="outlined"
                      margin="dense"
                      // helperText="Choisir une classe"
                      fullWidth
                      autoFocus
                    />
                  )}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item md={5} xs={12}>
              <TextField
                fullWidth
                inputRef={nameRef}
                onKeyPress={handleKeyPress('name')}
                disabled={!currentStudentClasse}
                // helperText="Please specify the first name"
                label="Nom & Postnom"
                margin="dense"
                name="name"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <Autocomplete
                id="combo-box-sexe"
                autoSelect
                onKeyPress={handleKeyPress('sexe')}
                disabled={!currentStudentClasse}
                options={sexes}
                autoCapitalize
                autoHighlight
                onChange={onSexeChange}
                value={values.sexe}
                // style={{ width: 300 }}
                renderInput={params => (
                  <TextField
                    {...params}
                    inputRef={sexeRef}
                    label="Sexe"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <TextField
                fullWidth
                inputRef={phoneRef}
                onKeyPress={handleKeyPress('phone')}
                disabled={!currentStudentClasse}
                label="Telephone"
                margin="dense"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>{' '}
            <Grid item md={2} xs={12}>
              <Box display="flex" justifyContent="flex-end">
                <Box width={110} display="flex" justifyContent="space-between">
                  <Fab
                    onClick={onAddStudent}
                    size="medium"
                    className={classes.buttonDone}
                    color="primary"
                    aria-label="add"
                    disabled={!currentStudentClasse}>
                    <DoneIcon />
                  </Fab>

                  <Fab
                    onClick={handleClearField}
                    size="medium"
                    color="secondary"
                    className={classes.buttonRefresh}
                    aria-label="refresh"
                    title="Actualisé"
                    disabled={!currentStudentClasse}>
                    <RefreshIcon />
                  </Fab>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
};

FormToolbar.propTypes = {
  className: PropTypes.string
};

export default FormToolbar;
