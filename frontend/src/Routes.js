import React from 'react';
import { Route } from 'react-router-dom';

// Views
import Signup from './components/SignUp';
import Init from './components/Init'
import Login from './components/Login'
import AddCaruosel from './components/AddCarousel'
import AdminView from './components/AdminView'
import UserView from './components/UserView'
import CarShop from './components/CarShop'
import Logout from './components/Logout'


export default
  <React.Fragment>
    <Route
      exact path="/"
      component={ Init } />
    <Route
      exact path="/signup"
      component={ Signup } />
    <Route
      exact path="/login"
      component={ Login } />
    <Route
      exact path="/carousel"
      component={ AddCaruosel } />
    <Route
      exact path="/adminview"
      component={ AdminView } />
    <Route
      exact path="/userview"
      component={ UserView } />
    <Route
      exact path="/carshop"
      component={ CarShop } />
    <Route
      exact path="/logout"
      component={ Logout } />  
  </React.Fragment>
;