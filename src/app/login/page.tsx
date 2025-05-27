'use client';
export default function LoginPage() {
  async function login() {
    const res = await fetch('/api/login', { method: 'POST' });
    if (res.ok) window.location.href = '/dashboard';
  }
  return <button onClick={login}>Simulated Login</button>;
}