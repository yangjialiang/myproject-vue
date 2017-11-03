import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
import List from '@/components/list';
import Detail from '@/components/Detail';
import WritePosts from '@/components/writePosts';
import PageTransition from '@/components/PageTransition';

Vue.use(Router);

Router.prototype.goBack = () => {
  this.isBack = true;
  window.history.go(-1);
};

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: PageTransition, // 引入页面切换组件
      children: [{
        path: '',
        component: List  // 父路由访问页面，例如，访问www.aaa.com/ 显示的是Index组件
      }, {
        path: '/detail/:id',
        component: Detail  // 子路由组件  例如，访问www.aaa.com/pageA 显示为PageA
      }, {
        path: '/writePosts',
        component: WritePosts  // 子路由组件  例如，访问www.aaa.com/pageA 显示为PageA
      }]
    },
    // {
    //   path: '/',
    //   name: 'list',
    //   component: List
    // },
    // {
    //   path: '/detail',
    //   name: 'detail',
    //   component: Detail
    // }
  ]
});
