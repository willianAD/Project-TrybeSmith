import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try { 
    const decoded = jwt.verify(token as string, 'segredo');

    if (!decoded) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  return next();
};
