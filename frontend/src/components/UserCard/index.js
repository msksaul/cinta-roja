import React from 'react';
import { Button, Card, CardText, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const UserCard = () => {
  return(
    <section className='bot'>
    <div className='panel'>
    <Breadcrumb>
        <BreadcrumbItem active>Frutas</BreadcrumbItem>
    </Breadcrumb>
    </div>
      <div className='row'>
        <div className='col-md-3'>
          <Card>
            <CardBody>
                <CardTitle>Nombre</CardTitle>
                <CardSubtitle>Q Precio</CardSubtitle>
            </CardBody>
            <img width="50%" src={require('../../images/dog.jpg')} alt="Card" />
            <CardBody>
                <CardText>Descripcion del producto</CardText>
                <Button color='secondary'>Agregar al carrito</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UserCard;