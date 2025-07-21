
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <div className="todo-list">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
