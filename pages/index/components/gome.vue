<template>
  <view>
    <view class="gome">
      <view class="gome-left">
        <image :src="items.image_text" class="gome-img"></image>
        <view class="gome-info">
          <text class="gome-name">{{items.name}}</text>
          <text class="gome-jianjie">{{items.content}}</text>
        </view>
      </view>
      <text class="gome-right" @tap="openurl">點擊下載</text>
    </view>
    <view class="fengexian"></view>
  </view>
</template>

<script>
  export default {
    props: {
      items: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    data() {
      return {
        openurls:getApp().globalData.openurl,
      }
    },
    methods:{
      openurl(){
        this.openurls(this.items.url)
      }
    }
  }
</script>

<style>
  .gome-jianjie {
    overflow: hidden;
    /* #ifndef APP-NVUE */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: inline-block;
    /* #endif */
    /* #ifdef APP-NVUE */
    text-overflow: ellipsis;
    lines: 2;
    /* #endif */
    font-size: 24rpx;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    
    width: 400rpx;
  }

  .gome-name {
    /* #ifndef APP-NVUE */
    display: block;
    /* #endif */
    font-size: 28rpx;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
  }

  .fengexian {
    border-bottom-width: 2rpx;
    border-color: #E5E5E5;
    border-style: solid;
    width: 686rpx;
    margin: 0 32rpx;
  }

  .gome-right {
    width: 140rpx;
    height: 50rpx;
    background-color: rgba(255, 209, 0, 1);
    border-radius: 25rpx;
    text-align: center;
    line-height: 50rpx;
    font-size: 24rpx;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }

  .gome-img {
    width: 100rpx;
    height: 100rpx;
    margin-right: 16rpx;
  }

  .gome-left {
    /* #ifdef H5 || APP-VUE */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
  }

  .gome {
    padding: 24rpx 32rpx;
    /* #ifdef H5 || APP-VUE */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
</style>
