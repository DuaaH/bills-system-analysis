import React, { useState } from 'react';
import {
  Paper,
  Tabs,
  Tab,
  Box,
  Grid,
  Typography,
  AppBar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LoaderProgress from '../../common-components/LoaderProgress';
import Style from './styles';
import SwipeableViews from 'react-swipeable-views';
import { useTheme as theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default () => {
  const classes = Style();
  const [value, setValue] = React.useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [displayBlock, setIsDisplayBlock] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const displayStatus = isLoading && !displayBlock ? 'none' : 'block';

  return (
    <Box component="div" p={3} width={1}>
      <LoaderProgress isLoading={isLoading} />
      <Box component="div" display={displayStatus} width={1}>
        <Grid container item sx={12} justify="center">
          <Grid item container xs={12}>
            <Typography variant="h4" color="textPrimary" align="left">
              Electricity bill
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justify="space-evenly"
            className={classes.typeContainer}
            direction="column"
            alignItems="center"
          >
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Bill info" {...a11yProps(0)} />
                <Tab label="Contact" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <Box width={1}>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <Accordion defaultExpanded>
                    <AccordionSummary
                      className={classes.accordionBackground}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        Bill 1
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.conentFont}>
                      <Grid tiem container xs={12} alignItems="flex-end">
                        <TextField
                          className={classes.textFieldStyle}
                          disabled
                          label="Number"
                          id="standard-start-adornment"
                          value="254"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                #
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          className={classes.textFieldStyle}
                          disabled
                          label="Amount"
                          id="standard-start-adornment"
                          value="349"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                ₪
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          className={classes.textFieldStyle}
                          disabled
                          label="Date"
                          id="standard-start-adornment"
                          value="20/12/2020"
                        />
                        <TextField
                          className={classes.textFieldStyle}
                          disabled
                          label="Due Date"
                          id="standard-start-adornment"
                          value="20/10/2020"
                        />
                        <Box
                          component="span"
                          className={classes.statisticsLink}
                        >
                          <Link to="/bill/electricity/statistics/129e4e27-89a0-415e-903a-b7090f9c06f9">
                            Statistics
                          </Link>
                        </Box>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      className={classes.accordionBackground}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        Bill 2
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.conentFont}>
                      <Grid>
                        <TextField
                          className={classes.textFieldStyle}
                          disabled
                          label="Number"
                          id="standard-start-adornment"
                          value="254"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                #
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          className={classes.textFieldStyle}
                          disabled
                          label="Amount"
                          id="standard-start-adornment"
                          value="349"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                ₪
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          className={classes.textFieldStyle}
                          disabled
                          label="Date"
                          id="standard-start-adornment"
                          value="20/12/2020"
                        />
                        <TextField
                          className={classes.textFieldStyle}
                          disabled
                          label="Due Date"
                          id="standard-start-adornment"
                          value="20/10/2020"
                        />
                        <Box
                          component="span"
                          className={classes.statisticsLink}
                        >
                          <Link to="/bill/electricity/statistics/129e4e27-89a0-415e-903a-b7090f9c06f9">
                            Statistics
                          </Link>
                        </Box>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      className={classes.accordionBackground}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        Bill 3
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.conentFont}>
                      <Grid>
                        <TextField
                          className={classes.textFieldStyle}
                          disabled
                          label="Number"
                          id="standard-start-adornment"
                          value="254"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                #
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          className={classes.textFieldStyle}
                          disabled
                          label="Amount"
                          id="standard-start-adornment"
                          value="349"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                ₪
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          className={classes.textFieldStyle}
                          disabled
                          label="Date"
                          id="standard-start-adornment"
                          value="20/12/2020"
                        />
                        <TextField
                          className={classes.textFieldStyle}
                          disabled
                          label="Due Date"
                          id="standard-start-adornment"
                          value="20/10/2020"
                        />
                        <Box
                          component="span"
                          className={classes.statisticsLink}
                        >
                          <Link to="/bill/electricity/statistics/129e4e27-89a0-415e-903a-b7090f9c06f9">
                            Statistics
                          </Link>
                        </Box>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <Typography variant="h4">
                    povider contact information
                  </Typography>
                </TabPanel>
              </SwipeableViews>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
