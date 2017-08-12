import Vue from 'vue';
import config from '@/config/index';

export default {
  post(token) {
    return Vue.http.post(config.getApiURL('tokens'), {
      id: token,
    }).then(response => response.body.record);
  },
};
