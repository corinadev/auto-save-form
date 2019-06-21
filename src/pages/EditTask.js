import React, { Component, Fragment } from "react";
import AddEditTaskForm from "../containers/AddEditTaskForm";

class EditTaskPage extends Component {
  render() {
    const taskId = Number(this.props.match.params.taskId);
    return (
      <Fragment>
        <AddEditTaskForm entityId={taskId} />
      </Fragment>
    );
  }
}
export default EditTaskPage;
