<template>
  <view class="fenxiang" style="background: url('../../static/images/86.png') no-repeat;background-size: 750rpx 2546rpx;">
    <view class="yaoqingma">
      <view>注冊時填寫</view>
      <view>邀請碼：{{userinfo.number}}</view>
      <image src="../../static/images/87.png" @tap="fuzhi"></image>
    </view>
    <view class="center">
      <view class="title">
        購買代理即贈永久會員
      </view>
      <view class="bottom-xian"></view>
      <view class="title2">
        投資198成為代理 即可開始賺錢
      </view>
      <view class="item">
        <image src="../../static/images/88.png"></image>
        <view class="right">
          <text>終身代理</text>
          <text>一次投資 終身代理再無其他投入</text>
        </view>
      </view>
      <view class="item">
        <image src="../../static/images/89.png"></image>
        <view class="right">
          <text>一鍵操作</text>
          <text>只需一鍵點擊分享轉發即可 操作簡單不占用工作時間</text>
        </view>
      </view>
      <view class="item">
        <image src="../../static/images/90.png"></image>
        <view class="right">
          <text>豐厚回報</text>
          <text>五級代理收益 推廣立馬獲益 輕松助力 代理月入百萬</text>
        </view>
      </view>
      <view class="item">
        <image src="../../static/images/91.png"></image>
        <view class="right">
          <text>永久會員</text>
          <text>購買代理即贈永久會員 盡享無限觀影 無限緩存等會員權益</text>
        </view>
      </view>
    </view>
    <view class="day-index">
      <view class="title">
        每日推廣2人 月入3萬
      </view>
      <view class="bottom-xian"></view>
      <view class="title2">
        總比例高達115元
      </view>
      <view class="item">
        <text>代理員級別</text>
        <text>傭金</text>
      </view>
      <view class="item1">
        <text>一級</text>
        <text>5元/人</text>
      </view>
      <view class="item">
        <text>二級</text>
        <text>8元/人</text>
      </view>
      <view class="item1">
        <text>三級</text>
        <text>15元/人</text>
      </view>
    </view>
    <view class="erweima">
      <view class="left">
        <view class="top">
          <text>1</text>
          <text>打開（分享二維碼）或復制（推廣鏈接）分享給好友</text>
        </view>
        <view class="down">
          <text>2</text>
          <text>新用戶下載app、注冊并購買代理員立即返傭</text>
        </view>
      </view>
      <image :src="userinfo.photo"></image>
    </view>
    <image src="../../static/images/92.png" class="dailiimg" @tap="tofenxiang"></image>
    <view class="fenxiang-down">
      購買代理立即享有專屬代理永久VIP
    </view>
  </view>
</template>

<script>
  import h5Copy from '@/js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js'
  export default {
    data() {
      return {
        tel: '',
        usertoken: '',
        userinfo: ''
      };
    },
    onLoad() {
      this.usertoken = uni.getStorageSync("usertoken")
      // this.userinfo = uni.getStorageSync("userinfo")
      // console.log(this.userinfo);
      this.getdata()
    },
    methods: {
      tofenxiang(){
        uni.navigateTo({
          url: "tofenxiang"
        })
      },
      fuzhi() {
        // #ifdef H5
        const result = h5Copy(this.userinfo.number)
        if (result === false) {
          uni.showToast({
            title: '不支持',
          })
        } else {
          uni.showToast({
            title: '複製成功',
            icon: 'none'
          })
        }
        // #endif
        // #ifdef APP-VUE
        uni.setClipboardData({
          data: this.userinfo.number,
          success: () => {
            uni.showToast({
              icon: "none",
              title: "複製成功"
            })
          }
        })
        // #endif
      },
      getdata() {
        this.$loading()
        uni.request({
          url: this.$url + '/api/user/qrcode',
          header: {
            token: this.usertoken
          },
          success: (res) => {
            uni.hideLoading()
            this.userinfo = res.data.data
            console.log(res.data);
          }
        })
      },
    },
    onNavigationBarButtonTap() {
      uni.navigateTo({
        url: "tofenxiang"
      })
    }
  }
</script>

