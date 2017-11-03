<template>
  <div class="root">
    <div class="avatarCon">
      <!-- <div class="avatar" v-bind:style="{backgroundImage:'url('+headimg+')',color:'green'}"></div> -->
      <img src="../assets/images/headImg.jpg" alt="" width="80" class="avatar">
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
  import { myMenu } from '../utils/imageUrl';

  export default {
    name: 'mymenu', // can not
    data() {
      return {
        headimg: myMenu.headImg
      };
    },
    methods: {
      changeType() {
        console.log(this.headimg);
        // this.$store.state.listType = event.target.type;
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
    margin: 0 5%;
    padding: 12px 0 12px 0px;
    pointer-events: none;
    border-bottom: 1px rgb(235,234,231) solid;
  }

  a {
    color: #42b983;
  }

  li.line {
    border-bottom: 0.2rem solid rgb(235, 236, 231);
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
    height: 4rem;
    background-color: rgb(249,242,234);
    padding: 0.7rem 0 0px 0.4rem;
  }

  .avatarTips {
    margin-top: 20px;
    font-size: 0.3rem;
  }

  .avatar {
    border-radius: 1.7rem;
    width: 1.7rem;
    height: 1.7rem;
    border: 0.1rem white solid;
    background-size: contain;
  }
</style>
