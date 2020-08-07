const jwt = require('jsonwebtoken');

function auth (req, res, next) {
    const token = req.headers.authorization || '';

    if (!token) {
        res.status(401).json({ msg: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (e) {
        console.log(e);
    }
}

module.exports = auth;