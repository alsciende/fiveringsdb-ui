import Vue from 'vue';
import Router from 'vue-router';

import AppNotFound from '@/components/App/NotFound';
import Browser from '@/components/Cards/Browser';
import BuilderList from '@/components/Builder/List';
import DecksPublicView from '@/components/Decks/PublicView';
import DecksPrivateView from '@/components/Decks/PrivateView';
import DecksList from '@/components/Decks/List';
import BuilderEditor from '@/components/Builder/Editor';
import RulesReference from '@/components/Rules/Reference';
import BuilderPublisher from '@/components/Builder/Publisher';
import BuilderPatcher from '@/components/Builder/Patcher';
import AppFrontPage from '@/components/App/FrontPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'front-page',
      component: AppFrontPage,
    },
    {
      path: '/cards',
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
      path: '/deckbuilder/:strainId/deck/:deckId/publish',
      name: 'deck-publish',
      component: BuilderPublisher,
      props: true,
      meta: { section: 'deckbuilder' },
    },
    {
      path: '/rules/reference',
      name: 'rules-reference',
      component: RulesReference,
      props: false,
      meta: { section: 'rules' },
    },
    {
      path: '/decks/:sort',
      name: 'decks-list',
      component: DecksList,
      props: false,
      meta: { section: 'decks' },
    },
    {
      path: '/decks',
      name: 'decks-list-fallback',
      component: DecksList,
      props: false,
      meta: { section: 'decks' },
    },
    {
      path: '/decks/:deckId/view',
      name: 'deck-view',
      component: DecksPublicView,
      props: true,
      meta: { section: 'decks' },
    },
    {
      path: '/decks/:deckId/patch',
      name: 'deck-patch',
      component: BuilderPatcher,
      props: true,
      meta: { section: 'deckbuilder' },
    },
    {
      path: '/strains/:strainId/view',
      name: 'strain-view',
      component: DecksPrivateView,
      props: true,
      meta: { section: 'decks' },
    },
    {
      path: '*',
      component: AppNotFound,
    },
  ],
});
