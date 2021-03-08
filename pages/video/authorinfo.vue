<template>
	<view class="author">
		<view class="header">
			<image :src="detail.b_image_text" class="author-top" mode="aspectFill"></image>
			<view class="touming"></view>
			<view class="header-row">
				<image :src="detail.image_text"></image>
				<view class="right">
					<view class="name">
						{{detail.name}}
					</view>
					<view class="video-count">
						{{detail.count}}部影片
					</view>
				</view>
			</view>
		</view>
		<view class="jianjie-title">
			简介
		</view>
		<view class="jianjie-content">
			{{detail.desc}}
		</view>
		<view class="xian"></view>
		<view class="tabbar-top">
			<view class="left">
				相关視頻
			</view>
			<!-- <view class="right">
				<text :class="type == 1 ? 'gaoliang' : ''" @tap="qiehuan(1)">最近更新</text>
				<text :class="type == 2 ? 'gaoliang' : ''" @tap="qiehuan(2)">最多下载</text>
			</view> -->
		</view>
		<view class="video-list">
			<view class="item" v-for="(item,index) in dvideo" :key="index" @tap="tocilianjie(item)">
				<!-- <image :src="item.image_text"></image> -->
        <lazy :src="item.image_text" width="350rpx" height="232rpx"></lazy>
				<view class="name">
					{{item.title}}
				</view>
			</view>
		</view>
    <uni-load-more :status="more"></uni-load-more>
	</view>
</template>

<script>
  import lazy from "@/components/lazy-load.vue"
	export default {
		data(){
			return{
				type:1,
        id:'',
        page:1,
        detail:[],
        dvideo:[],
        more:'more'
			}
		},
    onLoad(option) {
      this.id = option.id
      // console.log(option);
      this.$loading()
      this.getdata()
    },
   onReachBottom() {
     this.page++
     this.more = 'loading'
     this.getdata()
   },
   components:{
     lazy
   },
		methods:{
			qiehuan(val){
				this.type = val
			},
      tocilianjie(item){
        uni.navigateTo({
          url:"./videoinfo?id=" + item.id
        })
      },
      getdata(){
        
        uni.request({
          url:this.$url + '/api/belong/detail',
          method:"POST",
          data:{
            id:this.id,
            every:10,
            current:this.page
          },
          success: (res) => {
            uni.hideLoading()
            if(res.data.code == 200){
              this.detail = res.data.data
              console.log(res.data);
              if(res.data.data.video.length > 0){
                this.more = 'more'
                this.dvideo = this.dvideo.concat(res.data.data.video) 
              }else{
                this.page--
                this.more = 'noMore'
              }
            }else{
              this.more = 'more'
              uni.showToast({
                icon:"none",
                title:"獲取失敗"
              })
            }
            
          }
        })
      }
		}
	}
</script>

<style lang="scss">
	.video-list{
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 0  20rpx;
		image{
			width:350rpx;
			height:232rpx;
			border-radius:8rpx;
		}
		.name{
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			width: 350rpx;
			font-size:28rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(51,51,51,1);
			padding: 8rpx 0 20rpx 0;
		}
	}
	.tabbar-top{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 24rpx 20rpx 16rpx 20rpx;
		.left{
			display: flex;
			align-items: center;
			padding: 0 16rpx;
			border-left: 8rpx solid #F9D147;
			height: 30rpx;
			font-size:32rpx;
			font-family:PingFangSC-Medium,PingFang SC;
			font-weight:500;
			color:rgba(32,32,32,1);
		}
		.right{
			text{
				font-size:24rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(51,51,51,1);
				margin-left: 32rpx;
			}
			.gaoliang{
				color: #FF4B4F !important;
			}
		}
	}
	.xian{
		width:750rpx;
		height:16rpx;
		background:rgba(245,246,248,1);
		margin-top: 16rpx;
	}
	.jianjie-content{
		padding: 0 20rpx;
		font-size:28rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
	}
	.jianjie-title{
		padding: 10rpx 20rpx;
		font-size:32rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color:rgba(32,32,32,1);
	}
	.header{
		width:750rpx;
		height:360rpx;
		position: relative;
		display: flex;
		align-items: flex-end;
		.header-row{
			margin-bottom: 64rpx;
			display: flex;
			align-items: center;
			width: 750rpx;
			image{
				width:136rpx;
				height:136rpx;
				border:4rpx solid rgba(255,255,255,1);
				border-radius: 100rpx;
				margin: 0 60rpx 0 80rpx;
			}
			.right{
				position: relative;
				z-index: 20;
				.name{
					font-size:36rpx;
					font-weight:500;
					color:rgba(255,255,255,1);
					margin-bottom: 10rpx;
				}
				.video-count{
					width:126rpx;
					height:50rpx;
					border-radius:8rpx;
					border:2rpx solid rgba(255,255,255,1);
					text-align: center;
					line-height: 50rpx;
					font-size:24rpx;
					font-weight:400;
					color:rgba(255,255,255,1);
					
				}
			}
		}
		.author-top{
			width:750rpx;
			height:360rpx;
			position: absolute;
			top: 0;
			left: 0;
		}
		.touming{
			width:750rpx;
			height:360rpx;
			background:rgba(0,0,0,0.3);
			position: absolute;
			top: 0;
			left: 0;
			// z-index: 10;
		}
	}
</style>
