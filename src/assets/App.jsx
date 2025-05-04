// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/Home";
import Kontakt from "../pages/Kontakt";
import Layout from "../layout/Layout";

function App() {
  const [todos, setTodos] = useState([]);
  const [showTodoList, setShowTodoList] = useState(true);

  const profiles = [
    { name: "Jane Doe", description: "Web Developer aus Berlin", skills: ["JavaScript", "React", "CSS"] },
    { name: "Max Mustermann", description: "Backend Spezialist aus Hamburg", skills: ["Node.js", "Express", "MongoDB"] },
    { name: "Sara Müller", description: "UI/UX Designerin aus München", skills: ["Figma", "Adobe XD", "HTML/CSS"] },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout todos={todos} />}>
          <Route
            index
            element={
              <Home
                todos={todos}
                setTodos={setTodos}
                profiles={profiles}
                showTodoList={showTodoList}
                setShowTodoList={setShowTodoList}
              />
            }
          />
          <Route path="kontakt" element={<Kontakt />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
