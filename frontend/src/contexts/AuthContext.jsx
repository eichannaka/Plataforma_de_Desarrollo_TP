import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logueado, setLogueado] = useState(false);
  const [id, setId] = useState(0);
  const [userType, setUserType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedId = localStorage.getItem("id");
    const storedUserType = localStorage.getItem("userType");
    const storedFirstName = localStorage.getItem("firstName");
    const storedToken = localStorage.getItem("token");

    if (storedId && storedUserType && storedFirstName && storedToken) {
      setId(storedId);
      setUserType(storedUserType);
      setFirstName(storedFirstName);
      setToken(storedToken);
      setLogueado(true);
    }

    setLoading(false); 
  }, []);

  const login = ({ accessToken, refreshToken }, { id, userType, firstName }) => {
    setToken(accessToken);
    localStorage.setItem("token", refreshToken);
    localStorage.setItem("id", id);
    localStorage.setItem("userType", userType);
    localStorage.setItem("firstName", firstName);
    setId(id);
    setUserType(userType);
    setFirstName(firstName);
    setLogueado(true);
  };

  const logout = () => {
    setLogueado(false);
    setToken(null);
    setId(0);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ logueado, login, logout, token, id, userType, firstName }}>
      {loading ? <div>Cargando...</div> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
