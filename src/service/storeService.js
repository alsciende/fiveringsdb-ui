import Vue from 'vue';
import VueResource from 'vue-resource';
import { taffy } from 'taffydb';
import config from '@/config/index';

Vue.use(VueResource);

const stores = {};
const resources = ['cards', 'cycles', 'packs'];

/**
 * load a resource from the server and creates a TAFFY db with the records
 */
const getResource = resource => Vue.http.get(config.getApiURL(resource))
  .then((response) => {
    stores[resource] = taffy(response.body.records);
  })
  ;

/**
 * add to each Card record 2 properties, packs and cycles,
 * with the ids of each pack and cycle containing the card
 */
const denormalizeCards = () => {
  stores.cards().each((record) => {
    record.packs = record.pack_cards.reduce((packs, packCard) => {
      packs[packCard.pack.id] = packCard.quantity;
      return packs;
    }, {});
    record.cycles = Object.keys(record.packs).reduce(
      (cycles, packId) => {
        cycles[stores.packs({ id: packId }).first().cycle.id] = 1;
        return cycles;
      }, {});
    stores.cards.merge(record, 'id', false);
  });
};

const load = () => Promise
  .all(resources.map(getResource))
  .then(denormalizeCards)
  ;

export default {
  load,
  stores,
};
