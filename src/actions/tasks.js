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

/**
 * TODO Use actual user ids
 */
const CURRENT_USER_ID = 123;

export const getTasks = () => {
  return dispatch => {
    dispatch({ type: GET_TASKS_LOADING });
    return mockApi
      .getTasks()
      .then(tasks => dispatch({ type: GET_TASKS_SUCCESS, tasks }));
  };
};

export const cancelAddEditTask = () => ({ type: ADD_EDIT_TASK_CANCELLED });

export const getTaskWithDraft = id => {
  return dispatch => {
    if (!id) {
      dispatch({ type: GET_TASK_WITH_DRAFT_SUCCESS, task: null, draft: null });
    }

    dispatch({ type: GET_TASK_WITH_DRAFT_LOADING, id });
    return Promise.all([
      mockApi.getTask(id),
      mockApi.getDraft(id, mockApi.ENTITY_TYPE.TASK, CURRENT_USER_ID)
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
