import React from 'react';

const ServiceItem = ({ terapia, tiempo, descripcion, precioLista, precioEfectivo }) => {
    return (
        <div className="card mt-5 shadow-sm" style={{ width: '18rem', backgroundColor: '#e9d2b8', borderRadius: '10px', border: 'none' }}>
            <div className="card-body">
                <h5 className="card-title" style={{ color: '#4A4A4A' }}>{terapia}</h5> 
                <h6 className="card-subtitle mb-2 text-muted">{tiempo}</h6>
                <p className="card-text" style={{ color: '#4A4A4A' }}>{descripcion}</p>
                <div>
                    <span className="text me-2" style={{ color: '#4A4A4A' }}>Precio en lista: ${precioLista}</span> <br />
                    <span className="fw-bold" style={{ color: '#4A4A4A' }}>Precio en efectivo: ${precioEfectivo}</span>
                </div>
                <a href="#" className="btn btn-dark mt-3" style={{ backgroundColor: '#4A4A4A', borderColor: '#4A4A4A' }}>Reservar</a>
            </div>
        </div>
    );
}

export default ServiceItem;
