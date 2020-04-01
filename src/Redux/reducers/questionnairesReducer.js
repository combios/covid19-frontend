import { SAVE_QUESTIONNAIRE } from '../actions/types';
import { initialState } from '../initialState';
import { mockQuestionnaire } from '__mocks__/mockQuestionnaire';
export default (state = initialState.questionnaires, action) => {
  switch (action.type) {
    case SAVE_QUESTIONNAIRE: {
      let questionnaire = action.questionnaire;
      if (action.id == '3') {
        questionnaire = mockQuestionnaire;
      }
      return {
        ...state,
        [action.id]: questionnaire,
      };
    }
    default: {
      return state;
    }
  }
};
