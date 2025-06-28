// src/hooks/useAnalytics.ts
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { pageview, GA_MEASUREMENT_ID } from "@/lib/gtag";

export default function useAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    pageview(pathname);
  }, [pathname]);
}
