const API_BASE_ADDRESS = process.env.REACT_APP_API_URL;
export default class Api {
  static getPatients() {
    const uri = API_BASE_ADDRESS + 'base/patients';
    return fetch(uri, {
      method: 'GET',
    });
  }
  static getQuestionnaire(id) {
    const uri = API_BASE_ADDRESS + 'definitions/questionnaires/' + id;
    return fetch(uri, {
      method: 'GET',
    });
  }
}
