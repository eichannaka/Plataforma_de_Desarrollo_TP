const connection = require("../../db");
// Obtener todos los servicios
exports.allServices = async () => {
    const query = `
        SELECT id, Combo, terapia, tiempo, descripcion, precioLista, precioEfectivo
        FROM services
    `;
    try {
        const [results] = await connection.query(query);
        return results;
    } catch (error) {
        throw error;
    }
}

// Obtener todos los turnos
exports.allSchedule = async () => {
    const query = `
        SELECT id, usuario_id, terapeuta_id, service_id, fecha, hora, estado
        FROM turnos
    `;
    try {
        const [results] = await connection.query(query);
        return results;
    } catch (error) {
        throw error;
    }
}

// Crear un nuevo turno
exports.createForPatient = async ({ usuario_id, terapeuta_id, service_id, fecha, hora, estado }) => {
    const query = `
        INSERT INTO turnos (usuario_id, terapeuta_id, service_id, fecha, hora, estado)
        VALUES (?, ?, ?, ?, ?, "pendiente")
    `;
    try {
        await connection.query(query, [usuario_id, terapeuta_id, service_id, fecha, hora, estado]);
    } catch (error) {
        throw error;
    }
}

// Encontrar un turno por ID
exports.find = async (id) => {
    const query = `
        SELECT id, usuario_id, terapeuta_id, service_id, fecha, hora, estado
        FROM turnos
        WHERE id = ?
    `;
    try {
        const [results] = await connection.query(query, [id]);
        return (results.length === 1) ? results[0] : null;
    } catch (error) {
        throw error;
    }
}

// Actualizar un turno
exports.update = async ({ id, usuario_id, terapeuta_id, service_id, fecha, hora, estado }) => {
    const query = `
        UPDATE turnos
        SET
            usuario_id = ?,
            terapeuta_id = ?,
            service_id = ?,
            fecha = ?,
            hora = ?,
            estado = ?
        WHERE id = ?
    `;
    try {
        await connection.query(query, [usuario_id, terapeuta_id, service_id, fecha, hora, estado, id]);
    } catch (error) {
        throw error;
    }
}

// Confirmar turno del Paciente
exports.confirmSchedule = async ({ id, estado }) => {
    const query = `
        UPDATE turnos
        SET
            estado = ?
        WHERE id = ?
    `;
    try {
        await connection.query(query, [estado, id]);
    } catch (error) {
        throw error;
    }
}


//Borrar turno
exports.deleteSchedule = async (id) => {
    const query = `
        DELETE FROM turnos
        WHERE id = ?
    `;
    try {
        await connection.query(query, [id]);
    } catch (error) {
        throw error;
    }
};

/////////////////

// Obtener todos los turnos
exports.allTurnosWithDetails = async () => {
    const query = `
    SELECT 
    t.id AS turno_id,
    t.fecha,
    t.hora,
    t.estado,
    u1.firstName AS paciente_firstName,
    u1.lastName AS paciente_lastName,
    u2.firstName AS terapeuta_firstName,
    u2.lastName AS terapeuta_lastName,
    s.terapia
    FROM turnos t
    JOIN users u1 ON t.usuario_id = u1.id
    JOIN users u2 ON t.terapeuta_id = u2.id
    JOIN services s ON t.service_id = s.id
    WHERE t.fecha >= CURDATE() OR (t.fecha = CURDATE() AND t.hora >= CURTIME())
    ORDER BY t.fecha, t.hora;

    `;
    try {
        const [results] = await connection.query(query);
        return results;
    } catch (error) {
        throw error;
    }
};


/////////////////////////////
// Obtener todos los terapeutas
exports.allTherapistsForPatient = async () => {
    const query = `
        SELECT id, firstName, lastName
        FROM users
        WHERE userType = 'Masajista'
    `;
    try {
        const [results] = await connection.query(query);
        return results;
    } catch (error) {
        throw error;
    }
}

// Obtener todos los servicios
exports.allServicesForPatient = async () => {
    const query = `
        SELECT id, terapia
        FROM services
    `;
    try {
        const [results] = await connection.query(query);
        return results;
    } catch (error) {
        throw error;
    }
}

// Obtener todos los turnos de un terapeuta específico
exports.allSchedulesByTherapist = async (id) => {
    const query = `
    SELECT 
        t.id AS turno_id,
        t.fecha,
        t.hora,
        t.estado,
        u1.firstName AS paciente_firstName,
        u1.lastName AS paciente_lastName,
        s.terapia
    FROM turnos t
    JOIN users u1 ON t.usuario_id = u1.id
    JOIN services s ON t.service_id = s.id
    WHERE t.terapeuta_id = ?
    ORDER BY t.fecha, t.hora;
    `;
    try {
        const [results] = await connection.query(query, [id]);
        return results;
    } catch (error) {
        throw error;
    }
};
