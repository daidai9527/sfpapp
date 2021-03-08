<template>
	<view class="content">
		<view class="item">
			<view class="title">
				銀行卡號
			</view>
			<input type="number" placeholder="請輸入銀行卡卡號" v-model="yhk"/>
		</view>
		<view class="item">
			<view class="title">
				姓名
			</view>
			<input type="text" placeholder="請輸入您的姓名" v-model="name"/>
		</view>
		<view class="item">
			<view class="title">
				開戶行地址
			</view>
			<input type="text" placeholder="请输入開戶行地址" v-model="address"/>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				yhk:'',
        name:'',
        address:''
			}
		},
		onNavigationBarButtonTap() {
      if(this.yhk == ""){
        uni.showToast({
        	icon:"none",
        	title:"請輸入銀行卡卡號"
        })
        return false
      }
      if(this.name == ""){
        uni.showToast({
        	icon:"none",
        	title:"請輸入您的姓名"
        })
        return false
      }
      if(this.address == ""){
        uni.showToast({
        	icon:"none",
        	title:"请输入開戶行地址"
        })
        return false
      }
			this.$loading()
      uni.request({
        url:this.$url + '/api/bang/bank',
        method:"POST",
        header:{
          token:uni.getStorageSync("usertoken")
        },
        data:{
          khh:this.address,
          name:this.name,
          bandcard:this.yhk
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
	.item{
		width: 750rpx;
		height: 90rpx;
		background-color: #fff;
		display: flex;
		align-items: center;
		.title{
			width: 140rpx;
			font-size:28rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(32,32,32,1);
			margin: 0 48rpx 0 32rpx;
		}
	}
	.content{
		padding-top: 16rpx;
	}
	page{
		background-color: #F5F6F8;
	}
</style>
