import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import LandingPage from './LandingPage';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';

import PersonalInfo from './PersonalInfo';

import NewBill from './NewBill';
import Bill from './Bills';

import Statistics from './Statistics';
import Error404 from './Errors/Error404';

export default () => (
  <Router>
    <Grid direction="column" container>
      <Grid item container>
        <Grid item xs={false} md={3} />
        <Grid item container xs={12} md={6}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />

            <Route exact path="/profile" component={PersonalInfo} />

            <Route exact path="/new-bill" component={NewBill} />
            <Route exact path="/bill/:bill_type" component={Bill} />

            <Route
              exact
              path="/bill/:bill_type/statistics/:billId"
              component={(props) => (
                <Statistics title="Electricity Bill" {...props} />
              )}
            />
            <Route component={Error404} />
          </Switch>
        </Grid>
        <Grid item xs={false} md={3} />
      </Grid>
    </Grid>
  </Router>
);
