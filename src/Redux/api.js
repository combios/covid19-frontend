const API_BASE_ADDRESS = "http://dummy.restapiexample.com/api/v1";
export default class Api {
  static getUsers() {
    const uri = API_BASE_ADDRESS + "/employees";
    return fetch(uri, {
      method: "GET"
    });
  }
}
