import Vue from 'vue';
import storeService from '@/service/storeService';
import * as types from '../mutation-types';

// actions
const actions = {};

// getters
const getters = {
  collection: state => state.collection,
  available: state => cardId => state.collection[cardId],
  coreCount: state => state.coreCount,
};

// mutations
const mutations = {
  [types.UPDATE_COLLECTION](state) {
    const collection = {};
    storeService.cards().each((record) => {
      collection[record.id] = record.deck_limit;
    });
    state.collection = collection;
  },
  [types.SET_CORE_COUNT](state, { coreCount }) {
    state.coreCount = coreCount;
    storeService.cards().each((record) => {
      let max = record.deck_limit;
      const coreSlot = record.pack_cards.find(slot => slot.pack.id === 'core');
      if (coreSlot) {
        max = Math.min(max, state.coreCount * coreSlot.quantity);
      }
      Vue.set(state.collection, record.id, max);
    });
  },
};

export default {
  state: {
    collection: {},
    coreCount: 3,
  },
  getters,
  actions,
  mutations,
};
