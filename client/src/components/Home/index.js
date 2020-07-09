import React from 'react';
import { Grid, Box, Typography, Paper, IconButton } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';
import Water from '../../assets/water.svg';
import Communication from '../../assets/communication.svg';
import Electricity from '../../assets/electricity.svg';
import Internet from '../../assets/internet.svg';
import Styles from './style';

export default () => {
  const classes = Styles();
  return (
    <Box component="div" p={3} width={1}>
      <Grid container item sx={12} justify="center">
        <Grid item container xs={12}>
          <Typography variant="h5" color="textPrimary" align="left">
            Billbase
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justify="space-evenly"
          className={classes.typeContainer}
        >
          <Paper className={classes.root} elevation={3}>
            <img src={Water} className={classes.imageType} />
          </Paper>
          <Paper className={classes.root} elevation={3}>
            <img src={Electricity} className={classes.imageType} />
          </Paper>
          <Paper className={classes.root} elevation={3}>
            <img src={Communication} className={classes.imageType} />
          </Paper>
          <Paper className={classes.root} elevation={3}>
            <img src={Internet} className={classes.imageType} />
          </Paper>
        </Grid>
        <Grid
          item
          container
          xs={6}
          justify="flex-end"
          className={classes.addBtnGrid}
        >
          <IconButton color="secondary" aria-label="add an alarm">
            <AddCircleOutline className={classes.addIcon} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};
