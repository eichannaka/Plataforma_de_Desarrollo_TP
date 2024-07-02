import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

//Layout
import Header from './components/Layout/Header.jsx';
import Footer from './components/Layout/Footer.jsx';

//Paginas
import Home from './components/pages/Home.jsx';
import ServiceList from './components/pages/serviceList/ServiceList.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import NotFound from './components/pages/NotFound.jsx';
import Login from './components/pages/Login.jsx';
import Dashboard from './components/pages/Dashboard.jsx';

//Contexto
import { AuthProvider } from './contexts/AuthContext.jsx';
import ProtectedRouter from './contexts/ProtectedRouter.jsx';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <div className='container'>
            < Routes >
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServiceList />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={
                <ProtectedRouter>
                  <Dashboard />
                </ProtectedRouter>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;