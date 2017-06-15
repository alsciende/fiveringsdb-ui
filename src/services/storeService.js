import Vue from 'vue';
import VueResource from 'vue-resource';
import {taffy} from 'taffydb';
import configService from './configService';

Vue.use(VueResource);

const stores = {};
const resources = ['cards', 'clans', 'cycles', 'elements', 'packs', 'types'];
const labels = {};

const getResource = (resource) => Vue.http.get(`${configService.apiBaseUrl}/api/v1/${resource}`)
  .then((response) => {
    stores[resource] = taffy(response.body.records);
  });

const load = () => Promise.all(resources.map(getResource))
  .then(() => {
    resources.forEach((resource) => {
      labels[resource] = {};
      stores[resource]().each((record) => {
        labels[resource][record.code] = record.name;
      });
    });
  }).then(() => {
    stores.cards().each((card) => {
      card.type = stores.types({ code: card.type_code }).first();
      card.clan = stores.clans({ code: card.clan_code }).first();
      card.element = stores.elements({ code: card.element_code }).first();
    });
  });

export default {
  load,
  stores,
  labels,
};
