import React from "react";
import { Link } from "react-router-dom";
import format from "date-fns/format";

const TasksList = ({ tasks }) => (
  <div>
    <h1>Tasks</h1>
    <table className="tasksTable">
      <tr>
        <th>Description</th>
        <th>Due</th>
        <th>Assignee</th>
      </tr>
      {tasks.map(task => (
        <tr key={task.id}>
          <td>
            <Link to={`/tasks/edit/${task.id}`}>{task.description}</Link>
          </td>
          <td>{format(task.dueDate, "MM/DD/YYYY")}</td>
          <td>{task.assignee}</td>
        </tr>
      ))}
    </table>
    <Link to="/tasks/create">Add new</Link>
  </div>
);

export default TasksList;
