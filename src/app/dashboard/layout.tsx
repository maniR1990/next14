import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken } from '../../lib/auth';
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const token = cookies().get('auth_token')?.value;
  console.log('token valeu', token)
  if (!token || !verifyToken(token)) redirect('/login');
  return <div><h3>Dashboard (JWT)</h3>{children}</div>;
}