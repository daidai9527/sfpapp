<template>
  <view class="shequ-photo" >
    <view class="shequ-header" @tap="duanweninfo">
      <view class="shequ-header-left" @tap.stop="touserinfo">
        <view class="header-user">
          <image mode="aspectFill" :autoBitmapRecycle="false" class="header-user-image" :src="items.avatar_text" placeholder="/static/images/51.png"></image>
          <image src="/static/images/124.png" class="user-image-vip"></image>
        </view>
        <view class="header-userinfo">
          <view class="userinfo">
            <text class="user-name">{{items.name}}</text>
            <image class="user-new" v-if="items.publisher.level  ==  0" mode="aspectFit" src="/static/images/142.png"></image>
            <image class="user-new" v-if="items.publisher.level  ==  1" mode="aspectFit" src="/static/images/143.png"></image>
            <image class="user-new" v-if="items.publisher.level  ==  2" mode="aspectFit" src="/static/images/141.png"></image>
            <image class="user-vip" src="/static/images/52.png"></image>
          </view>
          <!-- <image class="user-old" src="/static/images/67.png"></image> -->
        </view>
      </view>
      <view class="shequ-header-right">
        <text class="shequ-header-right1">羞羞文學</text>
        <text class="shequ-header-right2">@</text>
      </view>
      <!-- <image class="shequ-header-right" src="../../static/images/46.png"></image> -->
    </view>
    <view class="item-text" @tap="duanweninfo">
      <image src="/static/images/72.png" class="item-text-image"></image>
      <text class="item-text-content">{{items.title}}</text>
    </view>
    <text class="duanwen-text" @tap="duanweninfo">{{items.content}}</text>
    <view class="wenzhang-down">
      <!-- <view class="wenzhang-down-left">
        <image class="wenzhang-dianzan" src="/static/images/102.png"></image>
        <text class="wenzhang-dianzan-count">{{ll}}</text>
      </view>
      <view class="wenzhang-down-left">
        <image class="wenzhang-dianzan" src="/static/images/68.png"></image>
        <text class="wenzhang-dianzan-count">{{items.comment}}</text>
      </view>
      <view class="wenzhang-down-left">
        <image class="wenzhang-dianzan" v-if="give == 1" @tap.stop="dianzan" src="/static/images/121.png"></image>
        <image class="wenzhang-dianzan" v-else @tap.stop="dianzan" src="/static/images/125.png"></image>
        <text class="wenzhang-dianzan-count">{{dianzancount}}</text>
      </view> -->
      <text class="wenzhang-down-left">2小時以前·{{ll}}次觀看</text>
      <view class="wenzhang-down-right">
        <image class="wenzhang-dianzan" v-if="give == 1" @tap.stop="dianzan" src="/static/images/121.png"></image>
        <image class="wenzhang-dianzan" v-else @tap.stop="dianzan" src="/static/images/125.png"></image>
        <text class="wenzhang-dianzan-count">{{dianzancount}}</text>
        <image class="wenzhang-dianzan" src="/static/images/68.png"></image>
        <text class="wenzhang-dianzan-count">{{items.comment}}</text>
      </view>
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
        url: getApp().globalData.url,
        header: getApp().globalData.header,
        dianzancount:0,
        give:0,
        ll:0
      }
    },
    created() {
      this.dianzancount = this.items.fabulous
      this.give = this.items.give
      this.ll = this.items.browse
    },
    methods: {
      duanweninfo() {
        this.ll++
        uni.navigateTo({
          url: "/pages/index/duanweninfo?id=" + this.items.id
        })
      },
      touserinfo(e) {
        e.stopPropagation()
        uni.navigateTo({
          url: '/pages/userinfo/userinfo?id=' + this.items.id + "&class=" + this.items.class + '&isguanzhu=0'
        })
      },
      dianzan(e) {
        e.stopPropagation()
        if (uni.getStorageSync("usertoken")) {
          uni.showLoading({
            mask:true,
            title:"請稍後"
          })
          uni.request({
            url: this.url + "/api/community/thumbs",
            method: "GET",
            header: {
              token: uni.getStorageSync("usertoken")
            },
            data: {
              id: this.items.id
            },
            success: (res) => {
              uni.hideLoading()
              if (res.data.code == 200) {
                uni.showToast({
                  icon: "none",
                  title: "點贊成功"
                })
                this.dianzancount++
                this.give = 1
              } else {
                uni.showToast({
                  icon: "none",
                  title: res.data.msg
                })
              }
            }
          })
        } else {
          uni.showToast({
            icon: "none",
            title: "請登入"
          })
        }
      },
    },
    components: {

    }
  }
