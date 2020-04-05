import Api from '../api';
import { useParams } from 'react-router-dom';

import { SET_LOADING, SAVE_QUESTIONNAIRE } from './types';
import { toast } from 'react-toastify';

/**
 *
 * @param {CONTACT: "Si", TOS: "Si", DISNEA: "Si", OLFATO: "Si"} data
 * @param questionnaire
 * @return   {
 *    "questionnaire_id": 0,
 *    "patient_id": "string",
 *    "authored": "2020-04-05T21:27:00.775Z",
 *    "answers": {
 *      "quetsion1": "response 1",
 *      "question2": "response 2"
 *    }
 *  }
 */
function surveyDataToQuestionnaireResponse(data, questionnaire) {
  return {
    questionnaire_id: questionnaire.code,
    patient_id: 'FIXME: NO_AUTH_IMPLEMENTED',
    authored: new Date(),
    answers: Object.keys(data).reduce(
      (diccionary, key, index) => ({
        ...diccionary,
        [`question${index + 1}`]: data[key],
      }),
      {}
    ),
  };
}

export const createQuestionnaireResponse = (
  survey,
  questionnaire,
  options,
  history
) => async (dispatch) => {
  debugger;

  const { data } = survey;
  const questionnaireResponse = surveyDataToQuestionnaireResponse(
    data,
    questionnaire
  );
  options.showDataSaving('Cargando...');
  dispatch({ type: SET_LOADING, name: 'page', value: true });
  await Api.createQuestionnaireResponse(questionnaireResponse)
    // .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw res.error;
      }
      console.debug('createQuestionnaireResponse', { res });
      toast.success(`${questionnaire.title} guardado`);

      history.push('/cuestionarios/');
      return;
    })
    .catch((error) => {
      console.error(error);

      options.showDataSavingError(
        `Algo malo ha sucedido, por favor intente nuevamente`
      );
      toast.error(`Algo malo ha sucedido, por favor intente nuevamente`);
    });
  dispatch({ type: SET_LOADING, name: 'page', value: false });
};
