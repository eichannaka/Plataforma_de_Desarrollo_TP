import React from 'react';

const DashboardAdminItem = ({ user, onDeleteUser }) => {
  return (
    <div className="row">
      <div className="col border-bottom border-dark mt-2 mb-2">{user.userType}</div>
      <div className="col border-bottom border-dark mt-2 mb-2">{user.firstName}</div>
      <div className="col border-bottom border-dark mt-2 mb-2">{user.lastName}</div>
      <div className="col border-bottom border-dark mt-2 mb-2">{user.email}</div>
      <div className="col border-bottom border-dark mt-2 mb-2">
        <button className="btn btn-danger" onClick={() => onDeleteUser(user.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default DashboardAdminItem;
