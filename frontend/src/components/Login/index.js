import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
  const { setTokenInLocalStorage, isAuth, user } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  if (isAuth && user.id==='5eed18a26b5b552ad1996b06') return <Redirect to="/adminview" />

  if (isAuth) return <Redirect to="/userview" />

  const handleSubmit = async (event) => {
    event.preventDefault();
    const jsonSend = { email, password }
    /* console.log(jsonSend);
    alert('Successful login'); */
    try {
      const axiosRes = await axios.post('http://localhost:3002/api/v1/login', jsonSend);
      const { token } = axiosRes.data;
      setTokenInLocalStorage(token);
      alert('Successful login');
    } catch (error) {
      alert('Error on login');
    }
  };
  return (
      <div class="row">
        <div class="col-md-4 mx-auto">
          <div class="card mt-4 text-center">
            <div class="card-header">
              <h2>Inicio de Sesión</h2>
            </div>
            <div class="card-body">
              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <input 
                  onChange={(event) => setEmail(event.target.value)}
                  required type="email" value={email} class="form-control" placeholder="Email" autofocus/>
                </div>
                <div class="form-group">
                  <input 
                  onChange={(event) => setPassword(event.target.value)}
                  required type="password" value={password} class="form-control" placeholder="Password"/>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block">
                    Acceder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login
