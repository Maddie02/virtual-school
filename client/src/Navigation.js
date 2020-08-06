import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/Register/RegisterPage';

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/register' exact component={RegisterPage} />
      </Switch>
    </Router>
  );
}

export default Navigation;
