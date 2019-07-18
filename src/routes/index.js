import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Auth from '~/pages/Auth';
import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Auth} />
      <Route path="/dashboard" component={Dashboard} isPrivate />

      <Route path="/" component={() => <h1>404 - Nobody is home!</h1>} />
    </Switch>
  );
}
