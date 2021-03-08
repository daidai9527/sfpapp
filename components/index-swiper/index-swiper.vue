<template>
	<view class="swiper">
		<swiper :interval="3000" class="wenzhang-swiper" :circular="true" @change="changeimg">
			<swiper-item v-for="(item1,index1) in imglist" :key="index1">
				<image  mode="aspectFill" class="wenzhang-swiper-image" :src="item1" placeholder="../../static/images/51.png" @tap.stop="openimg" :data-index="index1"></image>
			</swiper-item>
		</swiper>
		<view class="swiper-dots">
			<text :class="num == index ? 'dots-item gaoliang' : 'dots-item'" v-for="(item,index) in imglist"  :key="index"></text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			imglist: Array
		},
		data() {
			return {
				num: 0
			};
		},
		methods: {
      openimg(e){
        e.stopPropagation()
        // console.log(e.target.dataset.index);
        uni.previewImage({
          urls:this.imglist,
          current:e.target.dataset.index
        })
      },
			changeimg(e) {
				this.num = e.detail.current
			}
		},
	}
</script>

<style>
	.gaoliang {
		width: 20rpx !important;
		height: 8rpx;
		background-color: rgba(255, 209, 0, 1) !important;
		border-radius: 4rpx !important;
		transition-property: width, background-color;
		transition-duration: 0.3s;
	}

	.dots-item {
		width: 8rpx;
		height: 8rpx;
		background-color: rgba(205, 205, 205, 1);
		border-radius: 8px;
		margin: 0 8rpx;
		transition-property: width, background-color;
		transition-duration: 0.3s;
	}

	.swiper-dots {
		/* #ifdef H5 */
		display: flex;
		/* #endif */
		align-items: center;
		flex-direction: row;
		justify-content: center;
		width: 750rpx;
		height: 50rpx;
	}

	.swiper {
		width: 750rpx;
		height: 800rpx;
	}

	.wenzhang-swiper-image {
		width: 750rpx;
		height: 750rpx;
	}

	.wenzhang-swiper {
		width: 750rpx;
		height: 750rpx;
	}
</style>
