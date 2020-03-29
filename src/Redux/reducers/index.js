import { combineReducers } from "redux";
import userReducer from "./userReducer"; //add this line

const rootReducer = combineReducers({
  users: userReducer //add taskreducer and name is task for future use.
});
export default rootReducer;
