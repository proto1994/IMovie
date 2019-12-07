import axios from 'axios';
import { querystring } from '../utils';
const baseUrl = 'http://192.168.31.220:3000';
export default function request(url, options = {}) {
  let params = {},
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
      params.data = querystring.stringify(data);
      break;
    case 'delete':
      params.params = data;
      break;
    case 'put':
      params.data = querystring.stringify(data);
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
  console.log(res);
  return;
}
function parse(response) {
  return response;
}
