import React from 'react';
import { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import NotFound from './404';
import Auth from './auth';
import Home from './home';

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/auth' component={Auth} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
}
