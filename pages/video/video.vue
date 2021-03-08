<template>
  <view class="index-tips">
    <view class="status-bar"></view>
    <view class="new-tab">
      <scroll-view :scroll-x="true" class="tab-tips" :show-scrollbar="false">
        <view class="scroll-index">
          <text :class="num == index ? 'scroll-item gaoliang' : 'scroll-item'" v-for="(item,index) in list" :key="index"
            @tap="qiehuan(index)">{{item.name}}</text>
        </view>
      </scroll-view>
      <view class="yinying"></view>
      <image src="../../static/images/140.png" mode="aspectFit" style="width: 32rpx;height: 32rpx;margin-bottom: 6rpx;"></image>
    </view>
    
    <view class="seatch-tab">
      <view class="seatch-input" @tap="toseach">
        <image src="../../static/images/43.png" class="seatch-img" mode="aspectFit"></image>
        <text class="seatch-text">輸入妳想要的</text>
      </view>
      <image class="seatch-image" src="../../static/images/44.png" mode="aspectFit" @tap="toyule"></image>
      <view class="seatch-xian"></view>
      <!--image class="seatch-image" src="../../static/images/45.png" mode="aspectFit" @tap="tofabu"></image-->
    </view>
    <swiper class="swiper" :current="num" @change="changeswiper" :duration="200">
      <swiper-item v-for="(item,index) in list" :key="index">
        <view class="swiper-item" v-if="index == 0">
          <first-page ref="firstpage" @changenum="qiehuan"></first-page>
        </view>
        <view class="swiper-item" v-else-if="index == 1">
          <!-- <big-image-page ref="bigpage" :index="item.id"></big-image-page> -->
          <four-page :ref="'fourpage' + index" :index="item.id"></four-page>
        </view>
        <view class="swiper-item" v-else-if="index == 2">
          <!-- <row-page ref="rowpage" :index="item.id"></row-page> -->
          <four-page ref="rowpage" :index="item.id"></four-page>
        </view>
        <view class="swiper-item" v-else>
          <four-page :ref="'fourpage' + index" :index="item.id"></four-page>
        </view>
        <!-- <view class="swiper-item" v-else-if="index == 4">
          <four-page ref="fourpage2" :index="item.id"></four-page>
          <author-page></author-page>
				</view> -->
      </swiper-item>
    </swiper>
    <!-- #ifdef H5 -->
    <view class="bottom-bar"></view>
    <!-- #endif -->
  </view>
</template>

<script>
  import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
  import firstPage from "./first-page.vue"
  import authorPage from "./author-page.vue"
  import rowPage from './row-page.vue'
  import bigImagePage from './big-image-page.vue'
  import fourPage from './four-page.vue'
  export default {
    data() {
      return {
        list: [{
          name: '精選'
        }],
        num: 0,
      }
    },
    components: {
      uniNoticeBar,
      firstPage,
      authorPage,
      rowPage,
      bigImagePage,
      fourPage
    },
    onShow() {
      uni.setTabBarStyle({
        backgroundColor: "#fff",
        selectedColor: "#666"
      })
    },
    mounted() {

    },
    onLoad() {
      this.gettitle()
    },
    methods: {
      toseach() {
        uni.navigateTo({
          url: "./seach"
        })
      },
      qiehuan(val) {
        this.num = val
      },
      gettitle() {
        this.$loading()
        uni.request({
          url: this.$url + '/api/Dvideo/fl',
          success: (res) => {
            this.list = this.list.concat(res.data.data)
            this.$refs.firstpage[0].getdate(1)
            // uni.hideLoading()
          }
        })
      },
      changeswiper(e) {
        this.num = e.detail.current
        if (this.num == 0) {
          this.$refs.firstpage[0].getdate(1)
        } else if (this.num == 1) {
          var str = 'fourpage' + this.num
          this.$refs[str][0].getdate(1)
        } else if (this.num == 2) {
          this.$refs.rowpage[0].getdate(1)
        } else {
          var str = 'fourpage' + this.num
          this.$refs[str][0].getdate(1)
        }
      },
      tofabu() {
        uni.showToast({
          icon: "none",
          title: "暫未開放"
        })
      },
      toyule() {
        uni.switchTab({
          url: "../notice/notice"
        })
      }
    },

  }
</script>

<style>
  .bottom-bar {
    width: 750rpx;
    /* height: var(--window-bottom); */
  }

  .status-bar {
    height: var(--status-bar-height);
    width: 750rpx;
    background-color: #FFE46A;
  }

  .swiper-item {
    width: 750rpx;
    flex: 1;
    height: 100%;
    /* background-color: #000000; */
  }

  .swiper {
    display: flex;
    flex: 1;
    width: 750rpx;
    /* background-color: #000000; */
  }

  .seatch-xian {
    width: 2rpx;
    height: 34rpx;
    background-color: #979797;
  }

  .seatch-image {
    width: 36rpx;
    height: 40rpx;
  }

  .seatch-text {
    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(163, 163, 163, 1);
    margin-left: 6rpx;
  }

  .seatch-img {
    width: 28rpx;
    height: 28rpx;
  }

  .seatch-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 518rpx;
    height: 56rpx;
    padding-left: 36rpx;
    background-color: rgba(246, 246, 246, 1);
    border-radius: 32rpx;
  }

  .seatch-tab {

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 32rpx 15rpx 32rpx;
    height: 70rpx;
    background-color: #FFE46A;
  }
  
  .new-tab{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20rpx;
    background-color: #FFE46A;
  }
  .yinying{
    width: 18rpx;
    height: 44rpx;
    background-color: rgba(231,205,88,0.47);
    filter:blur(3px);
    margin-right: 20rpx;
  }
  .tab-tips {
    width: 668rpx;
    height: 84rpx;
    flex-direction: row;
    white-space: nowrap;
    background-color: #FFE46A;
    
  }

  .scroll-index {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }

  .index-tips {
    /* #ifdef H5 */
    height: calc(100vh - 50px);
    /* #endif */
    /* #ifdef APP-VUE */
    height: 100vh;
    /* #endif */
    display: flex;
    flex-direction: column;
    /* background-color: #000000; */
    /* flex: 1; */
  }

  .scroll-item {
    display: inline-block;
    font-size: 32rpx;
    height: 82rpx;
    line-height: 82rpx;
    font-weight: 400;
    color: rgba(32, 32, 32, 1);
    padding: 0 20rpx;
  }

  .gaoliang {
    font-size: 38rpx;
    padding: 0 26rpx;
    margin-top: -4rpx;
    font-weight: 700 !important;
    color: #000;
  }
</style>
