import {
  GET_TASKS_LOADING,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  GET_TASK_WITH_DRAFT_LOADING,
  GET_TASK_WITH_DRAFT_SUCCESS,
  GET_TASK_WITH_DRAFT_ERROR,
  SAVE_TASK_LOADING,
  SAVE_TASK_SUCCESS,
  SAVE_TASK_ERROR,
  ADD_EDIT_TASK_CANCELLED
} from "../constants/tasks";
import { push } from "connected-react-router";
import * as mockApi from "../mockBackendApi";
import { DRAFT_ENTITY_TYPE } from "../constants/drafts";

export const getTasks = () => {
  return dispatch => {
    dispatch({ type: GET_TASKS_LOADING });
    return mockApi
      .getTasks()
      .then(tasks => dispatch({ type: GET_TASKS_SUCCESS, tasks }));
  };
};

export const cancelAddEditTask = () => {
  return dispatch => {
    dispatch({ type: ADD_EDIT_TASK_CANCELLED });
    dispatch(push("/tasks"));
  };
};

export const getTaskWithDraft = id => {
  return (dispatch, getState) => {
    dispatch({ type: GET_TASK_WITH_DRAFT_LOADING, id });

    const state = getState();
    const userId = state.user.userId;
    return Promise.all([
      id ? mockApi.getTask(id) : Promise.resolve(null),
      mockApi.getDraft(id, DRAFT_ENTITY_TYPE.TASK, userId)
    ]).then(result =>
      dispatch({
        type: GET_TASK_WITH_DRAFT_SUCCESS,
        task: result[0],
        draft: result[1]
      })
    );
  };
};

export const saveTask = data => {
  return dispatch => {
    dispatch({ type: SAVE_TASK_LOADING });
    return mockApi.saveTask(data).then(() => {
      dispatch({ type: SAVE_TASK_SUCCESS });
      dispatch(push("/tasks"));
    });
  };
};
