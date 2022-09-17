import "./TodoList.css";
import Todo from "../todo/Todo";

const TodoList = ({ todos, removeTodo, completeTodo, toggleEditMode, editTodo, editTodoId, onChange, onSubmit }) => {
  const renderTodos = () => {
    if (todos.length > 0) {
      return todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            toggleEditMode={toggleEditMode}
            editTodo={editTodo}
            editTodoId={editTodoId}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        );
      });
    }
    return <p className="errMessage">List is empty!</p>;
  };

  return <div className="todoList-container">{renderTodos()}</div>;
};

export default TodoList;
