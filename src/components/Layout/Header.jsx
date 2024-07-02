import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Header.css';

const Header = () => {
    const { logueado, user, logout } = useAuth();
    const navigate = useNavigate();

    const handlerLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src="../../public/img/Logo.jpg" alt="Logo" style={{ height: '30px' }} />
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
                        <Link className="nav-link" to="/about">Sobre Nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contacto</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    {logueado ? (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">{user.firstName} ({user.userType}) </span>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" onClick={handlerLogout}>Logout</a>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
