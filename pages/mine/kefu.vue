<template>
  <view style="padding: 64rpx 0 150rpx 0;">
    <view v-for="(item,index) in contentlist" :key="index">
      <view class="right">
        <view class="text">
          {{item.content}}
        </view>
        <!-- <view class="text-img" v-else>
          <image src="../../static/images/18.png" mode="aspectFit"></image>
        </view> -->
        <lazy class="image" :src="userinfo.avatar_text" borderRadius="100rpx" width="88rpx" height="88rpx"></lazy>
      </view>
      <view v-for="(a,b) in item.returns" :key="b">
        <view class="left">
          <image class="image" src="../../static/WechatIMG3.png" mode="aspectFit"></image>
          <view class="text">
            {{a.content}}
          </view>
        </view>
      </view>


    </view>
    <view class="input">
      <!-- <image src="../../static/images/29.png" mode="aspectFit" @tap="changeimg"></image> -->
      <input type="text" placeholder="請輸入您想說的" v-model="content" />
      <view class="send" @tap="sendtext">
        發送
      </view>
    </view>
  </view>
</template>

<script>
  import lazy from "../../components/lazy-load.vue"
  export default {
    data() {
      return {
        y: 999999,
        num: 10,
        content: '',
        userinfo: [],
        contentlist: []
      };
    },
    components: {
      lazy
    },
    onLoad() {
      this.userinfo = uni.getStorageSync("userinfo")
    },
    mounted() {
      this.getdata()
    },
    methods: {
      getdata() {
        this.$loading()
        uni.request({
          url: this.$url + '/api/leave/index',
          method: "POST",
          header: {
            token: uni.getStorageSync("usertoken")
          },
          success: (res) => {
            uni.hideLoading()
            console.log(res.data); 
            this.contentlist = res.data.data
            setTimeout(() => {
              this.todown()
            },200)
            
          }
        })
      },
      sendtext() {
        if (this.content == "") {
          uni.showToast({
            icon: "none",
            title: "請輸入內容"
          })
          return false
        }
        this.$loading()
        uni.request({
          url: this.$url + '/api/leave/add',
          method: "POST",
          data: {
            content: this.content
          },
          header: {
            token: uni.getStorageSync("usertoken")
          },
          success: (res) => {
            uni.hideLoading()
            uni.showToast({
              icon: "none",
              title: res.data.msg
            })
            if (res.data.code == 200) {
              this.content = ""
              this.getdata()
            }
            // console.log(res.data);
          }
        })
      },
      changeimg() {
        uni.chooseImage({
          count: 1,
          success: (res) => {
            console.log(res);
          }
        })
      },
      onTap() {
        this.num++
        this.y = this.y + 100
        setTimeout(() => {
          uni.pageScrollTo({
            scrollTop: this.y,
            duration: 200
          })
        }, 200)

      },
      todown() {
        uni.pageScrollTo({
          scrollTop: this.y,
          duration: 200
        })
      }
    }
  }
</script>

<style lang="scss">
  .right {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    margin-bottom: 50rpx;

    .image {
      margin: 0 32rpx 0 24rpx;
    }

    .text {
      max-width: 478rpx;
      // height:110px;
      font-size: 28rpx;
      background: #fff;
      border-radius: 12rpx;
      padding: 16rpx 22rpx;
    }

    .text-img {
      border-radius: 12rpx;
      padding: 16rpx 22rpx;
      background-color: #fff;

      image {
        width: 200rpx;
        height: 200rpx;
      }
    }
  }

  .left {
    display: flex;
    align-items: flex-start;
    margin-bottom: 50rpx;

    .image {
      width: 88rpx;
      height: 88rpx;
      border-radius: 100rpx;
      margin: 0 24rpx 0 32rpx;
    }

    .text {
      max-width: 478rpx;
      // height:110px;
      background: #fff;
      font-size: 28rpx;
      border-radius: 12rpx;
      padding: 16rpx 22rpx;
    }
  }

  page {
    background-color: #F8F8F8;
  }

  .input {
    position: fixed;
    width: 702rpx;
    bottom: 0;
    left: 0;
    background-color: #F8F8F8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24rpx;

    input {
      width: 580rpx;
      height: 72rpx;
      background: rgba(247, 247, 247, 1);
      border-radius: 36rpx;
      background-color: #fff;
      text-indent: 48rpx;
      font-size: 24rpx;
    }

    image {
      width: 56rpx;
      height: 48rpx;
    }

    .send {
      font-size: 28rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }
  }
</style>
