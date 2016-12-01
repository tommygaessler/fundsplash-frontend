import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import NotFound from './components/404';
import Auth from './components/auth';
import Home from './components/home';
import Campaign from './components/campaign'

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/auth' component={Auth} />
    <Route path='/campaign' component={Campaign}  />
    <Route path='*' component={NotFound} />
  </Router>
  , document.querySelector('.container'));
