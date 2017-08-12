import Vue from 'vue';
import VueResource from 'vue-resource';

import config from '@/config';

Vue.use(VueResource);

const observers = [];
function notifyObservers(reason) {
  return new Promise((resolve, reject) => {
    observers.forEach(observer => observer(reason));
    reject(reason);
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
      .then(response => response.body, notifyObservers)
      ;
  },
  get(resourcePath) {
    return Vue
      .http
      .get(config.getApiURL(resourcePath))
      .then(response => response.body, notifyObservers)
      ;
  },
};
