// import { createApp } from "vue";
import App from './App.vue';
import Vue from 'vue';
import Router from 'vue-router';
import Aloha from '../../../components/Aloha.vue';
import Chao from '../../../components/Chao.vue';

Vue.use(Router);

new Vue({
  render: (h) => h(App),
  router: new Router({
    // base: "templates/test/index/index.html/",
    mode: 'hash',
    routes: [
      {
        path: '/',
        component: Aloha,
      },
      {
        path: '/chao',
        component: Chao,
      },
    ],
  }),
}).$mount('#app');

// createApp(App).mount("#app");
