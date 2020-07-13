import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';

import LoaderProgress from '../../common-components/LoaderProgress';
import Style from './style';

function Login() {
  const classes = Style();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    const data = { email, password };

    axios
      .post('/api/login', data)
      .then((result) => {
        if (result.status === 200) {
          this.props.history.push('/home');
        }
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <Box component="div" p={0} width={1}>
      <LoaderProgress isLoading={isLoading} />
      <Grid container item sx={12} justify="center">
        <Grid item xs={12}>
          <Typography
            variant="h4"
            color="textPrimary"
            className={classes.title}
          >
            Welcome Back
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
                  fullWidth
                />
              </Grid>
            </Grid>
            <Typography className={classes.errorMessage}>
              {message.charAt(0).toUpperCase() + message.slice(1)}
            </Typography>
            <Button className={classes.loginBtn} type="submit" fullWidth>
              Sign in
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
