<template>
  <div class="root">
    <div class="avatarCon">

      <img src="" alt="" width="80" class="avatar">
      <p class="avatarTips">点击头像登录</p>
    </div>
    <div>
      <ul>
        <li @click="changeType" type='good'>
          <p>精选</p>
        </li>
        <li @click="changeType" type='share'>
          <p>分享</p>
        </li>
        <li @click="changeType" type='ask'>
          <p>问答</p>
        </li>
        <li @click="changeType" type='job'>
          <p>招聘</p>
        </li>
        <li class="line"></li>
        <li>
          <p>设置</p>
        </li>
        <li>
          <p>关于</p>
        </li>
        <li class="line"></li>
        <li @click="toDetail('writePosts')">
          <p>写帖</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mymenu', // can not
    data() {
      return {
        msg: 'Welcome to menu'
      };
    },
    methods: {
      changeType(event) {
        this.$store.state.listType = event.target.type;
        // console.log(event.target.type);
      },
      toDetail(item) {
        this.$router.push({ path: `/${item}` });
      },
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
    pointer-events: none;
  }

  a {
    color: #42b983;
  }

  li.line {
    border-bottom: 1px solid #eee;
    padding: 0;
  }

  .root {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    text-align: left;
    border-right: 1px solid #eee;
  }

  .avatarCon {
    height: 100px;
    background-color: #ccc;
    padding: 30px 0 30px 30px;
  }

  .avatarTips {
    margin-top: 20px;
  }

  .avatar {
    border-radius: 50px;
    width: 80px;
    height: 80px;
    background-color: #eee;
  }
</style>
