import jwt from 'jsonwebtoken';

const SECRET = 'your_secure_secret'; // Use dotenv for real apps

export function generateDownloadToken(userId: number, productId: number): string {
  return jwt.sign({ userId, productId }, SECRET, { expiresIn: '5m' });
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET);
}
