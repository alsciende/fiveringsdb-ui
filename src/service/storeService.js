import { taffy } from 'taffydb';

import rest from '@/rest';

const stores = {
  cards: taffy([]),
  cycles: taffy([]),
  packs: taffy([]),
};
const resources = ['cards', 'cycles', 'packs'];

/**
 * load a resource from the server and creates a TAFFY db with the records
 */
const getResource = resource => rest.get(resource)
  .then((response) => {
    stores[resource] = taffy(response.records);
  }, (reason) => {
    console.log(reason);
  })
;

const cardNullableFields = [
  'role_restriction',
];

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
    cardNullableFields.forEach((field) => {
      if (record[field] === undefined) {
        record[field] = null;
      }
    });
    stores.cards.merge(record, 'id', false);
  });
};

export const load = () => Promise
  .all(resources.map(getResource))
  .then(denormalizeCards)
;

export default stores;
