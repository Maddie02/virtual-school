const router = require('express').Router();
const Student = require('../models/Student');

const {
    registerController,
    validateController
} = require('../controllers/student.controller.js');

router.post('/register', registerController);
router.post('/login', validateController);

module.exports = router;
