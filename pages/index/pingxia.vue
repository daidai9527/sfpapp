<template>
	<view class="pingxia">
		<view class="pingxia-gg">
		   <image :src="item.image_text" mode="aspectFit" class="pingxia-img" @tap="openurl"></image>
		   <image src="../../static/images/120.png" class="gonggao-close" @tap="closepingxia"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				item:[]
			}
		},
    onLoad() {
      this.item = uni.getStorageSync("kaiping")
    },
    methods:{
      openurl(){
        this.$openurl(this.item.url)
      },
      closepingxia(){
        uni.navigateBack()
      }
    }
	}
</script>

<style lang="scss">
  .gonggao-close{
    width: 80rpx;
    height: 80rpx;
  }
  .pingxia{
    width: 750rpx;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
	page{
	  background-color: rgba(0,0,0,0.5);
	}
  .pingxia-img{
    width: 650rpx;
    height: 650rpx;
  }
  .pingxia-gg{
    width: 650rpx;
    height: 750rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
</style>
