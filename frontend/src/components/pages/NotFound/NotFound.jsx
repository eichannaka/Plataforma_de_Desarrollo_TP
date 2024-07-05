import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">Lo siento, la página que buscas no se encuentra disponible</h1>
            <img src="../../public/img/404.png" alt="logo" height="150px" className="not-found-image" />
            <a href="/" className="btn btn-primary not-found-button">Volver al inicio</a>
        </div>
    );
}

export default NotFound;
