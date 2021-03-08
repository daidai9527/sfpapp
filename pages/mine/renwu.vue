<template>
	<view>
		<view class="header">
			<view class="left">
				<text>積分</text>
				<text>{{userdata.integral}}</text>
			</view>
			<view class="right">
				LV.{{userdata.vip}}
			</view>
		</view>
		<!-- <view class="tuiguang">
			<view class="title">
				推廣任務
			</view>
			<view class="item">
				<view class="left">
					<image src="../../static/images/79.png" class="logo"></image>
					<view class="text">
						<view class="name">
							推广送VIP
						</view>
						<view class="detail">
							積分+30 送7天VIP
						</view>
					</view>
				</view>
				<view class="right">
					做任務
				</view>
			</view>
		</view>
		<view class="fengexian"></view> -->
		<view class="tuiguang1">
			<view class="title">
				推廣任務
			</view>
			
			<view class="item" v-for="(item,index) in renwulist" :key="index">
				<view class="left">
					<image :src="item.image_text" class="logo"></image>
					<view class="text">
						<view class="name">
							{{item.name}}
						</view>
						<view class="detail">
							積分+{{item.agent}}{{item.vip > 0 ? '送' + item.vip + '天vip' : ''}}
						</view>
					</view>
				</view>
				<view class="right" @tap="tomine" v-if="item.tong == 0">
					做任務
				</view>
        <view class="right" v-else>
          已完成
        </view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        renwulist:[],
        userdata:[]
			}
		},
    onLoad() {
      // this.userdata = uni.getStorageSync("userinfo")
      console.log(this.userdata);
      this.getdata()
    },
    methods:{
      tomine(){
        uni.switchTab({
          url:"./mine"
        })
      },
      getdata(){
        this.$loading()
        uni.request({
          url:this.$url + '/api/task/index',
          method:"POST",
          header:{
            token:uni.getStorageSync("usertoken")
          },
          success: (res) => {
            
            // console.log(res);
            this.renwulist = res.data.data
            this.getuserinfo()
            
          }
        })
      },
      getuserinfo(){
        uni.request({
          url: this.$url + "/api/user/personal",
          method: "GET",
          header: {
            token: uni.getStorageSync("usertoken")
          },
          success: (res) => {
            uni.hideLoading()
            if(res.data.code == 200){
              this.userdata = res.data.data
              // this.usertoken = uni.getStorageSync("usertoken")
            }
            console.log(res);
          }
        })
      }
    }
	}
</script>

<style lang="scss">
	.tuiguang1 {
		padding: 0 32rpx;
		background: rgba(255, 255, 255, 1);

		.title {
			padding: 32rpx 0 0 0;
			font-size: 32rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: rgba(32, 32, 32, 1);
		}

		.item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 32rpx 0;
			border-bottom: 1rpx solid #ECEAEA;
			.left {
				display: flex;
				align-items: center;

				.logo {
					width: 88rpx;
					height: 88rpx;
					margin-right: 16rpx;
				}

				.name {
					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: rgba(32, 32, 32, 1);
					margin-bottom: 14rpx;

				}

				.detail {
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: rgba(153, 153, 153, 1);
				}
			}

			.right {
				width: 136rpx;
				height: 58rpx;
				border-radius: 29rpx;
				border: 2rpx solid rgba(102, 102, 102, 1);
				text-align: center;
				line-height: 58rpx;
				font-size: 24rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);
			}
		}

	}

	.tuiguang {
		padding: 0 32rpx 32rpx 32rpx;
		// height: 220rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0rpx -12rpx 16rpx 0rpx rgba(0, 0, 0, 0.06);

		.title {
			padding: 32rpx 0;
			font-size: 32rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: rgba(32, 32, 32, 1);
		}

		.item {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.left {
				display: flex;
				align-items: center;

				.logo {
					width: 88rpx;
					height: 88rpx;
					margin-right: 16rpx;
				}

				.name {
					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: rgba(32, 32, 32, 1);
					margin-bottom: 14rpx;

				}

				.detail {
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: rgba(153, 153, 153, 1);
				}
			}

			.right {
				width: 136rpx;
				height: 58rpx;
				border-radius: 29rpx;
				border: 2rpx solid rgba(102, 102, 102, 1);
				text-align: center;
				line-height: 58rpx;
				font-size: 24rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);
			}
		}
	}

	.fengexian {
		width: 750rpx;
		height: 16rpx;
		background: rgba(245, 246, 248, 1);
	}

	.header {
		width: 686rpx;
		height: 154rpx;
		background: rgba(255, 215, 32, 1);
		border-radius: 14rpx 14rpx 0 0;
		margin: 0 auto;
		padding: 24rpx 0;
		display: flex;
		align-items: flex-end;
		justify-content: space-around;

		.left {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: end;

			text:first-child {
				font-size: 36rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: rgba(32, 32, 32, 1);
				margin-bottom: -30rpx;
			}

			text:last-child {
				width: 60rpx;
				font-size: 98rpx;
				font-family: Avenir-Heavy, Avenir;
				font-weight: 800;
				color: rgba(32, 32, 32, 1);
				margin-bottom: -10rpx;

			}
		}

		.right {
			font-size: 32rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: rgba(32, 32, 32, 1);

		}
	}
</style>
