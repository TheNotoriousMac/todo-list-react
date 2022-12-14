import "./Todo.css";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";
import TodoForm from "../todoForm/TodoForm";

const Todo = ({
  todo,
  removeTodo,
  completeTodo,
  toggleEditMode,
  editTodo,
  editTodoId,
  onChange,
  onSubmit,
}) => {
  return (
    <div className="todo-container">
      <input
        className="todo-checkbox"
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => completeTodo(todo.id)}
      />
      {todo.id === editTodoId ? (
        <TodoForm
          id="todo-edit"
          type="text"
          btnText="Update"
          value={editTodo}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      ) : (
        <div className="todo-text-btn">
          <p className={`todo-text ${todo.isCompleted ? "completed" : ""}`}>
            {todo.todoText}
          </p>
          <div className="todo-btn">
            <button className="btn-group">
              <RiDeleteBin6Line
                className="icon"
                onClick={() => removeTodo(todo.id)}
              />
            </button>
            <button
              className="btn-group"
              onClick={() => toggleEditMode(todo.id)}
            >
              <RiEditBoxLine className="icon" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
