// 📁 SERVER: src/app/api/login/route.ts
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';

export async function POST() {
  const token = signToken('user123', 'admin');
  cookies().set('auth_token', token, {
    httpOnly: true,
    secure: true,
    path: '/',
  });
  return NextResponse.json({ success: true });
}