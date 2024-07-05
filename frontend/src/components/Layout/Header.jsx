import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Header.css';
import db from '../../db/db.json';
import Login from '../pages/Login';

const Header = () => {
    const { logueado, user, logout } = useAuth();
    const navigate = useNavigate();
    // Agregar logs para verificar los valores
    console.log("Header Component - logueado:", logueado);
    console.log("Header Component - user:", user);
    const handlerLogout = () => {
        logout();
        navigate("/login");
    };

    const handlerNavDashboard = () => {
        if (user.userType === "Administrador") {
            return navigate("/dashboardAdmin");
        } else if (user.userType === "Paciente") {
            return navigate("/dashboardPatient");
        } else if (user.userType === "Masajista") {
            return navigate("/dashboardTherapist");
        }

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src="../../public/img/Logo-Kimochii.png" alt="Logo" style={{ height: '30px' }} />
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/services">Servicios</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">Nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contacto</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    {logueado ? (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="#" onClick={handlerNavDashboard}>Panel</Link>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">{user.firstName} ({user.userType}) </span>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" onClick={handlerLogout}>Salir</a>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Iniciar Sesión</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
