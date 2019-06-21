import TasksList from "../components/TasksList";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

export default connect(
  mapStateToProps,
  null
)(TasksList);
