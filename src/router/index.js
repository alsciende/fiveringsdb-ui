import Vue from 'vue';
import Router from 'vue-router';

import MyCardList from '@/components/MyCardList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cards-by-default',
      component: MyCardList,
    },
    {
      path: '/cards/search',
      name: 'cards-by-search-query',
      component: MyCardList,
    },
    {
      path: '/card/:code',
      name: 'cards-by-card-code',
      component: MyCardList,
      props: true,
    },
    {
      path: '/pack/:code',
      name: 'cards-by-pack-code',
      component: MyCardList,
      props: true,
    },
    {
      path: '/clan/:code',
      name: 'cards-by-clan-code',
      component: MyCardList,
      props: true,
    },
  ],
});
