const serviceModel = require("../models/serviceModel");

// Obtener todos los servicios
exports.indexServices = async (req, res) => {
    try {
        const results = await serviceModel.allServices();
        res.json({ success: true, results });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar recuperar los servicios' });
    }
}



// Obtener todos los turnos
exports.indexSchedule = async (req, res) => {
    try {
        const results = await serviceModel.allSchedule();
        res.json({ success: true, results });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar recuperar los turnos' });
    }
}

// Crear un nuevo turno
exports.store = async (req, res) => {
    const { usuario_id, terapeuta_id, service_id, fecha, hora, estado } = req.body;
    try {
        await serviceModel.create({ usuario_id, terapeuta_id, service_id, fecha, hora, estado });
        res.json({ success: true, message: 'El turno se ha creado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar agregar el turno' });
    }
}

// Mostrar un turno por ID
exports.show = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await serviceModel.find(id);
        if (result == null) {
            res.status(404).json({ success: false, message: 'El turno no existe o ha dejado de existir' });
        } else {
            res.json({ success: true, result });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar recuperar el turno' });
    }
}

// Actualizar un turno
exports.update = async (req, res) => {
    const { id } = req.params;
    const { usuario_id, terapeuta_id, service_id, fecha, hora, estado } = req.body;
    try {
        await serviceModel.update({ id, usuario_id, terapeuta_id, service_id, fecha, hora, estado });
        res.json({ success: true, message: 'El turno se ha modificado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar modificar el turno' });
    }
}

// Confirmar turno del Paciente
exports.confirmSchedule = async (req, res) => {
    const { id } = req.params;
    const {  estado } = req.body;
    try {
        await serviceModel.confirmSchedule({ id, estado });
        res.json({ success: true, message: 'El turno se ha confirmado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar modificar el turno' });
    }
}


//Borrar turno
exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        await serviceModel.deleteSchedule(id);
        res.json({ success: true, message: 'Turno eliminado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar eliminar el turno' });
    }
};

////////

//Obtener todos los datos de los turnos
exports.indexSchedule = async (req, res) => {
    try {
        const results = await serviceModel.allTurnosWithDetails();
        res.json({ success: true, results });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar recuperar los turnos' });
    }
};


/////////////////////////////////////////////////////////////////////////////////////
///Solicitud de turnos

// Obtener todos los terapeutas
exports.allTherapistsForPatient = async (req, res) => {
    try {
        const results = await serviceModel.allTherapistsForPatient();
        res.json({ success: true, results });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar recuperar los terapeutas' });
    }
}

// Obtener todos los servicios
exports.servicesForPatient = async (req, res) => {
    try {
        const results = await serviceModel.allServicesForPatient();
        res.json({ success: true, results });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar recuperar los servicios' });
    }
}

// Crear un nuevo turno
exports.storeForPatient = async (req, res) => {
    const { usuario_id, terapeuta_id, service_id, fecha, hora } = req.body;
    try {
        await serviceModel.createForPatient({ usuario_id, terapeuta_id, service_id, fecha, hora });
        res.json({ success: true, message: 'El turno se ha creado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar agregar el turno' });
    }
}

