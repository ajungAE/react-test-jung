import TodoList from "../features/todos/TodoList";
import TodoWidget from "../components/TodoWidget";
import ProfileCard from "../components/ProfileCard";

function Home({ todos, setTodos, profiles, showTodoList, setShowTodoList }) {
  return (
    <div className="header">
      <h1>Unsere Teammitglieder</h1>
      <p>
        Hier findest du eine kurze Übersicht über unsere tollen Entwicklerinnen
        und Entwickler:
      </p>

      <button onClick={() => setShowTodoList((prev) => !prev)}>
        {showTodoList ? "Todolist ausblenden" : "Todolist anzeigen"}
      </button>

      {showTodoList && <TodoList todos={todos} setTodos={setTodos} />}

      <p>Klicke auf den Like-Button, um deine Unterstützung für unsere Mitarbeiter zu zeigen!</p>

      <div className="profile-list">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            description={profile.description}
            skills={profile.skills}
          />
        ))}
      </div>

      <TodoWidget todos={todos} />
    </div>
  );
}

export default Home;
