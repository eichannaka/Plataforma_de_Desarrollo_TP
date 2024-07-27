import React, { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlerLogin = async () => {
    try {
      const request = await axios.post("http://localhost:8888/login", {
        email,
        password
      });
      if (request.data.success) {
        login(request.data.accessToken, request.data.userData.id, request.data.userData.userType, request.data.userData.firstName);
        if (request.data.userData.userType === "Administrador") {
          navigate("/dashboardAdmin");
        } else if (request.data.userData.userType === "Paciente") {
          navigate("/dashboardPatient");
        } else if (request.data.userData.userType === "Masajista") {
          navigate("/dashboardTherapist");
        }
      } else {
        setError("El email y/o la contraseña son incorrectos");
      }
    } catch (error) {
      console.error("Ha surgido un error, por favor intente más tarde");
    }
  };

  return (
    <form className='mt-4 p-5 border form-container' onSubmit={(e) => e.preventDefault()}>
      <h1 className='form-title'>Iniciar sesión</h1>
      <div className="mt-4">
        <label htmlFor="exampleInputEmail1" className="form-label form-label">Email</label>
        <input type="email" className="form-control form-input" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label form-label">Contraseña</label>
        <input type="password" className="form-control form-input" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <button type="submit" className="btn btn-primary form-button" onClick={handlerLogin}>Ingresar</button>
    </form>
  );
};

export default Login;
