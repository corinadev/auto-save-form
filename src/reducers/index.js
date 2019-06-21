import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import tasks from "./tasks";
import user from "./user";

export default history =>
  combineReducers({
    router: connectRouter(history),
    tasks,
    user
  });
