import { SET_LOADING } from '../actions/types';

import { initialState } from '../initialState';

export default (state = initialState.system, action) => {
  switch (action.type) {
    case SET_LOADING: {
      const loadingsState = { ...state.loadings };
      loadingsState[action.name] = action.value;
      return {
        ...state,
        loadingsState,
      };
    }
    default: {
      return state;
    }
  }
};
