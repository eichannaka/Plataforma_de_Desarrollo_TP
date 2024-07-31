import React from 'react';
import axios from 'axios';
import './ScheduleItem.css';
import { useAuth } from '../../../../contexts/AuthContext';

const ScheduleItem = ({ schedule, onConfirm, onDelete }) => {
    const { token } = useAuth();
    const handlerConfirmSchedule = async () => {
        try {
            await axios.patch(`http://localhost:8888/scheduleConfirm/${schedule.turno_id}`,
                {
                    estado: 'confirmado'
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            onConfirm(schedule.turno_id);
        } catch (error) {
            console.error("Error confirming schedule: ", error);
        }
    };


    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8888/scheduleDelete/${schedule.turno_id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            onDelete(schedule.turno_id);
        } catch (error) {
            console.error("Error deleting schedule: ", error);
        }
    };

    return (
        <tr className="schedule-item">
            <td>{schedule.turno_id}</td>
            <td>{schedule.paciente_firstName} {schedule.paciente_lastName}</td>
            <td>{schedule.terapeuta_firstName} {schedule.terapeuta_lastName}</td>
            <td>{schedule.terapia}</td>
            <td>{new Date(schedule.fecha).toLocaleDateString()}</td>
            <td>{schedule.hora}</td>
            <td>{schedule.estado}</td>
            <td className="actions">
                <button className="btn btn-confirm" onClick={handlerConfirmSchedule}>Confirmar</button>
                <button className="btn btn-delete" onClick={handleDelete}>Eliminar</button>
            </td>
        </tr>
    );
};

export default ScheduleItem;
