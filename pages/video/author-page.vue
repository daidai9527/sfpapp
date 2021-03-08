<template>
  <view style="width: 750rpx;flex: 1;" class="notnvue">
    <view class="xian"></view>
    <scroll-view class="swiper-item" :scroll-y="true" v-if="author.length > 0">
      <view :class="(index%3 == 0 || (index + 1)%3 == 0) ? 'item' : 'item'" v-for="(item,index) in author" :key="index"
        @tap="toauthor(item)">
        <image class="item-img" :src="item.user.image"></image>
        <text class="item-text">{{item.user.name}}</text>
      </view>
    </scroll-view>
    <view class="notdata" v-if="author.length == 0">
      <image class="notimg" src="/static/images/122.png" mode="aspectFit"></image>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        author: [],
        url: getApp().globalData.url,
        header: getApp().globalData.header,
      }
    },
    methods: {
      toauthor(item) {
        console.log(item);
        uni.navigateTo({
          url: "../userinfo/userinfo?id=" + item.user.id + '&class=' + item.class + '&isguanzhu=1'
        })
      },
      getdata(val) {
        if (!uni.getStorageSync("usertoken")) {
          return false
        }
        if (val == 1) {
          uni.showLoading({
            mask: true,
            title: "請稍後"
          })
        }
        uni.request({
          url: this.url + '/api/community/followindex',
          method: "POST",
          header: {
            token: uni.getStorageSync("usertoken")
          },
          success: (res) => {
            uni.hideLoading()
            this.author = res.data.data
            console.log(res.data);
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .notimg {
    width: 300rpx;
    height: 300rpx;
  }

  .notdata {
    height: 80vh;
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  .xian {
    width: 750rpx;
    height: 16rpx;
    background-color: rgba(245, 246, 248, 1);
  }

  .swiper-item {
    // width: 622rpx;
    // height: 600rpx;
    flex: 1;
    // padding: 0 64rpx;
    flex-direction: row;
    // align-items: center;
    flex-wrap: wrap;
    width: 750rpx;
    padding: 14rpx;
  }

  .item {
    /* #ifdef H5 || APP-VUE */
    display: inline-flex;
    /* #endif */
    flex-direction: column;
    align-items: center;
    width: 178rpx;
    margin-top: 30rpx;

  }

  .item-img {
    width: 100rpx;
    height: 100rpx;
    border-radius: 100rpx;
  }

  .item-text {
    text-align: center;
    width: 136rpx;
    font-size: 32rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    margin-top: 16rpx;
    lines: 1;
    text-overflow: ellipsis;
    /* #ifdef H5 */
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    /* #endif */
  }

  .item-two {
    margin: 30rpx 85rpx 0 85rpx;
    // margin-top: 16rpx;
  }
</style>
