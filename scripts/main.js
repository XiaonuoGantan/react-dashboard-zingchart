import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

var routes = (
  <Router history={createHistory()}>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));