import React from 'react';
import { Jumbotron, Button, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Init = (props) => {
    return (
        <div>
          <Jumbotron className='color-init'>
            <h1 className="display-3">¡Bienvenido!</h1>
            <p className="lead">QuetzalStore es la tienda online para pequeños negocios, te ayudamos a vender tus productos.</p>
            <hr className="my-2" />
            <p className='d-flex justify-content-center'>Para empezar a comprar, regístrate con nosotros. ¡Es gratis y siempre lo será!</p>
            <p className="lead d-flex justify-content-center">
              <Button tag={Link} to="/signup" color="primary">Crear Cuenta</Button>
            </p>
            <p className='d-flex justify-content-center'>¿Ya tienes cuenta?</p>
            <p className='d-flex justify-content-center'>
            <Button tag={Link} to="/login" color="secondary" size="sm">Inicia Sesión Aquí</Button>
            </p>
          </Jumbotron>
        </div>
      );
    };

export default Init;