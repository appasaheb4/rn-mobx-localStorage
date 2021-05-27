import Axios, {AxiosInstance} from 'axios';
import * as Config from '@at/config';

const apiHost = {
  node: Config.Api.API_HOST,
};

function createATClient(client: keyof typeof apiHost, token?: string) {
  let instance: AxiosInstance;
  if (!token) {
    instance = Axios.create({
      baseURL: apiHost[client],
    });
  } else {
    instance = Axios.create({
      baseURL: apiHost[client],
      headers: {'at-key': token},
      timeout: 1000 * 30,
    });
  }
  return instance;
}

class BaseService {
  client: AxiosInstance;

  constructor(token: string) {
    this.client = createATClient('node', token);
    this.client.interceptors.request.use(request => {
      console.log(
        `${request.method?.toUpperCase()} ${request.baseURL}${request.url}`,
      );
      console.log(`${JSON.stringify(request.data)}`);
      return request;
    });
    this.client.interceptors.response.use(response => {
      console.log(`REQUEST PARAMS: ${response.status}: ${response.data.data}`);
      return response;
    });
  }
}

export default BaseService;
