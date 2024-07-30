import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Header.css';

const Header = () => {
    const { logueado, logout, userType, firstName } = useAuth();
    const navigate = useNavigate();

    const handlerLogout = () => {
        logout();
        navigate("/login");
    };

    const handlerNavDashboard = () => {
        if (userType === "Administrador") {
            navigate("/dashboardAdmin");
        } else if (userType === "Paciente") {
            navigate("/dashboardPatient");
        } else if (userType === "Masajista") {
            navigate("/dashboardTherapist");
        }
    };



    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
                <img src="../../public/img/Logo-Kimochii.png" alt="Logo" style={{ height: '30px' }} />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
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
                                <a href="#" className="nav-link" onClick={handlerNavDashboard}><span>Panel: {firstName} ({userType})</span></a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/schedule">Turnos</Link>
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
