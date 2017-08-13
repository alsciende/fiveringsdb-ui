import Vue from 'vue';

function setAuthorizationHeader(accessToken) {
  if (accessToken === null) {
    delete Vue.http.headers.common.Authorization;
  } else {
    Vue.http.headers.common.Authorization = `Bearer ${accessToken}`;
  }
}

export default function (store, rest) {
  rest.observe((reason) => {
    if (reason.status === 403) {
      store.dispatch('logout');
    }
  });

  store.watch(_store => _store.auth.token, () => {
    setAuthorizationHeader(store.getters.accessToken);
  });

  setAuthorizationHeader(store.getters.accessToken);
}
