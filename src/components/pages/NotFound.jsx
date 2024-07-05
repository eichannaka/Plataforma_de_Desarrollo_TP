import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFound = () => {
    return (
        <div style={{ minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: '#5a4635' }}>Lo siento, la página que buscas no se encuentra disponible</h1>
            <img src="../../public/img/404.png" alt="logo" height="150px" className="my-4" />
            <a href="/" className="btn btn-primary mt-3">Volver al inicio</a>
        </div>
    );
}

export default NotFound;
