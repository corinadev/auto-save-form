import AddEditTaskForm from "../components/AddEditTaskForm";
import { connect } from "react-redux";

import {
  getTaskWithDraft,
  cancelAddEditTask,
  saveTask
} from "../actions/tasks";

const mapStateToProps = state => ({
  isLoading: state.tasks.taskForm ? state.tasks.taskForm.isLoading : null,
  entity: state.tasks.taskForm ? state.tasks.taskForm.task : null,
  draft: state.tasks.taskForm ? state.tasks.taskForm.draft : null
});

const mapDispatchToProps = dispatch => ({
  onFormReady: id => dispatch(getTaskWithDraft(id)),
  onSave: data => dispatch(saveTask(data)),
  onCancel: () => dispatch(cancelAddEditTask())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEditTaskForm);
