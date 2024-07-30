import React from 'react';
import ScheduleItem from '../ScheduleItem/ScheduleItem';
import './ScheduleList.css'; 

const ScheduleList = ({ schedules, onConfirm, onDelete }) => {
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped schedule-table">
                <thead className="thead-light">
                    <tr>
                        <th>Turno ID</th>
                        <th>Paciente</th>
                        <th>Terapeuta</th>
                        <th>Terapia</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map(schedule => (
                        <ScheduleItem 
                            key={schedule.turno_id}
                            schedule={schedule}
                            onConfirm={onConfirm}
                            onDelete={onDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleList
