import React from 'react';
import { Route } from 'react-router-dom';

// Views
import Signup from './components/SignUp';
import Init from './components/Init'
import Login from './components/Login'
import Caruosel from './components/Carousel'
import AddCaruosel from './components/AddCarousel'


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
  </React.Fragment>
;