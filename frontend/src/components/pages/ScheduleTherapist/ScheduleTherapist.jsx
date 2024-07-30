import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ScheduleTherapist.css';
import { useAuth } from '../../../contexts/AuthContext';

const ScheduleTherapist = () => {
    const { id ,firstName:nombreTerapeuta} = useAuth();
    const [schedules, setSchedules] = useState([]);
    const [error, setError] = useState(null);
    const [therapistName, setTherapistName] = useState('');

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const response = await axios.get(`http://localhost:8888/scheduleByTherapist/${id}`);
                setSchedules(response.data.results);

                if (response.data.results.length > 0) {
                    // Get therapist's name from the first schedule
                    const { terapeuta_firstName, terapeuta_lastName } = response.data.results[0];
                    setTherapistName(`${terapeuta_firstName} ${terapeuta_lastName}`);
                }
            } catch (error) {
                console.error("Error fetching schedules: ", error);
                setError(error);
            }
        };

        fetchSchedules();
    }, [id]);

    const handleConfirm = async (id) => {
        try {
            await axios.patch(`http://localhost:8888/scheduleConfirm/${id}`, {
                estado: 'confirmado'
            });
            setSchedules(schedules.map(schedule =>
                schedule.turno_id === id
                    ? { ...schedule, estado: 'confirmado' }
                    : schedule
            ));
        } catch (error) {
            console.error("Error confirming schedule: ", error);
            setError(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8888/scheduleDelete/${id}`);
            setSchedules(schedules.filter(schedule => schedule.turno_id !== id));
        } catch (error) {
            console.error("Error deleting schedule: ", error);
            setError(error);
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">
                Solicitudes de Turnos del Terapeuta {nombreTerapeuta}
            </h1>
            {error && <p className="text-danger text-center">Hubo un error al cargar los turnos.</p>}
            <table className="table table-bordered table-striped schedule-table">
                <thead className="thead-light">
                    <tr>
                        <th>Turno ID</th>
                        <th>Paciente</th>
                        <th>Terapia</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map(schedule => (
                        <tr key={schedule.turno_id}>
                            <td>{schedule.turno_id}</td>
                            <td>{schedule.paciente_firstName} {schedule.paciente_lastName}</td>
                            <td>{schedule.terapia}</td>
                            <td>{new Date(schedule.fecha).toLocaleDateString()}</td>
                            <td>{schedule.hora}</td>
                            <td>{schedule.estado}</td>
                            <td className="actions">
                                <button className="btn btn-confirm" onClick={() => handleConfirm(schedule.turno_id)}>Confirmar</button>
                                <button className="btn btn-delete" onClick={() => handleDelete(schedule.turno_id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleTherapist;
