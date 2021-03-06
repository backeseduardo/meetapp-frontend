import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Profile from '~/pages/Profile';
import Dashboard from '~/pages/Dashboard';
import Meetup from '~/pages/Meetup';
import MeetupForm from '~/pages/MeetupForm';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/meetup/form" exact component={MeetupForm} isPrivate />
      <Route path="/meetup/form/:id" exact component={MeetupForm} isPrivate />
      <Route path="/meetup/:id" exact component={Meetup} isPrivate />

      <Route path="/" component={() => <h1>404 - Nobody is home!</h1>} />
    </Switch>
  );
}
