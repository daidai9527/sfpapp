<template>
	<view>
		<view class="bg-image">
		  <image src="../../static/images/163.png" class="image"></image>
		</view>
    <view class="input-item">
      <text class="title">真实姓名</text>
      <input type="text" placeholder="请输入您的真实姓名" v-model="name"/>
      <view class="right"></view>
    </view>
    <view class="input-item">
      <text class="title">身份证</text>
      <input type="text" placeholder="请输入您的身份证号" v-model="shenfen"/>
      <view class="right"></view>
    </view>
    <view class="input-item">
      <text class="title">手机号</text>
      <input type="number" placeholder="请填写手机号" v-model="tel"/>
      <view class="right"></view>
    </view>
    <view class="input-item">
      <text class="title">验证码</text>
      <input type="number" placeholder="请输入验证码" v-model="yzm"/>
      <view class="right yanzheng" @tap="sengyzm">获取验证码</view>
    </view>
    <view class="shenfenzheng">
      <view class="border" @tap="changeimage1">
        <text v-if="!image1">+</text>
        <text v-if="!image1">身份证正面</text>
        <image v-if="image1" :src="image1" class="border"></image>
      </view>
      <view class="border" @tap="changeimage2">
        <text v-if="!image2">+</text>
        <text v-if="!image2">身份证反面</text>
        <image v-if="image2" :src="image2" class="border"></image>
      </view>
    </view>
    <view class="buttom" @tap="tijiao">
      提交认证
    </view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				name:'',
        shenfen:'',
        tel:"",
        yzm:'',
        zimage:'',
        fimage:'',
        yzm2:'aaa',
        image1:'',
        image2:''
			}
		},
    methods:{
      changeimage1(){
        uni.chooseImage({
          count:1,
          success: (res) => {
            // console.log(res.tempFilePaths[0]);
            this.image1 = res.tempFilePaths[0]
          }
        })
      },
      changeimage2(){
        uni.chooseImage({
          count:1,
          success: (res) => {
            // console.log(res.tempFilePaths[0]);
            this.image2 = res.tempFilePaths[0]
          }
        })
      },
      sengyzm(){
        if(this.tel == ""){
          uni.showToast({
            icon:"none",
            title:"请输入手机号"
          })
          return false
        }
        this.$loading()
        uni.request({
          url: this.$url + "/api/user/sendMsm",
          method: "POST",
          data: {
            mobile: this.tel
          },
          success: (res) => {
            uni.hideLoading()
            uni.showToast({
              icon:"none",
              title:"发送成功"
            })
            this.yzm2 = res.data
            // console.log(res.data);
          }
        })
      },
      tijiao(){
        if(this.name == ""){
          uni.showToast({
            icon:"none",
            title:"请输入姓名"
          })
          return false
        }
        var sf = this.shenfen.toString()
        if(sf.length < 18){
          uni.showToast({
            icon:"none",
            title:"请输入身份证"
          })
          return false
        }
        if(this.tel == ""){
          uni.showToast({
            icon:"none",
            title:"请输入手机号"
          })
          return false
        }
        if(this.yzm == ""){
          uni.showToast({
            icon:"none",
            title:"请输入验证码"
          })
          return false
        }
        if(this.yzm != this.yzm2){
          uni.showToast({
            icon:"none",
            title:"验证码不正确"
          })
          return false
        }
        if(this.image1 == ""){
          uni.showToast({
            icon:"none",
            title:"请选择身份证正面"
          })
          return false
        }
        
        if(this.image2 == ""){
          uni.showToast({
            icon:"none",
            title:"请选择身份证反面"
          })
          return false
        }
        this.$loading()
        setTimeout(() => {
          uni.hideLoading()
          uni.showToast({
            icon:"none",
            title:"提交成功"
          })
        },1000)
      }
    }
	}
</script>

<style lang="scss">
  .buttom{
    width:686rpx;
    height:100rpx;
    background:rgba(189,189,189,1);
    border-radius:50rpx;
    text-align: center;
    line-height: 100rpx;
    margin: 50rpx auto;
    font-size:36rpx;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
  }
  .shenfenzheng{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32rpx;
    margin-top: 40rpx;
    .border{
      width:326rpx;
      height:224rpx;
      border-radius:10rpx;
      border:2rpx dashed rgba(186,186,186,1);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text{
        font-size:28rpx;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
      }
    }
  }
  .input-item{
    display: flex;
    align-items: center;
    padding: 0 32rpx;
    justify-content: space-between;
    height: 100rpx;
    .title{
      font-size:28rpx;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(32,32,32,1);
      width: 150rpx;
    }
    input{
      font-size:28rpx;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(153,153,153,1);
      width: 300rpx;
    }
    .right{
      width:186rpx;
      height:60rpx;
      border-radius:30rpx;
      font-size:28rpx;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(255,255,255,1);
    }
    .yanzheng{
      background-color: #BDBDBD;
      text-align: center;
      line-height: 60rpx;
    }
  }
	.bg-image{
    background-color: #F5F6F8;
    padding: 34rpx 0;
    width: 750rpx;
    text-align: center;
    .image{
      width:418rpx;
      height:280rpx;
    }
  }
</style>
