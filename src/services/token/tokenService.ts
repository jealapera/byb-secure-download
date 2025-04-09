import dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'fallback';

export function generateDownloadToken(userId: number, productId: number): string {
  return jwt.sign({ userId, productId }, SECRET, { expiresIn: '1h' });
}

export function verifyToken(token: string) {
  console.log(token)
  console.log(SECRET)
  return jwt.verify(token, SECRET);
}
