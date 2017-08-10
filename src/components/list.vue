<template>
  <mt-loadmore topPullText="" bottomPullText="" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"
    ref="loadmore">
    <ul class="listCon">
      <li class="list" v-for="item in list" @click="toDetail(item)">
        <div class='title'>{{ item.title }}</div>
        <div class='tab'>
          <div class='listTypeName' :style="{ color: (item.top|item.good?'white':'rgb(151,151,151)') ,background:(item.top|item.good?'rgb(127,188,9)':'rgb(225,225,225)') }">{{item.top?"置顶":(item.good?"精华":getListTypeText())}}</div>
          <div class='author'>{{item.author.loginname}}</div>
          <div class='replyTime'>{{getTime(item.last_reply_at)}}</div>
        </div>
      </li>
    </ul>
  </mt-loadmore>
</template>

<script>
  import Vue from 'vue';
  import { Loadmore } from 'mint-ui';
  import getListInfo from '../utils/getInfo';

  Vue.component(Loadmore.name, Loadmore);
  export default {
    name: 'list',
    data() {
      return {
        list: '',
        listTypeText: '',
        allLoaded: false,
        page: 1
      };
    },
    methods: {
      toDetail(item) {
        this.$router.push({ path: `/detail/${item.id}` });
      },
      getTime: (_time) => {
        const nowTime = new Date();
        const createTime = new Date(_time);
        const num = (nowTime - createTime) / (1000 * 3600 * 24);
        let timeStr;
        if (num < 1) {
          if (num * 24 < 1) {
            timeStr = parseInt(num * 24 * 60, 10);
            timeStr += '分钟前';
          } else {
            timeStr = parseInt(num * 24, 10);
            timeStr += '小时前';
          }
        } else {
          timeStr = parseInt(num, 10);
          timeStr += '天前';
        }
        return timeStr;
      },
      loadTop() {
        // 下拉刷新数据
        // this.$store.state.listType获取对应类型的列表数据 ask share job good
        const self = this;
        self.page = 1;
        getListInfo(
          'https://cnodejs.org/api/v1/topics?', {
            page: self.page,
            tab: self.$store.state.listType
          }, (data) => {
            if (data.success) {
              self.list = data.data;
              if (data.data.length === 0) {
                self.allLoaded = true;
              } else {
                self.allLoaded = false;
              }
              this.$refs.loadmore.onTopLoaded();
            }
          }
        );
      },
      loadBottom() {
        // 上拉加载更多
        const self = this;
        self.page += 1;
        getListInfo(
          'https://cnodejs.org/api/v1/topics?', {
            page: self.page,
            tab: self.$store.state.listType
          }, (data) => {
            if (data.success) {
              self.list = self.list.concat(data.data);
              if (data.data.length === 0) {
                self.allLoaded = true;
              } else {
                self.allLoaded = false;
              }
              self.$refs.loadmore.onBottomLoaded();
            }
          }
        );
      },
      getListTypeText() {
        let listTypeText = '';
        switch (this.$store.state.listType) {
          case 'share':
            listTypeText = '分享';
            break;
          case 'ask':
            listTypeText = '问答';
            break;
          case 'job':
            listTypeText = '招聘';
            break;
          case 'good':
            listTypeText = '精选';
            break;
          default:
            listTypeText = '未知';
            break;
        }
        return listTypeText;
      },
      resetList() {
        const self = this;
        self.listType = self.$store.state.listType;
        self.page = 1;
        getListInfo(
          'https://cnodejs.org/api/v1/topics?', {
            page: self.page,
            tab: self.$store.state.listType
          }, (data) => {
            if (data.success) {
              self.list = data.data;
            }
          }
        );
        document.querySelector('body').scrollTop = 0;
      }
    },
    beforeUpdate() {
      if (this.listType !== this.$store.state.listType) {
        this.resetList();
      }
    },
    mounted() {
      this.resetList();
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
  }

  .listCon {
    /* margin-top: 0.8rem; */
  }

  .list {
    width: 100%;
    height: 1.38rem;
    border-bottom: 0.02rem solid rgba(222, 222, 222, 0.8);
  }

  .title {
    margin-top: 0.3rem;
    text-align: left;
    padding: 0 0.3rem;
    font-size: 0.3rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .tab {
    margin-top: 0.07rem;
    padding: 0 0.3rem;
    position: relative;
  }

  .listTypeName {
    width: 0.6rem;
    height: 0.37rem;
    border-radius: 0.02rem;
    line-height: 0.37rem;
    font-size: 0.23rem;
    float: left;
  }

  .author {
    height: 0.37rem;
    line-height: 0.37rem;
    font-size: 0.23rem;
    float: left;
    margin-left: 0.08rem;
    color: rgb(103, 103, 103);
  }

  .replyTime {
    height: 0.37rem;
    line-height: 0.37rem;
    font-size: 0.23rem;
    float: right;
    margin-left: 0.08rem;
    color: rgb(103, 103, 103);
  }
</style>
