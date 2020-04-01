import { SAVE_QUESTIONNAIRE } from '../actions/types';
import { initialState } from '../initialState';

export default (state = initialState.questionnaires, action) => {
  switch (action.type) {
    case SAVE_QUESTIONNAIRE: {
      let questionnaire = action.questionnaire;
      if (action.id == '3') {
        questionnaire = {
          title: 'Triage 1',
          showProgressBar: 'bottom',
          showTimerPanel: false,
          firstPageIsStarted: false,
          startSurveyText: 'Evaluar condicion',
          pages: [
            {
              questions: [
                {
                  type: 'radiogroup',
                  name: 'question-1',
                  title: '¿Cuál es su temperatura actual?',
                  choices: ['Si', 'No'],
                },
              ],
            },
            {
              questions: [
                {
                  type: 'radiogroup',
                  name: 'question-2',
                  title:
                    '¿Ha tenido contacto con personas contagiadas con COVID-19?',
                  choices: ['Si', 'No'],
                },
              ],
            },
            {
              questions: [
                {
                  type: 'radiogroup',
                  name: 'question-3',
                  title: '¿Tienes tos seca?',
                  choices: ['Si', 'No'],
                },
              ],
            },
            {
              questions: [
                {
                  type: 'radiogroup',
                  name: 'question-4',
                  title: '¿Tienes dificultades olfatorias?',
                  choices: ['Si', 'No'],
                },
              ],
            },
          ],
          completedHtml: '<h4>Gracias por sus respuestas..</h4>',
        };
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
