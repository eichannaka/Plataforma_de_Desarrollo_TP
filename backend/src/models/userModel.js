const connection = require("../../db");

const bcrypt = require('bcrypt');


exports.all = async () => {
    const query = `
        SELECT id, userType, firstName, lastName, email, password
        FROM users
    `;
    try {
        const [results] = await connection.query(query);
        return results;
    } catch (error) {
        throw error;
    }
};

exports.create = async ({ userType, firstName, lastName, email, password }) => {
    const contrasena_crypt = await bcrypt.hash(password, 10);
    const query = `
        INSERT INTO users(userType, firstName, lastName, email, password)
        VALUES(?, ?, ?, ?, ?)
    `;
    try {
        await connection.query(query, [userType, firstName, lastName, email, contrasena_crypt]);
    } catch (error) {
        throw error;
    }
}

exports.login = async ({ email, password }) => {
    //Buscamos el usuario por su correo.b
    const query = `
        SELECT id, userType, firstName, lastName, email, password
        FROM users
        WHERE email = ?
    `;
    try {
        [results] = await connection.query(query, [email]);
        //Verificamos si encontró el usuario.
        if (results.length == 1) {
            const usuario = results[0];
            const is_contrasena = await bcrypt.compare(password, usuario.password);
            return (is_contrasena) ? usuario : null;
        } else {
            return null;
        }
    } catch (error) {
        throw error;
    }
}


exports.find = async (ID) => {
    const query = `
        SELECT id, userType, firstName, lastName, email, password
        FROM users
        WHERE id = ?
    `;
    try {
        const [results] = await connection.query(query, [ID]);
        return (results.length == 1) ? results[0] : null;
    } catch (error) {
        throw error;
    }
};

exports.delete = async (id) => {
    const query = `
        DELETE FROM users
        WHERE id = ?
    `;
    try {
        await connection.query(query, [id]);
    } catch (error) {
        throw error;
    }
};

// exports.update = async ({ ID, userType, firstName, lastName, email, password }) => {
//     const query = `
//         UPDATE users
//         SET
//         userType = ?,
//         firstName = ?,
//         lastName = ?,
//         email = ?,
//         password = ?
//         WHERE id = ?
//     `;
//     try {
//         await connection.query(query, [userType, firstName, lastName, email, password, ID]);
//     } catch (error) {
//         throw error;
//     }
// }