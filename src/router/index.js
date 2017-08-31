import Vue from 'vue';
import Router from 'vue-router';

import AppNotFound from '@/components/App/NotFound';
import Browser from '@/components/Cards/Browser';
import BuilderList from '@/components/Builder/List';
import BuilderEditor from '@/components/Builder/Editor';
import RulesReference from '@/components/Rules/Reference';

Vue.use(Router);

export default new Router({
  mode: 'history',
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
    {
      path: '/deckbuilder/:strainId/new',
      name: 'deck-new',
      component: BuilderEditor,
      props: true,
    },
    {
      path: '/rules/reference',
      name: 'rules-reference',
      component: RulesReference,
      props: false,
    },
    {
      path: '*',
      component: AppNotFound,
    },
  ],
});
