import Axios from 'axios';

const API_BASE_ADDRESS = process.env.REACT_APP_API_URL;
export default class Api {
  static getPatients() {
    const uri = API_BASE_ADDRESS + 'base/patients';
    return Axios.get(uri).then((res) => res.data);
  }
  static getQuestionnaire(id) {
    console.log('getQuestionnaire request', id);
    const uri = API_BASE_ADDRESS + 'definitions/questionnaires/' + id;
    return Axios.get(uri).then((res) => res.data);
  }
  static createQuestionnaireResponse(questionnaireResponse) {
    const uri = API_BASE_ADDRESS + 'events/questionnaire-responses/';
    return Axios.post(uri, questionnaireResponse).then((res) => res.data);
  }
}
