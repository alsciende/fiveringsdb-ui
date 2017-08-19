import Vue from 'vue';
import Router from 'vue-router';

import Browser from '@/components/Cards/Browser';
import BuilderList from '@/components/Builder/List';
import BuilderEditor from '@/components/Builder/Editor';

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
      component: BuilderList,
      props: false,
    },
    {
      path: '/deckbuilder/:strainId/deck/:deckId/edit',
      name: 'deck-edit',
      component: BuilderEditor,
      props: true,
    },
  ],
});
