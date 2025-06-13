// 📁 SERVER: src/app/dashboard/layout.tsx
import { redirect } from 'next/navigation';
import { validateUserFromCookies } from '@/lib/validateUser';

import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;    // ← tell TS what “children” is
}

export default function DashboardLayout({ children }:LayoutProps) {
  const user = validateUserFromCookies();
  if (!user) redirect('/login');

  return <>{children}</>;
}