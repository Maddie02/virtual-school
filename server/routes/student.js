const router = require('express').Router();
const Student = require('../models/Student');

const {
    registerController
} = require('../controllers/auth.controller.js');

router.post('/register', registerController);

module.exports = router;
