const router = require('express').Router();
const Student = require('../models/Student');
const auth = require('../middleware/auth');

const {
    registerController,
    validateController,
    verifyLogin
} = require('../controllers/student.controller.js');

router.post('/register', registerController);
router.post('/login', validateController);
router.get('/verify', auth, verifyLogin);

module.exports = router;
