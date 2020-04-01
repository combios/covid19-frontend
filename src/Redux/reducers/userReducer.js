import { LOAD_USERS_ERROR, SAVE_PATIENTS } from '../actions/types';

import { initialState } from '../initialState';

export default (state = initialState.users, action) => {
  switch (action.type) {
    case SAVE_PATIENTS: {
      console.log('action', action);
      return {
        ...state,
        patients: action.patients,
        loading: false,
      };
    }
    case LOAD_USERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
