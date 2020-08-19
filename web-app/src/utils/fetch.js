import { TOKEN_KEY } from '../utils/constants';

const client = (method, endpoint, { body = undefined, authorization = true, ...customConfig } = {}) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  const headers = { 'content-type': 'application/json' };
  if (token && authorization) {
    headers.Authorization = `Bearer ${token}`;
  }
  const config = {
    method,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  
  return window.fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config).then(async (response) => {
/*     if (response.status === 401) {
      logout();
      window.location.assign(window.location);
      return;
    } */
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

const get = (endpoint, authorization = true) => {
  return client('GET', endpoint, {authorization});
}

const post = (endpoint, body, authorization = true) => {
  return client('POST', endpoint, {body, authorization});
}

const put = (endpoint, body, authorization = true) => {
  return client('PUT', endpoint, {body, authorization});
}

const remove = (endpoint, authorization = true) => {
  return client('DELETE', endpoint, {authorization});
}

export {
  get,
  post,
  put,
  remove,
}
