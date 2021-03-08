<template>
  <view class="notice">
    <view class="title">
      熱門應用
    </view>
    <scroll-view scroll-x="true" class="applist">
      <view class="item" v-for="(item,index) in gomelist" :key="index" @tap="openurl(item)">
        <image :src="item.image_text" mode="aspectFill"></image>
        <text>{{item.name}}</text>
      </view>
    </scroll-view>
    <swiper :autoplay="true" :interval="3000" :duration="500" style="height: 232rpx;">
      <swiper-item v-for="(item,index) in lunbotu" :key="index" @tap="openurl(item)">
        <view class="guanggao">
          <image :src="item.image_text"></image>
          <view class="text">
            廣告
          </view>
        </view>
      </swiper-item>
    </swiper>
    
    <view class="xiaoxi" @tap="toliuyan">
      <image class="image" src="../../static/WechatIMG3.png" mode="aspectFit"></image>
      <view class="right">
        <view class="name">
          留言
        </view>
        <!-- <view class="text">
          這是消息這是消息這是消息這是消息這是消息這是消息這是消息這是消息
        </view> -->
      </view>
    </view>
    <view class="xiaoxi" @tap="tokefu">
      <image class="image" src="../../static/WechatIMG3.png" mode="aspectFit"></image>
      <view class="right">
        <view class="name">
          線上客服
        </view>
        <!-- <view class="text">
          這是消息這是消息這是消息這是消息這是消息這是消息這是消息這是消息
        </view> -->
      </view>
    </view>
  </view>
</template>

<script>
  import lazy from "../../components/lazy-load.vue"
  export default {
    data() {
      return {
        gomelist: [],
        lunbotu:[]
      };
    },
    onShow() {
      uni.setTabBarStyle({
        backgroundColor: "#fff",
        selectedColor: "#666"
      })
    },
    components: {
      lazy
    },
    onLoad() {
      this.getdata()
    },
    methods: {
      openurl(item){
        this.$openurl(item.url)
      },
      getdata() {
        this.$loading()
        uni.request({
          url: this.$url + '/api/adv/app',
          method: "GET",
          data: {
            limit: 999
          },
          success: (res) => {
            // uni.hideLoading()
            this.getlbt()
            // console.log(res.data);
            this.gomelist = res.data.data
          }
        })
      },
      getlbt(){
        uni.request({
          url: this.$url + '/api/adv/lb',
          data: {
            class: 3
          },
          success: (res) => {
            uni.hideLoading()
            this.lunbotu = res.data.data
            console.log(res.data);
          }
        })
      },
      tokefu(){
        uni.navigateTo({
          url:"../mine/zaixian"
        })
      },
      toliuyan() {
        if(uni.getStorageSync("usertoken")){
          uni.navigateTo({
            url: "../mine/kefu"
          })
        }else{
          uni.showToast({
            icon:"none",
            title:"請登入"
          })
        }
        
      }
    }
  }
</script>

<style lang="scss">
  .xiaoxi {
    display: flex;
    align-items: center;
    margin: 40rpx 20rpx 0 20rpx;

    .image {
      margin-right: 16rpx;
      width: 100rpx;
      height: 100rpx;
      border-radius: 100rpx;
    }

    .right {
      width: 550rpx;

      .name {
        font-size: 32rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(32, 32, 0, 1);
      }

      .text {
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;

      }
    }
  }

  .guanggao {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 710rpx;
    height: 232rpx;
    margin: 0 auto;

    image {
      width: 710rpx;
      height: 232rpx;
      // border-radius: 20rpx;
    }

    .text {
      position: absolute;
      right: 0;
      width: 108rpx;
      height: 40rpx;
      background: rgba(0, 0, 0, 1);
      border-radius: 4rpx;
      opacity: 0.53;
      text-align: center;
      line-height: 40rpx;
      color: #fff;
      font-size: 24rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      bottom: 16rpx;
    }
  }

  .applist {
    white-space: nowrap;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    // padding: 0 20rpx;
    margin-bottom: 32rpx;

    .item {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      margin:0 12rpx;
      image {
        width: 124rpx;
        height: 124rpx;
        margin-bottom: 8rpx;
        border-radius: 20rpx;
      }

      text {
        width: 124rpx;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }
    }
  }

  .title {
    margin: 20rpx;
    font-size: 32rpx;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(32, 32, 32, 1);
  }
</style>
