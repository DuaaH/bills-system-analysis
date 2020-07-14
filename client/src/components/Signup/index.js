import React, { useState } from 'react';
import axios from 'axios';
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormHelperText,
} from '@material-ui/core';
import XRegExp from 'xregexp';
import Style from './style';

function Login(props) {
  const classes = Style();

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Box component="div" p={0} width={1}>
      <Grid container item sx={12} justify="center">
        <Grid item xs={12}>
          <Typography
            variant="h4"
            color="textPrimary"
            className={classes.title}
          >
            First things first
          </Typography>
          <Typography className={classes.instructions} color="textPrimary">
            Please provide your email and create a password. You’re gonna use
            them later to log into your account.
          </Typography>
        </Grid>
        <Grid item container xs={12}>
          <form onSubmit={handleForm} className={classes.loginForm}>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <TextField
                  onChange={({ target }) => setEmail(target.value)}
                  id="email"
                  name="email"
                  value={email}
                  label="Email"
                  type="text"
                  className={classes.inputBox}
                  autoFocus={true}
                  margin={'dense'}
                  InputProps={{
                    className: classes.input,
                    disableUnderline: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={({ target }) => setPassword(target.value)}
                  id="userName"
                  name="username"
                  value={userName}
                  label="User Name"
                  type="text"
                  className={classes.inputBox}
                  margin={'dense'}
                  InputProps={{
                    className: classes.input,
                    disableUnderline: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={({ target }) => setPassword(target.value)}
                  id="password"
                  name="password"
                  value={password}
                  label="Password"
                  type="password"
                  className={classes.inputBox}
                  margin={'dense'}
                  InputProps={{
                    className: classes.input,
                    disableUnderline: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={({ target }) => setPassword(target.value)}
                  id="rePassword"
                  name="rePassword"
                  value={rePassword}
                  label="Re- Password"
                  type="password"
                  className={classes.inputBox}
                  margin={'dense'}
                  InputProps={{
                    className: classes.input,
                    disableUnderline: true,
                  }}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid item>
              <FormControl>
                <FormHelperText
                  id="error-text"
                  className={classes.errorMessage}
                >
                  {message.charAt(0).toUpperCase() + message.slice(1)}
                </FormHelperText>
              </FormControl>
            </Grid>

            <Button className={classes.signUpBtn} type="submit" fullWidth>
              Sign up
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
