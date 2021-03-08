<template>
	<view class="lazy" :style="{'border-radius':borderRadius,width:width,height:height}">
		<image @load="showimage" class="lazy-image" :src="src" :mode="mode" :style="{'border-radius':borderRadius,width:width,height:height}"></image>
		<image :class="is_load ? '' : 'hide-image'" class="lazy-load" :src="image" :mode="mode" :style="{'border-radius':borderRadius,width:width,height:height}"></image>
	</view>
</template>

<script>
	export default {
		props: {
			src: {
				type: String,
				default: ''
			},
			image: {
				type: String,
				default: '/static/images/51.png'
			},
			mode: {
				type: String,
				default: 'scaleToFill'
			},
			borderRadius: {
				type: String,
				default: '10rpx'
			},
			width: {
				type: String,
				default: '100rpx'
			},
			height: {
				type: String,
				default: '100rpx'
			}
		},
		data() {
			return {
				is_load: true
			};
		},
		methods:{
			showimage(){
				this.is_load = false
			}
		}
	}
</script>

<style lang="scss">
	.hide-image {
		transition-duration:0.5s;
		transition-property:opacity;
		opacity: 0 !important;
	}

	.lazy {
		position: relative;
	}

	.lazy-image {
		position: absolute;
		top: 0;
		left: 0;
	}

	.lazy-load {
		position: absolute;
		transition-duration:0.5s;
		transition-property:opacity;
		top: 0;
		left: 0;
		z-index: 10;
		opacity: 1;
	}
</style>
