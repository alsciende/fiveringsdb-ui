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
const getResource = resource => rest.public().get(resource)
  .then((response) => {
    stores[resource] = taffy(response.records);
  }, (reason) => {
  /* eslint-disable no-console */
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
  const mapPacks = {};
  const mapCycles = {};

  stores.packs().each((record) => {
    mapPacks[record.id] = record;
    record.cycle_id = record.cycle.id;
    stores.packs.merge(record, 'id', false);
  });

  stores.cycles().each((record) => {
    mapCycles[record.id] = record;
    record.packs = stores.packs({ cycle_id: record.id }).get();
    stores.cycles.merge(record, 'id', false);
  });

  stores.cards().each((record) => {
    // replace the packs with the full pack records
    record.pack_cards.forEach((packCard) => {
      packCard.pack = mapPacks[packCard.pack.id];
    });
    // add the list of packs the card belongs to as packId => quantity
    record.packs = record.pack_cards.reduce((packs, packCard) => {
      packs[packCard.pack.id] = packCard.quantity;
      return packs;
    }, {});
    // add the list of cycles the card belongs to as cycleId => quantity
    record.cycles = Object.keys(record.packs).reduce(
      (cycles, packId) => {
        cycles[stores.packs({ id: packId }).first().cycle.id] = 1;
        return cycles;
      }, {});
    // recreate some keys when they have been removed by the serializer
    cardNullableFields.forEach((field) => {
      if (record[field] === undefined) {
        record[field] = null;
      }
    });
    // select the default slot for the card
    record.main_slot = record.pack_cards[0];
    // merge
    stores.cards.merge(record, 'id', false);
  });
};

export const load = () => Promise
  .all(resources.map(getResource))
  .then(denormalizeCards)
;

export default stores;
