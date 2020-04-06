import Api from '../api';
import { SET_LOADING, SAVE_QUESTIONNAIRE } from './types';
import { toast } from 'react-toastify';

const getQuestionnaire = (id, history) => async (dispatch) => {
  dispatch({ type: SET_LOADING, name: 'page', value: true });
  await Api.getQuestionnaire(id)
    .then((res) => {
      console.log('history', history);
      if (res.error) {
        throw res.error;
      }
      dispatch({
        type: SAVE_QUESTIONNAIRE,
        questionnaire: res,
        id,
      });
      if (res.detail === 'No encontrado.') {
        toast.error('Cuestionario no disponible');
      } else {
        if (history.location.pathname === '/cuestionarios') {
          history.push('/cuestionarios/' + id);
        }
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
