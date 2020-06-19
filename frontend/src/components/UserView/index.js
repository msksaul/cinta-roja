import React, { useContext, useEffect, useState } from 'react';
import AddCarousel from '../AddCarousel';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import UserCard from '../UserCard'
import { AuthContext } from '../../contexts/AuthContext';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const UserView = () => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3002/api/v1/products')
    .then((res)=>{
      console.log(res)
      setProducts(res.data)})
    .catch((err)=>console.log(err))
  },[])

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
    {
    products.map((element)=>{
      return (
      <UserCard name={element.name}
                price={element.price}
                description={element.description}
                url={element.url}
                id={element._id}
      
      />
    )}) 
    }
    </React.Fragment>
  )
}
export default UserView;