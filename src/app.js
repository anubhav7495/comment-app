import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import {
  HashRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import Layout from './layout/layout';

import './app.css';

const app = (
  <Router>
    <div>
      <Redirect from="/" to="/blog" />
      <Route path="/" component={Layout}></Route>
    </div>
  </Router>
)

jQuery(function () {
  ReactDOM.render(
    app,
    document.getElementById('comment-box'),
    function () {
      console.timeEnd('react-app')
    }
  );
})
