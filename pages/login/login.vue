<template>
	<view class="login">
		<view class="top">
		  歡迎登錄
		</view>
    <view class="top2">
      手機號驗證碼登錄註冊
    </view>
    <view class="input1">
      <input type="text" placeholder="手機號碼" v-model="tel"/>
    </view>
    <view class="input1">
      <input type="text" placeholder="密碼" password="true" v-model="pwd"/>
    </view>
    <view class="loginbut" @tap="tologin" :style="{background:(tel != '' && pwd != '') ? 'rgba(255,209,0,1)' : '#CACACA'}">
      登錄
    </view>
    <view class="login-down">
      <text class="left" @tap="tozhuce">注册</text>
      <text class="right" @tap="towangji">忘記密碼?</text>
    </view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				tel:'',
        pwd:''
			};
		},
    methods:{
      tologin(){
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
        uni.showLoading({
          mask:true,
          title:"請稍後"
        })
        uni.request({
          url:this.$url + "/api/user/login",
          method:"POST",
          header:this.$header,
          data:{
            mobile:this.tel,
            password:this.pwd
          },
          success: (res) => {
            uni.hideLoading()
            console.log(res);
            uni.showToast({
              icon:"none",
              title:res.data.msg
            })
            if(res.data.code == 200){
              uni.setStorageSync('usertoken',res.data.data.userinfo.token)
              uni.setStorageSync('userid',res.data.data.userinfo.id)
              uni.setStorageSync('userinfo',res.data.data.userinfo)
              setTimeout(() => {
                uni.navigateBack()
              },1000)
            }
          },
          fail: () => {
            uni.showToast({
              icon:"none",
              title:"登入失敗"
            })
          }
        })
      },
      tozhuce(){
        uni.navigateTo({
          url:"zhuce"
        })
      },
      towangji(){
        uni.navigateTo({
          url:"wangji"
        })
      }
    }
	}
</script>

<style lang="scss">
.login{
  .login-down{
    width: 540rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 42rpx auto;
    font-size:24rpx;
    .left{
      color:rgba(255,209,0,1);
    }
    .right{
      color:rgba(157,157,157,1);
    }
  }
  .top{
    width: 540rpx;
    margin: 90rpx auto 0 auto;
    font-size:44rpx;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(32,32,32,1);
  }
  .top2{
    margin: 16rpx auto 20rpx auto;
    width: 540rpx;
    font-size:24rpx;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .input1{
    margin: 42rpx auto 0 auto;
    border-bottom: 2rpx solid #E5E5E5;
    width: 540rpx;
    padding: 32rpx 0;
    input{
      font-size:28rpx;
    }
  }
  .loginbut{
    width:540rpx;
    height:88rpx;
    margin: 70rpx auto 0 auto;
    background:rgba(255,209,0,1);
    border-radius:44rpx;
    text-align: center;
    line-height: 88rpx;
    font-size:32rpx;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
  }
}
</style>
