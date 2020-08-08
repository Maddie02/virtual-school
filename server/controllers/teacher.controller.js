const Teacher = require('../models/Teacher');

exports.addTeacherController = (req, res) => {
    const { firstName, lastName, subject, teachClass } = req.body;

    const newTeacher = new Teacher({
        firstName,
        lastName,
        subject,
        teachClass
    });

    newTeacher.save()
              .then(teacher => {
                  res.send(teacher);
              })
              .catch(e => {
                  console.log(e);
              })
}

exports.getTeacherByClass = (req, res) => {
    const teachClass = parseInt(req.params.tclass, 10);
    
    Teacher.find({
        teachClass: { $elemMatch: { $eq: teachClass } }
    })
    .then(teachers => {
        res.send(teachers);
    })
    .catch(e => {
        console.log(e);
    })
}