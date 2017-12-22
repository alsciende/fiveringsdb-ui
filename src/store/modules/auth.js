import Vue from 'vue';
import VueResource from 'vue-resource';
import rest from '@/rest';
import config from '@/config';
import * as types from '../mutation-types';

Vue.use(VueResource);
Vue.http.options.root = config.getApiURL();

function buildStrWindowFeatures(obj) {
  return Object.keys(obj).map(key => `${key}=${obj[key]}`).join(',');
}

function postToken(commit, token) {
  token.expires_at = new Date((new Date()).getTime() + 1000 * token.expires_in);
  return rest
    .public()
    .post('tokens', { id: token.access_token })
    .then((response) => {
      commit({
        type: types.SAVE_AUTH_TOKEN,
        token: token,
        user: response.record.user,
      });
      return token;
    });
}

const childFeatures = buildStrWindowFeatures({
  dialog: 1,
  height: 400,
  width: 400,
  top: window.screenY,
  left: window.screenX,
});

// actions
const actions = {
  login({ commit }) {
    let childWindow = null;

    return new Promise((resolve, reject) => {
      // called when the child window sends the access token
      const callback = (event) => {
        if (event.source === childWindow && event.origin === config.getApiOrigin()) {
          window.removeEventListener('message', callback, false);
          resolve(postToken(commit, event.data));
        }
      };

      window.addEventListener('message', callback, false);

      childWindow = window.open(config.getApiURL('auth/init'), 'auth', childFeatures);

      return true;
    });
  },
  logout({ commit }) {
    commit({
      type: types.SAVE_AUTH_TOKEN,
      token: null,
      user: null,
    });
  },
  refresh({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      Vue
        .http
        .post('auth/refresh', { refresh_token: state.token.refresh_token })
        .then((response) => {
          resolve(postToken(commit, response.body));
        })
        .catch((reason) => {
          return dispatch('logout');
        });
    });
  },
  token({ state, dispatch }) {
    if (state.token === null || state.token.expires_at === null) {
      return dispatch('login');
    }

    if (new Date(state.token.expires_at) < new Date()) {
      return dispatch('refresh');
    }

    return state.token;
  },
};

// getters
const getters = {
  hasToken: state => state.token !== null && state.token.expires_at !== null,
  hasUser: state => state.user !== null,
  userId: state => (state.user ? state.user.id : null),
  username: state => (state.user ? state.user.username : null),
  roles: state => (state.user && state.user.roles instanceof Array ? state.user.roles : []),
};

// mutations
const mutations = {
  [types.SAVE_AUTH_TOKEN](_state, { token, user }) {
    _state.token = token;
    _state.user = user;
  },
};

export default {
  state: {
    token: null,
    user: null,
  },
  getters,
  actions,
  mutations,
};
