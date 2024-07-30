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
    const query = `
        SELECT id, userType, firstName, lastName, email, password
        FROM users
        WHERE email = ?
    `;
    try {
        [results] = await connection.query(query, [email]);
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


exports.find = async (id) => {
    const query = `
        SELECT id, userType, firstName, lastName, email, password
        FROM users
        WHERE id = ?
    `;
    try {
        const [results] = await connection.query(query, [id]);
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

exports.update = async (id, { userType, firstName, lastName, email, password }) => {
    let query = `
        UPDATE users
        SET userType = ?,
            firstName = ?,
            lastName = ?,
            email = ?
    `;
    const values = [userType, firstName, lastName, email];
    if (password) {
        query += ', password = ?';
        values.push(password);
    }
    
    query += ' WHERE id = ?';
    values.push(id);

    try {
        const [results] = await connection.query(query, values);
        return results;
    } catch (error) {
        throw error;
    }
};
