import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Grid,
  Box,
  Typography,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
  List,
  Divider,
} from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import { Bar } from 'react-chartjs-2';
import LoaderProgress from '../../common-components/LoaderProgress';
import Ils from '../../assets/ils.svg';
import Styles from './style';

const data = {
  labels: ['ME', 'Person1', 'Person2', 'Person3', 'Person4', 'Person5'],
  datasets: [
    {
      label: 'Consumption',
      data: [200, 400, 600, 800, 1000, 1500],
      backgroundColor: Object.values(teal),
      borderColor: '#fff',
      borderWidth: 1,
    },
  ],
};

export default (props) => {
  const classes = Styles();

  const [chartData, setChartData] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const [displayBlock, setIsDisplayBlock] = useState(true);

  useEffect(() => {
    const billId = props.match.params.billId;
  }, []);

  const displayStatus = isLoading && !displayBlock ? 'none' : 'block';

  return (
    <Box component="div" p={3} width={1}>
      <LoaderProgress isLoading={isLoading} />
      <Box component="div" width={1} display={displayStatus}>
        <Grid container item sx={12} justify="center">
          <Grid item container xs={12}>
            <Typography variant="h4" color="textPrimary" align="left">
              {props.title}
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
            <Box width={1} mt={3}>
              <Typography variant="caption" color="textPrimary" align="left">
                {props.providerName}
              </Typography>
            </Box>
            <Box width={1} className={classes.chartPaper} mt={1}>
              <Bar
                data={chartData}
                options={{
                  scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
                  legend: { display: true, position: 'top' },
                }}
              />
            </Box>
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
            <Box width={1} mt={3}>
              <Typography variant="h5" color="textPrimary" align="left">
                History
              </Typography>
            </Box>
            <Box width={1} mt={1}>
              <Paper className={classes.historyList}>
                <List>
                  <ListItem>
                    <ListItemText>
                      <Typography component="span" variant="subtitle1">
                        June
                      </Typography>
                      <Typography
                        component="span"
                        variant="overline"
                        className={classes.yearText}
                      >
                        2020
                      </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction>
                      <span>
                        <img src={Ils} />
                      </span>
                      <span>3000</span>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText>
                      <Typography component="span" variant="subtitle1">
                        June
                      </Typography>
                      <Typography
                        component="span"
                        variant="overline"
                        className={classes.yearText}
                      >
                        2020
                      </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction>
                      <span>
                        <img src={Ils} />
                      </span>
                      <span>3000</span>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText>
                      <Typography component="span" variant="subtitle1">
                        June
                      </Typography>
                      <Typography
                        component="span"
                        variant="overline"
                        className={classes.yearText}
                      >
                        2020
                      </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction>
                      <span>
                        <img src={Ils} />
                      </span>
                      <span>3000</span>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText>
                      <Typography component="span" variant="subtitle1">
                        June
                      </Typography>
                      <Typography
                        component="span"
                        variant="overline"
                        className={classes.yearText}
                      >
                        2020
                      </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction>
                      <span>
                        <img src={Ils} />
                      </span>
                      <span>3000</span>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText>
                      <Typography component="span" variant="subtitle1">
                        June
                      </Typography>
                      <Typography
                        component="span"
                        variant="overline"
                        className={classes.yearText}
                      >
                        2020
                      </Typography>
                    </ListItemText>
                    <ListItemSecondaryAction>
                      <span>
                        <img src={Ils} />
                      </span>
                      <span>3000</span>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </List>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
