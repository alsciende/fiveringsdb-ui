import Vue from 'vue';
import VueResource from 'vue-resource';

import config from '@/config';
import store from '@/store';

Vue.use(VueResource);

const observers = [];

function notifyObservers(reason) {
  if (reason.status === 403) {
    store.dispatch('logout');
  }
  return new Promise((resolve, reject) => {
    observers.forEach(observer => observer(reason));
    reject(reason);
  });
}

function parseErrorResponse(error) {
  if (error.message === 'validation_error') {
    const validationError = error.description[0];
    return `Validation Error for "${validationError.property_path}". ${validationError.error_message}`;
  }

  return error.description;
}

function validateStatus(response) {
  return new Promise((resolve, reject) => {
    if (response.body.success) {
      resolve(response.body);
    } else {
      reject(parseErrorResponse(response.body));
    }
  });
}

export default {
  observe(cb) {
    observers.push(cb);
  },
  post(resourcePath, resource) {
    return Vue
      .http
      .post(config.getApiURL(resourcePath), resource)
      .then(validateStatus)
      .catch(notifyObservers);
  },
  patch(resourcePath, resource) {
    return Vue
      .http
      .patch(config.getApiURL(resourcePath), resource)
      .then(validateStatus)
      .catch(notifyObservers);
  },
  get(resourcePath, parameters) {
    return Vue
      .http
      .get(config.getApiURL(resourcePath), { params: parameters })
      .then(validateStatus)
      .catch(notifyObservers);
  },
  delete(resourcePath) {
    return Vue
      .http
      .delete(config.getApiURL(resourcePath))
      .then(validateStatus)
      .catch(notifyObservers);
  },
};
