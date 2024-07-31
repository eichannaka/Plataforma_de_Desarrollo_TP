import React, { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom'; // Importamos Link
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
        login(request.data, request.data.userData);
        console.log(request.data);
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
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className='mt-4 p-5 border form-container' onSubmit={(e) => e.preventDefault()}>
        <h1 className='form-title text-center'>Iniciar sesión</h1>
        <div className="mt-4">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control form-input" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
          <input type="password" className="form-control form-input" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary form-button" onClick={handlerLogin}>Ingresar</button>
          <Link to="/register" className="btn btn-secondary form-button">Regístrate</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
