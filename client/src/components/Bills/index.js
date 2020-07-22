import React, { useState, useEffect } from 'react';
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
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  List,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SwipeableViews from 'react-swipeable-views';
import { useTheme as theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Style from './style';
import LoaderProgress from '../../common-components/LoaderProgress';

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
          <Typography component="div">{children}</Typography>
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

export default (props) => {
  const classes = Style();
  const [value, setValue] = React.useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [displayBlock, setIsDisplayBlock] = useState(false);
  const [lastBill, setLastBill] = useState([]);
  const [providerInfo, setProviderInfo] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {
    axios
      .get(`/api/bill/getBillByType/${props.match.params.bill_type}`)
      .then((result) => {
        setLastBill(result.data.Result);
        if (result.data.Result && result.data.Result.length > 0) {
          const providerId = result.data.Result[0].provider_id;
          axios
            .get(`/api/providers/getProviderById/${providerId}`)
            .then((resultData) => {
              setProviderInfo(resultData.data.Result[0]);
            })
            .catch((err) => {
              if (err.response.data) {
                swal('Error', err.response.data.message, 'error');
              }
              setIsLoading(false);
              setIsDisplayBlock(true);
            });
        }
        if (!result.data.Result) {
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
  localStorage.setItem('providerName', JSON.stringify(providerInfo.name));
  const buildBillBanel = (lastBill) => {
    if (!lastBill) {
      return [];
    }
    if (lastBill.length === 0) {
      return [];
    }
    return lastBill.map((bill, index) => {
      if (lastBill.length - 1 === index && isLoading) {
        setIsLoading(false);
      }
      const billDate = new Date(bill.bill_date);
      const dueDate = new Date(bill.due_date);
      return (
        <Accordion defaultExpanded key={index}>
          <AccordionSummary
            className={classes.accordionBackground}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} component="span">
              Bill {index + 1}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.conentFont}>
            <Grid item container alignItems="flex-end">
              <TextField
                className={classes.textFieldStyle}
                disabled
                label="Number"
                id="standard-start-adornment"
                value={bill.bill_number}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">#</InputAdornment>
                  ),
                }}
              />
              <TextField
                className={classes.textFieldStyle}
                disabled
                label="Amount"
                id="standard-start-adornment"
                value={bill.total_amount}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₪</InputAdornment>
                  ),
                }}
              />
              <TextField
                className={classes.textFieldStyle}
                disabled
                label="Date"
                id="standard-start-adornment"
                value={billDate.toLocaleDateString()}
              />
              <TextField
                className={classes.textFieldStyle}
                disabled
                label="Due Date"
                id="standard-start-adornment"
                value={dueDate.toLocaleDateString()}
              />
              <Box component="span" className={classes.statisticsLink}>
                <Link
                  to={{
                    pathname: `/bill/${props.match.params.bill_type}/statistics/${bill.gid}`,
                    data: { providerName: providerInfo.name },
                  }}
                >
                  Statistics
                </Link>
              </Box>
            </Grid>
          </AccordionDetails>
        </Accordion>
      );
    });
  };
  const displayStatus = isLoading && !displayBlock ? 'none' : 'block';

  return (
    <Box component="div" p={3} width={1}>
      <LoaderProgress isLoading={isLoading} />
      <Box component="div" display={displayStatus} width={1}>
        <Grid container item xs={12} justify="center">
          <Grid item container xs={12}>
            <Typography variant="h4" color="textPrimary" align="left">
              {props.match.params.bill_type.charAt(0).toUpperCase()
                + props.match.params.bill_type.slice(1)}{' '}
              Bill
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
            <AppBar position="static" color="primary">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
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
                  {buildBillBanel(lastBill)}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <List>
                    <ListItem>
                      <ListItemText>
                        <Typography component="span" variant="subtitle1">
                          Name
                        </Typography>
                      </ListItemText>
                      <ListItemSecondaryAction>
                        <Typography
                          component="span"
                          variant="overline"
                          className={classes.yearText}
                        >
                          {providerInfo.name}
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider className={classes.dividerStyle} />

                    <ListItem>
                      <ListItemText>
                        <Typography component="span" variant="subtitle1">
                          Email
                        </Typography>
                      </ListItemText>
                      <ListItemSecondaryAction>
                        <Typography
                          component="span"
                          variant="overline"
                          className={classes.yearText}
                        >
                          {providerInfo.email}
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider className={classes.dividerStyle} />
                    <ListItem>
                      <ListItemText>
                        <Typography component="span" variant="subtitle1">
                          Address
                        </Typography>
                      </ListItemText>
                      <ListItemSecondaryAction>
                        <Typography
                          component="span"
                          variant="overline"
                          className={classes.yearText}
                        >
                          {providerInfo.address}
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider className={classes.dividerStyle} />
                    <ListItem>
                      <ListItemText>
                        <Typography component="span" variant="subtitle1">
                          PO BOX
                        </Typography>
                      </ListItemText>
                      <ListItemSecondaryAction>
                        <Typography
                          component="span"
                          variant="overline"
                          className={classes.yearText}
                        >
                          {providerInfo.po_box}
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider className={classes.dividerStyle} />
                    <ListItem>
                      <ListItemText>
                        <Typography component="span" variant="subtitle1">
                          Phone 1
                        </Typography>
                      </ListItemText>
                      <ListItemSecondaryAction>
                        <Typography
                          component="span"
                          variant="overline"
                          className={classes.yearText}
                        >
                          {providerInfo.phone1}
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider className={classes.dividerStyle} />
                    <ListItem>
                      <ListItemText>
                        <Typography component="span" variant="subtitle1">
                          Phone 2
                        </Typography>
                      </ListItemText>
                      <ListItemSecondaryAction>
                        <Typography
                          component="span"
                          variant="overline"
                          className={classes.yearText}
                        >
                          {providerInfo.phone2}
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider className={classes.dividerStyle} />
                    <ListItem>
                      <ListItemText>
                        <Typography component="span" variant="subtitle1">
                          Phone 3
                        </Typography>
                      </ListItemText>
                      <ListItemSecondaryAction>
                        <Typography
                          component="span"
                          variant="overline"
                          className={classes.yearText}
                        >
                          {providerInfo.phone3}
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider className={classes.dividerStyle} />
                  </List>
                </TabPanel>
              </SwipeableViews>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
