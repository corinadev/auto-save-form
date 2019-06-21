import React from "react";
import { Link } from "react-router-dom";

const TasksList = ({ tasks }) => (
  <div>
    <h1>Tasks</h1>
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Link to={`/tasks/edit/${task.id}`}>{task.description}</Link>
        </li>
      ))}
    </ul>
    <Link to="/tasks/create">Add new</Link>
  </div>
);

export default TasksList;
