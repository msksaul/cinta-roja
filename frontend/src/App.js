import React, { Fragment } from 'react';

import Navbar from './components/NavGeneral'
import Footer from './components/Footer'

import { Container } from 'reactstrap';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Routes from './Routes';


function App() {
  return (
    <Fragment>
      <Router>
        <Navbar/>
          <Container className='mt-4'>
            <Switch>
              { Routes }
            </Switch>
          </Container>
        <Footer/>  
      </Router>
    </Fragment>
  );
}

export default App;
/*
<Route component={NotFound}/>
*/