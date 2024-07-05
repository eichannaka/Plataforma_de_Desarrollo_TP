import React from 'react'
import { useAuth } from '../../../../contexts/AuthContext';
import './DashboardTherapist.css'

const DashboardTherapist = () => {
  const { user } = useAuth();
  return (
    <div className="container mt-4 p-4 container-dashboard">
      <h1 className="text-center mb-4 dashboard-title">Mis datos</h1>
      {user ? (
        <div className="card dashboard-card">
          <div className="card-body">
            <p className="card-text"><span className="card-text-label">Tipo de Usuario:</span> {user.userType}</p>
            <p className="card-text"><span className="card-text-label">Nombre:</span> {user.firstName}</p>
            <p className="card-text"><span className="card-text-label">Apellido:</span> {user.lastName}</p>
            <p className="card-text"><span className="card-text-label">Email:</span> {user.email}</p>
          </div>
        </div>
      ) : (
        <div className="alert alert-danger" role="alert">
          No se ha encontrado información del usuario.
        </div>
      )}
    </div>
  );
};

export default DashboardTherapist