import './TodoWidget.css';

function TodoWidget({ todos }) {
  return (
    <div className="todo-widget">
      <h4 className="todo-widget-title">Meine Todos</h4>
      <ul className="todo-widget-list">
        {todos.length === 0 ? (
          <li className="todo-widget-empty">Keine Todos vorhanden.</li>
        ) : (
          todos.map((todo, index) => (
            <li className="todo-widget-item" key={index}>
              {todo}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoWidget;
