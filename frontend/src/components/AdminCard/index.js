import React from 'react';
import { Button, Card, CardBody,
        Input, InputGroupAddon, InputGroupText, InputGroup, FormGroup, Col
} from 'reactstrap';

const AdminCard = () => {
  return(
    <section className='colection'>
      <h2 className='d-flex justify-content-center'>Administrar Productos</h2>
      <div className='row'>
        <div className='col-md-4'>
          <Card>
            <CardBody>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Nombre</InputGroupText>
              </InputGroupAddon>
              <Input type='text' placeholder="" />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">Precio(Q)</InputGroupAddon>
              <Input placeholder="" min={1} max={1000} type="number"/>
            </InputGroup>
            <FormGroup row>
            <Col sm={10}>
              <Input type="select">
                <option>Frutas</option>
                <option>Verduras</option>
                <option>Granos</option>
                <option>Especias</option>
                <option>Varios</option>
              </Input>
            </Col>
            </FormGroup>
            </CardBody>
            <img width="50%" src={require('../../images/dog.jpg')} alt="Card" />
            <CardBody>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Descripción</InputGroupText>
              </InputGroupAddon>
              <Input type='textarea' placeholder='' />
            </InputGroup>
                <Button color='danger'>Eliminar</Button>
                <Button color='secondary'>Editar</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdminCard;