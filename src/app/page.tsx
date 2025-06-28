// 📁 CLIENT: src/app/page.tsx

import { event } from "@/lib/gtag";

export default function HomePage() {
  return (
    <div>
      <h1>AWS pipe line success</h1>
      <span>testing in progress</span>
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
