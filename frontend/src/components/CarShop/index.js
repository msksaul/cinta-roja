import React from 'react';
import { Form, FormGroup, Label, Input, Button, Jumbotron, Breadcrumb, BreadcrumbItem,
} from 'reactstrap';
import ConfCard from '../ConfCard';

const CarShop = () => {
  return(
    <React.Fragment>
    <div className='panel'>
    <Breadcrumb>
        <BreadcrumbItem active>Resumen de Compra</BreadcrumbItem>
    </Breadcrumb>
    </div>
    <ConfCard/>
      <Jumbotron>
      <Form>
      <FormGroup>
        <h3 className='display-5' >Finalizar Orden (Total Q 300)</h3>
        <h6>Llenar los datos solicitados para facturación</h6>
      </FormGroup>
      <FormGroup>
        <Label>Nombre</Label>
        <Input
          required
          type="text"
          placeholder="Escriba su nombre"
        />
      </FormGroup>
      <FormGroup>
        <Label>Dirección</Label>
        <Input
          required
          type="text"
          placeholder="Escriba la dirección para el envío"
        />
      </FormGroup>
      <FormGroup>
        <Label>Teléfono</Label>
        <Input
          required
          type="number"
          placeholder="Escriba su número de teléfono"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDatetime">Escriba su NIT (si posee)</Label>
        <Input
          type="text"
          placeholder="Ej. 9226739-4"
        />
      </FormGroup>
      <FormGroup className='d-flex justify-content-center'>
          <Button color='primary' size='lg'>Enviar</Button>
      </FormGroup>
    </Form>
    </Jumbotron>
    </React.Fragment>
  )
}
export default CarShop;