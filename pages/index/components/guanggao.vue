<template>
  <view @tap="openurl">
    <view class="gg-header">
      <view class="gg-header-left">
        <image :autoBitmapRecycle="false" class="gg-header-img" :src="items.avatar_image_text"
          placeholder="../../../static/images/51.png"></image>
        <text class="gg-name">{{items.title}}</text>
      </view>
      <image class="gg-header-right" src="../../../static/images/70.png"></image>
    </view>
    <text class="gg-title">{{items.content}}</text>
    <image :src="items.image_text" class="gg-image" placeholder="/static/images/51.png"></image>
    <view class="gg-down">
      <text class="gg-down-text">{{items.ll}}次瀏覽</text>
      <image src="/static/images/71.png" class="lookinfo"></image>
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
    data(){
      return {
        openurls:getApp().globalData.openurl,
      }
    },
    methods:{
      openurl(){
        this.openurls(this.items.url)
        console.log(this.items);
      }
    }
  }
</script>

<style>
  .fengexian {
    width: 750rpx;
    height: 16rpx;
    background-color: rgba(245, 246, 248, 1);
  }

  .lookinfo {
    width: 125rpx;
    height: 46rpx;
  }

  .gg-down-text {
    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .gg-down {
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    flex-direction: row;
    justify-content: space-between;
    margin: 14rpx 32rpx;
  }

  .gg-image {
    width: 750rpx;
    height: 750rpx;
    /* margin: 0 20rpx; */
  }

  .gg-title {
    margin: 16rpx 32rpx 16rpx 32rpx;
    font-size: 28rpx;
    font-weight: 400;
    color: rgba(32, 32, 32, 1);
    overflow: hidden;
    text-overflow: ellipsis;
    /* #ifdef H5 */
    -o-text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    /* #endif */
    lines: 1;
  }

  .gg-name {
    font-size: 28rpx;
    font-weight: 600;
    color: rgba(32, 32, 32, 1);
  }

  .gg-header-img {
    width: 72rpx;
    height: 72rpx;
    border-radius: 100rpx;
    margin-right: 16rpx;
  }

  .gg-header-left {
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
  }

  .gg-header-right {
    width: 130rpx;
    height: 42rpx;
  }

  .gg-header {
    margin: 10rpx 20rpx 0 20rpx;
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
</style>
