import tokens from '@/api/tokens';
import store from '@/store/index';
import config from '@/config/index';
import * as types from '@/store/mutation-types';

let childWindow = null;

function buildStrWindowFeatures(obj) {
  return Object.keys(obj).map(key => `${key}=${obj[key]}`).join(',');
}

function receiveMessage(event) {
  const parser = document.createElement('a');
  parser.href = config.getApiURL();

  if (event.origin !== parser.origin) {
    console.log('wrong origin', event.origin);
    return;
  }

  if (event.source !== childWindow) {
    console.log('wrong window');
    return;
  }

  window.removeEventListener('message', receiveMessage, false);

  console.log('data', event.data);
  tokens.post(event.data.access_token).then((token) => {
    console.log('token', token);
    store.commit({
      type: types.SAVE_TOKEN,
      token,
    });
  });
}

function initAuth() {
  window.addEventListener('message', receiveMessage, false);
  childWindow = window.open(
    config.getApiURL('auth/init'),
    'auth',
    buildStrWindowFeatures({
      dialog: 1,
      height: 400,
      width: 400,
      top: window.screenY,
      left: window.screenX,
    }),
  );
}

export default {
  initAuth,
};
