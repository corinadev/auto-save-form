import React, { Component, Fragment } from "react";
import TasksList from "../containers/TasksList";
import TaskForm from "../containers/TaskForm";
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
        {this.props.isFormVisible && <TaskForm />}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFormVisible: state.tasks.isFormVisible
});

const mapDispatchToProps = dispatch => ({
  onPageReady: () => dispatch(getTasks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksPage);
