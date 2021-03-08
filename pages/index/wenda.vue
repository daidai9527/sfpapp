<template>
  <div class="swiper-item">
    <!-- #ifdef APP-NVUE -->
    <list class="swiper-item" @loadmore="scrolldown">
      <cell v-for="(items,indexs) in toplist" :key="'id' +  indexs">
        <wenda :items="items"></wenda>
      </cell>
      <cell v-for="(items,indexs) in datalist" :key="indexs">
        <wenda :items="items"></wenda>
        <guanggao v-if="(indexs + 1)%10 == 0" :items="gglist[((indexs+1)/10-1)%gglist.length]"></guanggao>
      </cell>
      <cell>
        <uni-load-more :status="more"></uni-load-more>
      </cell>
    </list>
    <!-- #endif -->
    <!-- #ifdef H5 -->
    <scroll-view class="swiper-item" scroll-y="true" @scrolltolower="scrolldown">
      <view v-for="(items,indexs) in toplist" :key="'id' +  indexs">
        <wenda :items="items"></wenda>
      </view>
      <view v-for="(items,indexs) in datalist" :key="indexs">
        <wenda :items="items"></wenda>
        <guanggao v-if="(indexs + 1)%10 == 0" :items="gglist[((indexs+1)/10-1)%gglist.length]"></guanggao>
      </view>
      <uni-load-more :status="more"></uni-load-more>
    </scroll-view>
    <!-- #endif -->
  </div>
</template>

<script>
  import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
  import wenda from './components/wenda.vue'
  import guanggao from './components/guanggao.vue'
  export default {
    data() {
      return {
        datalist: [],
        page:1,
        more:'more',
        url: getApp().globalData.url,
        header: getApp().globalData.header,
        gglist:[],
        toplist:[]
      }
    },
    methods: {
      scrolldown(){
        this.page++
        this.more = "loading"
        this.getdata(0)
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
          uni.request({
            url:this.url + "/api/adv/adv",
            method:"GET",
            data:{
              class:1,
              limit:999
            },
            success: (res) => {
              this.gglist = res.data.data
              // console.log(res.data);
            }
          })
        }
        uni.request({
          url: this.url + '/api/Ask/index',
          method: "POST",
          data: {
            current: this.page,
            every: 10
          },
          header: this.header,
          success: (res) => {
            uni.hideLoading()
            if (res.data.code == 200) {
              this.toplist = res.data.top
              if (res.data.data.length > 0) {
                this.datalist = this.datalist.concat(res.data.data)
                this.more = 'more'
              } else {
                this.more = 'noMore'
                this.page--
              }
              // this.datalist = this.datalist.concat(res.data.data)
            }
            // console.log(this.datalist);
            // console.log(res.data);
          }
        })
      },
    },
    components: {
      wenda,
      guanggao,
      uniLoadMore
    }
  }
</script>

<style>
  .swiper-item {
    width: 750rpx;
    /* #ifdef H5 */
    display: flex;

    /* #endif */
    flex: 1;
  }
</style>
