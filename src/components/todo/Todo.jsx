import './Todo.css';

const Todo = ({ todo }) => {
  return (
    <div>
        {todo.todoName}
    </div>
  );
};

export default Todo;