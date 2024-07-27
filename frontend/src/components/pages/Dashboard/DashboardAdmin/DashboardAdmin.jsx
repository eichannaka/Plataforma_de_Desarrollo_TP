import React, { useEffect, useState } from 'react';
import DashboardAdminList from './DashboardAdminList';
import { useAuth } from '../../../../contexts/AuthContext';
import axios from 'axios';

export const DashboardAdmin = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const { token, firstName } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8888/dashboardAdmin/users', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response.data.data+"AAAAAAAAAAAAAAA");
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

  return (
    <div>
      <h1>Bienvenido {firstName}</h1>
      {error && <p style={{ color: 'red' }}>Hubo un error al cargar los usuarios.</p>}
      <DashboardAdminList users={users} onDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default DashboardAdmin;
