// 📁 CLIENT: src/app/login/page.tsx
'use client';

export default function LoginPage() {
  async function login() {
    await fetch('/api/login', { method: 'POST' });
    window.location.href = '/dashboard';
  }

  return <button onClick={login}>Simulated Login</button>;
}