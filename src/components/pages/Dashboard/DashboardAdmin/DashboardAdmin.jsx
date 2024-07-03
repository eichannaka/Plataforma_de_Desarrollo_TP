import React, { useState } from 'react';
import db from '../../../../db/db.json'; 
import DashboardAdminList from './DashboardAdminList';

const DashboardAdmin = () => {
  const [users, setUsers] = useState(db); 
  const [newUser, setNewUser] = useState({
    userType: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = users.length ? users[users.length - 1].id + 1 : 1;
    const updatedUsers = [...users, { ...newUser, id: newId }];
    setUsers(updatedUsers);

    setNewUser({
      userType: '',
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  };

  return (
    <div className="container">
      <h2 className='mt-4'>Panel de administrador</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="userType">Tipo de usuario</label>
          <input
            type="text"
            className="form-control"
            id="userType"
            name="userType"
            value={newUser.userType}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="firstName">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={newUser.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={newUser.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email">Mail</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={newUser.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Agregar usuario
        </button>
      </form>
      <DashboardAdminList users={users}/>
    </div>
  );
};

export default DashboardAdmin;
