import { combineReducers } from "redux";

import { routerReducer } from "react-router-redux";
import githubReducer from "./slices/users"

const rootReducer = combineReducers({
  github: githubReducer,
  routing: routerReducer,
});

export default rootReducer;
