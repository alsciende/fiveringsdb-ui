import Vue from 'vue';
import VueResource from 'vue-resource';
import { taffy } from 'taffydb';
import configService from './configService';

Vue.use(VueResource);

const stores = {};
const resources = ['cards', 'cycles', 'packs'];
const labels = {};

const getResource = resource => Vue.http.get(`${configService.apiBaseUrl}/api/v1/${resource}`)
  .then((response) => {
    stores[resource] = taffy(response.body.records);
  });

const load = () => Promise.all(resources.map(getResource));

export default {
  load,
  stores,
  labels,
};
