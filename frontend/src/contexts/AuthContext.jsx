import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logueado, setLogueado] = useState(false);
  const [id, setId] = useState(0);
  const [userType, setUserType] = useState("")
  const [firstName, setFirstName] = useState("")
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedId = localStorage.getItem("id");
    const storedUserType = localStorage.getItem("userType");
    const storedFirstName = localStorage.getItem("firstName");
  
    if (storedId && storedUserType && storedFirstName) {
      setId(storedId);
      setUserType(storedUserType);
      setFirstName(storedFirstName);
      setLogueado(true);
    }
  
    doRefreshToken();
  }, []);
  
  const doRefreshToken = async () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      try {
        const request = await axios.get("http://localhost:8888/refresh-token", {
          headers: {
            Authorization: `Bearer ${storedToken}`
          }
        });
  
        if (request.data.success) {
          setToken(request.data.accessToken);
          localStorage.setItem("token", request.data.accessToken);
        }
      } catch (error) {
        console.error("Ha surgido un error, por favor intente más tarde");
        logout();
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };
  

  const login = ({ accessToken, refreshToken }, {id, userType, firstName}) => {
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
  };

  return (
    <AuthContext.Provider value={{ logueado, login, logout, token, id, userType, firstName }}>
      {
        (loading)
          ?
          <div> Cargando... </div>
          :
          children
      }
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
