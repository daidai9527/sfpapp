<template>
  <div class="swiper-item">
    <!-- #ifdef APP-NVUE -->
    <list class="swiper-item" @scroll="toscroll" @loadmore="scrolldown">
      <refresh @refresh="uploaddata" :display="isupload">
        <text style="text-align: center;font-size: 30rpx;padding-top: 20rpx;">正在加载中...</text>
      </refresh>
      <cell>
        <swiper class="gg-swiper" :autoplay="true" :interval="3000" :circular="true">
          <swiper-item class="gg-swiper-item" v-for="(a,b) in lunbotu" :key="b">
            <image :autoBitmapRecycle="false" class="gg-swiper-item-img" :src="a.image_text" placeholder="../../static/images/51.png"
              @tap="opengg(a)"></image>
          </swiper-item>
        </swiper>
      </cell>
      <cell>
        <uni-notice-bar class="notice-bar" backgroundColor="#fff" color="#999999" :single="true" :scrollable="true"
          showIcon="true" :speed="50" :text="gdt"></uni-notice-bar>
      </cell>
      <cell v-for="(items,indexs) in datalist" :key="indexs">
        <tuwen v-if="items.class == 2" :items="items"></tuwen>
        <shipin v-else-if="items.class == 1" :items="items" :id="'video' + indexs" @playvideo="playvideo('video' + indexs)"
          :ref="'video' + indexs"></shipin>
        <duanwen v-else-if="items.class == 0" :items="items"></duanwen>
        <gome v-else-if="items.class == 3" :items="items"></gome>
        <guanggao v-if="(indexs + 1)%10 == 0" :items="gglist[((indexs+1)/10-1)%gglist.length]"></guanggao>
      </cell>
      <cell>
        <uni-load-more :status="more"></uni-load-more>
      </cell>
    </list>
    <!-- #endif -->
    <!-- #ifdef H5 -->
    <scroll-view class="swiper-item" scroll-y="true" @scroll="toscroll" @scrolltolower="scrolldown">
      <view>
        <swiper class="gg-swiper" :autoplay="true" :interval="3000" :circular="true">
          <swiper-item class="gg-swiper-item" v-for="(a,b) in lunbotu" :key="b">
            <image :autoBitmapRecycle="false" class="gg-swiper-item-img" :src="a.image_text" placeholder="../../static/images/51.png"
              @tap="opengg(a)"></image>
          </swiper-item>
        </swiper>
      </view>
      <view>
        <uni-notice-bar class="notice-bar" backgroundColor="#fff" color="#999999" :single="true" :scrollable="true"
          showIcon="true" :text="gdt"></uni-notice-bar>
      </view>
      <view v-for="(items,indexs) in datalist" :key="indexs">
        <tuwen v-if="items.class == 2" :items="items"></tuwen>
        <shipin v-else-if="items.class == 1" :items="items" :id="'video' + indexs" @playvideo="playvideo('video' + indexs)"
          :ref="'video' + indexs"></shipin>
        <duanwen v-else-if="items.class == 0" :items="items"></duanwen>
        <!-- <gome v-else-if="items.class == 3" :items="items"></gome> -->
        <guanggao v-if="(indexs + 1)%10 == 0" :items="gglist[((indexs+1)/10-1)%gglist.length]"></guanggao>
      </view>
      <uni-load-more :status="more"></uni-load-more>
    </scroll-view>
    <!-- #endif -->
    <!-- <view style="height: 50px;"></view> -->
  </div>
</template>

<script>
  import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
  import tuwen from './components/tuwen.vue'
  import guanggao from './components/guanggao.vue'
  import shipin from './components/video.nvue'
  import duanwen from './components/duanwen.vue'
  import gome from './components/gome.vue'
  export default {
    data() {
      return {
        query: null,
        top: 0,
        bottom: 0,
        height: 0,
        scrolltop: 0,
        videoid: 'video0',
        windowheight: 0,
        url: getApp().globalData.url,
        header: getApp().globalData.header,
        openurl: getApp().globalData.openurl,
        datalist: [],
        more: 'more',
        page: 1,
        lunbotu: [],
        gglist: [],
        gdt: '',
        isupload: 'hide'
      }
    },
    created() {
      this.gdt = uni.getStorageSync("gundongtiao")
      this.windowheight = uni.getSystemInfoSync().screenHeight
    },
    components: {
      tuwen,
      guanggao,
      shipin,
      duanwen,
      gome,
      uniLoadMore
    },
    methods: {
      uploaddata() {
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
          }
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
        if (uni.getStorageSync("usertoken")) {
          header = {
            'content-type': 'application/x-www-form-urlencoded',
            token: uni.getStorageSync("usertoken")
          }
        } else {
          header = {
            'content-type': 'application/x-www-form-urlencoded'
          }
        }
        this.page = 1
        uni.request({
          url: this.url + '/api/community/index',
          method: "POST",
          data: {
            current: this.page,
            every: 10
          },
          header: header,
          success: (res) => {
            if (res.data.code == 200) {
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
      opengg(item) {
        this.openurl(item.url)
        // console.log(item);

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
            }
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
        if (uni.getStorageSync("usertoken")) {
          header = {
            'content-type': 'application/x-www-form-urlencoded',
            token: uni.getStorageSync("usertoken")
          }
        } else {
          header = {
            'content-type': 'application/x-www-form-urlencoded'
          }
        }
        uni.request({
          url: this.url + '/api/community/index',
          method: "POST",
          data: {
            current: this.page,
            every: 10
          },
          header: header,
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
            // console.log(this.datalist);
            // console.log(res.data);
          }
        })

      },
      toscroll(e) {
        // console.log(e);
        // console.log((e.contentOffset.y*-1)-this.scrolltop);
        if (this.top != 0) {
          // #ifdef APP-NVUE
          var jieguo = e.contentOffset.y * -1 - this.scrolltop
          // #endif
          // #ifdef H5
          var jieguo = e.detail.scrollTop - this.scrolltop
          // #endif
          if (jieguo > 0) {
            if (jieguo > (this.top - 120)) {
              this.$refs[this.videoid][0].pausevideo()
              this.top = 0
              // uni.showModal({
              //   content: "ok"
              // })
            }
          } else {
            // console.log(jieguo, this.bottom);
            if ((jieguo * -1) > (this.bottom)) {
              this.$refs[this.videoid][0].pausevideo()
              this.top = 0
              // uni.showModal({
              //   content: "ok"
              // })
            }
          }

        } else {
          // #ifdef APP-NVUE
          this.scrolltop = e.contentOffset.y * -1
          // #endif
          // #ifdef H5
          this.scrolltop = e.detail.scrollTop
          // #endif
        }
        // console.logb(e.contentOffset.y * -1);
      },
      pausevideo() {
        if (this.$refs[this.videoid]) {
          this.$refs[this.videoid][0].pausevideo()
        }

      },
      playvideo(id) {
        if (this.videoid != id) {
          if (this.$refs[this.videoid]) {
            this.$refs[this.videoid][0].pausevideo()
          }
        }

        this.videoid = id
        this.query = uni.createSelectorQuery().in(this);
        this.query.select('#' + id).boundingClientRect(data => {
          this.top = data.top == 0 ? 1 : data.bottom
          this.height = data.height
          this.bottom = this.windowheight - data.top - 20
          // console.log("得到布局位置信息" + JSON.stringify(data));
        }).exec();

      }
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
    margin-top: 20rpx;
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
