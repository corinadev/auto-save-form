import AutoSaveForm from "../components/AutoSaveForm";
import { connect } from "react-redux";
import { saveDraft } from "../actions/drafts";

const mapDispatchToProps = dispatch => ({
  onDraftChanged: (id, type, data) => dispatch(saveDraft(id, type, data))
});

export default connect(
  null,
  mapDispatchToProps
)(AutoSaveForm);
