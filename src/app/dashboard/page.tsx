// 📁 CLIENT: src/app/dashboard/page.tsx
'use client';

export default function DashboardPage() {
  async function logout() {
    await fetch('/api/logout', { method: 'POST' });
    window.location.href = '/login';
  }

  return (
    <div>
      <h1>Dashboard Page (Protected)</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}