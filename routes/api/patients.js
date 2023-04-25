const express = require('express');
const router = express.Router();
const patientController = require('../../controllers/patient_controller');

router.post('/register', patientController.register);
router.post('/:id/create_report', patientController.createReport);
router.get('/:id/all_report', patientController.allReport);

module.exports = router;
