import React, { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import db from '../../../db/db.json';
import './Login.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlerLogin = () => {
    const user = db.find(user => user.email === email && user.password === password);

    if (user) {
      if (user.userType === "Administrador") {
        login(user);
        navigate("/dashboardAdmin");
      } else if (user.userType === "Paciente") {
        login(user);
        navigate("/dashboardPatient");
      } else if (user.userType === "Masajista") {
        login(user);
        navigate("/dashboardTherapist");
      }
    } else {
      setError("El email y/o la contraseña son incorrectos");
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
