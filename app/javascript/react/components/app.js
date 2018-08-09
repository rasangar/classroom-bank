import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import NavBar from './NavBar';
import ClassbanksIndexContainer from '../containers/ClassbanksIndexContainer'
import ClassbankShowContainer from '../containers/ClassbankShowContainer'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={ClassbanksIndexContainer} />
        <Route path='/classbanks/:classbank_id/bank_accounts' component={ClassbankShowContainer}/>
      </Route>
    </Router>
  );
};

export default App;
