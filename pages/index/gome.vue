<template>
  <div class="swiper-item">
    <!-- #ifdef APP-NVUE -->
    <list class="swiper-item" @loadmore="scrolldown">
      <cell v-for="(items,indexs) in datalist" :key="indexs">
        <gome :items="items"></gome>
        <!-- <guanggao v-if="indexs == 4"></guanggao> -->
      </cell>
      <cell v-if="datalist.length > 10">
        <uni-load-more :status="more"></uni-load-more>
      </cell>
    </list>
    <!-- #endif -->
    <!-- #ifdef H5 -->
    <scroll-view class="swiper-item" scroll-y="true" @scrolltolower="scrolldown">
      <view v-for="(items,indexs) in datalist" :key="indexs">
        <gome :items="items"></gome>
        <!-- <guanggao v-if="indexs == 4"></guanggao> -->
      </view>
      <uni-load-more :status="more" v-if="datalist.length > 10"></uni-load-more>
    </scroll-view>
    <!-- #endif -->
  </div>
</template>

<script>
  import gome from './components/gome.vue'
  import guanggao from './components/guanggao.vue'
  import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
  export default {
    data() {
      return {
        url: getApp().globalData.url,
        header: getApp().globalData.header,
        datalist: [],
        page: 1,
        more: 'more',
      }
    },
    methods: {
      scrolldown() {
        if (this.more != 'noMore') {
          this.more = 'loading'
          this.page++
          this.getdata()
        }

      },
      getdata(val) {
        if (val == 1 && this.datalist.length != 0) {
          return false
        }
        if (val == 1) {
          uni.showLoading({
            mask: true,
            title: "請稍後"
          })
        }
        uni.request({
          url: this.url + '/api/community/game',
          method: "POST",
          data: {
            current: this.page,
            every: 10
          },
          header: this.header,
          success: (res) => {
            uni.hideLoading()
            if (res.data.code == 200) {
              for (let i = 0; i < res.data.data.length; i++) {
                this.datalist.push(res.data.data[i])
              }
              if (res.data.data.length > 0) {
                this.more = 'more'
              } else {
                this.more = 'noMore'
                this.page--
              }
              // this.datalist = this.datalist.concat(res.data.data)
            }
            console.log(this.datalist);
            console.log(res.data);
          }
        })

      },
    },
    components: {
      gome,
      guanggao,
      uniLoadMore
    }
  }
</script>

<style>
  .notice-bar {
    margin: 16rpx 20rpx 14rpx 20rpx;
    border-bottom-width: 2rpx;
    border-color: #E5E5E5;
    border-style: solid;
  }

  .gg-swiper {
    width: 750rpx;
    height: 212rpx;
  }

  .gg-swiper-item {
    align-items: center;
    justify-content: center;
  }

  .gg-swiper-item-img {
    width: 710rpx;
    height: 212rpx;
  }

  .swiper-item {
    width: 750rpx;
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    flex: 1;
  }
</style>
