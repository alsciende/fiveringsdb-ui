import * as types from '../mutation-types';

// getters
const getters = {
  isLogged: state => state.accessToken !== null,
};

// actions
const actions = {
};

// mutations
const mutations = {
  [types.SAVE_TOKEN](state, { token }) {
    state.accessToken = token;
  },
};

export default {
  state: {
    accessToken: null,
  },
  getters,
  actions,
  mutations,
};
