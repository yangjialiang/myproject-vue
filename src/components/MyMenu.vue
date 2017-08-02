<template>
  <div class="root">
    <div>

    <img src="" alt="" width="80" class="avatar">
    <p>点击头像登录</p>
    </div>
  <div>
    <ul>
      <li>全部</li>
      <li>精选</li>
      <li>分享</li>
      <li>招聘</li>
      <li>消息</li>
      <li>设置</li>
      <li>关于</li>
    </ul>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'mymenu',
    data() {
      return {
        msg: 'Welcome to menu'
      };
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

  li {
    display: block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .root {
    position: absolute;
    top:0;
    left: 0;
    bottom:0;
    width: 80%;
    background-color: #fff;
  }

  .avatar {
    border-radius: 50px;
    width: 80px;
    height: 80px;
    background-color: #eee;
  }
</style>
