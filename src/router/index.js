import Vue from 'vue';
import Router from 'vue-router';

import AppNotFound from '@/components/App/NotFound';
import Browser from '@/components/Cards/Browser';
import BuilderList from '@/components/Builder/List';
import DecksView from '@/components/Decks/View';
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
      meta: { section: 'cards' },
    },
    {
      path: '/cards/search',
      name: 'cards-by-search-query',
      component: Browser,
      meta: { section: 'cards' },
    },
    {
      path: '/card/:id',
      name: 'cards-by-card-id',
      component: Browser,
      props: true,
      meta: { section: 'cards' },
    },
    {
      path: '/pack/:id',
      name: 'cards-by-pack-id',
      component: Browser,
      props: true,
      meta: { section: 'cards' },
    },
    {
      path: '/clan/:id',
      name: 'cards-by-clan-id',
      component: Browser,
      props: true,
      meta: { section: 'cards' },
    },
    {
      path: '/deckbuilder',
      name: 'deckbuilder',
      component: BuilderList,
      props: false,
      meta: { section: 'deckbuilder' },
    },
    {
      path: '/deckbuilder/:strainId/deck/:deckId/edit',
      name: 'deck-edit',
      component: BuilderEditor,
      props: true,
      meta: { section: 'deckbuilder', deckEdition: true },
    },
    {
      path: '/deckbuilder/:strainId/new',
      name: 'deck-new',
      component: BuilderEditor,
      props: true,
      meta: { section: 'deckbuilder', deckEdition: true },
    },
    {
      path: '/rules/reference',
      name: 'rules-reference',
      component: RulesReference,
      props: false,
      meta: { section: 'rules' },
    },
    {
      path: '/decks/:strainId/view',
      name: 'strain-view',
      component: DecksView,
      props: true,
      meta: { section: 'decks' },
    },
    {
      path: '*',
      component: AppNotFound,
    },
  ],
});
