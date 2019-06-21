import AutoSaveForm from "../components/AutoSaveForm";
import { connect } from "react-redux";
import { getTaskWithDraft, closeTaskForm, saveTask } from "../actions/tasks";

const mapStateToProps = state => ({
  entityId: state.tasks.taskForm ? state.tasks.taskForm.taskId : null,
  isLoading: state.tasks.taskForm ? state.tasks.taskForm.isLoading : null,
  entity: state.tasks.taskForm ? state.tasks.taskForm.task : null,
  draft: state.tasks.taskForm ? state.tasks.taskForm.draft : null
});

const mapDispatchToProps = dispatch => ({
  onFormReady: id => dispatch(getTaskWithDraft(id)),
  onSave: data => dispatch(saveTask(data)),
  onCancel: () => dispatch(closeTaskForm())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoSaveForm);
