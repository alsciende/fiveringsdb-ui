import Vue from 'vue';
import configService from '@/service/configService';

export default {
  post(token) {
    return Vue.http.post(`${configService.apiBaseUrl}/tokens`, {
      id: token,
    }).then((response) => {
      console.log('response', response.body.record);
      return response.body.record.id;
    });
  },
};
