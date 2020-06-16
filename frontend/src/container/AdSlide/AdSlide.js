import React from 'react';
import AdCarousel from '../../components/AdCarousel/AdCarousel';
import AccountUser from '../AccountUser/AccountUser';

const AdSlide = () => {
  return (
    <React.Fragment>
      <AdCarousel/>
      <br/>
      <AccountUser/>
    </React.Fragment>
  )
}

export default AdSlide;
