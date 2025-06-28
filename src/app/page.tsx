"use client";

import { event } from "@/lib/gtag";

export default function HomePage() {
  return (
    <div>
      <h1>AWS pipeline success</h1>
      <span>Testing in progress</span>
      <button
        onClick={() =>
          event("signup_click", {
            source: "homepage",
          })
        }
      >
        Sign Up
      </button>
    </div>
  );
}
