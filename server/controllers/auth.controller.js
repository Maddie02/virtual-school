exports.registerController = (req, res) => {
    const { firstName, lastName, email, password, studentClass } = req.body;
    console.log(firstName, lastName, email, password, studentClass);
}