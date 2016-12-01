import React from 'react';
import { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import NotFound from './404';
import Auth from './auth';
import Home from './home';
import Campaign from './campaign'

export default class App extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}
