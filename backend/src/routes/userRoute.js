const express = require('express');
const router = express.Router();
const { requireAuth } = require("../middleware/auth");

//Controlador
const userController = require("../controllers/userController");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/welcome", requireAuth, userController.welcome);

//Masajista
router.get("/dashboardTherapist/user/:id", requireAuth, userController.findByID);

//Paciente
router.get("/dashboardPatient/user/:id", requireAuth, userController.findByID);

//Administrador
router.get("/dashboardAdmin/users", requireAuth, userController.allUsers);
router.delete("/dashboardAdmin/users/:id", requireAuth, userController.deleteUser);
// router.get('/refresh-token', userController.refreshToken);

module.exports = router;