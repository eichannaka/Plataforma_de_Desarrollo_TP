import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logueado, setLogueado] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setLogueado(true);
    setUser(userData);
  };

  const logout = () => {
    setLogueado(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ logueado, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
