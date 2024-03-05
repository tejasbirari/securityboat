const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware function to validate the token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // Verify token
    jwt.verify(token.split(' ')[1], process.env.ACCESS_TOKEN_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token' });
        }

        // If token is valid, save decoded token in request object for future use
        req.userId = decoded.userId;
        next();
    });
};

module.exports = { verifyToken }