import {
  GET_TASKS_LOADING,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  GET_TASK_WITH_DRAFT_LOADING,
  GET_TASK_WITH_DRAFT_SUCCESS,
  SAVE_TASK_SUCCESS
} from "../constants/tasks";

const defaultFormState = {
  taskId: null,
  isLoading: false,
  task: null,
  draft: null
};

const initialState = {
  tasks: [],
  isLoading: false,
  errorMessage: null,
  taskForm: null
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: [...action.tasks]
      };
    case GET_TASKS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error
      };
    case GET_TASK_WITH_DRAFT_LOADING:
      return {
        ...state,
        taskForm: {
          ...defaultFormState,
          taskId: action.id,
          isLoading: true
        }
      };
    case GET_TASK_WITH_DRAFT_SUCCESS:
      return {
        ...state,
        taskForm: {
          ...state.taskForm,
          isLoading: false,
          task: action.task,
          draft: action.draft
        }
      };
    case SAVE_TASK_SUCCESS:
      return {
        ...state,
        taskForm: null
      };
    default:
      return state;
  }
};

export default tasksReducer;
