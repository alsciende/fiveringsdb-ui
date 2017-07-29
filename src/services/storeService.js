import Vue from 'vue';
import VueResource from 'vue-resource';
import { taffy } from 'taffydb';
import configService from './configService';

Vue.use(VueResource);

const stores = {};
const resources = ['cards', 'cycles', 'packs'];

/**
 * load a resource from the server and creates a TAFFY db with the records
 */
const getResource = resource => Vue.http.get(`${configService.apiBaseUrl}/${resource}`)
  .then((response) => {
    stores[resource] = taffy(response.body.records);
  })
  ;

/**
 * add to each Card record 2 properties, packs and cycles, with the ids of each pack and cycle containing the card
 */
const denormalizeCards = () => {
  stores.cards().each(function (record) {
    record.packs = record.pack_cards.reduce(
      (packs, pack_card) => {
        packs[pack_card.pack.id] = pack_card.quantity;
        return packs;
      },
      {}
    );
    record.cycles = Object.keys(record.packs).reduce(
      (cycles, pack_id) => {
        cycles[stores.packs({ id: pack_id }).first().cycle.id] = 1;
        return cycles;
      },
      {}
    );
    stores.cards.merge(record, 'id', false);
  })
};

const load = () => Promise
  .all(resources.map(getResource))
  .then(denormalizeCards)
  ;

export default {
  load,
  stores,
};
