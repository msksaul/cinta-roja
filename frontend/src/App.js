import React from 'react';
import Navbar from './container/Navbar/Navbar';
import AdSlide from './container/AdSlide/AdSlide';
import Login from './container/Login/Login';
import NewUser from './container/NewUser/NewUser';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <AdSlide/>
      <Login/>
      <NewUser/>
    </React.Fragment>
  );
}

export default App;
