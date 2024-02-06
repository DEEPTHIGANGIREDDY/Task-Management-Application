// src/models/TaskModel.js
class TaskModel{
  constructor(id, title, description, dueDate, priority, status) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
  }
}

export default TaskModel;
