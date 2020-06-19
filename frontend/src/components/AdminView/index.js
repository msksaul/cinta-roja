import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import AdminCard from '../AdminCard'


const AdminView = (props) => {
    return (
    <div>
    <h2 className='d-flex justify-content-center'>Agregar Producto</h2>
    <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Nombre</Label>
        <Col sm={10}>
          <Input type="text" name="nombre" id="exampleEmail" placeholder="Escriba el nombre del producto" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Precio (Q)</Label>
        <Col sm={10}>
          <Input type="number" name="precio" id="examplePassword" placeholder="Escriba el precio del producto" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>Categoría</Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect">
            <option>Frutas</option>
            <option>Verduras</option>
            <option>Granos</option>
            <option>Especias</option>
            <option>Varios</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>Descripción</Label>
        <Col sm={10}>
          <Input type="textarea"  placeholder="Escriba información adicional del producto" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>URL</Label>
        <Col sm={10}>
          <Input type="text" name="nombre" id="exampleEmail" placeholder="Escriba la URL para mostrar la imagen del producto" />
        </Col>
      </FormGroup>
      <FormGroup className='d-flex justify-content-center'>
          <Button>Agregar</Button>
      </FormGroup>
    </Form>
    <AdminCard/>
    </div>
    );
}

export default AdminView