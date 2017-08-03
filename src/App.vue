<template>
  <div id="app">
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar';

  export default {
    name: 'app',
    components: {
      Sidebar,
    }
  };

</script>

<style>
  #app {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    position: absolute;
  }
</style>
