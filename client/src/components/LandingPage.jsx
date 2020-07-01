import React from 'react';

import { Grid, Box, Typography, Paper } from '@material-ui/core';

export default () => {
  return (
    <Box component="div" p={3} width={1}>
      <Grid container item sx={12} justify="center">
        <Paper elevation={3} style={{ width: '100%' }}>
          <Grid item xs={12}>
            <Typography variant="h6" color="textSecondary">
              Billbase
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
};
