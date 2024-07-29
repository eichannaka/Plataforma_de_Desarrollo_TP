import React from 'react';
import DashboardAdminItem from './DashboardAdminItem';

const DashboardAdminList = ({ users, onDeleteUser, onEditUser }) => {
  return (
    <div className="mt-4">
      <h3 className="mb-3">Lista de usuarios</h3>
      {users.map(user => (
        <DashboardAdminItem key={user.id} user={user} onDeleteUser={onDeleteUser} onEditUser={onEditUser} />
      ))}
    </div>
  );
};

export default DashboardAdminList;
