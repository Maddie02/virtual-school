import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/Register/RegisterPage';
import LoginPage from './pages/Login/LoginPage';
import Posts from './pages/Posts/Posts';

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/register' exact component={RegisterPage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/posts' exact component={Posts} />
      </Switch>
    </Router>
  );
}

export default Navigation;
