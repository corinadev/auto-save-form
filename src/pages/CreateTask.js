import React, { Fragment, Component } from "react";
import AddEditTaskForm from "../containers/AddEditTaskForm";

class CreateTaskPage extends Component {
  render() {
    return (
      <Fragment>
        <AddEditTaskForm entityId={null} />
      </Fragment>
    );
  }
}

export default CreateTaskPage;
