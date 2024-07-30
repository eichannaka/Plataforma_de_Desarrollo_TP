import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../../../contexts/AuthContext';
import './DashboardPatient.css';


const DashboardPatient = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { token, id } = useAuth(); 
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/dashboardPatient/user/${id}`, {
          headers: {
            'Authorization':  `Bearer ${token}`
          }
        });
        console.log('API response:', response); 
        setUser(response.data.data);
      } catch (error) { 
        console.error("Error fetching user data: ", error);
        setError(error);
      }
    };

    fetchUserData();
  }, [id, token]);

  return (
    <div className="container mt-4 p-4 container-dashboard">
      <h1 className="text-center mb-4 dashboard-title">Mis datos</h1>
      {error ? (
        <div className="alert alert-danger" role="alert">
          No se ha encontrado información del usuario.
        </div>
      ) : user ? (
        <div className="card dashboard-card">
          <div className="card-body">
            <p className="card-text"><span className="card-text-label">Tipo de Usuario:</span> {user.userType}</p>
            <p className="card-text"><span className="card-text-label">Nombre:</span> {user.firstName}</p>
            <p className="card-text"><span className="card-text-label">Apellido:</span> {user.lastName}</p>
            <p className="card-text"><span className="card-text-label">Email:</span> {user.email}</p>
          </div>
        </div>
      ) : (
        <div className="alert alert-info" role="alert">
          Cargando información del usuario...
        </div>
      )}
    </div>
  );
};


export default DashboardPatient;
