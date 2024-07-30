import React, { useEffect, useState } from 'react';
import ScheduleList from '../ScheduleList/ScheduleList';
import axios from 'axios';
import './Schedule.css'; // Importa el archivo CSS para estilos específicos


const Schedule = () => {
    const [schedules, setSchedules] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const response = await axios.get('http://localhost:8888/schedule');
                setSchedules(response.data.results);
            } catch (error) {
                console.error("Error fetching schedules: ", error);
                setError(error);
            }
        };

        fetchSchedules();
    }, []);

    const handleConfirm = async (scheduleId) => {
        try {
            await axios.patch(`http://localhost:8888/scheduleConfirm/${scheduleId}`, {
                estado: 'confirmado'
            });
            setSchedules(schedules.map(schedule =>
                schedule.turno_id === scheduleId
                    ? { ...schedule, estado: 'confirmado' }
                    : schedule
            ));
        } catch (error) {
            console.error("Error confirming schedule: ", error);
            setError(error);
        }
    };

    const handleDelete = async (scheduleId) => {
        try {
            await axios.delete(`http://localhost:8888/scheduleDelete/${scheduleId}`);
            setSchedules(schedules.filter(schedule => schedule.turno_id !== scheduleId));
        } catch (error) {
            console.error("Error deleting schedule: ", error);
            setError(error);
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Lista de Turnos</h1>
            {error && <p className="text-danger text-center">Hubo un error al cargar los turnos.</p>}
            <ScheduleList schedules={schedules} onConfirm={handleConfirm} onDelete={handleDelete} />
        </div>
    );
};

export default Schedule;