<style lang="scss">
  .fenxiang {
    padding-top: 314rpx;
    padding-bottom: 74rpx;

    .fenxiang-down {
      width: 712rpx;
      height: 90rpx;
      background: rgba(253, 255, 255, 1);
      box-shadow: 0rpx 4rpx 16rpx 0rpx rgba(241, 212, 172, 0.37);
      border-radius: 16rpx;
      margin: 20rpx auto 0 auto;
      text-align: center;
      line-height: 90rpx;
      font-size: 32rpx;
      font-family: STHeitiTC-Medium, STHeitiTC;
      font-weight: 500;
      color: rgba(161, 119, 70, 1);
    }

    .dailiimg {
      width: 714rpx;
      height: 112rpx;
      margin: 0 18rpx;
    }

    .erweima {
      width: 648rpx;
      height: 264rpx;
      background: rgba(253, 255, 255, 1);
      box-shadow: 0rpx 4rpx 16rpx 0rpx rgba(241, 212, 172, 0.37);
      border-radius: 16rpx;
      margin: 20rpx auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 32rpx;

      image {
        width: 196rpx;
        height: 196rpx;
      }

      .left {
        display: flex;
        flex-direction: column;

        .top,
        .down {
          display: flex;
          align-items: flex-start;

          text:first-child {
            width: 32rpx;
            height: 32rpx;
            border-radius: 100rpx;
            text-align: center;
            line-height: 32rpx;
            background: rgba(253, 123, 20, 1);
            font-size: 28rpx;
            color: #fff;
            margin-right: 10rpx;
            margin-top: 10rpx;
          }

          text:nth-child(2) {
            display: inline-block;
            width: 372rpx;
            font-size: 28rpx;
            font-family: PingFangTC-Regular, PingFangTC;
            font-weight: 400;
            color: rgba(159, 116, 66, 1);
          }
        }
      }
    }

    .day-index {
      width: 712rpx;
      height: 480rpx;
      border-radius: 17rpx;
      background-color: #fff;
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-top: 46rpx;

      .item {
        width: 686rpx;
        height: 74rpx;
        background: rgba(252, 246, 236, 1);
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 24rpx;
        font-family: PingFangTC-Regular, PingFangTC;
        font-weight: 400;
        color: rgba(60, 60, 58, 1);
      }

      .item1 {
        width: 686rpx;
        height: 74rpx;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 24rpx;
        font-family: PingFangTC-Regular, PingFangTC;
        font-weight: 400;
        color: rgba(60, 60, 58, 1);
      }

      .title2 {
        font-size: 28rpx;
        font-family: PingFangTC-Medium, PingFangTC;
        font-weight: 500;
        color: rgba(199, 165, 114, 1);
        margin-top: 10rpx;
        margin-bottom: 22rpx;
      }

      .bottom-xian {
        width: 440rpx;
        height: 28rpx;
        background: rgba(252, 238, 217, 1);
        border-radius: 14rpx;
        margin-top: -28rpx;
      }

      .title {
        position: relative;
        z-index: 1;
        font-size: 40rpx;
        font-family: PingFangTC-Medium, PingFangTC;
        font-weight: 500;
        color: rgba(52, 52, 51, 1);
      }
    }

    .center {
      width: 712rpx;
      height: 900rpx;
      background-color: #fff;
      border-radius: 17rpx;
      margin: 20rpx auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-top: 46rpx;

      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 54rpx;

        image {
          width: 130rpx;
          height: 130rpx;
          margin-right: 28rpx;
        }

        .right {
          display: flex;
          flex-direction: column;

          text:first-child {
            font-size: 32rpx;
            font-family: PingFangTC-Medium, PingFangTC;
            font-weight: 500;
            color: rgba(253, 123, 20, 1);
          }

          text:nth-child(2) {
            font-size: 28rpx;
            font-family: PingFangTC-Regular, PingFangTC;
            font-weight: 400;
            color: rgba(175, 139, 98, 1);
            display: inline-block;
            width: 442rpx;
          }
        }
      }

      .title2 {
        font-size: 28rpx;
        font-family: PingFangTC-Medium, PingFangTC;
        font-weight: 500;
        color: rgba(199, 165, 114, 1);
        margin-top: 10rpx;
      }

      .bottom-xian {
        width: 440rpx;
        height: 28rpx;
        background: rgba(252, 238, 217, 1);
        border-radius: 14rpx;
        margin-top: -28rpx;
      }

      .title {
        position: relative;
        z-index: 1;
        font-size: 40rpx;
        font-family: PingFangTC-Medium, PingFangTC;
        font-weight: 500;
        color: rgba(52, 52, 51, 1);
      }
    }

    .yaoqingma {
      margin: 0 auto 0 auto;
      width: 648rpx;
      height: 142rpx;
      background: rgba(253, 255, 255, 1);
      box-shadow: 0rpx 4rpx 16rpx 0rpx rgba(241, 212, 172, 0.37);
      border-radius: 16rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 32rpx;

      image {
        width: 180rpx;
        height: 76rpx;
      }

      view:first-child {
        font-size: 36rpx;
        font-family: PingFangTC-Medium, PingFangTC;
        font-weight: 500;
        color: rgba(52, 52, 51, 1);
      }

      view:nth-child(2) {
        width: 242rpx;
        height: 64rpx;
        background: rgba(252, 246, 236, 1);
        text-align: center;
        line-height: 64rpx;
        font-size: 28rpx;
        font-family: PingFangTC-Medium, PingFangTC;
        font-weight: 500;
        color: rgba(170, 132, 88, 1);
      }
    }
  }
</style>
