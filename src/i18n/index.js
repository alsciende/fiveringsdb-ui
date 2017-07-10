import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from './translation.en.yml';
import fr from './translation.fr.yml';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'en',
  messages: {
    en,
    fr
  },
});

