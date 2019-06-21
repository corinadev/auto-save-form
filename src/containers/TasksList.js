import TasksList from "../components/TasksList";
import { connect } from "react-redux";
import { openTaskForm } from "../actions/tasks";

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

const mapDispatchToProps = dispatch => ({
  onTaskSelected: id => dispatch(openTaskForm(id)),
  onAddNewTaskClicked: () => dispatch(openTaskForm(null))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksList);
