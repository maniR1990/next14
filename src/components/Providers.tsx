// src/components/Providers.tsx
'use client';

import { ReactNode } from 'react';
import useAnalytics from '@/hooks/useAnalytics';

export default function Providers({ children }: { children: ReactNode }) {
  useAnalytics();
  return <>{children}</>;
}
