<template>
  <view>
    <view class="first-tabbar">
      <view class="item" v-for="(item,index) in author" :key="index" @tap="toauthorinfo(item)">
        <!-- <image :src="item.image_text"></image> -->
        <lazy :src="item.image_text" width="120rpx" height="120rpx" borderRadius="100rpx"></lazy>
        <text>{{item.name}}</text>
      </view>
    </view>
  </view>
</template>

<script>
  import lazy from "@/components/lazy-load.vue"
  export default {
    data() {
      return {
        author: []
      }
    },
    onLoad() {
      this.getdata()
    },
    components: {
      lazy
    },
    methods: {
      toauthorinfo(item) {
        uni.navigateTo({
          url: "./authorinfo?id=" + item.id
        })
      },
      getdata() {
        uni.showLoading({
          mask: true,
          title: "請稍後"
        })
        uni.request({
          url: this.$url + '/api/belong/index',
          method: "get",
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
  .first-tabbar {
    // height: 194rpx;
    width: 720rpx;
    display: flex;
    // white-space: nowrap;
    flex-wrap: wrap;
    align-items: center;
    // justify-content: space-between;
    padding: 10rpx;

    .more {
      text-align: right;
      width: 100%;
      margin-bottom: 12rpx;
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
      width: 178rpx;
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
        font-size: 26rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
      }
    }
  }
</style>
