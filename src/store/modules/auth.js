import tokens from '@/api/tokens';
import config from '@/config/index';
import * as types from '../mutation-types';

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
  login({ commit, state, getters }) {
    let childWindow = null;

    return new Promise((resolve, reject) => {
      if (getters.isLogged) {
        console.log('already logged in');
        return state.token;
      }

      // called when the child window sends the access token
      const callback = (event) => {
        if (event.origin !== config.getApiOrigin()) {
          reject('wrong origin');
        }

        if (event.source !== childWindow) {
          reject('wrong source');
        }

        window.removeEventListener('message', callback, false);

        // ask the server to create a token with this access token
        resolve(tokens.post(event.data.access_token).then((token) => {
          console.log('token', token);
          commit({
            type: types.SAVE_TOKEN,
            token,
          });
          return token;
        }));
      };

      window.addEventListener('message', callback, false);

      childWindow = window.open(config.getApiURL('auth/init'), 'auth', childFeatures);

      return true;
    });
  },
};

// getters
const getters = {
  isLogged: state => state.token !== null,
  username: state => state.token && state.token.username,
};

// mutations
const mutations = {
  [types.SAVE_TOKEN](_state, { token }) {
    _state.token = token;
  },
};

export default {
  state: {
    token: null,
  },
  getters,
  actions,
  mutations,
};
