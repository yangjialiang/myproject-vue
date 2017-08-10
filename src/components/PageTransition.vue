<template>
  <div>
    <div class="header"></div>
    <div class="content">
      <transition :name="transitionName">
        <router-view class="child-view"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        transitionName: 'slide-left',
      };
    },
    beforeRouteUpdate(to, from, next) {
      const isBack = this.$router.isBack;
      if (isBack) {
        this.transitionName = 'slide-right';
      } else {
        this.transitionName = 'slide-left';
      }
      this.$router.isBack = false;
      next();
    }
  };

</script>

<style scoped>
  .content {
    position: absolute;
    top: 44px;
    width: 100%;
  }

  .child-view {
    /* position: absolute; */
    width: 100%;
    transition: all .8s cubic-bezier(.55, 0, .1, 1);
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }

  .header {
    position: fixed;
    height: 44px;
    background: #eee;
    width: 100%;
    z-index: 1;
    top: 0;
  }
</style>
