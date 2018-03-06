import crypto from 'crypto-random-string';
import queryString from 'query-string';
import Vue from 'vue';
import rest from '@/rest';
import config from '@/config';
import * as types from '../mutation-types';

Vue.http.options.root = config.getApiURL();

function buildStrWindowFeatures(obj) {
  return Object.keys(obj).map(key => `${key}=${obj[key]}`).join(',');
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
  login({ commit, rootState }) {
    const parameters = {
      client_id: process.env.CLIENT_ID,
      redirect_uri: 'http://localhost:8081/login',
      response_type: 'token',
      state: crypto(10)
    };
    commit({
      type: types.BEFORE_OAUTH_REDIRECT,
      route : rootState.route,
      state: parameters.state
    });
    location.href = process.env.AUTH_URL + '?' + queryString.stringify(parameters);
    return Promise.reject('Authentication required.');
  },
  logout({ commit }) {
    commit({
      type: types.CLEAR_AUTH
    });
  },
  token({ state, dispatch }) {
    if (state.token === null) {
      return dispatch('login');
    }

    return state.token;
  },
  auth({ commit, state }, token) {
    token.created_at = new Date();
    commit({
      type: types.SAVE_AUTH_TOKEN,
      token
    });
    return rest
      .private()
      .get('users/me')
      .then((response) => {
        commit({
          type: types.SAVE_USER,
          user: response.record,
        });
        return state.redirectAfterLogin;
      })
      .catch((reason) => {
        return dispatch('logout');
      });
  }
};

// getters
const getters = {
  hasToken: state => state.token !== null,
  hasUser: state => state.user !== null,
  userId: state => (state.user ? state.user.id : null),
  username: state => (state.user ? state.user.username : null),
  roles: state => (state.user && state.user.roles instanceof Array ? state.user.roles : []),
  redirectAfterLogin: state => state.redirectAfterLogin,
  oauthState: state => state.oauthState,
};

// mutations
const mutations = {
  [types.SAVE_AUTH_TOKEN](_state, { token }) {
    _state.token = token;
  },
  [types.SAVE_USER](_state, { user }) {
    _state.user = user;
  },
  [types.CLEAR_AUTH](_state) {
    _state.token = null;
    _state.user = null;
  },
  [types.BEFORE_OAUTH_REDIRECT](_state, { route, state }) {
    _state.redirectAfterLogin = route;
    _state.oauthState = state;
  },
};

export default {
  state: {
    token: null,
    user: null,
    redirectAfterLogin: null,
    oauthState: null,
  },
  getters,
  actions,
  mutations,
};
