import Api from '../api';
import { SET_LOADING, SAVE_QUESTIONNAIRE } from './types';

const getQuestionnaire = (id, history) => (dispatch) => {
  console.log('get questionarie', id);
  dispatch({ type: SET_LOADING, name: 'page', value: true });
  Api.getQuestionnaire(id)
    .then((res) => res.json())
    .then((res) => {
      console.log('res', res);
      if (res.error) {
        throw res.error;
      }
      dispatch({
        type: SAVE_QUESTIONNAIRE,
        questionnaire: res,
        id,
      });
      if (res.detail !== 'No encontrado') {
        history.push('cuestionarios/' + id);
      }
      return;
    })
    .catch((error) => {
      console.log('error', error);
    });
  dispatch({ type: SET_LOADING, name: 'page', value: false });
};

export default {
  getQuestionnaire,
};
