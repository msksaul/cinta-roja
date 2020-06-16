import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Navbar from './container/Navbar/Navbar';
import AdSlide from './container/AdSlide/AdSlide';
import Login from './container/Login/Login';
import NewUser from './container/NewUser/NewUser';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={AdSlide}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/newuser" component={NewUser}/>
      </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
/*
<Route component={NotFound}/>
*/