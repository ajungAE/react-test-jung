// src/Navbar.jsx
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">Startseite</Link>
      <Link className="nav-link" to="/kontakt">Kontakt</Link>
    </nav>
  );
}
