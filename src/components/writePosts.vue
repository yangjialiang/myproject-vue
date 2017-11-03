<template>
  <div class="writePosts">
    <div>
      <input id="postsTitle" placeholder="请输入标题" type="text" v-model="poststitle">
      <textarea id="postsText" placeholder="请输入正文" rows="10" v-model="poststext"></textarea>
      <div id="sendBtn" @click="sendMessage">发表</div>
    </div>
  </div>
</template>

<script>
  // import MyMenu from './MyMenu';
  import { Indicator, Toast } from 'mint-ui';
  import { postInfo } from '../utils/getInfo';

  export default {
    name: 'writePosts',
    data() {
      return {
        poststitle: '',
        poststext: '',
      };
    },
    methods: {
      toDetail(item) {
        this.$router.push({ path: `/detail/${item.id}` });
      },
      sendMessage() {
        console.log(this.$router);
        Toast({
          message: '操作成功',
          iconClass: 'icon icon-success'
        });
        if (this.poststext.trim().length > 0 && this.poststitle.trim().length > 0) {
          Indicator.open({
            text: '发表中...',
            spinnerType: 'fading-circle'
          });
          postInfo(
            'https://cnodejs.org/api/v1/topics?', {
              accesstoken: 'c3337ce2-49b6-4e25-a081-e03f0510cd9c',
              title: this.poststitle,
              tab: 'dev',
              content: this.poststext,
            }, (data) => {
              if (data.success) {
                Indicator.close();
              }
            }
          );
        } else if (!this.poststitle.trim().length > 0) {
          Toast('标题不能为空哦^_^');
        } else if (!this.poststext.tthis.poststitlerim().length > 0) {
          Toast('内容不难为空哦^_^');
        }
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.writePosts{width: 100%;
height: 100%;
position: relative;}
  #postsTitle{
    width: 100%;
    height: auto;
    border: 0;
    font-size: 0.4rem;
    border-bottom: 1px dashed black;
    outline:none;
  }
  #postsText{
    width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    outline:none;
  }
  #sendBtn{
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    width: 50px;
    height: 44px;
    background-color: #eee;
    line-height: 44px;
    text-align: left;
    padding-left: 20px;
  }
</style>
