// TaskForm.js

import React, { useState } from 'react';

const TaskForm = ({ onSave, onCancel, task }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');
  const [priority, setPriority] = useState(task ? task.priority : 'Low');
  const [status] = useState(task ? task.status : 'upcoming');

  const handleSave = () => {
    onSave({ id: task ? task.id : Date.now(), title, description, dueDate, priority, status });
  };

  return (
    <div>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

      <label>Due Date:</label>
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />

      <label>Priority:</label>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default TaskForm;
