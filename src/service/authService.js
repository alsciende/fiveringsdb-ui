import tokens from '@/api/tokens';
import store from '@/store/index';
import * as types from '@/store/mutation-types';

let childWindow = null;

function buildStrWindowFeatures(obj) {
  return Object.keys(obj).map(key => `${key}=${obj[key]}`).join(',');
}

function receiveMessage(event) {
  if (event.origin !== 'http://fiveringsdb.dev:8080') {
    console.log('wrong origin', event.origin);
    return;
  }

  if (event.source !== childWindow) {
    console.log('wrong window');
    return;
  }

  window.removeEventListener('message', receiveMessage, false);

  console.log('data', event.data);
  tokens.post(event.data.access_token).then(token => {
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
    'http://fiveringsdb.dev:8080/app_dev.php/auth/init',
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
