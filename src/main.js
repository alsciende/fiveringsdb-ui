import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap-vue/dist/bootstrap-vue.css';
import './style.css';
import './font.css';

import router from './router';

import storeService from './services/storeService';

import MyCardText from './components/MyCardText';
import MyCardTextBlock from './components/MyCardTextBlock';
import MyCardList from './components/MyCardList';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.use(VueRouter);

storeService.load().then(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: {
      MyCardList,
      MyCardTextBlock,
      MyCardText,
    },
  });
});
