import React, { useState, useEffect } from 'react';
import TaskList from './ListaTask';
import AddTask from './AggiungiTask.js';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const taskSalvate = JSON.parse(localStorage.getItem('tasks'));
    if (taskSalvate) {
      setTasks(taskSalvate);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const GestisciAggiungiTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (index, updatedTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = updatedTask;
      return updatedTasks;
    }); 
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>TODO-LIST</h1>
      <AddTask onAddTask={GestisciAggiungiTask} />
      <TaskList tasks={tasks} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
