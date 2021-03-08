<template>
  <view class="player">
    <view class="nav-bar"></view>
    <view class="tab-list">
      <scroll-view scroll-x="true" style="white-space: nowrap;">
        <view v-for="(item,index) in list" :key="index" class="scroll-item">
          <text :class="num == index ? 'gaoliang' : ''" @tap="qiehuan(index)">{{item.title}}</text>
          <!-- <text :class="num == index ? 'gaoliang1' : ''"></text> -->
        </view>
      </scroll-view>
    </view>
    <swiper :interval="3000" :duration="300" class="swiper" :current="num" @change="changeswiper">
      <swiper-item v-for="(item,index) in list" :key="index">
        <player-list :ids="item.id" :index="index" :ref="'player' + index"></player-list>
      </swiper-item>
    </swiper>
    <image src="../../static/images/150.png" class="addplayer" @tap="addplayer"></image>
  </view>
</template>

<script>
  import playerList from "./player-list.vue"
  export default {
    data() {
      return {
        list: [{
          title: '关注'
        }],
        num: 1,
      }
    },
    onLoad() {
      this.getdata()
    },
    onShow() {
      uni.setTabBarStyle({
        backgroundColor: "#fff",
        selectedColor: "#666"
      })
    },
    components:{
      playerList
    },
    methods: {
      
      qiehuan(index){
        this.num = index
      },
      getdata(){
        this.$loading()
        uni.request({
          url:this.$url + '/api/direct/direct_list',
          success: (res) => {
            this.list = this.list.concat(res.data.data)
            this.getlist()
          }
        })
      },
      getlist(){
        var str = 'player' + this.num
        if(this.num == 0){
          this.$nextTick(() => {
            this.$refs[str][0].getguanzhu(1)
          })
        }else{
          this.$nextTick(() => {
            this.$refs[str][0].getlist(1)
          })
        }
        
      },
      changeswiper(e) {
        this.num = e.detail.current
        this.getlist()
        // console.log(e.detail.current);
      },
      addplayer(){
        uni.navigateTo({
          url:"./addplayer"
        })
      },
      tovideo(){
        uni.navigateTo({
          url:"./video"
        })
      }
    }
  }
</script>

<style lang="scss">
  .addplayer{
    position: fixed;
    bottom: 98rpx;
    width: 136rpx;
    height: 136rpx;
    right: 14rpx;
  }
  .swiper {
    flex: 1;
  }

  .player {
    display: flex;
    flex-direction: column;
    /* #ifdef H5 */
    height:calc(100vh - 50px);
    /* #endif */
    /* #ifdef APP-VUE */
    height: 100vh;
    /* #endif */
  }

  .tab-list {
    width: 750rpx;
    height: 100rpx;
    display: flex;
    align-items: center;
    background-color: #FFE46A;

    .scroll-item {
      font-size: 32rpx;
      color: #202020;
      display: inline-flex;
      margin: 0 24rpx;
      flex-direction: column;
      align-items: center;

      // text:last-child {
      //   display: inline-block;
      //   width: 30rpx;
      //   height: 4rpx;
      //   margin-top: 10rpx;
      //   background-color: #fff;
      // }

      .gaoliang {
        color: #202020;
        font-size: 36rpx;
        font-weight: bold;
      }

      .gaoliang1 {
        background-color: #FF9900 !important;
      }
    }
  }

  .nav-bar {
    height: var(--status-bar-height);
    width: 750rpx;
    background-color: #FFE46A;
  }
</style>
