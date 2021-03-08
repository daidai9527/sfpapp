<template>
  <view class="zhuce">
    <view class="top">
      帳號注册
    </view>
    <view class="input">
      <!-- <text @tap="open">{{quhao}}</text> -->
      <input type="text" placeholder="手機號碼" v-model="tel" />
    </view>
    <view class="input">
      <input type="text" placeholder="密碼" password="true" v-model="pwd" />
    </view>
    <view class="input1">
      <input type="number" placeholder="驗證碼" v-model="yzm" />
      <text @tap="sendcode">{{time}}</text>
    </view>
    <view class="input">
      <input type="text" placeholder="邀請碼" v-model="yqm" />
    </view>
    <view class="zhucebut" @tap="tozhuce" :style="{background:(tel != '' && pwd != '' && yzm != '') ? 'rgba(255,209,0,1)' : '#CACACA'}">
      注册
    </view>
    <uni-popup type="bottom" ref="code">
      <scroll-view scroll-y="true" class="codelist">
        <view v-for="(item,index) in codelist" :key="index" @tap="changecode(item)">
          <text>{{item.area}}</text>
          <text>{{item.country}}</text>
          <text>{{item.mobile_prefix}}</text>
        </view>
      </scroll-view>
    </uni-popup>
  </view>
</template>

<script>
  import uniPopup from '../../components/uni-popup/uni-popup.vue'
  export default {
    data() {
      return {
        time: '發送驗證碼',
        s: 60,
        settime: '',
        tel: '',
        pwd: '',
        yzm: '',
        yqm: '',
        yanzhengma: 'aaaa',
        quhao: '电话区号',
        codelist: []
      };
    },
    components:{
      uniPopup
    },
    onLoad() {
      this.getcode()
    },
    methods: {
      changecode(item){
        this.quhao = item.mobile_prefix
        this.$refs.code.close()
      },
      open(){
        this.$refs.code.open()
      },
      getcode() {
        this.$loading()
        uni.request({
          url: this.$url + '/api/County/index',
          method: "GET",
          success: (res) => {
            uni.hideLoading()
            // console.log(res.data);
            this.codelist = res.data.data
          }
        })
      },
      tozhuce() {
        if (this.tel == '') {
          uni.showToast({
            icon: "none",
            title: '請輸入手機號碼'
          })
          return false
        }
        if (this.pwd == '') {
          uni.showToast({
            icon: "none",
            title: "請輸入密碼"
          })
          return false
        }
        
        if (this.yzm == this.yanzhengma) {
          uni.showLoading({
            mask: true,
            title: "請稍後"
          })
          uni.request({
            url: this.$url + '/api/user/register',
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
              mobile: this.tel,
              password: this.pwd,
              code:this.yanzhengma
            },
            success: (res) => {
              uni.hideLoading()
              uni.showToast({
                icon: "none",
                title: res.data.msg
              })
              if (res.data.code == 200) {
                uni.setStorageSync('usertoken', res.data.data.userinfo.token)
                uni.setStorageSync('userid', res.data.data.userinfo.id)
                uni.setStorageSync('userinfo', res.data.data.userinfo)
                setTimeout(() => {
                  uni.switchTab({
                    url: "../mine/mine"
                  })
                }, 1000)

              }
              console.log(res);
            }
          })
        } else {
          uni.showToast({
            icon: "none",
            title: "驗證碼不正確"
          })
          return false
        }

      },
      sendcode() {
        // if (this.quhao == '电话区号') {
        //   uni.showToast({
        //     icon: "none",
        //     title: "请选择区号"
        //   })
        //   return false
        // }
        
        if (this.time == '發送驗證碼') {
          if (this.tel == '') {
            uni.showToast({
              icon: "none",
              title: '請輸入手機號碼'
            })
            return false
          }
          uni.showLoading({
            mask: true,
            title: "請稍後"
          })
          uni.request({
            url: this.$url + "/api/Sms/send",
            method: "POST",
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
              mobile: this.tel,
              event:'register'
            },
            success: (res) => {
              uni.hideLoading()
              // console.log(res);
              uni.showToast({
                icon: "none",
                title: res.data.msg
              })
              this.yanzhengma = res.data.data
              this.time = this.s + 's'
              this.settime = setInterval(() => {
                this.s--
                if (this.s == -1) {
                  this.time = '發送驗證碼'
                  this.s = 60
                  clearInterval(this.settime)
                } else {
                  this.time = this.s + 's'
                }
              }, 1000)

            },
            fail: () => {

              uni.hideLoading()
              uni.showToast({
                icon: "none",
                title: "發送失敗"
              })
            }
          })

        }
      }
    }
  }
</script>

<style lang="scss">
  .codelist{
    width: 750rpx !important;
    height: 80vh;
    background-color: #fff;
    view{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 50rpx;
      width: 650rpx !important;
      text{
        font-size: 30rpx;
        width: 30%;
        text-align: center;
        padding: 10rpx 0;
      }
    }
  }
  .zhuce {
    display: flex;
    flex-direction: column;
    align-items: center;

    .zhucebut {
      width: 540rpx;
      height: 88rpx;
      background: rgba(255, 209, 0, 1);
      border-radius: 43rpx;
      text-align: center;
      line-height: 88rpx;
      margin-top: 28rpx;
      font-size: 32rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }

    .input2 {
      display: flex;
      align-items: center;
      margin-bottom: 42rpx;
      border-bottom: 2rpx solid #E5E5E5;
      padding: 32rpx 0;

      input {
        font-size: 28rpx;
        margin-left: 20rpx;
      }

      text {
        display: inline-block;
        width: 130rpx;
        text-align: center;
        font-size: 28rpx;
      }
    }

    .input1 {
      margin-bottom: 42rpx;
      border-bottom: 2rpx solid #E5E5E5;
      padding: 32rpx 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      input {
        font-size: 28rpx;
      }

      text {
        display: inline-block;
        width: 130rpx;
        text-align: center;
        color: #FFD100;
        font-size: 24rpx;
      }
    }

    .input {
      margin-bottom: 42rpx;
      border-bottom: 2rpx solid #E5E5E5;
      padding: 32rpx 0;

      input {
        font-size: 28rpx;
      }
    }

    .top {
      margin-top: 90rpx;
      margin-bottom: 28rpx;
      font-size: 44rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(32, 32, 32, 1);
    }

    view {
      width: 540rpx;
    }
  }
</style>
