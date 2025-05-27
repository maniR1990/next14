import { NextResponse } from 'next/server';
import { signToken } from '../../../lib/auth';
import { cookies } from 'next/headers';
export async function POST() {
  console.log('route ..... folder')
  const token = signToken('user123');
  cookies().set('auth_token', token, { httpOnly: true, secure: true, path: '/' });
  return NextResponse.json({ success: true });
}