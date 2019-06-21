import React, { Component, Fragment } from "react";
import TasksList from "../containers/TasksList";

import { connect } from "react-redux";
import { getTasks } from "../actions/tasks";

class TasksPage extends Component {
  componentDidMount() {
    this.props.onPageReady();
  }
  render() {
    return (
      <Fragment>
        <TasksList />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onPageReady: () => dispatch(getTasks())
});

export default connect(
  null,
  mapDispatchToProps
)(TasksPage);
