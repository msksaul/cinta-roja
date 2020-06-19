import React, { useContext } from 'react';
import AddCarousel from '../AddCarousel';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import UserCard from '../UserCard'
import { AuthContext } from '../../contexts/AuthContext';
import { Redirect } from 'react-router-dom';

const UserView = () => {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth ) return <Redirect to="/" />
  return(
    <React.Fragment>
    <AddCarousel/>
    <div className='panel'>
    <Breadcrumb>
        <BreadcrumbItem active>Catálogo de Productos</BreadcrumbItem>
    </Breadcrumb>
    </div>
    <UserCard/>
    <UserCard/>
    </React.Fragment>
  )
}
export default UserView;