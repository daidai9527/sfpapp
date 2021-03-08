<template>
	<view class="gonggao">
		<view class="gonggao-popup">
		  <image class="gonggao-img" src="../../static/images/119.png"></image>
		  <view class="body-content">
		    <view class="gonggao-title">社區公告</view>
		    <scroll-view scroll-y="true" class="scroll-box">
		      <view class="gonggao-text" v-html="fuwenben"></view>
		    </scroll-view>
		  </view>
		  <image src="../../static/images/120.png" class="gonggao-close" @tap="closegonggao"></image>
		</view>
	</view>
</template>

<script>
  
	export default {
		data(){
			return{
				fuwenben:''
			}
		},
    onLoad(option) {
      this.fuwenben = decodeURIComponent(option.fuwenben)
      // console.log(this.fuwenben);
    },
    methods:{
      closegonggao(){
        uni.navigateBack()
      }
    }
	}
</script>

<style lang="scss">
	page{
    background-color: rgba(0,0,0,0.5);
  }
  .gonggao{
    width: 750rpx;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .scroll-box{
    width: 540rpx;
     height: 400rpx;
    margin: 22rpx 30rpx 0 30rpx;
  }
  .gonggao-title{
    margin: 230rpx 0 0 30rpx;
    font-size:40rpx;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(32,32,32,1);
  }
  .gonggao-close{
    width:60rpx;
    height: 60rpx;
  }
  .body-content{
    position: absolute;
    top: 0;
    left: 0;
    width: 600rpx;
    height: 800rpx;
  }
  .gonggao-img{
    width: 600rpx;
    height: 800rpx;
  }
  .gonggao-popup{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 850rpx;
    width: 600rpx;
  }
</style>
