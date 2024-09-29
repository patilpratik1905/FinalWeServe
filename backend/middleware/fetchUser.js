const jwt = require('jsonwebtoken');

const fetchUser = (req, res, next) => {
    // Get the token from the request header
    const token = req.header('auth-token');
    
    if (!token) {
        return res.status(401).json({ error: "Access Denied: No token provided" });
    }

    try {
        // Verify the token using your secret key
        const data = jwt.verify(token, 'your_jwt_secret');
        req.user = data.user;  // Attach the user data to the request object
        next(); // Move to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ error: "Invalid Token" });
    }
};

module.exports = fetchUser;
