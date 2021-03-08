<template>
	<view class="wenda" @tap.stop="towendainfo">
		<text class="wenda-title">{{items.title}}</text>
    <view class="wenda-content">
      <view class="content-left">
        <view class="left-user-header" @tap.stop="touserinfo">
          <image mode="aspectFill" :src="items.avatar_text" class="user-img"></image>
          <text class="user-name">{{items.name}}</text>
          <image src="/static/images/57.png" class="user-image1"></image>
          <image src="/static/images/16.png" class="user-image2"></image>
          <image src="/static/images/52.png" class="user-image3"></image>
        </view>
        <text class="left-text">{{items.ask_text}}</text>
        <text class="time">2小時以前·{{items.browse}}次觀看</text>
      </view>
      <view class="wenda-right">
        <image :src="items.ask_texts" class="wenda-right-img"></image>
      </view>
    </view>
    <view class="xian"></view>
	</view>
</template>

<script>
	export default {
    props: {
      items: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
		data(){
			return{
				url: getApp().globalData.url,
				header: getApp().globalData.header,
			}
		},
    methods:{
      towendainfo(){
        uni.navigateTo({
          url:"/pages/index/wendainfo?id=" + this.items.id
        })
      },
      touserinfo(e){
        e.stopPropagation()
        uni.navigateTo({
          url:"/pages/userinfo/userinfo?id=" + this.items.id + "&class=" + this.items.class + '&isguanzhu=0'
        })
      }
    }
	}
</script>

<style>
  .xian{
    width:750rpx;
    height:16rpx;
    background-color:rgba(245,246,248,1);
    margin-top: 20rpx;
  }
  .time{
    font-size:24rpx;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(153,153,153,1);
    /* margin-bottom: 16rpx; */
  }
  .left-text{
    font-size:28rpx;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(32,32,32,1);
    text-overflow: ellipsis;
    lines:2;
    margin-bottom: 8rpx;
  }
  .user-image3{
    width: 28rpx;
    height: 24rpx;
  }
  .user-image2{
    width:80rpx;
    height:32rpx;
    margin: 0 12rpx;
  }
  .user-image1{
    width:78rpx;
    height:30rpx;
  }
  .user-name{
    font-size:24rpx;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(32,32,32,1);
    margin: 0 12rpx;
  }
  .user-img{
    width:48rpx;
    height:48rpx;
    border-radius: 100rpx;
  }
  .left-user-header{
    flex-direction: row;
    align-items: center;
    margin-bottom: 8rpx;
    
  }
  .content-left{
    width:456rpx;
  }
  .wenda-right-img{
    width:206rpx;
    height:140rpx;
    border-radius:6rpx;
  }
  .wenda-right{
    width:206rpx;
    height:140rpx;
    border-radius:6rpx;
  }
  .wenda-content{
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
  .wenda-title{
    font-size:28rpx;
    font-weight:bold;
    color:rgba(32,32,32,1);
    overflow: hidden;
    text-overflow: ellipsis;
    lines:1;
    margin-bottom: 18rpx;
    margin-top: 16rpx;
  }
	.wenda{
    padding:  0 32rpx;
  }
</style>
