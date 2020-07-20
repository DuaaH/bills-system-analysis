import React from 'react';
import Style from './Style';
import {
  Grid,
  Box,
  Typography,
  Paper,
  makeStyles,
  Button,
  Link,
} from '@material-ui/core';

export default () => {
  const classes = Style();
  return (
    <Box component="div" p={3} width={1}>
      <Grid container item xs={12} justify="center">
        <Grid item xs={12}>
          <Typography
            variant="h4"
            color="textPrimary"
            className={classes.header}
          >
            Billbase
          </Typography>
          <Typography
            variant="h6"
            color="textPrimary"
            className={classes.typographyStyle}
          >
            Billbase Do you want to know if you’re spending too much? Have a
            clear ii of your bills and compare it with other users
          </Typography>

          <Grid container className={classes.Buttons}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                <Link color="inherit" href="/signup">
                  Sign up
                </Link>
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Sign up with Google
              </Button>
            </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" align="center">
            Have an account?
            <Link color="inherit" href="/login">
              Log in
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
