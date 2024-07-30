const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");
const { requireAuth } = require("../middleware/auth");


//Ruta para obtener todos los servicios
router.get("/services", serviceController.indexServices);



// Ruta para obtener todos los turnos
router.get("/schedule", serviceController.indexSchedule);

// Ruta para crear un nuevo turno
router.post("/schedule", serviceController.store);

// Ruta para obtener un turno específico
router.get("/schedule/:id", serviceController.show);

// Ruta para actualizar un turno
router.put("/schedule/:id", serviceController.update);


// Confirmar turno
router.patch("/scheduleConfirm/:id", serviceController.confirmSchedule);


// Eliminar turno
router.delete("/scheduleDelete/:id", serviceController.delete);



//Obtener todos los datos de los turnos
router.get("/scheduleData", serviceController.indexSchedule);




////////////////////////////
// Ruta para obtener todos los terapeutas
router.get("/therapistsForPatient", serviceController.allTherapistsForPatient);
// Ruta para obtener todos los servicios
router.get("/servicesForPatient", serviceController.servicesForPatient);
// Ruta para crear un nuevo turno
router.post("/scheduleForPatient", serviceController.storeForPatient);


module.exports = router;
