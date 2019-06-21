import React, { Component } from "react";
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
      <div className="App">
        <TasksList />
        {this.props.isFormVisible && <TaskForm />}
      </div>
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
