<template>
  <view style="height:100%;display: flex;flex-direction: column;">
    <scroll-view scroll-y="true" class="swiper-item" @scrolltolower="scrolldown">
      <view class="first-content" v-for="(items,indexs) in videolist" :key="indexs">
        <view class="item" v-for="(item,index) in items" :key="index" @tap="toinfo(item)">
          <!-- <image :src="item.image_text"></image> -->
          <lazy :src="item.image_text" width='350rpx' height='232rpx'></lazy>
          <view class="name">
            {{item.title}}
          </view>
        </view>
        <view class="first-xian"></view>
        <guanggao :items="gglist[indexs%gglist.length]"></guanggao>
      </view>
      <uni-load-more :status="more"></uni-load-more>
    </scroll-view>
  </view>
</template>

<script>
  import lazy from '../../components/lazy-load.vue'
  import guanggao from './guanggao.vue'
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
        gglist:[]
      }
    },
    components: {
      guanggao,
      lazy
    },
    methods: {
      toinfo(items) {
        uni.navigateTo({
          url: "./videoinfo?id=" + items.id
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
            url:this.$url + "/api/adv/adv",
            method:"GET",
            data:{
              class:2,
              limit:999
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
              this.videolist.push(res.data.data)
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
  .swiper-item {
    height: 100%;
  }

  .first-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20rpx;
    // padding: 0 20rpx;
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
  }

  .first-xian {
    width: 750rpx;
    height: 16rpx;
    background: rgba(245, 246, 248, 1);
  }
</style>
