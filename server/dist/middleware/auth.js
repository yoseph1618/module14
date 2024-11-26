import jwt from "jsonwebtoken"; // Import JWT for token verification
// Middleware function to authenticate the JWT token
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        const secretKey = process.env.JWT_SECRET_KEY || "";
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Forbidden
            }
            req.user = user;
            return next();
        });
    }
    else {
        res.sendStatus(401); // Unauthorized
    }
};