</script>

<style>
  .duanwen-text {
    margin: 0 32rpx;
    font-size: 30rpx;
    font-weight: 400;
    color: rgba(32, 32, 32, 1);
    margin-bottom: 30rpx;
    text-overflow: ellipsis;
    lines: 3;
    line-height: 52rpx;
    /* #ifdef H5 */
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    /* #endif */
  }

  .fengexian {
    width: 750rpx;
    height: 16rpx;
    background-color: rgba(245, 246, 248, 1);
  }

  .wenzhang-dianzan-count {
    font-size: 28rpx;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .wenzhang-dianzan {
    width: 36rpx;
    height: 36rpx;
    margin-left: 28rpx;
    margin-right: 16rpx;
  }

  .wenzhang-down-right {
    flex-direction: row;
    align-items: center;
  }

  .wenzhang-down-left {
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
    font-size: 28rpx;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .wenzhang-down {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20rpx;
    width: 750rpx;
    margin: 2rpx 0 20rpx 0;
  }

  .item-text-content {
    text-overflow: ellipsis;
    width: 614rpx;
    lines: 1;
    font-size: 32rpx;
    font-weight: 500;
    color: rgba(32, 32, 32, 1);
  }

  .item-text-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 64rpx;
    height: 28rpx;
  }

  .item-text {
    position: relative;
    margin: 0 32rpx 18rpx 32rpx;
    padding: 38rpx 36rpx;
    background-color: #F5F4F9;
    border-radius: 10px;
  }

  .shequ-header-right {
    width: 148rpx;
    height: 42rpx;
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
  }
  .shequ-header-right1{
    width: 106rpx;
    height: 42rpx;
    text-align: center;
    line-height: 42rpx;
    font-size: 24rpx;
    background-color: rgba(254,140,54,0.23);
    color: #EB4B77;
  }
  .shequ-header-right2{
    width: 42rpx;
    height: 42rpx;
    font-size: 28rpx;
    background-color: #EB4B77;
    color: #fff;
    text-align: center;
    line-height: 42rpx;
  }
  .user-name {
    font-size: 28rpx;
    font-weight: 600;
    color: rgba(32, 32, 32, 1);
    margin-bottom: 4rpx;
    margin-right: 8rpx;
  }

  .user-old {
    width: 78rpx;
    height: 30rpx;
  }

  .user-vip {
    width: 28rpx;
    height: 28rpx;

  }

  .user-new {
    width: 170rpx;
    height: 50rpx;
    margin-right: 8rpx;
  }

  .userinfo {
    flex-direction: row;
    align-items: center;
  }

  .header-userinfo {}

  .header-user-image {
    width: 72rpx;
    height: 72rpx;
    border-radius: 100rpx;
    margin-top: 20rpx;
  }

  .header-user {
    width: 72rpx;
    height: 92rpx;
    margin-right: 16rpx;
    position: relative;
    /* border-width: 1rpx;
		border-color: #000;
		border-style: solid; */
    /* justify-content: flex-end; */
    margin-bottom: 5rpx;
  }

  .user-image-vip {
    width: 72rpx;
    height: 30rpx;
    margin-bottom: -10rpx;
    position: absolute;
    top: 0rpx;
    left: 0;
  }

  .shequ-header-left {
    flex-direction: row;
    align-items: center;
  }

  .shequ-header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 16rpx 20rpx;
  }
</style>
