import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../../contexts/AuthContext';
import './SchedulePatient.css';

const SchedulePatient = () => {
    const { id, token } = useAuth();
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [therapists, setTherapists] = useState([]);
    const [services, setServices] = useState([]);
    const [formData, setFormData] = useState({
        usuario_id: id || '',
        terapeuta_id: '',
        service_id: '',
        fecha: '',
        hora: ''
    });

    useEffect(() => {
        const fetchTherapists = async () => {
            try {
                const response = await axios.get('http://localhost:8888/therapistsForPatient', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setTherapists(response.data.results);
            } catch (error) {
                console.error("Error fetching therapist data: ", error);
                setError(error);
            }
        };

        const fetchServices = async () => {
            try {
                const response = await axios.get('http://localhost:8888/servicesForPatient', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setServices(response.data.results);
            } catch (error) {
                console.error("Error fetching service data: ", error);
                setError(error);
            }
        };

        fetchTherapists();
        fetchServices();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8888/scheduleForPatient',
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            setSuccessMessage("El turno ha sido creado exitosamente.");
            setError(null);
        } catch (error) {
            console.error("Error creating schedule: ", error);
            setError("Ocurrió un error al crear el turno. Intente nuevamente.");
            setSuccessMessage('');
        }
    };


    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
            <h1 className="text-center mb-4">Solicitud de turnos</h1>
            <div className="form-container p-4 rounded shadow">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="terapeuta_id" className="form-label">Terapeuta:</label>
                        <select name="terapeuta_id" onChange={handleChange} value={formData.terapeuta_id} className="form-select">
                            <option value="">Seleccionar Terapeuta</option>
                            {therapists.map(therapist => (
                                <option key={therapist.id} value={therapist.id}>
                                    {therapist.firstName} {therapist.lastName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="service_id" className="form-label">Servicio:</label>
                        <select name="service_id" onChange={handleChange} value={formData.service_id} className="form-select">
                            <option value="">Seleccionar Servicio</option>
                            {services.map(service => (
                                <option key={service.id} value={service.id}>
                                    {service.terapia}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fecha" className="form-label">Fecha:</label>
                        <input
                            type="date"
                            name="fecha"
                            onChange={handleChange}
                            value={formData.fecha}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="hora" className="form-label">Hora:</label>
                        <input
                            type="time"
                            name="hora"
                            onChange={handleChange}
                            value={formData.hora}
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Crear Turno</button>
                </form>
                {error && <div className="alert alert-danger mt-3">{error}</div>}
                {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
            </div>
        </div>
    );
};

export default SchedulePatient;
