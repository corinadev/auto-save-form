import {
  GET_TASKS_LOADING,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  OPEN_TASK_FORM,
  CLOSE_TASK_FORM,
  GET_TASK_WITH_DRAFT_LOADING,
  GET_TASK_WITH_DRAFT_SUCCESS
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
  isFormVisible: false,
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
    case OPEN_TASK_FORM:
      return {
        ...state,
        isFormVisible: true,
        taskForm: {
          ...defaultFormState,
          taskId: action.id
        }
      };
    case CLOSE_TASK_FORM:
      return {
        ...state,
        isFormVisible: false,
        taskForm: null
      };
    case GET_TASK_WITH_DRAFT_LOADING:
      return {
        ...state,
        taskForm: {
          ...state.taskForm,
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
    default:
      return state;
  }
};

export default tasksReducer;
