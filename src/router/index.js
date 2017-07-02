import Vue from 'vue';
import Router from 'vue-router';

import Browser from '@/components/Cards/Browser';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cards-by-default',
      component: Browser,
    },
    {
      path: '/cards/search',
      name: 'cards-by-search-query',
      component: Browser,
    },
    {
      path: '/card/:code',
      name: 'cards-by-card-code',
      component: Browser,
      props: true,
    },
    {
      path: '/pack/:code',
      name: 'cards-by-pack-code',
      component: Browser,
      props: true,
    },
    {
      path: '/clan/:code',
      name: 'cards-by-clan-code',
      component: Browser,
      props: true,
    },
  ],
});
