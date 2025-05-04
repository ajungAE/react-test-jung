// src/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import TodoWidget from "../components/TodoWidget";
import "../styles/App.css";   // statt "./App.css"
import "../styles/Nav.css";   // statt "./Nav.css"


function Layout({ todos }) {
  return (
    <>
      <Navbar />
      <TodoWidget todos={todos} />
      <Outlet /> {/* <- Zeigt den aktuellen Seiteninhalt an (Home oder Kontakt) */}
    </>
  );
}

export default Layout;
