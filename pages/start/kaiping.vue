<template>
  <view class="kaiping">
    <image src="../../static/WechatIMG6.png"></image>
    <view class="butt">
      <view class="left" @tap="toback"></view>
      <view class="right" @tap="toindex"></view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      toback() {
        // #ifdef H5
        history.go(-1)
        // #endif
        // #ifdef APP-PLUS
        plus.runtime.quit()
        // #endif
      },
      toindex() {
        uni.redirectTo({
          url: "./first"
        })
      }
    }
  }
</script>

<style lang="scss">
  .kaiping {
    width: 750rpx;
    height: 100vh;

    image {
      position: fixed;
      width: 750rpx;
      height: 100vh;
    }

    .butt {
      position: fixed;
      width: 750rpx;
      height: 100rpx;
      display: flex;
      align-items: center;
      justify-content: space-around;
      bottom: 64rpx;

      view {
        // background-color: #000;
      }

      .left,
      .right {
        width: 300rpx;
        height: 100rpx;
      }
    }
  }
</style>
