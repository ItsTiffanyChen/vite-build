<script>
import HelloWorld from './components/HelloWorld';
import ByeWorld from './components/ByeWorld';
import uniqueId from 'lodash/uniqueId';

export default {
  components: {
    HelloWorld,
    ByeWorld,
  },
  methods: { uniqueId },
};
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div>{{ uniqueId('abc') }}</div>
  <router-view />
  <!-- <HelloWorld msg="Vite + Vue" />
  <ByeWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
