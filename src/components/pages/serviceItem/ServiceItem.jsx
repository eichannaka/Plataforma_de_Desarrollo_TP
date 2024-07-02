import React from 'react';

const ServiceItem = ({ terapia, tiempo, descripcion, precioLista, precioEfectivo }) => {
    return (
        <div>
            <div className="card mt-5" style={{ width: '18rem', marginBottom: '1rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{terapia}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{tiempo}</h6>
                    <p className="card-text">{descripcion}</p>
                    <div>
                        <span className="text me-2">Precio en lista: ${precioLista}</span> <br />
                        <span className="fw-bold">Precio en efectivo: ${precioEfectivo}</span>
                    </div>
                    <a href="#" className="btn btn-primary mt-3">Reservar</a>
                </div>
            </div>
        </div>
    );
}
export default ServiceItem