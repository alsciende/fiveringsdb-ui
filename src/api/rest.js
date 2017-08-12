import Vue from 'vue';
import config from '@/config/index';

export default {
  post(resourcePath, resource) {
    return Vue
      .http
      .post(config.getApiURL(resourcePath), resource)
      .then(response => response.body)
    ;
  },
  get(resourcePath) {
    return Vue
      .http
      .get(config.getApiURL(resourcePath))
      .then(response => response.body)
      ;
  },
};
