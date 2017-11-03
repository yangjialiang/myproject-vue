// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'mint-ui/lib/style.css';
import App from './App';
import router from './router';
import './assets/css/reset.css';
import store from './vuex/store';

// Vue.config.productionTip = false

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
