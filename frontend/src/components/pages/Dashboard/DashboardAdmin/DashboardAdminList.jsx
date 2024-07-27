import React from 'react';
import DashboardAdminItem from './DashboardAdminItem';

const DashboardAdminList = ({ users, onDeleteUser }) => {
  return (
    <div className='mt-3'>
      <h3>Lista de usuarios</h3>
      {users.map(user => (
        <DashboardAdminItem key={user.id} user={user} onDeleteUser={onDeleteUser} />
      ))}
    </div>
  );
};

export default DashboardAdminList;
