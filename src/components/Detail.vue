<template>
  <div>
    <div class="content">
      <div class="contentInner" v-html="content"></div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import FetchUtil from '../utils/FetchUtil';

  export default {
    name: 'detail', // can not
    data() {
      return {
        msg: 'Welcome to detail',
        isShow: false,
        content: '',
      };
    },
    methods: {
      async getContent() {
        console.log(`this.$route.params:${JSON.stringify(this.$route.params)}`);

        const url = `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`;
        const res = await FetchUtil.get(url);
        const data = res.data.data;
        // console.log(`res:${res.data}`);
        this.content = data.content;
      }
    },
    created() {
      this.getContent();
    },
    mounted() {

    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    padding: 0 20px;
  }

  .contentInner {
    width: 100%;
  }
</style>
<style>
  .content img {
    width: 100%;
  }
</style>
