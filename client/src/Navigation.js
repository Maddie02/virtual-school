import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default Navigation;