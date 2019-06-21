import { SAVE_DRAFT_LOADING, SAVE_DRAFT_SUCCESS } from "../constants/drafts";
import * as mockApi from "../mockBackendApi";

export const saveDraft = (entityId, entityType, data) => {
  return (dispatch, getState) => {
    dispatch({ type: SAVE_DRAFT_LOADING });

    const state = getState();
    const userId = state.user.userId;

    const draft = {
      ...data,
      entityId,
      entityType,
      userId
    };
    return mockApi.saveDraft(draft).then(() => {
      dispatch({ type: SAVE_DRAFT_SUCCESS });
    });
  };
};
