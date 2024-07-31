import React, { useEffect, useState } from 'react';
import DashboardAdminList from './DashboardAdminList';
import { useAuth } from '../../../../contexts/AuthContext';
import axios from 'axios';
import './DashboardAdmin.css'; 

export const  DashboardAdmin = () => {
  const { token, firstName: loggedInFirstName } = useAuth();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [userType, setUserType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8888/dashboardAdmin/users', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching user data: ", error);
        setError(error);
      }
    };

    fetchUsers();
  }, [token]);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8888/dashboardAdmin/users/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user: ", error);
      setError(error);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user.id);
    setUserType(user.userType);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
  };

  const handleUpdateUser = async () => {
    try {
      await axios.put(`http://localhost:8888/dashboardAdmin/users/${editingUser}`, {
        userType,
        firstName,
        lastName,
        email,
        password
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setUsers(users.map(user => user.id === editingUser ? { ...user, userType, firstName, lastName, email } : user));
      setEditingUser(null);
      setUserType('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error("Error updating user: ", error);
      setError(error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Bienvenido {loggedInFirstName}</h1>
      {error && <p className="text-danger text-center">Hubo un error al cargar los usuarios.</p>}
      {editingUser && (
        <div className="card p-3 mb-4">
          <h2>Editar Usuario</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleUpdateUser(); }}>
            <div className="form-group">
              <label>Tipo de Usuario</label>
              <input type="text" className="form-control" value={userType} onChange={(e) => setUserType(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Apellido</label>
              <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Contraseña (dejar en blanco para no cambiar)</label>
              <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Actualizar</button>
          </form>
        </div>
      )}
      <DashboardAdminList users={users} onDeleteUser={handleDeleteUser} onEditUser={handleEditUser} />
    </div>
  );
};

export default DashboardAdmin;
