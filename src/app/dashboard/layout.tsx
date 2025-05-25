export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav style={{ background: '#eee', padding: '0.5rem' }}>Dashboard Nav</nav>
      {children}
    </div>
  );
}
