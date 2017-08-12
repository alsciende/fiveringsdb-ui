import Vue from 'vue';
import config from '@/config/index';

export default {
  post(token) {
    return Vue.http.post(config.getApiURL('tokens'), {
      id: token,
    }).then((response) => {
      console.log('response', response.body.record);
      return response.body.record.id;
    });
  },
};
