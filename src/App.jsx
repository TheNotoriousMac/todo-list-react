import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setTodo(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const newTodo = {
      id: uuidv4(),
      todoText: todo,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="app-container">
      <TodoForm
        id="todo-add"
        type="text"
        btnText="Add"
        value={todo}
        onChange={handleInputChange}
        onSubmit={handleInputSubmit}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
