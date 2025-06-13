// 📁 SERVER: src/lib/validateUser.ts
import { cookies } from 'next/headers';
import { verifyToken } from './auth';

export function validateUserFromCookies() {
  const token = cookies().get('auth_token')?.value;
  return token ? verifyToken(token) : null;
}