<template>
	<view>
		<view class="header">
		  <image :src="userdata.avatar_text"></image>
      <text>{{userdata.username}}歡迎光臨！</text>
		</view>
    <view class="duihuan">
      <input type="text" placeholder="請輸入兌換碼" v-model="duihuanma"/>
      <view @tap="toduihuan">確認兌換</view>
    </view>
    <view class="xian"></view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				userdata:[],
        duihuanma:''
			}
		},
    onLoad() {
      this.userdata = uni.getStorageSync("userinfo")
      console.log(this.userdata);
    },
    methods:{
      toduihuan(){
        this.$loading()
        uni.request({
          url:this.$url + '/api/Exchange/add',
          method:"POST",
          header:{
            token:uni.getStorageSync("usertoken")
          },
          data:{
            code:this.duihuanma
          },
          success: (res) => {
            uni.hideLoading()
            uni.showToast({
              icon:"none",
              title:res.data.msg
            })
            // console.log(res.data);
          }
        })
      }
    }
	}
</script>

<style lang="scss">
  .xian{
    height: 10rpx;
    width: 750rpx;
    background-color: rgba(0,0,0,0.1);
  }
  .duihuan{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32rpx;
    input{
      border: 2rpx solid #C0C4CC;
      width: 450rpx;
      height: 80rpx;
      border-radius: 10rpx;
      text-indent: 20rpx;
    }
    view{
      width: 200rpx;
      height: 80rpx;
      line-height: 80rpx;
      text-align: center;
      background-color: #fecb09;
      border-radius: 10rpx;
      font-size: 30rpx;
    }
  }
	.header{
    display: flex;
    align-items: center;
    image{
      width: 80rpx;
      height: 80rpx;
      border-radius: 100rpx;
      margin: 32rpx;
    }
    text{
      font-size: 32rpx;
    }
  }
</style>
