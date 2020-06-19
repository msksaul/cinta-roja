import React from 'react';
import { Container, Row, Col, Jumbotron, FormGroup, Input, Label} from 'reactstrap';

const ConfCard = (props) => {
  return (
    <Jumbotron>
    <Container>
      <Row>
        <Col>Imagen</Col>
        <Col>Articulo</Col>
        <Col>
        <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </Input>
      </FormGroup>
      </Col>
        <Col>SubTotal</Col>
      </Row>
    </Container>
    </Jumbotron>
  );
}

export default ConfCard;