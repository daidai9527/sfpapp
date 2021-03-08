<template>
	<view class="content">
		<view class="item">
			<view class="title">
				支付寶帳號
			</view>
			<input type="number" placeholder="請輸入支付寶帳號" v-model="tel"/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        tel:''
			}
		},
		onNavigationBarButtonTap() {
      if(this.tel == ""){
        uni.showToast({
        	icon:"none",
        	title:"請輸入支付寶帳號"
        })
        return false
      }
      this.$loading()
      uni.request({
        url:this.$url + '/api/bang/zhb',
        method:"POST",
        header:{
          token:uni.getStorageSync("usertoken")
        },
        data:{
          zfb:this.tel
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
</script>

<style lang="scss">
	.item {
		width: 750rpx;
		height: 90rpx;
		background-color: #fff;
		display: flex;
		align-items: center;

		.title {
			width: 140rpx;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(32, 32, 32, 1);
			margin: 0 48rpx 0 32rpx;
		}
	}

	.content {
		padding-top: 16rpx;
	}

	page {
		background-color: #F5F6F8;
	}
</style>
