import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logueado, setLogueado] = useState(false);
  const [id, setId] = useState(0);
  const [userType, setUserType] = useState("")
  const [firstName, setFirstName] = useState("")
  const [token, setToken] = useState(null);

  const login = (accessToken, userId, userType, firstName) => {
    setToken(accessToken);
    setId(userId);
    setUserType(userType)
    setFirstName(firstName)
    setLogueado(true);
  };
  const logout = () => {
    setLogueado(false);
    setToken(null);
    setId(0);
  };

  return (
    <AuthContext.Provider value={{ logueado, login, logout, token, id, userType, firstName }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
