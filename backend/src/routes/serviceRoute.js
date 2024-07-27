const express = require('express');
const router = express.Router();

const serviceController = require("../controllers/serviceController");

router.get("/service", serviceController.index);
router.post("/service", serviceController.store);
router.get("/service/:ID", serviceController.show);
router.put("/service/:ID", serviceController.update);

module.exports = router;