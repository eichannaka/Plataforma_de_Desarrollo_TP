const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    const { userType, firstName, lastName, email, password } = req.body;
    try {
        await userModel.create({ userType, firstName, lastName, email, password });
        res.json({ success: true, message: 'Usuario registrado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar registrar al usuario' });
    }
}

exports.login = async (req, res) => {
    const { email, password} = req.body;
    try {
        const usuario = await userModel.login({ email, password });
        if (usuario == null) {
            res.json({ success: false, message: 'Credenciales incorrectas' });
        } else {

            const playload = {
                ID: usuario.id,
                firstName: usuario.firstName,
                lastName: usuario.lastName,
                userType: usuario.userType
            };

            const accessToken = jwt.sign(
                playload,
                process.env.JWT_ACCESS_TOKEN_SECRET,
                { expiresIn: '60m' }
            );

            // const refreshToken = jwt.sign(
            //     playload, 
            //     process.env.JWT_REFRESH_TOKEN_SECRET, 
            //     { expiresIn: '7d' }
            // );

            res.json({
                success: true,
                message: 'Inicio de sesión exitoso',
                accessToken,
                userData: {
                    id: usuario.id,
                    userType: usuario.userType.trim(),
                    firstName: usuario.firstName,
                    lastName: usuario.lastName,
                }
                // refreshToken
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar iniciar sesión' });
    }
}

// Usuario por ID
exports.findByID = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await userModel.find(id);
        if (!usuario) {
            return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
        }
        res.json({ success: true, data: usuario });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al encontrar un usuario' });
    }
};

//Todos los usuarios
exports.allUsers = async (req, res) => {
    try {
        const usuarios = await userModel.all();
        console.log(usuarios);
        return res.json({ success: true, data: usuarios });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al encontrar usuarios' });
    }
};

// Modificar Usuario
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params; 
        const { userType, firstName, lastName, email, password } = req.body; 

        if (!userType || !firstName || !lastName || !email) {
            return res.status(400).json({ success: false, message: 'Todos los campos obligatorios deben ser proporcionados' });
        }

        const userUpdate = { userType, firstName, lastName, email };


        if (password) {
            userUpdate.password = await bcrypt.hash(password, 10);
        }

        const resultado = await userModel.update(id, userUpdate);

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
        }

        return res.json({ success: true, message: 'Usuario actualizado correctamente', data: resultado });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error al actualizar el usuario' });
    }
};



//Borrar usuario
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await userModel.delete(id);
        res.json({ success: true, message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar eliminar al usuario' });
    }
};

// //Ruta protegida
// exports.welcome = (req, res) => {
//     res.json({ success: true, message: 'Bienvenida/o ' + req.user.firstName });
// }