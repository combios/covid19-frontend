import Api from '../api';
import { SAVE_PATIENTS, LOAD_USERS_ERROR } from './types';

const getPatients = () => (dispatch) => {
  Api.getPatients()
    .then((res) => res.json())
    .then((res) => {
      console.log('res', res);
      if (res.error) {
        throw res.error;
      }
      dispatch({ type: SAVE_PATIENTS, patients: res.data });
      return;
    })
    .catch((error) => {
      dispatch({
        type: LOAD_USERS_ERROR,
        error: error.message || 'Unexpected Error!!!',
      });
    });
};

export default {
  getPatients,
};
