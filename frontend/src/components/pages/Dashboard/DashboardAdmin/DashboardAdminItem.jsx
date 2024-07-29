import React from 'react';

const DashboardAdminItem = ({ user, onDeleteUser, onEditUser }) => {
  return (
    <div className="row mb-2">
    <div className="col border-bottom border-dark py-2">{user.userType}</div>
    <div className="col border-bottom border-dark py-2">{user.firstName}</div>
    <div className="col border-bottom border-dark py-2">{user.lastName}</div>
    <div className="col border-bottom border-dark py-2">{user.email}</div>
    <div className="col border-bottom border-dark py-2">
        <button className="btn btn-warning me-2" onClick={() => onEditUser(user)}>Editar</button>
        <button className="btn btn-danger" onClick={() => onDeleteUser(user.id)}>Eliminar</button>
    </div>
</div>
  );
};

export default DashboardAdminItem;
