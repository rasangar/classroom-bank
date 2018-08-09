import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import NavBar from './NavBar';
import ClassbanksIndexContainer from '../containers/ClassbanksIndexContainer'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={ClassbanksIndexContainer} />

      </Route>
    </Router>
  );
};

export default App;


// <Route path='/classbanks' component={ClassbanksIndexContainer} />
