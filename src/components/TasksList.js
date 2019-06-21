import React from "react";

const TasksList = ({ tasks, onTaskSelected, onAddNewTaskClicked }) => (
  <div>
    <button onClick={() => onAddNewTaskClicked()}>Add new</button>
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
  </div>
);

export default TasksList;
