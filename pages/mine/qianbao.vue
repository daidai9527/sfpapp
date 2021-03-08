<template>
  <view class="qianbao">
    <view class="title">
      <text>賬戶餘額</text>
    </view>
    <view class="price">
      <text>{{yue}}</text>元
    </view>
    <view class="xian"></view>
    <view class="butt">
      <view class="left" @tap="totixian">
        體現
      </view>
      <view class="right">
        收益明顯
      </view>
    </view>
    <!-- <view class="tabbar">
      <view class="gaoliang">在綫支付</view>
      <view @tap="tokefu">代理支付</view>
    </view>
    <view class="pay-list">
      <view v-for="(item,index) in cardlist" :key="index" class="item">
        <view>{{item.name}}</view>
        <view>原价{{item.y_money}}</view>
        <view>¥{{item.money}}</view>
      </view>
    </view> -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
        cardlist: [],
        yue:0
      };
    },
    onLoad() {
      this.getqianbao()

    },
    methods: {
      getqianbao() {
        this.$loading()
        uni.request({
          url: this.$url + '/api/user/money',
          method: "POST",
          header: {
            token: uni.getStorageSync("usertoken")
          },
          success: (res) => {
            uni.hideLoading()
            // this.getdata()
            this.yue = res.data.data
            // console.log(res.data.data);
          }
        })
      },
      getdata() {

        uni.request({
          url: this.$url + '/api/card/index',
          method: "POST",
          success: (res) => {
            uni.hideLoading()
            this.cardlist = res.data.data
            // console.log(res.data);
          }
        })
      },
      tokefu() {
        uni.navigateTo({
          url: "kefu"
        })
      },
      totixian() {
        uni.navigateTo({
          url: "tixian"
        })
      }
    }
  }
</script>

<style lang="scss">
  .pay-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32rpx;

    .item {
      width: 206rpx;
      height: 200rpx;
      border-radius: 12rpx;
      border: 2rpx solid rgba(255, 209, 0, 1);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      view:first-child {
        width: 138rpx;
        height: 44rpx;
        background: rgba(255, 72, 72, 1);
        border-radius: 8rpx;
        font-size: 24rpx;
        text-align: center;
        line-height: 44rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        position: absolute;
        top: -22rpx;
        left: 34rpx;
      }

      view:nth-child(2) {
        font-size: 32rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        margin-bottom: 8rpx;
      }

      view:last-child {
        font-size: 40rpx;
        font-family: Avenir-Medium, Avenir;
        font-weight: 500;
        color: rgba(32, 32, 32, 1);
      }
    }
  }

  .tabbar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 48rpx;

    view {
      width: 34rpx;
      border-bottom: 6rpx solid #f8f8f8;
      white-space: nowrap;
      display: flex;
      font-size: 32rpx;
      justify-content: center;
      padding-bottom: 10rpx;
    }

    .gaoliang {
      border-bottom: 6rpx solid #FFD100;
    }
  }

  .butt {
    display: flex;
    align-items: center;
    justify-content: space-around;

    view {
      width: 256rpx;
      flex-shrink: 76rpx;
      border-radius: 100rpx;
      text-align: center;
      line-height: 76rpx;
      font-size: 32rpx;
      color: #fff;
      margin: 32rpx 0 36rpx 0;
    }

    .left {
      background-color: #FD6D6D;
    }

    .right {
      background-color: #83ACFF;
    }
  }

  .qianbao {
    .xian {
      width: 750rpx;
      height: 16rpx;
      background: rgba(245, 246, 248, 1);
    }

    .price {
      font-size: 32rpx;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(32, 32, 32, 1);
      padding-left: 56rpx;
      margin-bottom: 18rpx;

      text {
        font-size: 98rpx;
        font-family: Avenir-Heavy, Avenir;
        font-weight: 800;
        color: rgba(32, 32, 32, 1);
        margin-right: 12rpx;
      }
    }

    .title {
      padding-left: 32rpx;
      margin: 40rpx 0 20rpx 0;

      text {
        font-size: 32rpx;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: rgba(32, 32, 32, 1);
        padding-left: 16rpx;
        border-left: 8rpx #FFD100 solid;
      }

    }
  }

  page {
    background-color: #F8F8F8;
  }
</style>
