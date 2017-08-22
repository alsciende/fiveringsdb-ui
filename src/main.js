import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import VueAnalytics from 'vue-analytics';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Notifications from 'vue-notification';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import moment from 'moment';
import {default as Vuedals, Component as Vuedal, Bus as VuedalsBus} from 'vuedals';

import './style.css';
import './font.css';

import store from './store';
import router from './router';
import i18n from './i18n';
import rest from './rest';
import auth from './rest/auth';

import { load } from './service/storeService';

import AppNavbar from './components/App/Navbar';
import AppFooter from './components/App/Footer';

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
Vue.use(Vuedals);

auth(store, rest);

load().then(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    i18n,
    components: {
      AppNavbar,
      AppFooter,
        Vuedal,
    },
      methods: {
          closeModal() {
            try {
                this.$vuedals.close();
            } catch(e) {

            }
          },
      }
  });
});
