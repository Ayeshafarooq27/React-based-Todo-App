import React, { useEffect, useState } from 'react';
import FormTodo from './Components/TodoForm';
import TodoList from './Components/TodoList';
import TodoDateTime from './Components/TodoDateTime';
import './Styles.css';
import { getLocalStorageTodoData, setLocalStorageTodoData } from './todoLocalStorage';

function App() {
  const [tasks, setTasks] = useState(getLocalStorageTodoData());

  useEffect(() => {
    setLocalStorageTodoData(tasks);
  }, [tasks]);

  const addTask = (taskText) => {
    const now = new Date();
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false,
      date: now.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      time: now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
    };
    setTasks([task, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="todo-app">
      <h1>🌟 My Todo App</h1>
      <TodoDateTime />
      <FormTodo addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
