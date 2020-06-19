import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import AdminCard from '../AdminCard'
import axios from 'axios';


const AdminView = (props) => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Frutas');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

    const handleInput = (e) => {
      switch (e.target.name) {
        case "name":
          setName(e.target.value)
          break;
        case "price":
          setPrice(e.target.value)
          break;
        case "category":
          setCategory(e.target.value)
          break;
        case "description":
          setDescription(e.target.value)
          break;
        case "url":
          setUrl(e.target.value)
          break;
        default:
          break;
      }
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const jsonSend = {
        name: name,
        price: price,
        category: category,
        description: description,
        url: url,
      }
      // Hacer una peticion POST al backend para registrar un usuario
      try {
        await axios.post('http://localhost:3002/api/v1/products', jsonSend);
        alert('Producto Agregado');
      } catch (error) {
        alert('Error');
      }
    }
      

    return (
    <div>
    <h2 className='d-flex justify-content-center'>Agregar Producto</h2>
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Nombre</Label>
        <Col sm={10}>
          <Input
          required
          value={name} 
          onChange={handleInput} 
          type="text" name='name' id="exampleEmail" placeholder="Escriba el nombre del producto" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Precio (Q)</Label>
        <Col sm={10}>
          <Input
          required 
          value={price}
          onChange={handleInput}
          type="number" name='price' id="examplePassword" placeholder="Escriba el precio del producto" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>Categoría</Label>
        <Col sm={10}>
          <Input
          required
          value={category} 
          onChange={handleInput} type="select" name="category" id="exampleSelect">
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
          <Input
          required
          value={description} 
          onChange={handleInput}
          type="textarea" name='description' placeholder="Escriba información adicional del producto" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>URL</Label>
        <Col sm={10}>
          <Input
          required
          value={url} 
          onChange={handleInput}
          type="text" id="exampleEmail" name='url' placeholder="Escriba la URL para mostrar la imagen del producto" />
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