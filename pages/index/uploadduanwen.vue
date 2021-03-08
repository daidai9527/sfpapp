<template>
	<view>
		<view class="status-bar"></view>
    <view class="status-tabbar">
      <image src="../../static/images/108.png" class="back-img"></image>
      <view class="title">
        發佈內容
      </view>
      <image src="../../static/images/112.png" class="submit-img" @tap="tofabu"></image>
    </view>
    <view class="header-bg"></view>
    <view class="input-title">
      <input type="text" placeholder="請輸入標題（至少三個字）" v-model="title"/>
    </view>
    <view class="textarea">
      <textarea placeholder="说点什么" v-model="content" maxlength="200"/>
      <view class="down-textarea">
        <text>0/200</text>
        <text>帶網站，廣告，聯繫方式的一律删除，需稽核才能通過！</text>
      </view>
    </view>
    <!-- <view class="img-list">
      <view class="change-img" @tap="changeimg">
        <image src="../../static/images/113.png"></image>
      </view>
      <image :src="item" v-for="(item,index) in imagelist" class="img-item" :key="index" mode="aspectFill"></image>
    </view> -->
	</view>
</template>

<script>
	export default {
		data(){
			return{
				imagelist:[],
        title:'',
        content:''
			}
		},
    methods:{
      tofabu(){
        if(this.title == "" && this.title.length < 3){
          uni.showToast({
            icon:"none",
            title:"請輸入標題"
          })
          return false
        }
        if(this.content == ""){
          uni.showToast({
            icon:"none",
            title:"請輸入內容"
          })
          return false
        }
        this.$loading()
        uni.request({
          url:this.$url + "/api/community/add_dw",
          method:"POST",
          data:{
            title:this.title,
            content:this.content
          },
          header:{
            token:uni.getStorageSync("usertoken")
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
      },
      changeimg(){
        uni.chooseImage({
          sourceType:['album'],
          success: (res) => {
            this.imagelist = res.tempFilePaths
            // console.log(res.tempFilePaths);
          }
        })
      }
    }
	}
</script>

<style lang="scss">
  .img-list{
    padding: 32rpx;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .img-item{
      width: 230rpx;
      height: 230rpx;
    }
    .change-img{
      width: 226rpx;
      height: 226rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      border:2rpx solid rgba(233,233,233,1);
      image{
        width: 60rpx;
        height: 60rpx;
      }
    }
  }
  .textarea{
    padding: 16rpx 32rpx;
    textarea{
      width: 686rpx;
      height: 500rpx;
    }
    .down-textarea{
      display: flex;
      align-items: center;
      justify-content: space-between;
      text:first-child{
        font-size:24rpx;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(254,173,54,1);
      }
      text:last-child{
        font-size:24rpx;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,75,79,1);
      }
    }
  }
  .input-title{
    padding: 16rpx 32rpx;
  }
	.status-bar{
    height: var(--status-bar-height);
    width: 750rpx;
    position: fixed;
    background-color: #fff;
  }
  .header-bg{
    width: 750rpx;
    height: calc(var(--status-bar-height) + 88rpx);
  }
  .status-tabbar{
    height: 88rpx;
    width: 750rpx;
    position: fixed;
    left: 0;
    top: var(--status-bar-height);
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .back-img{
      width:18rpx;
      height:33rpx;
      padding-left: 32rpx;
    }
    .submit-img{
      width: 112rpx;
      height: 56rpx;
      margin-right: 32rpx;
    }
    .title{
      font-size:32rpx;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:500;
      color:rgba(32,32,32,1);
      margin-left: 98rpx;
    }
  }
</style>
