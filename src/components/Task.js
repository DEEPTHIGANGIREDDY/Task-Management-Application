// Task.js

import React from 'react';

const Task = ({ task, onDelete, onEdit }) => {
  const { id, title, description, dueDate, priority, status } = task;
  console.log('Task:', task);

  return (
    <div className="task">
      <h3>{title}</h3> 
      <p>{description}</p>
      <p>Due Date: {dueDate}</p>
      <p>Priority: {priority}</p>
      <p>Status: {status}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Task;
