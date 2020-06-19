import React, { Fragment } from 'react';

import Navbar from './components/NavUser'
import Footer from './components/Footer'

import AuthContextProvider from './contexts/AuthContext';

import { Container } from 'reactstrap';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Routes from './Routes';


function App() {
  return (
    <Fragment>
      <Router>
        <AuthContextProvider>
          <Navbar/>
            <Container className='mt-4'>
              <Switch>
                { Routes }
              </Switch>
            </Container>
          <Footer/>
        </AuthContextProvider>  
      </Router>
    </Fragment>
  );
}

export default App;
/*
<Route component={NotFound}/>
*/