<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import List from './components/list';

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to menu'
      };
    },
    components: {
      List
    },
    mounted() {
      setTimeout(() => {
        this.$store.state.listType = 'good';
        setTimeout(() => {
          this.$store.state.listType = 'job';
        }, 3000);
      }, 3000);
    }
  };

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    position: absolute;
  }
</style>
