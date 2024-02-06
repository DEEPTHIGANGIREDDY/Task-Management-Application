// TaskList.js

import React from 'react';
import Task from './Task';

const TaskListComp = ({ tasks, onDelete, onEdit }) => {
  console.log('TaskListComp Tasks:', tasks);
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </ul>
    </div>
  );
};

export default TaskListComp;
