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

class Rest {
  constructor(isPrivate) {
    this.options = {};
    if(isPrivate) {
      this.options.headers = { 'Authorization': `Bearer ${store.getters.accessToken}` };
    }
  }

  post(resourcePath, resource) {
    return Vue
      .http
      .post(resourcePath, resource, this.options)
      .then(onSuccess)
      .catch(onFailure);
  }

  patch(resourcePath, resource) {
    return Vue
      .http
      .patch(resourcePath, resource, this.options)
      .then(onSuccess)
      .catch(onFailure);
  }

  get(resourcePath, parameters) {
    return Vue
      .http
      .get(resourcePath, Object.assign({ params: parameters }, this.options))
      .then(onSuccess)
      .catch(onFailure);
  }

  delete(resourcePath) {
    return Vue
      .http
      .delete(resourcePath, this.options)
      .then(onSuccess)
      .catch(onFailure);
  }
}

export default {
  public() {
    return new Rest(false);
  },
  private () {
    return new Rest(true);
  },
};
