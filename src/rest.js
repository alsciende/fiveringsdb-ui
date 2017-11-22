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
  if (response.body.success === false) {
    return Promise.reject(parseErrorResponse(response.body));
  }

  return Promise.resolve(response.body);
}

function onFailure(reason) {
  if (reason.status === 403) {
    return store.dispatch('logout');
  }

  return Promise.reject(reason);
}

function getAccessToken(isMandatory) {
  if (store.getters.hasToken || isMandatory) {
    return store.dispatch('token').then(result => result.access_token);
  }

  return Promise.resolve(null);
}

class Rest {
  constructor(isPrivate = false, isMandatory = false) {
    this.options = {};
    this.isPrivate = isPrivate;
    this.isMandatory = isMandatory;
  }

  getHttp() {
    return new Promise((resolve, reject) => {
      if (this.isPrivate) {
        return getAccessToken(this.isMandatory)
          .then((accessToken) => {
            if (accessToken) {
              this.options.headers = { 'Authorization': `Bearer ${accessToken}` };
            }
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

  get(resourcePath, parameters) {
    return this.getResponseBody(http => http.get(resourcePath, Object.assign({ params: parameters }, this.options)));
  }

  delete(resourcePath) {
    return this.getResponseBody(http => http.delete(resourcePath, this.options));
  }
}

export default {
  public() {
    return new Rest();
  },
  private(mandatory = true) {
    return new Rest(true, mandatory);
  },
};
