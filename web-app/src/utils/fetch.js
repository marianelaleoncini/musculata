const localStorageKey = '__musculata_token__';

const client = (method, endpoint, { body = undefined, authorization = true, ...customConfig } = {}) => {
  const token = window.localStorage.getItem(localStorageKey);
  const headers = { 'content-type': 'application/json' };
  if (token) {
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
    if (response.status === 401) {
      logout();
      window.location.assign(window.location);
      return;
    }
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

function logout() {
  window.localStorage.removeItem(localStorageKey);
}

const get = (endpoint) => {
  return client('GET', endpoint);
}

const post = (endpoint, body) => {
  return client('POST', endpoint, body);
}

const put = (endpoint, body) => {
  return client('PUT', endpoint, body);
}

const remove = (endpoint) => {
  return client('DELETE', endpoint);
}

export {
  get,
  post,
  put,
  remove,
}
