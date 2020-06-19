import React from 'react';
import AddCarousel from '../AddCarousel';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import UserCard from '../UserCard'

const UserView = () => {
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