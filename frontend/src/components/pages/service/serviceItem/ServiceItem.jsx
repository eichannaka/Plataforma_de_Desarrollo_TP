import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../contexts/AuthContext';
import './ServiceItem.css';

const ServiceItem = ({ terapia, tiempo, descripcion, precioLista, precioEfectivo, combo }) => {
    const navigate = useNavigate();
    const { logueado, userType } = useAuth();

    const cardStyle = {
        backgroundColor: combo ? '#d1ecf1' : '#f7c286',
    };

    const handleReserveClick = () => {
        if (userType === 'Paciente') {
            navigate('/schedulePatient');
        } else if (logueado == false) {
            navigate('/login');
        }
    };

    return (
        <div className="card m-3 shadow-sm custom-card" style={cardStyle}>
            <div className="card-body">
                <h5 className="card-title custom-text">{terapia}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{tiempo}</h6>
                <p className="card-text custom-text">{descripcion}</p>
                <div>
                    <span className="text me-2 custom-text">Precio en lista: ${precioLista}</span> <br />
                    <span className="fw-bold custom-text">Precio en efectivo: ${precioEfectivo}</span>
                </div>
                <button className="btn btn-dark mt-3 custom-btn" onClick={handleReserveClick}>
                    Reservar
                </button>
            </div>
        </div>
    );
};

export default ServiceItem;
