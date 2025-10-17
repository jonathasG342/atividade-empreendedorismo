import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav 
        style={{
          display: "flex",
          gap: 12,
          padding: 12,
          borderBottom: "1px solid #ddd",
        }}
      >
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>
      <div style={{ padding: 16 }}>
        <Outlet />
      </div>
    </div>
  );
}
