const jwt = require('jsonwebtoken');

function auth (req, res, next) {
    const token = req.header('Authorization') || '';
    
    if (!token) {
        res.status(401).json({ msg: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (e) {
        res.status(500).json({ msg: 'Token is not valid' });
    }
}

module.exports = auth;