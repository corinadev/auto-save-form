import App from "../components/App";
import { connect } from "react-redux";
import { getTasks } from "../actions/tasks";

const mapStateToProps = state => ({
  isFormVisible: state.tasks.isFormVisible
});

const mapDispatchToProps = dispatch => ({
  onAppReady: () => dispatch(getTasks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
