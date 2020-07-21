import { Grid, Box, Typography, Button } from '@material-ui/core';
import React from 'react';
import Style from './style';

function Error(props) {
  const classes = Style();

  return (
    <Box component="div" p={3} width={1}>
      <Grid container item sx={12} justify="center">
        <Grid>
          <Typography variant="h1" color="textPrimary" className={classes.oops}>
            Opps!
          </Typography>
        </Grid>
        <Grid className={classes.error}>
          <Grid>
            <Typography
              variant="h3"
              color="textPrimary"
              className={classes.errorMessage}
            >
              404 - Page Not Found
            </Typography>
          </Grid>
          <Grid>
            <Typography
              color="textPrimary"
              className={classes.errorDescription}
            >
              The page you are looking for might have been removed, or its name
              changed, or is temporarily unavailable
            </Typography>
          </Grid>
        </Grid>
        <Grid>
          <Button
            color="textPrimary"
            className={classes.goToHome}
            onClick={() => props.history.push('/home')}
          >
            GO TO HOMEPAGE
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Error;
