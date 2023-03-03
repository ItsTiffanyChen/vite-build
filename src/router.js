import Router from 'vue-router';
import HelloWorld from 'components/HelloWorld.vue';
import ByeWorld from 'components/ByeWorld.vue';

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: HelloWorld,
    },
    {
      path: '/bye',
      component: ByeWorld,
    },
  ],
});

export default router;
