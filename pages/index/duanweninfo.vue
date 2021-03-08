<template>
  <view>
    <view class="status-bar"></view>
    <view class="tab-header">
      <view class="left" @tap="toback">
        <image src="../../static/images/108.png"></image>
      </view>
      <view class="center">
        帖子詳情
      </view>
      <view class="right">
        <view class="guanzhu" @tap="toguanzhu">
          關註
        </view>
        <!-- <image src="../../static/images/84.png"></image> -->
      </view>
    </view>
    <view class="bg-height"></view>
    <view class="user-header">
      <view class="left">
        <image mode="aspectFill" :src="items.avator_image" class="user-img"></image>
        <view class="user-name">
          {{items.name}}
        </view>
        <image src="../../static/images/41.png" class="user-right"></image>
      </view>
      <!-- <image src="../../static/images/46.png" class="right"></image> -->
    </view>
    <view class="tuwen-title">
      <image src="../../static/images/72.png"></image>
      <view>{{items.title}}</view>
    </view>
    <view class="image-list">
      {{items.content}}
    </view>
    <view class="img-down">
      <!-- <view class="right">
        <image class="wenzhang-dianzan" src="/static/images/102.png"></image>
        <text class="wenzhang-dianzan-count">{{items.browse}}</text>
      </view>
      <view class="right">
        <image class="wenzhang-dianzan" src="/static/images/68.png"></image>
        <text class="wenzhang-dianzan-count">{{items.comment}}</text>
      </view>
      <view class="right">
        <image class="wenzhang-dianzan" v-if="items.give == 1" @tap.stop="dianzan" src="/static/images/121.png"></image>
        <image class="wenzhang-dianzan" v-else @tap.stop="dianzan" src="/static/images/125.png"></image>
        <text class="wenzhang-dianzan-count">{{items.fabulous}}</text>
      </view> -->
      <view class="left">
        2小時以前·{{items.browse}}次觀看
      </view>
      <view class="right">
        <image v-if="items.give" @tap="dianzan" src="../../static/images/121.png"></image>
        <image v-else @tap="dianzan" src="../../static/images/125.png"></image>
        <text>{{items.fabulous}}</text>
        <image src="../../static/images/68.png"></image>
        <text>{{items.comment}}</text>
      </view>
    </view>
    <view class="guanggao" v-for="(item,index) in gglist" :key="index" @tap="openurl(item)">
      <image :src="item.image_text"></image>
      <view>廣告</view>
    </view>
    <view class="pinglun-header">
      <view class="left">
        <text>評論</text>
        <!-- <text>(20)</text> -->
      </view>
     <!-- <view class="right">
        <text :class="num == 1 ? 'gaoliang' : ''" @tap="qiehuan(1)">全部</text>
        <text :class="num == 2 ? 'gaoliang' : ''" @tap="qiehuan(2)">热门</text>
        <text :class="num == 3 ? 'gaoliang' : ''" @tap="qiehuan(3)">最新</text>
      </view> -->
    </view>
    <view class="pinglun-item" v-for="(item,index) in pinglunlist" :key="index + '1'">
      <view class="left">
        <image :src="item.avator_image"></image>
      </view>
      <view class="center">
        <view class="name">
          <text>{{item.name}}</text>
          <image class="image2" v-if="item.level  ==  0" mode="aspectFit" src="/static/images/142.png"></image>
          <image class="image2" v-if="item.level  ==  1" mode="aspectFit" src="/static/images/143.png"></image>
          <image class="image2" v-if="item.level  ==  2" mode="aspectFit" src="/static/images/141.png"></image>
          
          <!-- <image src="../../static/images/16.png" class="image2"></image> -->
          <image src="../../static/images/54.png" class="image1"></image>
          
        </view>
        <view class="content">{{item.content}}</view>
        <!-- <view class="time">{{item.creat_time}}</view> -->
      </view>
      <view class="right">
        <!-- <image src="../../static/images/109.png"></image> -->
        <!-- <text>1</text> -->
      </view>
    </view>
    <uni-load-more :status="more" v-if="pinglunlist.length > 9"></uni-load-more>
    <view class="down-input">
      <input v-model="pingluntext" type="text" placeholder="嚴禁留言添加聯系方式，请发送私信" :adjust-position="false"/>
      <text @tap="topinglun">發送</text>
    </view>
    <view class="bg-down"></view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        num:1,
        id:'',
        items:[],
        gglist:[],
        page:1,
        pinglunlist:[],
        more:'more',
        pingluntext:''
      }
    },
    onReachBottom() {
      this.page++
      this.more = 'loading'
      this.getpinglun()
    },
    onLoad(option) {
      this.id = option.id
      
      this.setll()
      // console.log(option.id);
    },
    methods:{
      setll(){
        uni.request({
          url:this.$url + '/api/comment/community_ll',
          method:"POST",
          data:{
            id:this.id
          },
          success: (res) => {
            console.log(res);
            this.getdata()
          }
        })
      },
      openurl(item){
        this.$openurl(item.url)
      },
      dianzan(){
        if(uni.getStorageSync("usertoken")){
          this.$loading()
          uni.request({
            url:this.$url + "/api/community/thumbs",
            method:"GET",
            header:{
              token:uni.getStorageSync("usertoken")
            },
            data:{
              id:this.items.id
            },
            success: (res) => {
              uni.hideLoading()
              if(res.data.code == 200){
                uni.showToast({
                  icon:"none",
                  title:"點贊成功"
                })
                this.items.fabulous++
                this.items.give = 1
              }else{
                uni.showToast({
                  icon:"none",
                  title:res.data.msg
                })
              }
              // console.log(res.data);
            }
          })
        }else{
          uni.showToast({
            icon:"none",
            title:"請登入"
          })
        }
      },
      topinglun(){
        if(this.pingluntext ==  ""){
          uni.showToast({
            icon:"none",
            title:"請輸入評論 "
          })
          return false
        }
        if(uni.getStorageSync("usertoken")){
          this.$loading()
          uni.request({
            url:this.$url + '/api/comment/addcomment',
            method:"POST",
            header:{
              token:uni.getStorageSync("usertoken")
            },
            data:{
              class:0,
              community_id:this.id,
              content:this.pingluntext
            },
            success: (res) => {
              uni.hideLoading()
              uni.showToast({
                icon:"none",
                title:res.data.msg
              })
              if(res.data.code == 200){
                this.pingluntext = ""
              }
              // console.log(res.data);
            }
          })
        }else{
          uni.showToast({
            icon:"none",
            title:"請登入"
          })
        }
        
      },
      toguanzhu(){
        if(uni.getStorageSync("usertoken")){
          this.$loading()
          uni.request({
            url:this.$url + "/api/community/follow",
            method:"GET",
            header:{
              token:uni.getStorageSync("usertoken")
            },
            data:{
              id:this.items.user_id,
              class:this.items.status
            },
            success: (res) => {
              uni.hideLoading()
              // console.log(res.data.data);
              uni.showToast({
                icon:"none",
                title:res.data.msg
              })
            }
          })
        }else{
          uni.showToast({
            icon:"none",
            title:"請登入"
          })
        }
      },
      getdata(){
        this.$loading()
        var header
        if(uni.getStorageSync("usertoken")){
          header = {
            // 'content-type': 'application/x-www-form-urlencoded',
            token: uni.getStorageSync("usertoken")
          }
        }else{
          header = {
            // 'content-type': 'application/x-www-form-urlencoded'
          }
        }
        uni.request({
          url:this.$url + '/api/community/xq_community',
          method:"GET",
          data:{
            id:this.id
          },
          header: header,
          success: (res) => {
            // uni.hideLoading()
            
            if(res.data.code == 200){
              this.items = res.data.data
            }
            this.guanggao()
            this.getpinglun()
            // console.log(res.data);
          }
        })
      },
      getpinglun(){
        uni.request({
          url:this.$url + '/api/comment/community',
          data:{
            current:this.page,
            every:10,
            id:this.id,
            num:this.items.comment,
            class:0
          },
          success: (res) => {
            if(res.data.data.length > 0){
              this.pinglunlist = this.pinglunlist.concat(res.data.data)
              this.more = 'more'
            }else{
              this.page--
              this.more = "noMore"
            }
            // console.log(res.data);
          }
        })
      },
      guanggao(){
        uni.request({
          url:this.$url + '/api/adv/adv',
          data:{
            class:0,
            limit:999
          },
          success: (res) => {
            uni.hideLoading()
            this.gglist = res.data.data
            // console.log(res.data);
          }
        })
      },
      qiehuan(val){
        this.num = val
      },
      toback(){
        uni.navigateBack()
      }
    }
  }
