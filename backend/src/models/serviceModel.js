const connection = require("../../db");


exports.all = async () => {
    const query = `
        SELECT id, Combo, terapia, tiempo, descripcion, precioLista,precioEfectivo
        FROM services
    `;
    try {
        [results] = await connection.query(query);
        return results;
    } catch (error) {
        throw error;
    }
}

exports.create = async ({ Combo, terapia, tiempo, descripcion, precioLista, precioEfectivo }) => {
    const query = `
        INSERT INTO services(Combo, terapia, tiempo, descripcion, precioLista,precioEfectivo)
        VALUES(?, ?, ?, ?, ?, ?)
    `;
    try {
        await connection.query(query, [Combo, terapia, tiempo, descripcion, precioLista, precioEfectivo]);
    } catch (error) {
        throw error;
    }
}

exports.find = async (ID) => {
    const query = `
        SELECT id, Combo, terapia, tiempo, descripcion, precioLista,precioEfectivo
        FROM services
        WHERE id = ?
    `;
    try {
        [results] = await connection.query(query, [ID]);
        return (results.length == 1) ? results[0] : null;
    } catch (error) {
        throw error;
    }
}

exports.update = async ({ ID, Combo, terapia, tiempo, descripcion, precioLista, precioEfectivo }) => {
    const query = `
        UPDATE services
        SET
        Combo = ?,
        terapia =?,
        tiempo = ?,
        descripcion = ?,
        precioLista = ?,
        precioEfectivo = ? 
        WHERE id = ?
    `;
    try {
        await connection.query(query, [Combo, terapia, tiempo, descripcion, precioLista, precioEfectivo, ID]);
    } catch (error) {
        throw error;
    }
}