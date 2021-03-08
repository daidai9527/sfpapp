<template>
	<view style="height:100%;display: flex;flex-direction: column;">
		<scroll-view scroll-y="true" class="swiper-item" @scrolltolower="scrolldown">
			<view v-for="(item,index) in videolist" :key="index">
				<view class="row-item" @tap="toinfo(item)">
					<image :src="item.image_text"></image>
					<view class="row-right">
						<view class="name">{{item.title}}</view>
						<view class="label">
							<text>{{item.labels.vname}}</text>
							<!-- <text>标签</text>
							<text>标签</text> -->
						</view>
						<view class="look-count"> 点击量：{{item.hits}}次</view>
					</view>
				</view>
				<guanggao v-if="(index + 1) % 5 == 0"></guanggao>
			</view>
      <uni-load-more :status="more"></uni-load-more>
		</scroll-view>
	</view>
</template>

<script>
	import guanggao from './guanggao.vue'
	export default {
    props:{
      index:{
        type:Number
      }
    },
		data(){
			return{
				videolist:[],
				page:1,
				more:'more'
			}
		},
		components:{
			guanggao
		},
    methods:{
      toinfo(item){
        uni.navigateTo({
          url: "./videoinfo?id=" + item.id
        })
      },
      scrolldown(){
        this.page++
        this.more = 'loading'
        this.getdate(0)
      },
      getdate(val){
        if(val == 1 && this.videolist.length != 0){
          return false
        }
        if(this.videolist.length == 0){          
          this.$loading()
        }
        uni.request({
          url:this.$url + '/api/Dvideo/video_list',
          method:"POST",
          data:{
            class:this.index,
            current:this.page,
            every:5
          },
          success: (res) => {
            uni.hideLoading()
            if(res.data.data.length > 0){
              this.more = 'more'
              this.videolist = this.videolist.concat(res.data.data)
            }else{
              this.more = 'noMore'
              if(this.page > 1){
                this.page--
              }
            }          
            console.log(res.data);
          }
        })
      }
    }
	}
</script>

<style lang="scss">
	.swiper-item{
		height: 100%;
	}
	.row-item{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding:20rpx;
		image{
			width:284rpx;
			height:172rpx;
			border-radius:8rpx;
			margin-right: 28rpx;
		}
		.row-right{
			width: 400rpx;
			height:172rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.name{
				font-size:28rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(51,51,51,1);
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.label{
				text{
					display: inline-block;
					width:98rpx;
					height:46rpx;
					background:rgba(247,247,247,1);
					border-radius:4rpx;
					text-align: center;
					line-height: 46rpx;
					font-size:24rpx;
					font-family:PingFangSC-Regular,PingFang SC;
					font-weight:400;
					color:rgba(102,102,102,1);
					margin-right: 24rpx;
				}
			}
			.look-count{
				font-size:24rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(153,153,153,1);
			}
		}
	}
</style>
