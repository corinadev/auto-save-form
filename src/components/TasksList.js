import React from "react";

const TasksList = ({ tasks, onTaskSelected, onAddNewTaskClicked }) => (
  <div>
    <h1>Tasks</h1>
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              onTaskSelected(task.id);
            }}
          >
            {task.description}
          </a>
        </li>
      ))}
    </ul>
    <button onClick={() => onAddNewTaskClicked()}>Add new</button>
  </div>
);

export default TasksList;
