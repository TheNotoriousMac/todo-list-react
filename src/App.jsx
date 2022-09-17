import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";
import todoImg from './assets/todoList.png';
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);

  //retrieving todos from localStorage
  useEffect(() => {
    const todoJSON = localStorage.getItem("todos");
    const retrievedTodos = JSON.parse(todoJSON);
    if(retrievedTodos.length > 0) {
      setTodos(retrievedTodos);
    }
  }, []);

  //setting todos to localStorage
  useEffect(() => {
    const todoJSON = JSON.stringify(todos);
    localStorage.setItem("todos", todoJSON);
  }, [todos]);

  const handleInputChange = (e) => {
    console.log(e.target.id);
    if (e.target.id === "todo-add-input") {
      setTodo(e.target.value);
    } else {
      setEditTodo(e.target.value);
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    if (e.target.id === "todo-add-form") {
      const newTodo = {
        id: uuidv4(),
        todoText: todo,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      setTodo("");
    } else {
      const updateTodos = [...todos].map((todo) => {
        if (todo.id === editTodoId) {
          return { ...todo, todoText: editTodo };
        }
        return todo;
      });
      setTodos(updateTodos);
      setEditTodoId(null);
      setEditTodo("");
    }
  };

  const removeTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleEditMode = (id) => {
    const todo = [...todos].find((todo) => {
      return todo.id === id;
    });
    setEditTodoId(id);
    setEditTodo(todo.todoText);
  };

  return (
    <div className="app-container">
    <div className="app-img-box">
       <img className="app-img" src={todoImg} alt="todo-list" />
    </div>
      <TodoForm
        id="todo-add"
        type="text"
        btnText="Add"
        value={todo}
        onChange={handleInputChange}
        onSubmit={handleInputSubmit}
      />
      <TodoList
        todos={todos}
        editTodo={editTodo}
        editTodoId={editTodoId}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        toggleEditMode={toggleEditMode}
        onChange={handleInputChange}
        onSubmit={handleInputSubmit}
      />
    </div>
  );
}

export default App;
