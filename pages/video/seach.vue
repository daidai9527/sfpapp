<template>
  <view>
    <view class="status-bar"></view>
    <view class="seach-bar">
      <view class="left">
        <image src="../../static/images/43.png"></image>
        <input type="text" placeholder="輸入你想要的" v-model="seachtext" />
      </view>
      <text class="right" @tap="seach">蒐索</text>
    </view>
    <view class="bg-height"></view>
    <view v-if="datalist.length == 0">
      <view class="title">
        歷史記錄
      </view>
      <view class="lishilist">
        <text class="lishiitem" v-for="(item,index) in lishilist" :key="index" @tap="toseach(item)">{{item}}</text>
      </view>
    </view>
    <view v-else>
      <view class="first-content">
        <view class="item" v-for="(item,index) in datalist" :key="index" @tap="toinfo(item)">
          <!-- <image :src="item.image_text"></image> -->
          <lazy :src="item.image_text" width='350rpx' height='232rpx'></lazy>
          <view class="name">
            {{item.title}}
          </view>
        </view>
      </view>
      <uni-load-more :status="more"></uni-load-more>
    </view>
  </view>
</template>

<script>
  import lazy from '../../components/lazy-load.vue'
  export default {
    data() {
      return {
        seachtext: '',
        lishilist: [],
        datalist: [],
        more:'more',
        page:1
      }
    },
    onReachBottom() {
      this.page++
      this.more = 'loading'
      this.getseach()
    },
    onLoad() {
      if (uni.getStorageSync("videolishi")) {
        this.lishilist = uni.getStorageSync("videolishi")
      }
    },
    methods: {
      toinfo(item){
        // console.log(item);
        uni.navigateTo({
          url:"./videoinfo?id=" + item.id
        })
      },
      toseach(item) {
        this.seachtext = item
        this.$loading()
        this.getseach()
      },
      seach() {
        if (this.seachtext == "") {
          uni.showToast({
            icon: "none",
            title: "请输入蒐索内容"
          })
          return false
        }
        this.datalist = []
        this.page = 1
        this.lishilist.push(this.seachtext)
        uni.setStorageSync("videolishi", this.lishilist)
        this.$loading()
        this.getseach()
      },
      getseach() {
        
        uni.request({
          url: this.$url + '/api/sreach/video',
          method: "GET",
          data: {
            title: this.seachtext,
            current: this.page,
            every: 10
          },
          success: (res) => {
            uni.hideLoading()
            if (res.data.data.length > 0) {              
              this.datalist = this.datalist.concat(res.data.data)
              if(this.datalist.length > 9){
                this.more = 'more'
              }else{
                this.more = 'noMore'
              }
            } else {
              this.more = 'noMore'
              if (this.page == 1) {
                uni.showToast({
                  icon: "none",
                  title: "暫無數據"
                })
              } else {
                uni.showToast({
                  icon: "none",
                  title: "沒有更多了"
                })
              }
            }
            // console.log(res.data);
          }
        })
      },
    },
    components:{
      lazy
    }
  }
</script>

<style lang="scss">
  .first-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .item:nth-child(2n-1) {
    margin-left: 14rpx;
  }

  .item:nth-child(2n) {
    margin-right: 14rpx;
  }

  .item {

    image {
      width: 350rpx;
      height: 232rpx;
      border-radius: 8rpx;
    }

    .name {
      width: 350rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 28rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      padding: 0 0 20rpx 0;
    }
  }

  .bg-height {
    width: 750rpx;
    height: calc(88rpx + var(--status-bar-height));
  }

  .lishilist {
    padding: 0 32rpx;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .lishiitem {
      display: inline-block;
      padding: 10rpx 20rpx;
      background: rgba(246, 246, 246, 1);
      border-radius: 8rpx;
      font-size: 24rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      margin-top: 16rpx;
      margin-right: 32rpx;
    }
  }

  .title {
    padding: 0 32rpx;
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(32, 32, 0, 1);
  }

  .seach-bar {
    position: fixed;
    top: var(--status-bar-height);
    left: 0;
    height: 88rpx;
    padding: 0 32rpx;
    width: 686rpx;
    z-index:99;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16rpx;
    background-color: #fff;

    .left {
      width: 526rpx;
      padding: 0 36rpx;
      height: 56rpx;
      background: rgba(246, 246, 246, 1);
      border-radius: 32rpx;
      display: flex;
      align-items: center;

      image {
        width: 28rpx;
        height: 28rpx;
      }

      input {
        font-size: 24rpx;
        text-indent: 10rpx;
      }
    }

    .right {
      font-size: 28rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(32, 32, 0, 1);
    }
  }

  .status-bar {
    height: var(--status-bar-height);
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 750rpx;
  }
</style>
