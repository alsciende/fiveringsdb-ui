/* eslint-disable import/no-extraneous-dependencies */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import VueAnalytics from 'vue-analytics';
import BootstrapVue from 'bootstrap-vue';
import Notifications from 'vue-notification';
import moment from 'moment';

import './style.css';
import './colors.css';
import './font.css';

import store from './store';
import router from './router';
import i18n from './i18n';
import rest from './rest';

import { load } from './service/storeService';

import AppNavbar from './components/App/Navbar';
import AppFooter from './components/App/Footer';
import UtilsCardModale from './components/Utils/CardModale';
import UtilsCardPopover from './components/Utils/CardPopover';

Vue.config.productionTip = false;

Vue.use(VueRouter);
sync(store, router);
Vue.use(VueAnalytics, {
  id: process.env.GA_TRACKING_ID,
  router,
});
Vue.use(BootstrapVue);
Vue.use(Notifications);
Vue.filter('formatDate', value => value && moment(String(value)).format('DD MMM YYYY'));

load(i18n).then(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    i18n,
    components: {
      AppNavbar,
      AppFooter,
      UtilsCardModale,
      UtilsCardPopover,
    },
    computed: {
      title() {
        const title = this.$store.getters.documentTitle;
        document.title = title ? `${title} • FiveRingsDB` : 'FiveRingsDB';
        return document.title;
      },
    },
  });
});
