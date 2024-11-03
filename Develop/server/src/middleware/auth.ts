import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // Retrieve the token from the Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res.sendStatus(401); // Unauthorized if no token is provided
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET as string, (err, user: JwtPayload | undefined) => {
    if (err) {
      return res.sendStatus(403); // Forbidden if the token is invalid
    }

    // Attach user data to the request object
    req.user = user; // TypeScript may require you to define 'user' on the Request interface
    next(); // Call the next middleware or route handler
  });
};
