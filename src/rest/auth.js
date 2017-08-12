import Vue from 'vue';

export default function (store, rest) {
  Vue.http.headers.common.Authorization = `Bearer ${store.getters.accessToken}`;

  rest.observe((reason) => {
    if (reason.status === 403) {
      store.dispatch('logout');
    }
  });
}
