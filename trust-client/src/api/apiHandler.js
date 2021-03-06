import axios from "axios";

// to prefixe the base URL & not hard code it
class ApiHandler {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
    });
  }

  get(endPoint) {
    return this.service.get(endPoint);
  }

  post(endPoint, data) {
    return this.service.post(endPoint, data);
  }
}

export default ApiHandler;
