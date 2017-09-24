import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import * as getters from './getters';
import * as mutations from './mutations';

import auth from './modules/auth';
import slots from './modules/slots';
import collection from './modules/collection';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    cardModale: null,
    cardPopover: null,
    documentTitle: null,
  },
  getters,
  mutations,
  modules: {
    auth,
    slots,
    collection,
  },
  strict: debug,
  plugins: [
    createPersistedState({
      paths: [
        'auth',
        'collection',
        'slots',
      ],
    }),
  ],
});
