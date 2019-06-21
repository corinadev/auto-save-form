import React, { Component, Fragment } from "react";
import TaskForm from "../containers/TaskForm";

class EditTaskPage extends Component {
  render() {
    const taskId = Number(this.props.match.params.taskId);
    return (
      <Fragment>
        <TaskForm entityId={taskId} />
      </Fragment>
    );
  }
}
export default EditTaskPage;
