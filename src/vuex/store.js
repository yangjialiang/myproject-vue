import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// 需要维护的状态
const state = {
  count: 0,
  listType: 'share'
};
export default new Vuex.Store({
  state,
  mutations: {
    increment() {
      state.count += 1;
    }
  }
});
