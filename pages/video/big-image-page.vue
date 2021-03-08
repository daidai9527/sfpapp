<template>
  <view style="height: 100%;display: flex;flex-direction: column;">
    <scroll-view scroll-y="true" class="swiper-item" @scrolltolower="scrolldown">
      <view v-for="(item,index) in videolist" :key="index">
        <view class="item" @tap="toinfo(item)">
          <view class="top">
            <!-- <image :src="item.image_text" class="video-img"></image> -->
            <lazy :src="item.image_text" width='710rpx' height='430rpx'></lazy>
            <view class="name">
              {{item.title}}
            </view>
          </view>
          <view class="down">
            <view class="left">
              <image src="../../static/images/101.png"></image>
              <text>收藏</text>
            </view>
            <view class="right">
              <image src="../../static/images/103.png"></image>
              <text>下载</text>
              <image src="../../static/images/102.png"></image>
              <text>分享</text>
            </view>
          </view>
        </view>
        <view class="xian"></view>
        <guanggao v-if="(index + 1) % 10 == 0" :items="gglist[((index+1)/10-1)%gglist.length]"></guanggao>
      </view>
      <uni-load-more :status="more"></uni-load-more>
    </scroll-view>
  </view>
</template>

<script>
  import guanggao from "./guanggao.vue"
  import lazy from '../../components/lazy-load.vue'
  export default {
    props: {
      index: {
        type: Number
      }
    },
    data() {
      return {
        videolist: [],
        page: 1,
        more: 'more',
        gglist: []
      }
    },
    components: {
      guanggao,
      lazy
    },
    methods: {
      toinfo(item) {
        uni.navigateTo({
          url: "./videoinfo?id=" + item.id
        })
      },
      scrolldown() {
        this.page++
        this.more = 'loading'
        this.getdate(0)
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
          url: this.$url + '/api/Dvideo/video_list',
          method: "POST",
          data: {
            class: this.index,
            current: this.page,
            every: 10
          },
          success: (res) => {
            uni.hideLoading()
            if (res.data.data.length > 0) {
              this.more = 'more'
              this.videolist = this.videolist.concat(res.data.data)
            } else {
              this.more = 'noMore'
              if (this.page > 1) {
                this.page--
              }
            }
            console.log(res.data);
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .xian {
    width: 750rpx;
    height: 16rpx;
    background: rgba(245, 246, 248, 1);
  }

  .item {
    padding: 20rpx 20rpx 0 20rpx;

    .down {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18rpx 0;

      .left {
        display: flex;
        align-items: center;

        image {
          width: 42rpx;
          height: 42rpx;
          margin-right: 8rpx;
        }

        text {
          font-size: 24rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);

        }
      }

      .right {
        display: flex;
        align-items: center;

        image {
          width: 42rpx;
          height: 42rpx;
          margin-left: 76rpx;
        }

        text {
          font-size: 24rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          margin-left: 8rpx;
        }
      }
    }

    .top {
      position: relative;
      width: 710rpx;
      height: 430rpx;
      border-radius: 12rpx;

      .video-img {
        width: 710rpx;
        height: 430rpx;
        border-radius: 12rpx;
      }

      .name {
        position: absolute;
        top: 0rpx;
        left: 0rpx;
        width: 690rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 32rpx;
        border-radius: 10rpx;
        padding: 10rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        z-index: 999;
        color: rgba(255, 255, 255, 1);
        background-color: rgba(0, 0, 0, 0.2);

      }
    }
  }

  .swiper-item {
    height: 100%;
  }
</style>
