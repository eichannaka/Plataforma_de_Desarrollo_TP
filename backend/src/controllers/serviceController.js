const serviceModel = require("../models/serviceModel");

exports.index = async(req, res) => {
    try{
        const results = await serviceModel.all();
        res.json({ success: true, results });
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar recuperar los servicios' });
    }
}

exports.store = async(req, res) => {
    const {Combo, terapia, tiempo, descripcion, precioLista,precioEfectivo} = req.body;
    try{
        await serviceModel.create( {Combo, terapia, tiempo, descripcion, precioLista,precioEfectivo} );
        res.json({ success: true, message: 'El servicio se ha creado correctamente'});
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar agregar el servicio' });
    }
}

exports.show = async(req, res) => {

    const {ID} = req.params;
    try{
        const result = await serviceModel.find(ID);
        if(result == null){
            //El servicio con ese ID no existe.
            res.status(404).json({ success: false, message: 'El servicio no existe o ha dejado de existir' });
        }else{            
            res.json({ success: true, result });
        }
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar recuperar el evento' });
    }
}

exports.update = async(req, res) => {
    const { ID } = req.params;
    const {Combo, terapia, tiempo, descripcion, precioLista,precioEfectivo} = req.body;
    try{
        serviceModel.update( {Combo, terapia, tiempo, descripcion, precioLista,precioEfectivo, ID} );
        res.json({ success: true, message: 'El servicio se ha modificado correctamente'});
    }catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Error al intentar recuperar los servicio' });
    }
}