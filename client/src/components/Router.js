import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import LandingPage from './LandingPage';
import Signup from './Signup';
import Home from './Home';

export default () => (
  <Router>
    <Grid direction="column" container>
      <Grid item xs={12}>
        {/* Header */}
      </Grid>
      <Grid item container>
        <Grid item xs={false} md={3} />
        <Grid item container xs={12} md={6}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </Grid>
        <Grid item xs={false} md={3} />
      </Grid>
    </Grid>
  </Router>
);
