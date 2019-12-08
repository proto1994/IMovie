import axios from 'axios';
import { querystring } from '../utils';
const baseUrl = 'http://127.0.0.1:3000';
export default function request(url, options: any = {}) {
  let params: any = {},
    method = (options.method || 'get').toLowerCase(),
    data = options.data || {};
  params.url = url;
  params.method = method;
  params.baseURL = baseUrl;
  switch (method) {
    case 'get':
      params.params = data;
      break;
    case 'post':
      params.data = querystring(data);
      break;
    case 'delete':
      params.params = data;
      break;
    case 'put':
      params.data = querystring(data);
      break;
  }
  let token = window.localStorage.getItem('token');
  if (token) {
    params.headers = { Authorization: token };
  }
  // catch写在前面能阻断model effect里面的执行
  return axios(params)
    .then(parse)
    .catch(errHandle);
}
function errHandle(res) {
  // console.log(res);
  return;
}
function parse(response) {
  if (response.status == 200) {
    return response.data;
  }
  throw response;
}
