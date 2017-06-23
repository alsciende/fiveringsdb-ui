import Vue from 'vue';
import vuexI18n from 'vuex-i18n';
import store from '@/store';

import en from './translation.en.yml';
import fr from './translation.fr.yml';

Vue.use(vuexI18n.plugin, store);

Vue.i18n.add('en', en);
Vue.i18n.add('fr', fr);

Vue.i18n.set('en');
