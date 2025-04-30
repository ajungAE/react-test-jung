import React from "react";
 
function TodoList({ todos, setTodos }) {
  const [newTodo, setNewTodo] = React.useState("");
 
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo(""); // Eingabefeld zurücksetzen
    }
  };
 
  return (
    <div className="todo-input-box">
      <h3>To-Do Liste</h3>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Neue Aufgabe hinzufügen"
      />
      <button onClick={addTodo}>Hinzufügen</button>
      {/* <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default TodoList;