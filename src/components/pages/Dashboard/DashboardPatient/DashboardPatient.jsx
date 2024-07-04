import React from 'react';
import { useAuth } from '../../../../contexts/AuthContext';

const DashboardPatient = () => {
  const { user } = useAuth();

  return (
    <div className="container mt-4 p-4" style={{ backgroundColor: '#e9d2b8', borderRadius: '10px' }}>
      <h1 className="text-center mb-4" style={{ color: '#6c757d' }}>Mis datos</h1>
      {user ? (
        <div className="card" style={{ borderColor: '#6c757d' }}>
          <div className="card-body">
            <p className="card-text"><strong>Tipo de Usuario:</strong> {user.userType}</p>
            <p className="card-text"><strong>Nombre:</strong> {user.firstName}</p>
            <p className="card-text"><strong>Apellido:</strong> {user.lastName}</p>
            <p className="card-text"><strong>Email:</strong> {user.email}</p>
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

export default DashboardPatient;
