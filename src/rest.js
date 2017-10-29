import Vue from 'vue';
import VueResource from 'vue-resource';

import config from '@/config';
import store from '@/store';

Vue.use(VueResource);
Vue.http.options.root = config.getApiURL();

function parseErrorResponse(error) {
  if (error.message === 'validation_error') {
    const validationError = error.description[0];
    return `Validation Error for "${validationError.property_path}". ${validationError.error_message}`;
  }

  return error.description;
}

function onSuccess(response) {
  return new Promise((resolve, reject) => {
    if (response.body.success) {
      resolve(response.body);
    } else {
      reject(parseErrorResponse(response.body));
    }
  });
}

function onFailure(reason) {
  return new Promise((resolve, reject) => {
    if (reason.status === 403) {
      store.dispatch('logout');
    }
    reject(reason);
  });
}

function getAccessToken() {
  return new Promise((resolve, reject) => {
    if (store.getters.isLogged) {
      resolve(store.getters.accessToken);
    } else {
      return store
        .dispatch('login')
        .then((token) => {
          resolve(token.id);
        })
        .catch(reject);
    }
  });
}

class Rest {
  constructor(isPrivate) {
    this.options = {};
    this.isPrivate = isPrivate;
  }

  getHttp() {
    return new Promise((resolve, reject) => {
      if (this.isPrivate) {
        return getAccessToken()
          .then((accessToken) => {
            this.options.headers = { 'Authorization': `Bearer ${accessToken}` };
            resolve(Vue.http);
          })
          .catch(reject);
      }

      resolve(Vue.http);
    });
  }

  getResponseBody(request) {
    return this
      .getHttp()
      .then(request)
      .then(onSuccess)
      .catch(onFailure);
  }

  post(resourcePath, resource) {
    return this.getResponseBody(http => http.post(resourcePath, resource, this.options));
  }

  patch(resourcePath, resource) {
    return this.getResponseBody(http => http.patch(resourcePath, resource, this.options));
  }

  get (resourcePath, parameters) {
    return this.getResponseBody(http => http.get(resourcePath, Object.assign({ params: parameters }, this.options)));
  }

  delete(resourcePath) {
    return this.getResponseBody(http => http.delete(resourcePath, this.options));
  }
}

export default {
  public() {
    return new Rest(false);
  },
  private() {
    return new Rest(true);
  },
};
