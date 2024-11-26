# Kanban Board
  
  ![License](https://img.shields.io/badge/License-MIT-blue.svg)
  
  ## Description
  This project has the proper code added to enable a completed Login page with authentication and JWT to the server API.
  
  ## Installation
  ```
  Download from git hub and open it up in vs code.
  ```
  
  ## Usage
  ```
  In a terminal, run the commands in order:  npm i, npm run build, npm run start.
  ```
  
  ## License
  
  This project is licensed under the MIT license. For more information, see [this link](https://opensource.org/licenses/MIT).
  
  
  ## Contributing
  Any contributions are appreciated!
  
  ## Features
  ```
  From auth.ts
  
  // Middleware function to authenticate the JWT token
export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    const secretKey = process.env.JWT_SECRET_KEY || "";

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }

      req.user = user as JwtPayload;
      return next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};
  ```
  
  ## Questions
  If you have any questions, feel free to contact me at yoseph16181@gmail.com.
  