</script>

<style lang="scss">
  .pinglun-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 26rpx;
    .right{
      display: flex;
      align-items: center;
      width: 35rpx;
      height: 35rpx;
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
      border-bottom: 1rpx solid rgba(0,0,0,0.07);
      padding-bottom: 20rpx;
      .time{
        font-size:20rpx;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
      }
      .content{
        margin: 6rpx 0;
        font-size:32rpx;
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
        .image1 {
          width: 30rpx;
          height: 26rpx;
          margin-left: 10rpx;
        }
        
        .image2 {
          width: 150rpx;
          height: 40rpx;
          margin-left: 10rpx;
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
      text:last-child{
        font-size:24rpx;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
      }
      text:first-child{
        font-size:32rpx;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color:rgba(32,32,32,1);
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
      font-size:28rpx;
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
        font-size:28rpx;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
      }
    }
  }
  .image-list{
    padding: 0 32rpx 32rpx 32rpx;
    font-size:28rpx;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(32,32,32,1);
    line-height: 52rpx;
  }
  .tuwen-title{
    position: relative;
    margin: 0 32rpx 18rpx 32rpx;
    padding: 38rpx 36rpx;
    background-color:#F5F4F9;
    border-radius:10px;
    image{
      position: absolute;
      top: 0;
      left: 0;
      width:64rpx;
      height:28rpx;
    }
    view{
      font-size: 32rpx;
      font-weight: 400;
      // line-height: 35rpx;
      color: rgba(32, 32, 32, 1);
    }
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
      justify-content: flex-end;

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
