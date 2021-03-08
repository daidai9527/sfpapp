<template>
  <view class="guanggao">
    <image src="../../static/images/171.png" mode="aspectFill" class="bgimage"></image>
    <view class="item" v-for="(item,index) in list" :key="index" @tap="openurl(item)">
      <lazy width="160rpx" style="margin-left: 60rpx;border:6rpx solid rgba(255,255,255,1);" :src="item.image_text"
        height="160rpx" borderRadius="32rpx"></lazy>
      <view class="box">
        <view class="name">
          {{item.name}}
        </view>
        <!-- <view class="jianjie">
          简介
        </view> -->
        <view class="kaishi">
          开始
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import lazy from '@/components/lazy-load.vue'
  export default {
    data() {
      return {
        list: []
      }
    },
    onLoad() {
      this.getdata()
    },
    components: {
      lazy
    },
    methods: {
      openurl(item){
        this.$openurl(item.url)
      },
      getdata() {
        this.$loading()
        uni.request({
          url: this.$url + "/api/adv/app",
          success: (res) => {
            uni.hideLoading()
            if (res.data.code == 200) {
              this.list = res.data.data
            } else {
              uni.showToast({
                icon: "none",
                title: "请求失败"
              })
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .bgimage {
    position: fixed;
    top: 0;
    left: 0;
    width: 750rpx;
    height: 100vh;
    z-index: -1;
  }

  .guanggao {
    padding: 0 16rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .item {
      width: 350rpx;
      margin-bottom: 48rpx;

      .box {
        width: 350rpx;
        // height: 250rpx;
        background: linear-gradient(134deg, rgba(193, 88, 71, 1) 0%, rgba(255, 196, 171, 1) 100%);
        border-radius: 28rpx;
        margin-top: -50rpx;
        padding-bottom: 30rpx;
        .name {
          padding: 60rpx 20rpx 0 60rpx;
          font-size: 36rpx;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
        }

        .jianjie {
          font-size: 28rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          padding-left: 60rpx;
        }

        .kaishi {
          width: 156rpx;
          height: 64rpx;
          background: linear-gradient(90deg, #A35B47 0%, #BA745C 100%);
          border-radius: 16rpx;
          // opacity: 0.88;
          text-align: center;
          line-height: 64rpx;
          font-size: 32rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }

        .kaishi {
          margin: 20rpx 0 0 176rpx;

        }
      }
    }
  }
</style>
