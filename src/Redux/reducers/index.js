import { combineReducers } from 'redux';
import userReducer from './userReducer';
import questionnairesReducer from './questionnairesReducer';
import systemReducer from './systemReducer';

const rootReducer = combineReducers({
  users: userReducer,
  system: systemReducer,
  questionnaires: questionnairesReducer,
});

export default rootReducer;
