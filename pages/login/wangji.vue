<template>
  <view class="wangji">
    <view class="top">
      找回密碼
    </view>
    <view class="input">
      <input type="text" placeholder="手機號" v-model="tel" />
    </view>
    <view class="input1">
      <input type="text" placeholder="驗證碼" v-model="yzm" />
      <text @tap="sendcode">{{time}}</text>
    </view>
    <view class="input">
      <input type="text" placeholder="驗證碼設定新的密碼" password="true" v-model="pwd" />
    </view>
    <view class="zhucebut" @tap="tozhaohui" :style="{background:(tel != '' && pwd != '' && yzm != '') ? 'rgba(255,209,0,1)' : '#CACACA'}">
      找回密碼
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        time: '發送驗證碼',
        s: 60,
        settime: '',
        tel: '',
        pwd: '',
        yzm: '',
        yanzhengma:'aaaa'
      };
    },
    methods: {
      tozhaohui(){
        if(this.tel == ""){
          uni.showToast({
            icon:"none",
            title:"請輸入手機號碼"
          })
          return false
        }
        if(this.pwd == ""){
          uni.showToast({
            icon:"none",
            title:"請輸入密碼"
          })
          return false
        }
        if(this.yzm != this.yanzhengma){
          uni.showToast({
            icon:"none",
            title:"驗證碼不正確"
          })
          return false
        }
        uni.showLoading({
          mask:true,
          title:"請稍後"
        })
        uni.request({
          url:this.$url + '/api/user/resetpwd',
          method:"POST",
          header:this.$header,
          data:{
            mobile:this.tel,
            newpassword:this.pwd
          },
          success: (res) => {
            uni.showToast({
              icon:"none",
              title:res.data.msg
            })
            uni.hideLoading()
            if(res.data.code == 200){
              setTimeout(() => {
                uni.navigateBack()
              },1000)
            }
            // console.log(res.data);
          },
          fail: () => {
            uni.showToast({
              icon:"none",
              title:"找回失敗"
            })
          }
        })
        
      },
      sendcode() {
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
            url: this.$url + "/api/user/sendMsm",
            method: "POST",
            data: {
              mobile: this.tel
            },
            success: (res) => {
              uni.hideLoading()
              // console.log(res);
              uni.showToast({
                icon: "none",
                title: "發送成功"
              })
              this.yanzhengma = res.data
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
  .wangji {
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
      margin-top: 56rpx;
      font-size: 32rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }

    .input1 {
      border-bottom: 2rpx solid #E5E5E5;
      padding: 32rpx 0;
      margin-top: 28rpx;
      margin-bottom: 14rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;

      input {
        font-size: 28rpx;
      }

      text {
        display: inline-block;
        width: 120rpx;
        text-align: center;
        font-size: 24rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 209, 0, 1);
      }
    }

    .input {
      border-bottom: 2rpx solid #E5E5E5;
      padding: 32rpx 0;
      margin-top: 28rpx;
      margin-bottom: 14rpx;

      input {
        font-size: 28rpx;
      }
    }

    .top {
      margin-top: 90rpx;
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
