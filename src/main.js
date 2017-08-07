import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/css/reset.css';
import store from './vuex/store';

Vue.config.productionTip = false;


// console.log(store);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
