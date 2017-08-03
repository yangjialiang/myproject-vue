<template>
  <div @click="hideContent" class="sidebar">
    <div class="nav">
      <p @click.stop="showContent" class="">菜单</p>
    </div>
    <div class="contentCon" :class="{show:isShow}">
      <div class="contentBG" :class="{show:isShow}"></div>
      <div class="content" :class="{show:isShow}">
        <MyMenu></MyMenu>
      </div>
    </div>
  </div>
</template>

<script>
  import MyMenu from './MyMenu';

  export default {
    name: 'sidebar', // can not
    data() {
      return {
        msg: 'Welcome to sidebar',
        isShow: false,
      };
    },
    methods: {
      showContent() {
        const self = this;
        self.isShow = true;
      },
      hideContent() {
        const self = this;
        self.isShow = false;
      }
    },
    created() {
    },
    components: {
      MyMenu,
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li p {
    display: block;
    margin: 0 10px;
    padding: 12px 0 12px 20px;
  }

  a {
    color: #42b983;
  }

  li.line {
    border-bottom: 1px solid #eee;
    padding: 0;
  }

  .nav {
    width: 100%;
    height: 30px;
    background-color: #eee;
    line-height: 30px;
    padding-left: 10px;
  }

  .sidebar {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  .contentBG {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity .3s ease;
  }

  .contentBG.show {
    opacity: 1;
  }

  .contentCon {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    pointer-events: none;
  }

  .contentCon.show {
    pointer-events: auto;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 80%;
    background-color: #fff;
    text-align: left;
    border-right: 1px solid #eee;
    transition: all .3s ease;
    opacity: 0;
    pointer-events: none;
    transform: translateX(-100%);
  }

  .content.show {
    transform: translateX(0);
    pointer-events: auto;
    opacity: 1;
  }
</style>
