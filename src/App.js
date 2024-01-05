import "./css/main.css";
import DisplayTodo from "./components/DisplayTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <Todo />
      <DisplayTodo />
    </div>
  );
}

export default App;
