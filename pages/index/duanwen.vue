<template>
  <div class="swiper-item">
    <!-- #ifdef APP-NVUE -->
    <list class="swiper-item" @loadmore="scrolldown">
      <refresh @refresh="uploaddata" :display="isupload">
        <text style="text-align: center;font-size: 30rpx;padding-top: 20rpx;">正在加载中...</text>
      </refresh>
      <cell v-for="(items,indexs) in toplist" :key="'id' + indexs">
        <duanwen :items="items"></duanwen>
      </cell>
      <cell v-for="(items,indexs) in datalist" :key="indexs">
        <duanwen :items="items"></duanwen>
        <guanggao v-if="(indexs + 1)%10 == 0" :items="gglist[((indexs+1)/10-1)%gglist.length]"></guanggao>
      </cell>
      <cell v-if="datalist.length > 5">
        <uni-load-more :status="more"></uni-load-more>
      </cell>
    </list>
    <!-- #endif -->
    <!-- #ifdef H5 -->
    <scroll-view class="swiper-item" scroll-y="true" @scrolltolower="scrolldown">
      <view v-for="(items,indexs) in toplist" :key="'id' + indexs">
        <duanwen :items="items"></duanwen>
      </view>
      <view v-for="(items,indexs) in datalist" :key="indexs">
        <duanwen :items="items"></duanwen>
        <guanggao v-if="(indexs + 1)%10 == 0" :items="gglist[((indexs+1)/10-1)%gglist.length]"></guanggao>
      </view>
      <uni-load-more :status="more" v-if="datalist.length > 5"></uni-load-more>
    </scroll-view>
    <!-- #endif -->
  </div>
</template>

<script>
  import duanwen from './components/duanwen.vue'
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
        gglist: [],
        toplist: [],
        isupload:'hide'
      }
    },
    methods: {
      uploaddata(){
        this.isupload = 'show'
        uni.request({
          url: this.url + "/api/adv/adv",
          method: "GET",
          data: {
            class: 1,
            limit: 999
          },
          success: (res) => {
            this.gglist = res.data.data
            // console.log(res.data);
          }
        })
        var header
        if(uni.getStorageSync("usertoken")){
          header = {
            'content-type': 'application/x-www-form-urlencoded',
            token: uni.getStorageSync("usertoken")
          }
        }else{
          header = {
            'content-type': 'application/x-www-form-urlencoded'
          }
        }
        this.page = 1
        uni.request({
          url: this.url + '/api/community/content',
          method: "POST",
          data: {
            current: this.page,
            every: 10
          },
          header: header,
          success: (res) => {
            uni.hideLoading()
            if (res.data.code == 200) {
              this.toplist = res.data.top
              this.datalist = res.data.data
              if (res.data.data.length > 0) {
                this.more = 'more'
              } else {
                this.more = 'noMore'
              }
            }
            this.isupload = "hide"
          }
        })
      },
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
          uni.request({
            url: this.url + "/api/adv/adv",
            method: "GET",
            data: {
              class: 1,
              limit: 999
            },
            success: (res) => {
              this.gglist = res.data.data
              // console.log(res.data);
            }
          })
        }
        var header
        if(uni.getStorageSync("usertoken")){
          header = {
            'content-type': 'application/x-www-form-urlencoded',
            token: uni.getStorageSync("usertoken")
          }
        }else{
          header = {
            'content-type': 'application/x-www-form-urlencoded'
          }
        }
        uni.request({
          url: this.url + '/api/community/content',
          method: "POST",
          data: {
            current: this.page,
            every: 10
          },
          header: header,
          success: (res) => {
            uni.hideLoading()
            if (res.data.code == 200) {
              this.toplist = res.data.top
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
            // console.log(this.datalist);
            // console.log(res.data);
          }
        })

      },
    },
    components: {
      duanwen,
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
    height: 100%;
    /* #endif */
    /* #ifndef H5 */
    flex: 1;
    /* #endif */
  }
</style>
