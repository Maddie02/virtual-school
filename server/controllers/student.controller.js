const Student = require('../models/Student');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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
                                res.header("Authorization", token).send(user);
                                // res.json({
                                //     token
                                // });
                            })
                      })
           })
}

exports.validateController = (req, res) => {
    const { email, password } = req.body;

    Student.findOne({ email })
           .then(user => {

               if (!user) {
                   return res.status(400).json({ msg: 'User does not exist' });
               }
            
               bcrypt.compare(password, user.password)
                     .then(isMatch => {
                        if (!isMatch) {
                            return res.status(400).json({ msg: 'Invalid credentials' });
                        }

                        jwt.sign(
                        { id: user._id }, 
                        process.env.JWT_SECRET,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) {
                                throw err;
                            }
                            res.header("Authorization", token).send(user);
                        })
                     })
           })
}

exports.verifyLogin = (req, res) => {
    Student.findById(req.user.id)
           .select('-password')
           .then(user => res.json({
               status: true,
               user
           }));
}

exports.getAll = (req, res) => {
    Student.find({})
           .select('-password')
           .then(users => res.send(users));
}