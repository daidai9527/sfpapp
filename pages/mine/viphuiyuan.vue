<template>
  <view>
    <uni-nav-bar @clickLeft="toback" backgroundColor="#FFF1DB" left-icon="back" right-text="充值明細" title="vip會員" :fixed="true"
      :statusBar="true" :border="false"></uni-nav-bar>
    <view class="add-new">
      <text>會員中心</text>
      <image src="../../static/images/134.png"></image>
    </view>
    <view class="user-top">
      <lazy class="userimg" :src="userdata.avatar_text" borderRadius="100rpx" width="100rpx" height="100rpx"></lazy>
      <view class="username">
        <view class="name">
          {{userdata.username}}
        </view>
        <view class="down">
          <!-- <image src="../../static/images/19.png" mode="aspectFit"></image> -->
          <text>{{userdata.vip_time > time ? '有效期' + userdata.vip_time : '未開通會員'}}</text>
        </view>
      </view>
      <image class="right" src="../../static/images/21.png"></image>
    </view>
    <view class="tequan">
      <view class="top">
        <text>會員專屬特權</text>
      </view>
      <view class="tequan-list">
        <view class="item">
          <image src="../../static/images/25.png" mode="aspectFit"></image>
          <text>視頻特權</text>
        </view>
        <view class="item">
          <image src="../../static/images/26.png" mode="aspectFit"></image>
          <text>下載特權</text>
        </view>
        <view class="item">
          <image src="../../static/images/27.png" mode="aspectFit"></image>
          <text>社區特權</text>
        </view>
        <view class="item">
          <image src="../../static/images/24.png" mode="aspectFit"></image>
          <text>互動特權</text>
        </view>
      </view>
    </view>
    <view class="zaixian">
      <view class="title">
        套餐選擇
      </view>
      <view class="pay-type">
        <view class="pay-item" v-for="(item,index) in cardlist" :key="index" @tap="opentype(item)">
          <view class="name">
            {{item.name}}
          </view>
          <view class="right">
            <text>¥{{item.money}}</text>
            <text>原价¥{{item.y_money}}</text>
          </view>
          <view class="down">
            {{item.time}}天會員
          </view>
        </view>
      </view>

    </view>
    <uni-popup type="bottom" ref="buytype">
      <view class="buttom-type">
        <view class="pay-item" @tap="pay('alipay')">
          <image src="../../static/images/alipay.png"></image>
          <text>支付寶支付</text>
        </view>
        <view class="pay-item" @tap="pay('wechat')">
          <image src="../../static/images/wechat.png"></image>
          <text>微信支付</text>
        </view>
      </view>
    </uni-popup>
    <uni-popup ref="canvas">
      <canvas canvas-id="pay" class="my-canvas" @tap="saveimg"></canvas>
    </uni-popup>
  </view>
</template>
<script>
  import lazy from '@/components/lazy-load.vue'
  import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
  import uniPopup from "@/components/uni-popup/uni-popup.vue"
  export default {
    data() {
      return {
        type: 0,
        cardlist: [],
        userdata: [],
        time: 0,
        payitem: [],
        canvas: ''
      };
    },
    onLoad() {
      this.userdata = uni.getStorageSync("userinfo")
      this.gettime()
      // console.log(this.userdata);


    },
    onShow() {
      this.getdata()
    },
    components: {
      lazy,
      uniNavBar,
      uniPopup
    },
    methods: {
      pay(str) {
        this.$loading()
        uni.request({
          url: this.$url + '/api/order/add',
          method: "POST",
          header: {
            token: uni.getStorageSync("usertoken")
          },
          data: {
            price: this.payitem.money,
            pay_type: str
          },
          success: (res) => {

            this.$refs.buytype.close()
            if (str == 'alipay') {
              uni.hideLoading()
              // #ifdef APP-PLUS
              plus.runtime.openURL(res.data.data.jump_url, function() {
                plus.runtime.openURL(res.data.data.qr)
              })
              // #endif
              // #ifdef H5
              window.location.href = res.data.data.qr
              // #endif
            } else {

              this.canvas = uni.createCanvasContext('pay')

              this.canvas.setFillStyle('green')
              // this.canvas.rect(0, 0, 400, 300)
              this.canvas.fillRect(0, 0, 300, 360)
              this.canvas.fill()

              this.canvas.setFontSize(22)
              this.canvas.setFillStyle("white")
              this.canvas.fillText('使用微信掃一掃進行支付', 30, 50)

              this.canvas.setFillStyle('white')
              this.canvas.fillRect(0, 360, 300, 450)
              // this.canvas.rect(0, 300, 300, 450)
              this.canvas.fill()

              this.canvas.setFontSize(28)
              this.canvas.setFillStyle("white")
              this.canvas.fillText('¥100.00', 107, 330)

              this.canvas.setFontSize(32)
              this.canvas.setFillStyle("black")
              this.canvas.fillText('微信支付', 90, 415)

              this.canvas.drawImage(res.data.data.qr_img, 50, 80, 200, 200)
              this.$refs.canvas.open()
              setTimeout(() => {
                this.canvas.draw()
                uni.hideLoading()
                uni.showToast({
                  icon: "none",
                  title: "點擊保存二維碼"
                })
              }, 1000)





            }

            console.log(res.data);
          }
        })
      },
      saveimg() {
        uni.canvasToTempFilePath({
          canvasId: 'pay',
          success: (res) => {
            console.log(res.tempFilePath);
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: () => {
                uni.hideLoading()
                uni.showToast({
                  icon: "none",
                  title: "圖片保存成功",
                  success: () => {

                    setTimeout(() => {
                      uni.showLoading({
                        mask: true,
                        title: "正在打開微信"
                      })
                      var Intent = plus.android.importClass(
                        "android.content.Intent");
                      var ComponentName = plus.android.importClass(
                        'android.content.ComponentName')
                      var intent = new Intent();
                      intent.setComponent(new ComponentName("com.tencent.mm",
                        "com.tencent.mm.ui.LauncherUI"));
                      intent.putExtra("LauncherUI.From.Scaner.Shortcut", true);
                      intent.setFlags(335544320);
                      intent.setAction("android.intent.action.VIEW");
                      var main = plus.android.runtimeMainActivity();
                      main.startActivity(intent);
                      uni.hideLoading()
                    }, 1000)
                  }
                })
              }
            })
          }
        })
      },
      opentype(item) {
        this.$loading()
        uni.request({
          url: this.$url + '/api/County/pay',
          success: (res) => {
            uni.hideLoading()
            if (res.data.data == 1) {
              // uni.showToast({
              //   icon: "none",
              //   title: "暫無充值通道"
              // })
              uni.navigateTo({
                url:"./zaixian"
              })
            } else {
              this.payitem = item
              this.$refs.buytype.open()
            }
          }
        })

      },
      gettime() {
        var date = new Date()
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        var second = date.getSeconds();
        second = second < 10 ? ('0' + second) : second;
        this.time = y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
      },
      getdata() {
        this.$loading()
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
          url: "./zaixian"
        })
      },
      toback() {
        uni.navigateBack({
          delta: 1
        })
      },
    }
  }
