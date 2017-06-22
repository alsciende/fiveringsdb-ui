import Vue from 'vue';
import vuexI18n from 'vuex-i18n';
import store from '@/store';

Vue.use(vuexI18n.plugin, store);

const translationsEn = {
  conflict: 'Conflict Deck',
  dynasty: 'Dynasty Deck',
};

const translationsFr = {
  conflict: 'Deck de Conflit',
  dynasty: 'Deck de Dynastie',
};

Vue.i18n.add('en', translationsEn);
Vue.i18n.add('fr', translationsFr);

Vue.i18n.set('en');
