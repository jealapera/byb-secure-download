import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../services/token/tokenService';

export const verifyDownloadToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.query.token as string;

  if (!token) {
    res.status(401).json({ message: 'Missing download token' });
    return;
  }

  try {
    const payload = verifyToken(token);
    req.body.user = payload;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid or expired token' });
    return;
  }
};
