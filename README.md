# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


**Task Management Application**
This is a simple Task Management Application built using React. It allows users to add, edit, mark as done, and delete tasks with priorities and deadlines. The application also includes features to filter tasks based on priority, completion status, and search query. Additionally, tasks that have passed their deadlines are categorized as overdue tasks.

**Features**
Add Task: Users can add a new task by entering the task name, description, selecting a priority, and setting a deadline.

**Edit Task:** Tasks can be edited by clicking the edit icon. Users can modify the task name, description, priority, and deadline.

**Mark as Done:** Users can mark a task as done by clicking the checkmark icon. The completed task is then moved to the "Completed Tasks" section.

**Delete Task:** Tasks can be deleted by clicking the delete icon. Completed tasks can also be deleted from the "Completed Tasks" section.

**Filtering Options**: Users can filter tasks based on priority, completion status, and search query.

**Overdue Tasks**: Tasks with deadlines that have passed are moved to the "Overdue Tasks" section.

**Usage
Adding a Task :**

Enter the task name in the "Enter task..." input field.
Enter the task description in the "Enter task description..." input field.
Select the priority from the dropdown menu.
Set the deadline by choosing a date using the date input field.
Click the "Add Task" button to add the task.

**Editing a icon:**

Click the edit icon next to the task you want to edit.
Update the task details.
Click the "Update Task" button to save the changes.

**Marking a Task as Done icon:**

Click the checkmark icon next to the task you want to mark as done.
The task will be moved to the "Completed Tasks" section.
**Deleting a icon:**

Click the delete icon next to the task you want to delete.
For completed tasks, you can delete them from the "Completed Tasks" section.
**Filtering Tasks:**

Use the search input field to filter tasks based on a search query.
Use the priority and completion status dropdowns to filter tasks accordingly.
**Overdue Tasks:**

Tasks with deadlines that have passed will be automatically moved to the "Overdue Tasks" section.
**Local Storage**
The application uses local storage to persist tasks, completed tasks, and overdue tasks. Tasks are loaded from local storage on component mount, and changes to tasks trigger updates to local storage.

**Icons**
The application uses Material-UI icons for different actions:

CheckCircleIcon: Marking a task as done.
BorderColorIcon: Editing a task.
RemoveCircleIcon: Deleting a task.

**Technologies Used**
React JS
Material-UI
Local Storage

**Links**
GitHub Repository:https://github.com/DEEPTHIGANGIREDDY/Task-Management-Application

Live Demo (Netlify):
https://task-management-application-deepthi.netlify.app/

