import React from 'react';
import Style from './Style';
import { Grid, Box, Typography, Button, Link } from '@material-ui/core';

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
            Do you want to know if you’re spending too much? Have a clear
            overview of your bills and compare them with other users.
          </Typography>

          <Grid container className={classes.Buttons}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                <Link color="inherit" href="/signup">
                  Sign Up
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
          </Typography>
          <Link
            color="inherit"
            href="/login"
            className={classes.linkStyel}
            underline="always"
          >
            Log in
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
