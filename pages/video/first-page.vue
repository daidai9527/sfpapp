<template>
  <view style="height:100%;display: flex;flex-direction: column;">
    <scroll-view class="swiper-item" :scroll-y="true">         
      <view>
        <swiper class="gg-swiper" :autoplay="true" :interval="3000" :circular="true">
          <swiper-item class="gg-swiper-item" v-for="(a,b) in lunbotu" :key="b" @tap="openurl(a)">
            <lazy width="710rpx" height="332rpx" :src="a.image_text"></lazy>
          </swiper-item>
        </swiper>
      </view>
      <view>
        <uni-notice-bar class="notice-bar" backgroundColor="#fff" color="#999999" :single="true" :scrollable="true"
          showIcon="true" :speed="50" :text="gdt"></uni-notice-bar>
      </view>
      <view class="first-tabbar">
        <view class="first-tabbar-item">
          <text class="item-title">熱門專題</text>
          <view class="more" @tap="toguishumore">
            <text>更多</text>
            <image src="../../static/images/81.png"></image>
          </view>
        </view>
        <view class="item" v-for="(item,index) in tablist" :key="index" @tap="toauthorinfo(item)" v-if="index < 5">
          <!-- <image :src="item.image_text"></image> -->
          <lazy :src="item.image_text" width="120rpx" height="120rpx" borderRadius="100rpx"></lazy>
          <text>{{item.name}}</text>
        </view>
      </view>
      <view class="first-xian"></view>
      <view v-for="(item,index) in videolist" :key="index">
        <view class="first-title">
          <view>{{item.name}}</view>
          <view @tap="tomore(index)">
            <text>更多</text>
            <image src="../../static/images/81.png"></image>
          </view>
        </view>
        <view class="first-content">
          <view class="item" v-for="(items,indexs) in item.videos" :key="indexs" @tap="toinfo(items)" v-if="indexs < 10">
            <!-- <image :src="items.image_text"></image> -->
            <lazy :src="items.image_text" width='350rpx' height='232rpx'></lazy>
            <view class="name">
              {{items.title}}
            </view>
          </view>
        </view>
        <view class="first-xian"></view>
        <!-- <guanggao></guanggao> -->
        <guanggao :items="gglist[index%gglist.length]"></guanggao>

      </view>

      <view class="first-xian"></view>
      <!-- <view class="san-content">
        <view class="item" v-for="(item,index) in 6" :key="index">
          <image src="../../static/images/17.png"></image>
          <view class="name">
            这是文案这是文案这是这是文案这是文案这是
          </view>
        </view>
      </view>
      <view class="first-xian"></view>
      <guanggao></guanggao> -->
    </scroll-view>
  </view>
</template>

<script>
  import guanggao from "./guanggao.vue"
  import lazy from '../../components/lazy-load.vue'
  export default {
    data() {
      return {
        videolist: [],
        page: 1,
        tablist: [],
        lunbotu: [],
        gglist: [],
        gdt: ''
      }
    },
    components: {
      guanggao,
      lazy
    },
    created() {
      this.gdt = uni.getStorageSync("gundongtiao")
    },
    methods: {
      toguishumore(){
        uni.navigateTo({
          url:"./guishu"
        })
      },
      tomore(index) {
        this.$emit('changenum', index + 1)
      },
      openurl(item) {
        this.$openurl(item.url)
      },
      getdate(val) {
        if (val == 1 && this.videolist.length != 0) {
          return false
        }
        if (this.videolist.length == 0) {
          this.$loading()
          uni.request({
            url: this.$url + "/api/adv/adv",
            method: "GET",
            data: {
              class: 2,
              limit: 999
            },
            success: (res) => {
              this.gglist = res.data.data
              // console.log(res.data);
            }
          })
        }
        uni.request({
          url: this.$url + '/api/Dvideo/selected',
          method: "POST",
          data: {
            class: 1
          },
          success: (res) => {
            // console.log(res.data);
            if (res.data.code == 200) {
              this.videolist = res.data.data
            }
            uni.request({
              url: this.$url + '/api/belong/index',
              method: "GET",
              success: (res) => {

                this.guanggao()
                if (res.data.code == 200) {
                  this.tablist = res.data.data
                }
                // console.log(res.data);
              }
            })
          }
        })
      },
      guanggao() {
        uni.request({
          url: this.$url + '/api/adv/lb',
          data: {
            class: 1
          },
          success: (res) => {
            uni.hideLoading()
            this.lunbotu = res.data.data
            // console.log(res.data);
          }
        })
      },
      toauthorinfo(item) {
        uni.navigateTo({
          url: "./authorinfo?id=" + item.id
        })
      },
      toinfo(items) {
        // console.log(items);
        uni.navigateTo({
          url: "./videoinfo?id=" + items.id
        })
      }
    }
  }
</script>

<style lang="scss">
  .san-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16rpx 20rpx;
    flex-wrap: wrap;

    image {
      width: 226rpx;
      height: 304rpx;
      border-radius: 8rpx;
    }

    .name {
      width: 226rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 28rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      margin: 8rpx 0 16rpx 0;
    }
  }

  .san-content::after {
    width: 226rpx;
    content: '';
  }

  .first-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 20rpx;

    .item {
      // .image {
      //   width: 350rpx;
      //   height: 232rpx;
      //   border-radius: 8rpx;
      // }

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
  }

  .first-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16rpx 20rpx 16rpx 20rpx;

    view:first-child {
      font-size: 34rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      // font-weight: bold;
      color: rgba(32, 32, 32, 1)
    }

    view:last-child {
      display: flex;
      align-items: center;

      image {
        width: 12rpx;
        height: 20rpx;
      }

      text {
        margin-right: 10rpx;
        font-size: 26rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }
    }
  }

  .first-xian {
    width: 750rpx;
    height: 16rpx;
    background: rgba(245, 246, 248, 1);
  }

  .first-tabbar {
    // height: 194rpx;
    width: 710rpx;
    display: flex;
    // white-space: nowrap;
    flex-wrap: wrap;
    align-items: center;
    // justify-content: space-between;
    padding:10rpx 20rpx 20rpx 20rpx;
    .first-tabbar-item{
      margin-bottom: 18rpx;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .item-title{
        font-size: 32rpx;
      }
    }
    .more {
      
      font-size: 26rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);

      image {
        margin-left: 10rpx;
        width: 12rpx;
        height: 20rpx;
      }
    }

    .item {
      width: 140rpx;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20rpx;

      image {
        width: 100rpx;
        height: 100rpx;
        border-radius: 100rpx;
      }

      text {
        margin-top: 12rpx;
        font-size: 30rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
      }
    }
  }

  .notice-bar {
    margin: 16rpx 20rpx 14rpx 20rpx;
    border-bottom: 2rpx #E5E5E5 solid;
    width: 710rpx;
  }

  .gg-swiper {
    width: 750rpx;
    height: 332rpx;
    margin-top: 20rpx;
  }

  .gg-swiper-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gg-swiper-item-img {
    width: 710rpx;
    height: 332rpx;

  }

  .swiper-item {
    width: 750rpx;
    // height: 600rpx;
    height: 100%;
    // flex: 1;
  }
</style>
