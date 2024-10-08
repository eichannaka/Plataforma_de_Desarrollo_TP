import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

//Layout
import Header from './components/Layout/Header.jsx';
import Footer from './components/Layout/Footer.jsx';

//Paginas
import Home from './components/pages/Home/Home.jsx';
import ServiceList from './components/pages/service/serviceList/ServiceList.jsx';
import About from './components/pages/About/About.jsx';
import Contact from './components/pages/Contact/Contact.jsx';
import NotFound from './components/pages/NotFound/NotFound.jsx';
import Login from './components/pages/Login/Login.jsx';
import Schedule from './components/pages/Schedule/Schedule/Schedule.jsx';
import SchedulePatient from './components/pages/SchedulePatient/SchedulePatient.jsx';
import ScheduleTherapist from './components/pages/ScheduleTherapist/ScheduleTherapist.jsx';
import SignUp from './components/pages/SignUp/SignUp.jsx';


//Dashboards de usuarios
import DashboardPatient from './components/pages/Dashboard/DashboardPatient/DashboardPatient.jsx';
import DashboardAdmin from './components/pages/Dashboard/DashboardAdmin/DashboardAdmin.jsx';
import DashboardTherapist from './components/pages/Dashboard/DashboardTherapist/DashboardTherapist.jsx';

//Contexto
import { AuthProvider } from './contexts/AuthContext.jsx';
import ProtectedRouter from './contexts/ProtectedRouter.jsx';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <div className='container_main'>
            <Header />
            < Routes >
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServiceList />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              
              {/* Turnos */}
              <Route path="/schedule" element={
                <ProtectedRouter>
                  <Schedule />
                </ProtectedRouter>
              } />
              <Route path="/schedulePatient" element={
                <ProtectedRouter>
                  <SchedulePatient />
                </ProtectedRouter>
              } />
              <Route path="/scheduleTherapist" element={
                <ProtectedRouter>
                  <ScheduleTherapist />
                </ProtectedRouter>
              } />

              {/* Panel */}
              <Route path="/dashboardAdmin" element={
                <ProtectedRouter>
                  <DashboardAdmin />
                </ProtectedRouter>
              } />
              <Route path="/dashboardPatient" element={
                <ProtectedRouter>
                  <DashboardPatient />
                </ProtectedRouter>
              } />
              <Route path="/dashboardTherapist" element={
                <ProtectedRouter>
                  <DashboardTherapist />
                </ProtectedRouter>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
