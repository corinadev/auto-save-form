import React, { Fragment, Component } from "react";
import TaskForm from "../containers/TaskForm";

class CreateTaskPage extends Component {
  render() {
    return (
      <Fragment>
        <TaskForm entityId={null} />
      </Fragment>
    );
  }
}

export default CreateTaskPage;
