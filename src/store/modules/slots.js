import Vue from 'vue';
import * as types from '../mutation-types';

// actions
const actions = {};

// getters
const getters = {
  slots: state => state.slots,
  quantity: state => cardId => (state.slots[cardId] || 0),
};

// mutations
const mutations = {
  [types.DROP_SLOTS](state) {
    state.slots = {};
  },
  [types.SET_SLOTS](state, { slots }) {
    state.slots = slots;
  },
  [types.SET_SLOT_QUANTITY](state, { cardId, quantity }) {
    if (quantity === 0) {
      Vue.delete(state.slots, cardId);
      return;
    }

    Vue.set(state.slots, cardId, quantity);
  },
};

export default {
  state: {
    slots: {},
  },
  getters,
  actions,
  mutations,
};
