import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  Typography
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { Facebook as FacebookIcon, Google as GoogleIcon } from 'icons';

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: 'rgba(0, 0, 255, 0.1)',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/auth.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'relative',
    '&::after': {
      content: "''",
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(93, 161, 217, 0.65)',
      zIndex: 1
    }
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px',
    zIndex: 2
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  socialButtons: {
    marginTop: theme.spacing(3)
  },
  socialIcon: {
    marginRight: theme.spacing(1)
  },
  sugestion: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  signInButton: {
    margin: theme.spacing(2, 0)
  }
}));

const SignIn = props => {
  const { history } = props;

  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleBack = () => {
    history.goBack();
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSignIn = event => {
    event.preventDefault();
    history.push('/');
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.quoteContainer} item lg={5}>
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography className={classes.quoteText} variant="h1">
                COMPLEXE SCOLAIRE REHOBOTH
              </Typography>
              <div className={classes.person}>
                <Typography className={classes.name} variant="body1">
                  143 Av/ Kimwenza Q/ Kindele C/ Mont-Ngafula
                </Typography>
                <Typography className={classes.bio} variant="body2">
                  Ecole Chretienne
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid className={classes.content} item lg={7} xs={12}>
          <div className={classes.content}>
            <div className={classes.contentHeader}>
              {/* <IconButton onClick={handleBack}>
                <ArrowBackIcon />
              </IconButton> */}
            </div>
            <div className={classes.contentBody}>
              <form className={classes.form} onSubmit={handleSignIn}>
                <Typography className={classes.title} variant="h2">
                  Authentification
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  COMPLEXE SCOLAIRE REHOBOTH
                </Typography>
                <Autocomplete
                  id="combo-box-username"
                  value={username}
                  options={[]}
                  onChange={(event, newValue) => {
                    setUsername(newValue);
                  }}
                  // style={{ width: 300 }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      className={classes.textField}
                      fullWidth
                      label="Nom d'utilisateur"
                      name="username"
                      type="text"
                      variant="outlined"
                    />
                  )}
                />

                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Mot de passe"
                  name="password"
                  onChange={handlePasswordChange}
                  type="password"
                  value={password}
                  variant="outlined"
                />
                <Button
                  className={classes.signInButton}
                  color="primary"
                  // disabled={!formState.isValid}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained">
                  S' Authentifier
                </Button>
                {/* <Typography color="textSecondary" variant="body1">
                  Don't have an account?{' '}
                  <Link component={RouterLink} to="/sign-up" variant="h6">
                    Sign up
                  </Link>
                </Typography> */}
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

SignIn.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignIn);
