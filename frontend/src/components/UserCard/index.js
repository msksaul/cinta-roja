import React, { useContext } from 'react';
import { Button, Card, CardText, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';
import { AuthContext } from '../../contexts/AuthContext';
// import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const UserCard = (props) => {
  const {count,setCount} = useContext(AuthContext);
  return(
    <section className='bot'>
    <div className='panel'>
    {/* <Breadcrumb>
      <BreadcrumbItem active>{props.category}</BreadcrumbItem>
    </Breadcrumb> */}
    </div>
      <div className='row'>
        <div className='col-md-3'>
          <Card>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>{props.price}</CardSubtitle>
            </CardBody>
            <img width="50%" src={props.url} alt="Card" />
            <CardBody>
                <CardText>{props.description}</CardText>
                <Button onClick={()=>{setCount(count+1);alert(`Se agregó ${props.name}`)}} color='secondary'>Agregar al carrito</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UserCard;