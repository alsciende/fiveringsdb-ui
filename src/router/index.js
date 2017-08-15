import Vue from 'vue';
import Router from 'vue-router';

import Browser from '@/components/Cards/Browser';
import Builder from '@/components/Builder/Builder';
import Editor from '@/components/Builder/Editor';

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
      path: '/card/:id',
      name: 'cards-by-card-id',
      component: Browser,
      props: true,
    },
    {
      path: '/pack/:id',
      name: 'cards-by-pack-id',
      component: Browser,
      props: true,
    },
    {
      path: '/clan/:id',
      name: 'cards-by-clan-id',
      component: Browser,
      props: true,
    },
    {
      path: '/deckbuilder',
      name: 'deckbuilder',
      component: Builder,
      props: false,
    },
    {
      path: '/deckbuilder/:strainId/deck/:id/edit',
      name: 'deck-edit',
      component: Editor,
      props: true,
    },
  ],
});
