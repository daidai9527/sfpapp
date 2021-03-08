<template>
  <view>
    <view class="status-bar"></view>
    <view class="tab-header">
      <view class="left">
        <image src="../../static/images/108.png"></image>
      </view>
      <view class="center">
        帖子详情
      </view>
      <view class="right">
        <view class="guanzhu">
          關注
        </view>
        <image src="../../static/images/84.png"></image>
      </view>
    </view>
    <view class="bg-height"></view>
    <!-- <view class="user-header">
      <view class="left">
        <image src="../../static/images/51.png" class="user-img"></image>
        <view class="user-name">
          这是名字这是名字
        </view>
        <image src="../../static/images/41.png" class="user-right"></image>
      </view>
      <image src="../../static/images/46.png" class="right"></image>
    </view> -->
    <image src="../../static/images/17.png" class="cilianjieimg"></image>
    <view class="tuwen-title">
      这是文案这是文案这是文案这是文案这是…这是文案这是文案这是文案这是文案这是…
    </view>
    <game></game>
    <!-- <view class="image-list">
      <image v-for="(item,index) in 5" :key="index" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588850083119&di=7bee85c702e722944080b94de126dfe3&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170323%2F7df18e658ad84544a705eb8464bbc187.jpg"></image>
    </view> -->
    <!-- <view class="img-down">
      <view class="left">
        2小時以前·38次觀看
      </view>
      <view class="right">
        <image src="../../static/images/69.png"></image>
        <text>0</text>
        <image src="../../static/images/68.png"></image>
        <text>0</text>
      </view>
    </view> -->
    <view class="cilianjie">
      <view>www.baidu.com/dbwhd/dwdbuycwv</view>
      <image src="../../static/images/114.png"></image>
    </view>
    <view class="guanggao" v-for="(item,index) in 4" :key="index">
      <image src="../../static/images/17.png"></image>
      <view>廣告</view>
    </view>
    <view class="pinglun-header">
      <view class="left">
        <text>评论</text>
        <text>(20)</text>
      </view>
      <view class="right">
        <text :class="num == 1 ? 'gaoliang' : ''" @tap="qiehuan(1)">全部</text>
        <text :class="num == 2 ? 'gaoliang' : ''" @tap="qiehuan(2)">热门</text>
        <text :class="num == 3 ? 'gaoliang' : ''" @tap="qiehuan(3)">最新</text>
      </view>
    </view>
    <view class="pinglun-item" v-for="(item,index) in 10" :key="index + '1'">
      <view class="left">
        <image src="../../static/images/104.png"></image>
      </view>
      <view class="center">
        <view class="name">
          <text>名字</text>
          <image src="../../static/images/111.png"></image>
        </view>
        <view class="content">这是内容这是内容这是内容这是内容</view>
        <view class="time">10分钟前</view>
      </view>
      <view class="right">
        <image src="../../static/images/109.png"></image>
        <text>1</text>
      </view>
    </view>
    <view class="down-input">
      <input type="text" placeholder="禁止留言联系方式，请发送私信" :adjust-position="false"/>
      <text>发送</text>
    </view>
    <view class="bg-down"></view>
  </view>
</template>

<script>
  import game from "../index/components/gome.vue"
  export default {
    data() {
      return {
        num:1
      }
    },
    methods:{
      qiehuan(val){
        this.num = val
      }
    },
    components:{
      game
    }
  }
</script>

