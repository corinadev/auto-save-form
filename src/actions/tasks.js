import {
  GET_TASKS_LOADING,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  OPEN_TASK_FORM,
  CLOSE_TASK_FORM,
  GET_TASK_WITH_DRAFT_LOADING,
  GET_TASK_WITH_DRAFT_SUCCESS,
  GET_TASK_WITH_DRAFT_ERROR,
  SAVE_TASK_LOADING,
  SAVE_TASK_SUCCESS,
  SAVE_TASK_ERROR
} from "../constants/tasks";

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

export const openTaskForm = id => ({ type: OPEN_TASK_FORM, id });
export const closeTaskForm = () => ({ type: CLOSE_TASK_FORM });

export const getTaskWithDraft = id => {
  return dispatch => {
    if (!id) {
      dispatch({ type: GET_TASK_WITH_DRAFT_SUCCESS, task: null, draft: null });
    }

    dispatch({ type: GET_TASK_WITH_DRAFT_LOADING });
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
      dispatch(getTasks());
      dispatch(closeTaskForm());
    });
  };
};
