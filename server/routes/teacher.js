const router = require('express').Router();
const { addTeacherController } = require('../controllers/teacher.controller');

router.post('/add', addTeacherController);


module.exports = router;