</script>

<style lang="scss">
  // @import '@/uview/index.scss';
  page {
    background: linear-gradient(360deg, rgba(243, 211, 128, 1) 0%, rgba(255, 241, 219, 1) 100%);
  }

  .add-new {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 26rpx 32rpx;

    image {
      width: 178rpx;
      height: 178rpx;
    }

    text {
      font-size: 120rpx;
      font-family: zcoolqingkehuangyouti-Regular, zcoolqingkehuangyouti;
      font-weight: 400;
      color: rgba(213, 175, 100, 1);
    }
  }

  .my-canvas {
    width: 300px;
    height: 450px;
  }


  .buttom-type {
    width: 750rpx;
    height: 300rpx;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .pay-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      image {
        width: 120rpx;
        height: 120rpx;
      }

      text {
        font-size: 30rpx;
        margin-top: 20rpx;
      }
    }
  }

  .zaixian {
    width: 686rpx;
    height: 448rpx;
    background: rgba(255, 255, 255, 1);
    border-radius: 8rpx;
    margin: 32rpx auto;

    .title {
      text-align: center;
      font-size: 32rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(198, 160, 76, 1);
      padding: 28rpx 0;
    }

    .pay-type {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .pay-item {
      width: 206rpx;
      height: 290rpx;
      border-radius: 12rpx;
      border: 2rpx solid rgba(255, 209, 0, 1);
      margin: 0 auto 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .name {
        font-size: 32rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(196, 157, 96, 1);
      }

      .down {
        font-size: 24rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(198, 160, 76, 1);
      }

      .right {
        width: 220rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 20rpx 0;
        // margin-right: 20rpx;

        text:first-child {
          font-size: 40rpx;
          font-family: Avenir-Medium, Avenir;
          font-weight: 500;
          color: rgba(198, 160, 76, 1);
        }

        text:last-child {
          font-size: 24rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
        }
      }
    }

    .gaoliang {
      background: rgba(255, 248, 232, 1) !important;
    }
  }

  .paytype {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 26rpx 0;
    margin-bottom: 20rpx;
    font-size: 32rpx;

    view {
      width: 34rpx;
      display: flex;
      justify-content: center;
      white-space: nowrap;
      border-bottom: 6rpx solid #F0F2F5;
      padding-bottom: 10rpx;
    }

    .gaoliang {
      border-bottom: 6rpx solid #FFD100;
    }
  }

  .tequan-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32rpx;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;

      image {
        width: 72rpx;
        height: 72rpx;
        margin-bottom: 6rpx;
      }

      text {
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(32, 32, 0, 1);
      }
    }
  }

  .tequan {
    width: 686rpx;
    margin: 32rpx auto 0 auto;
    height: 280rpx;
    background: rgba(255, 255, 255, 1);

    .top {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 34rpx 0 40rpx 0;

      text {
        font-size: 32rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(198, 160, 76, 1);
      }
    }
  }

  .user-top {
    width: 686rpx;
    height: 166rpx;
    background: rgba(255, 255, 255, 1);
    border-radius: 8rpx;
    margin: 32rpx auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .username {
      width: 400rpx;

      .down {
        display: flex;
        align-items: center;

        image {
          width: 80rpx;
          height: 32rpx;
          margin-right: 20rpx;
        }

        text {
          font-size: 24rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(62, 62, 62, 1);
        }
      }

      .name {
        font-size: 32rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(62, 62, 62, 1);
        margin-bottom: 14rpx;
      }
    }

    .userimg {
      margin: 0 16rpx 0 52rpx;
    }

    .right {
      width: 80rpx;
      height: 66rpx;
      margin-right: 52rpx;
    }
  }

  .slot-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* 如果您想让slot内容占满整个导航栏的宽度 */
    flex: 1;
    /* 如果您想让slot内容与导航栏左右有空隙 */
    padding: 0 30rpx;

    .slot-item {
      width: 112rpx;
    }

    .slot-item:last-child {
      font-size: 28rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }

    .slot-title {
      font-size: 32rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(32, 32, 32, 1);
    }
  }
</style>
