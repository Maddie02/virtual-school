const Student = require('../models/Student');
const jwt = require('jsonwebtoken');

exports.registerController = (req, res) => {
    const { firstName, lastName, email, password, studentClass } = req.body;

    Student.findOne({ email })
           .then(user => {

               if (user) {
                   return res.status(400).json({ msg: 'User already exists' });
               }

               const newUser = new Student({
                   firstName,
                   lastName,
                   email,
                   password,
                   studentClass
               });

               newUser.save()
                      .then(user => {
                          jwt.sign({
                                id: user._id
                            }, 
                            process.env.JWT_SECRET,
                            { expiresIn: 3600 },
                            (err, token) => {
                                if (err) {
                                    throw err;
                                }
                                res.json({
                                    token
                                });
                            })
                      })
           })
}