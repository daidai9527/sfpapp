<template>
	<view class="tixian">
		<view class="title">
			請綁定您的支付寶或者銀行卡
		</view>
		<view class="item" @tap="tozhifubao">
			<image src="../../static/images/24.png" class="logo"></image>
			<view class="name">
				綁定支付寶
			</view>
			<image src="../../static/images/73.png" class="more"></image>
		</view>
		<view class="item" @tap="toyinkangka">
			<image src="../../static/images/24.png" class="logo"></image>
			<view class="name">
				綁定銀行卡
			</view>
			<image src="../../static/images/73.png" class="more"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			tozhifubao(){
				uni.navigateTo({
					url:"zhifubao"
				})
			},
			toyinkangka(){
				uni.navigateTo({
					url:"yinhangka"
				})
			}
		}
	}
</script>

<style lang="scss">
	.title{
		margin: 48rpx 0 42rpx 0;
		font-size:32rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color:rgba(32,32,32,1);
	}
	.item{
		width:686rpx;
		height:140rpx;
		background-color:rgba(255,255,255,1);
		border-radius:8rpx;
		margin-bottom: 24rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		.logo{
			width: 80rpx;
			height: 80rpx;
		}
		.more{
			width:34rpx;
			height:34rpx;
		}
		.name{
			font-size:32rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(32,32,32,1);
			margin-right: 150rpx;
		}
	}
	.tixian{
		padding: 0 32rpx;
	}
	page{
		background-color: #F5F6F8;
	}
</style>
