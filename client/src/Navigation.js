import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/Register/RegisterPage';
import LoginPage from './pages/Login/LoginPage';
import PostsPage from './pages/Posts/PostsPage';
import ProfilePage from './pages/Profile/ProfilePage';
import TeachersPage from './pages/Teachers/TeachersPage';

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/register' exact component={RegisterPage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/posts' exact component={PostsPage} />
        <Route path='/profile/:userid' exact component={ProfilePage} />
        <Route path='/teachers' exact component={TeachersPage} />
      </Switch>
    </Router>
  );
}

export default Navigation;
