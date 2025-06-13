// 📁 SERVER: src/lib/auth.ts
import jwt from 'jsonwebtoken';
const SECRET = 'secret_key';

export function signToken(userId: string, role: 'admin' | 'user') {
  return jwt.sign({ id: userId, role }, SECRET, { expiresIn: '1h' });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}