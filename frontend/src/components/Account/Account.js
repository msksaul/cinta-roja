import React from 'react';
import { Button } from 'reactstrap';

const Account = (props) => {
  return (
    
      <div className="col-md-4 mx-auto">
        <div className="card text-center">
          <div>
            <Button color="primary" size="lg" href="/newuser" active>Create Account</Button>
          </div>
          <br />
          <h6>hola</h6>
          <br />
          <div>
            <Button color="primary" size="sm" href="/newuser" active>Inicia Sesion Aqui</Button>
          </div>
        </div>
      </div>
  );
}

export default Account;
