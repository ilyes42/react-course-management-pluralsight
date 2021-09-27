import { combineReducers } from "redux";
import courses from "./courseReducer"; //since it's a default export we can call this whetever we like
import authors from "./authorReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress
});

export default rootReducer;
