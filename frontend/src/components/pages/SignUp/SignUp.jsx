import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';

const Register = () => {
    const [formData, setFormData] = useState({
        userType: 'Paciente',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        // Validación de datos
        const { firstName, lastName, email, password } = formData;
        if (!firstName || !lastName || !email || !password) {
            setErrorMessage('Por favor, complete todos los campos.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8888/register', formData);
            setSuccessMessage(response.data.message);
        } catch (error) {
            console.error('Error registering user:', error);
            setErrorMessage('Error al intentar registrar al usuario.');
        }
    };

    return (
        <div className="register-container mt-4">
            <h2 className="register-title">Registro de Usuario</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group">
                    <label htmlFor="firstName">Nombre</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Apellido</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Registrarme</button>
            </form>
        </div>
    );
};

export default Register;
