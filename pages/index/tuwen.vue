<template>
  <div class="swiper-item">
    <!-- #ifdef APP-NVUE -->
    <list class="swiper-item" @loadmore="scrolldown">
      <refresh @refresh="uploaddata" :display="isupload">
        <text style="text-align: center;font-size: 30rpx;padding-top: 20rpx;">正在加载中...</text>
      </refresh>
      <cell>
        <swiper class="gg-swiper" :autoplay="true" :interval="3000" :circular="true">
          <swiper-item class="gg-swiper-item" v-for="(a,b) in lunbotu" :key="b">
            <image :autoBitmapRecycle="false" class="gg-swiper-item-img" :src="a.image_text" placeholder="../../static/images/51.png"
              @tap="openurl(a)"></image>
          </swiper-item>
        </swiper>
      </cell>
      <cell>
        <uni-notice-bar class="notice-bar" backgroundColor="#fff" color="#999999" :single="true" :scrollable="true"
          showIcon="true" :speed="50" :text="gdt"></uni-notice-bar>
      </cell>
      <cell v-for="(items,index) in toplist" :key="'id'  + index">
        <tuwen :items="items"></tuwen>
      </cell>
      <cell v-for="(items,indexs) in datalist" :key="indexs">
        <tuwen :items="items"></tuwen>
        <guanggao v-if="(indexs + 1)%10 == 0" :items="gglist[((indexs+1)/10-1)%gglist.length]"></guanggao>
      </cell>
      <cell>
        <uni-load-more :status="more"></uni-load-more>
      </cell>
    </list>
    <!-- #endif -->
    <!-- #ifdef H5 -->
    <scroll-view class="swiper-item" scroll-y="true" @scrolltolower="scrolldown">
      <view>
        <swiper class="gg-swiper" :autoplay="true" :interval="3000" :circular="true">
          <swiper-item class="gg-swiper-item" v-for="(a,b) in lunbotu" :key="b">
            <image :autoBitmapRecycle="false" class="gg-swiper-item-img" :src="a.image_text" placeholder="../../static/images/51.png"
              @tap="openurl(a)"></image>
          </swiper-item>
        </swiper>
      </view>
      <view>
        <uni-notice-bar class="notice-bar" backgroundColor="#fff" color="#999999" :single="true" :scrollable="true"
          showIcon="true" :text="gdt"></uni-notice-bar>
      </view>
      <view v-for="(items,index) in toplist" :key="'id'  + index">
        <tuwen :items="items"></tuwen>
      </view>
      <view v-for="(items,indexs) in datalist" :key="indexs">
        <tuwen :items="items"></tuwen>
        <guanggao v-if="(indexs + 1)%10 == 0" :items="gglist[((indexs+1)/10-1)%gglist.length]"></guanggao>
      </view>
      <uni-load-more :status="more"></uni-load-more>
    </scroll-view>
    <!-- #endif -->
  </div>
</template>

<script>
  import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
  import tuwen from './components/tuwen.vue'
  import guanggao from './components/guanggao.vue'
  export default {
    data() {
      return {
        datalist: [],
        url: getApp().globalData.url,
        header: getApp().globalData.header,
        openurls: getApp().globalData.openurl,
        page: 1,
        more: 'more',
        lunbotu: [],
        gglist: [],
        toplist: [],
        gdt: '',
        isupload:'hide'
      }
    },
    created() {
      this.gdt = uni.getStorageSync("gundongtiao")
    },
    methods: {
      uploaddata(){
        this.isupload = 'show'
        uni.request({
          url: this.url + "/api/adv/lb",
          method: "GET",
          data: {
            class: 0
          },
          success: (res) => {
            if (res.data.code == 200) {
              this.lunbotu = res.data.data
            }
            // console.log(res.data);
          },
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
          url: this.url + '/api/community/photo',
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
              this.isupload = 'hide'
            }
          }
        })
      },
      openurl(item) {
        // console.log(item);
        this.openurls(item.url)
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
            url: this.url + "/api/adv/lb",
            method: "GET",
            data: {
              class: 0
            },
            success: (res) => {
              if (res.data.code == 200) {
                this.lunbotu = res.data.data
              }
              // console.log(res.data);
            },
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
          url: this.url + '/api/community/photo',
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
      }
    },
    components: {
      tuwen,
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
    margin-top: 20rpx;
    width: 750rpx;
    height:212rpx;
  }

  .gg-swiper-item {
    align-items: center;
    justify-content: center;
  }

  .gg-swiper-item-img {
    width: 710rpx;
    height: 212rpx;
    border-radius: 10rpx;
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
