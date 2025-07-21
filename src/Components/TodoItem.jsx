import React from "react";

const TodoItem = ({ task, deleteTask, toggleTask }) => {
  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      <div className="task-main">
        <span onClick={() => toggleTask(task.id)} className="task-text">
          {task.text}
        </span>
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
          ❌
        </button>
      </div>

      <div className="task-meta">
        <span>🗓️ {task.date}</span>
        <span>⏰ {task.time}</span>
      </div>
    </div>
  );
};

export default TodoItem;
