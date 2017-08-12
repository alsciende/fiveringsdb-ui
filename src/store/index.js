import Vue from 'vue';
import Vuex from 'vuex';
import createPersist from 'vuex-localstorage';

import * as actions from './actions';
import * as getters from './getters';
import auth from './modules/auth';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    auth,
  },
  strict: debug,
  plugins: [
    createPersist({
      namespace: 'fiveringsdb',
      initialState: {},
      // ONE_WEEK
      expires: 7 * 24 * 60 * 60 * 1e3,
    }),
  ],
});