<style lang="scss">
  .cilianjie{
    display: flex;
    align-items: center;
    padding: 16rpx 20rpx;
    justify-content: space-between;
    view{
      width:520rpx;
      height:58rpx;
      background:rgba(255,252,240,1);
      border-radius:29rpx;
      text-align: center;
      line-height: 58rpx;
      font-size:28rpx;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(51,51,51,1);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    image{
      width: 156rpx;
      height: 50rpx;
    }
  }
  .cilianjieimg{
    width:750rpx;
    height:420rpx;
  }
  .pinglun-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 34rpx;
    .right{
      display: flex;
      align-items: center;
      image{
        width: 35rpx;
        height: 35rpx;
      }
      text{
        font-size:24rpx;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
      }
    }
    .center{
      width: 550rpx;
      .time{
        font-size:20rpx;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
      }
      .content{
        margin: 6rpx 0;
        font-size:24rpx;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1);
      }
      .name{
        display: flex;
        align-items: center;
        text{
          font-size:28rpx;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(51,51,51,1);
        }
        image{
          width: 25rpx;
          height: 25rpx;
        }
      }
    }
    .left{
      width:80rpx;
      height:80rpx;
      margin-right: 16rpx;
      image{
        width:80rpx;
        height:80rpx;
        border-radius: 100rpx;
      }
    }
  }
  .pinglun-item{
    padding:  0 20rpx;
  }
  .pinglun-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12rpx 20rpx 32rpx 20rpx;
    .left{
      text:first-child{
        font-size:32rpx;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color:rgba(32,32,32,1);
      }
      text:last-child{
        font-size:24rpx;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
      }
    }
    .right{
      text{
        font-size:24rpx;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1);
        margin: 0 12rpx;
      }
      .gaoliang{
        color:rgba(255,102,105,1) !important;
      }
    }
  }
  .bg-down{
    width:750rpx;
    height:118rpx;
  }
  .down-input{
    position: fixed;
    left: 0;
    bottom: 0;
    width:710rpx;
    height:118rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20rpx;
    background:rgba(255,255,255,1);
    border:2rpx solid rgba(229,229,229,1);
    input{
      width:614rpx;
      height:72rpx;
      background:rgba(247,247,247,1);
      border-radius:36rpx;
      text-indent: 60rpx;
      font-size:24rpx;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(151,151,151,1);
    }
    text{
      font-size:28rpx;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(102,102,102,1);
    }
  }
  .guanggao{
    width:710rpx;
    height:160rpx;
    margin: 0 auto 16rpx auto;
    position: relative;
    image{
      width: 710rpx;
      height: 160rpx;
    }
    view{
      position: absolute;
      width:108rpx;
      height:40rpx;
      background:rgba(0,0,0,1);
      border-radius:4rpx;
      opacity:0.53;
      text-align: center;
      line-height: 40rpx;
      font-size:24rpx;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(255,255,255,1);
      right: 0;
      bottom: 16rpx;
    }
  }
  .img-down{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20rpx;
    margin-bottom: 40rpx;
    .left{
      font-size:24rpx;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(153,153,153,1);
    }
    .right{
      display: flex;
      align-items: center;
      image{
        width: 36rpx;
        height: 36rpx;
        margin-left: 26rpx;
        margin-right: 16rpx;
      }
      text{
        font-size:24rpx;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
      }
    }
  }
  .image-list{
    padding: 0 15rpx;
    image{
      width: 230rpx;
      height: 230rpx;
      border-radius: 10rpx;
      margin: 0 5rpx 10rpx 5rpx;
    }
  }
  .tuwen-title{
    padding: 0 20rpx;
    font-size:28rpx;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(32,32,32,1);
    margin-bottom: 16rpx;
  }
  .user-header{
    height: 114rpx;
    padding: 0 20rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .right{
      width: 164rpx;
      height: 46rpx;
    }
    .left{
      display: flex;
      align-items: center;
      .user-right{
        width: 40rpx;
        height: 34rpx;
      }
      .user-name{
        font-size:28rpx;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(32,32,32,1);
        width: 200rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0 16rpx;
      }
      .user-img{
        width:80rpx;
        height:80rpx;
        border-radius: 100rpx;
      }
    }
  }
  .bg-height {
    height: calc(88rpx + var(--status-bar-height));
  }

  .status-bar {
    height: var(--status-bar-height);
    width: 750rpx;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 10;
  }

  .tab-header {
    width: 686rpx;
    position: fixed;
    top: var(--status-bar-height);
    left: 0;
    height: 88rpx;
    display: flex;
    align-items: center;
    padding: 0 32rpx;
    justify-content: space-between;
    background-color: #fff;
    z-index: 10;
    .left,
    .center,
    .right {
      width: 30%;
    }

    .left {
      image {
        width: 18rpx;
        height: 33rpx;
      }
    }

    .center {
      text-align: center;
      font-size: 32rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(32, 32, 32, 1);
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: space-between;

      image {
        width: 44rpx;
        height: 44rpx;
      }

      .guanzhu {
        width: 104rpx;
        height: 50rpx;
        text-align: center;
        line-height: 50rpx;
        background-color: #F9D147;
        text-align: center;
        line-height: 50rpx;
        color: #fff;
        font-size: 32rpx;
        border-radius: 100rpx;
      }
    }
  }
</style>
