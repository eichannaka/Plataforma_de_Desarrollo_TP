const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");
const { requireAuth } = require("../middleware/auth");

//Ruta para obtener todos los servicios
router.get("/services", serviceController.indexServices);




// Ruta para obtener todos los turnos
router.get("/schedule", requireAuth, serviceController.indexSchedule);
// Ruta para crear un nuevo turno
router.post("/schedule", requireAuth, serviceController.store);
// Ruta para obtener un turno específico
router.get("/schedule/:id", requireAuth, serviceController.show);
// Ruta para actualizar un turno
router.put("/schedule/:id", requireAuth, serviceController.update);
// Confirmar turno
router.patch("/scheduleConfirm/:id", requireAuth, serviceController.confirmSchedule);
// Eliminar turno
router.delete("/scheduleDelete/:id", requireAuth, serviceController.delete);
//Obtener todos los datos de los turnos
router.get("/scheduleData", requireAuth, serviceController.indexSchedule);

////////////////////////////
// Ruta para obtener todos los terapeutas
router.get("/therapistsForPatient", requireAuth, serviceController.allTherapistsForPatient);
// Ruta para obtener todos los servicios
router.get("/servicesForPatient", requireAuth, serviceController.servicesForPatient);
// Ruta para crear un nuevo turno
router.post("/scheduleForPatient", requireAuth, serviceController.storeForPatient);

// Ruta para obtener todos los turnos de un terapeuta específico
router.get("/scheduleByTherapist/:id", requireAuth, serviceController.getSchedulesByTherapist);

module.exports = router;
