<template>
	<view class="guanggao" @tap="openurl">
		<!-- <view class="name">
			这是文案…这是文案…这是文案…这是文案…这是文案…这是文案…
		</view> -->
		<!-- <image :src="items.image_text" class="guanggao-img"></image> -->
    <lazy :src="items.image_text" width="710rpx" height="332rpx"></lazy>
		<view class="guanggao-down">
			<text></text>
			<image src="../../static/images/49.png"></image>
		</view>
	</view>
</template>

<script>
  import lazy from '@/components/lazy-load.vue'
	export default {
    props: {
      items: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    components:{
      lazy
    },
		data(){
			return{
				
			}
		},
    methods:{
      openurl(){
        // console.log(this.items);
        this.$openurl(this.items.url)
      }
    }
	}
</script>

<style lang="scss">
	.guanggao{
		padding: 20rpx;
		.guanggao-down{
			display: flex;
			align-items: center;
			justify-content: space-between;
      margin-top: 20rpx;
			text{
				font-size:24rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:rgba(153,153,153,1);
			}
			image{
				width:122rpx;
				height:42rpx;
			}
		}
		.name{
      width: 710rpx;
			font-size:28rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(32,32,32,1);
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			margin-bottom: 16rpx;
		}
		.guanggao-img{
			width:710rpx;
			height:200rpx;
		}
	}
</style>
