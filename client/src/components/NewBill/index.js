import axios from 'axios';
import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Paper,
  InputLabel,
  NativeSelect,
  Divider,
} from '@material-ui/core';

import LoaderProgress from '../../common-components/LoaderProgress';

import Styles from './style';

export default () => {
  const classes = Styles();
  const [userBillType, setUserBillType] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displayBlock, setIsDisplayBlock] = useState(false);

  const [state, setState] = React.useState('');

  const handleChange = (event) => {
    setState(event.target.value);
  };
  useEffect(() => {
    axios
      .get('/api/home')
      .then((result) => {
        setUserBillType(result.data.Result);
        if (!result.data.Result) {
          setIsLoading(false);
          setIsDisplayBlock(true);
        }
        if (result.data.Result.length === 0) {
          setIsLoading(false);
          setIsDisplayBlock(true);
        }
      })
      .catch((err) => {
        if (err.response.data) {
          swal('Error', err.response.data.message, 'error');
        }
        setIsLoading(false);
        setIsDisplayBlock(true);
      });
  }, []);

  const displayStatus = isLoading && !displayBlock ? 'none' : 'block';

  return (
    <Box component="div" p={3} width={1}>
      <LoaderProgress isLoading={isLoading} />
      <Box component="div" display={displayStatus} width={1}>
        <Grid container item sx={12} justify="center">
          <Grid item container xs={12}>
            <Typography variant="h4" color="textPrimary" align="left">
              Billbase
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justify="space-evenly"
            className={classes.typeContainer}
            direction="row"
            alignItems="center"
          >
            <Grid container>
              <Grid item xs={6}>
                <InputLabel htmlFor="bill-type">Age</InputLabel>
              </Grid>
              <NativeSelect
                value={state}
                onChange={handleChange}
                inputProps={{
                  name: 'age',
                  id: 'bill-type',
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </NativeSelect>
            </Grid>
            <Grid container item sx={12}>
              <Divider />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
