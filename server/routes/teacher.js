const router = require('express').Router();
const {
    addTeacherController, getTeacherByClass 
} = require('../controllers/teacher.controller');

router.post('/add', addTeacherController);
router.get('/:tclass', getTeacherByClass);

module.exports = router;