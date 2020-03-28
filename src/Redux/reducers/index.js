import { combineReducers } from "redux";
import user from "./user"; //add this line

const rootReducer = combineReducers({
  user: user //add taskreducer and name is task for future use.
});
export default rootReducer;
