// TaskDashboard.js

import React, { useState } from 'react';
import TaskListComp from './TaskList';
import TaskForm from './TaskForm';

const TaskDashboard = ({ tasks, setTasks }) => {
    console.log('Tasks:', tasks);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const upcomingTasks = tasks.filter(task => task.status === 'upcoming');
  const overdueTasks = tasks.filter(task => task.status === 'overdue');
  const completedTasks = tasks.filter(task => task.status === 'completed');

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowForm(false);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const editTask = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    setTasks(updatedTasks);
    setEditingTask(null);
    setShowForm(false);
  };

  const cancelForm = () => {
    setEditingTask(null);
    setShowForm(false);
  };

  return (
    <div>
      <h2>Upcoming Tasks</h2>
      <TaskListComp tasks={upcomingTasks} onDelete={deleteTask} onEdit={editTask} />

      <h2>Overdue Tasks</h2>
      <TaskListComp tasks={overdueTasks} onDelete={deleteTask} onEdit={editTask} />

      <h2>Completed Tasks</h2>
      <TaskListComp tasks={completedTasks} onDelete={deleteTask} onEdit={editTask} />

      {showForm && (
        <TaskForm onSave={editingTask ? updateTask : addTask} onCancel={cancelForm} task={editingTask} />
      )}
    </div>
  );
};

export default TaskDashboard;
