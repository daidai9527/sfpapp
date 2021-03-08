<template>
  <view style="display: flex;flex-direction: column;height: 100%;">
    <mescroll-uni ref="mescrollRef" :up="upOption" :down="downOption" @down="downCallback" @up="todown" class="scroll-index">
      <swiper :autoplay="true" :interval="3000" :duration="800" class="gg-swiper" v-if="index == 1">
        <swiper-item style="display: flex;justify-content: center;" v-for="(item,index) in guanggao" :key="index" @tap="openurl(item)">
          <lazy :src="item.image_text" width="710rpx" height="228rpx"></lazy>
          <!-- <image :src="item.image_text" class="gg-img"></image> -->
        </swiper-item>
      </swiper>
      <view class="play-list">
        <view class="play-item" v-for="(a,b) in list" :key="b" @tap="tovideo(a)">
          <lazy :src="index == 0 ? a.anchor.direct.direct_image_text : a.direct_image_text" image="/static/images/162.png"
            borderRadius="20rpx" height="345rpx" width="345rpx"></lazy>
          <!-- <image :src="index == 0 ? a.anchor.direct.direct_image_text : a.direct_image_text" class="fengmian"></image> -->
          <view class="down-detail">
            <text class="name">{{index == 0 ? a.anchor.direct.direct_name : a.direct_name}}</text>
            <view class="down-tab">
              <view class="left">
                <text></text>
                <text>{{a.anchor.name}}</text>
              </view>
              <text class="right">{{index == 0 ? a.anchor.direct.online : a.online}}</text>
            </view>
          </view>
        </view>
      </view>
    </mescroll-uni>
    <!-- <scroll-view scroll-y="true" class="scroll-index" @scrolltolower="todown">
      
    </scroll-view> -->
  </view>
</template>

<script>
  import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
  import lazy from '@/components/lazy-load.vue'
  export default {
    props: {
      ids: {
        type: Number,
        default: 1
      },
      index: {
        type: Number,
        default: 1
      }
    },
    mixins: [MescrollMixin],
    data() {
      return {
        page: 1,
        list: [],
        more: 'more',
        guanggao: [],
        downOption: {
          auto: false //是否在初始化后,自动执行downCallback; 默认true
        },
        upOption: {
          auto: false //是否在初始化后,自动执行downCallback; 默认true
        },
        isliebiao:false,
        isguanzhu:false
      }
    },
    components: {
      lazy
    },
    methods: {
      downCallback() {
        this.page = 1
        this.list = []
        if(this.isguanzhu){
          this.getguanzhu(2)
        }else{
          this.getlist(2)
        }
        // console.log(this.mescroll);
        // this.mescroll.endSuccess();
      },
      openurl(item) {
        console.log(item);
      },
      todown() {
        if (this.index != 0) {
          if (this.more != "noMore") {
            this.more = "loading"
            this.page++
            this.getlist(2)
          }
        }
      },
      getguanzhu(str) {
        this.isguanzhu = true
        if (!uni.getStorageSync("usertoken")) {
          return false
        }
        if (this.list.length != 0 && str == 1) {
          return false
        }
        if (this.list.length == 0 && str == 1) {
          this.$loading()
        }
        uni.request({
          url: this.$url + '/follow',
          method: "POST",
          header: {
            token: uni.getStorageSync("usertoken")
          },
          success: (res) => {
            uni.hideLoading()
            this.list = this.list.concat(res.data.data)
            // if(this.list.length < 9){
            //   this.more = "noMore"
            // }
            this.mescroll.endErr();
            this.mescroll.endSuccess(res.data.data.length);
            // console.log(res.data.data);
          }
        })
      },
      getlbt() {
        uni.request({
          url: this.$url + '/direct/banner',
          success: (res) => {
            this.guanggao = res.data.data
            // console.log(res.data.data);
          }
        })
      },
      getlist(str) {
        this.isliebiao = true
        if (this.list.length != 0 && str == 1) {
          return false
        }
        if (this.list.length == 0 && str == 1) {
          this.$loading()
          this.getlbt()
        }

        uni.request({
          url: this.$url + '/api/direct/index',
          method: "POST",
          data: {
            class: this.ids,
            every: 10,
            current: this.page
          },
          success: (res) => {
            uni.hideLoading()
            this.list = this.list.concat(res.data.data)
            if (this.list.length < 9) {
              this.more = "noMore"
            } else {
              this.more = "more"
            }
            this.mescroll.endErr();
            this.mescroll.endSuccess(res.data.data.length);
            // console.log(res.data.data);
          }
        })
      },
      tovideo(item) {
        // console.log(item);

        uni.request({
          url: this.$url + '/direct/room/' + item.id,
          method: "PUT",
          success: (res) => {
            // console.log(res);
          }
        })
        // return false
        var image = this.index == 0 ? item.anchor.direct.direct_image_text : item.direct_image_text
        var id = this.index == 0 ? item.anchor.direct.id : item.id
        uni.navigateTo({
          url: "./video?id=" + id + '&img=' + image
        })
      }
    }
  }
</script>

<style lang="scss">
  .scroll-index {
    width: 750rpx;
    flex: 1;
    // height: 100%;
    // padding-top: 20rpx;

    .play-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 20rpx 10rpx;

      .play-item {
        width: 345rpx;
        margin: 0 10rpx;
        border-radius: 20rpx;
        overflow: hidden;
        position: relative;
        margin-bottom: 20rpx;

        .fengmian {
          width: 345rpx;
          height: 345rpx;
          border-radius: 20rpx;
        }

        .down-detail {
          border-radius: 20rpx;
          position: absolute;
          bottom: 0rpx;
          left: 0;
          width: 285rpx;
          background-color: rgba(0, 0, 0, 0.2);
          padding: 0 30rpx;
          z-index: 999;
          .name {
            color: #fff;
            font-size: 28rpx;
          }

          .down-tab {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #fff;
            font-size: 24rpx;
            border-radius: 20rpx;

            .left {
              display: flex;
              align-items: center;

              text:first-child {
                width: 10rpx;
                height: 10rpx;
                border-radius: 100rpx;
                display: inline-block;
                background-color: #FF6D6D;
                margin-right: 10rpx;
              }
            }
          }
        }
      }
    }

    .gg-swiper {
      width: 750rpx;
      height: 228rpx;
      margin: 20rpx 0 0 0;

      .gg-img {
        width: 710rpx;
        height: 228rpx;
      }
    }
  }
</style>
