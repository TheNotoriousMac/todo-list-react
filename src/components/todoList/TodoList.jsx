import './TodoList.css';
import Todo from '../todo/Todo';

const TodoList = ({ todos }) => {
  const renderTodos = () => {
    return todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
    });
  };

  return (
    <div className='todoList-container'>
        {renderTodos()}
    </div>
  );
};

export default TodoList;