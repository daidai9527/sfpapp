<template>
  <view>
    <image src="../../static/about.png" class="bg-img"></image>
    <view class="center-text">
      <text @tap="openurl">官網地址：{{h5url}}</text>
      <text>版本：{{banben}}</text>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        banben: '',
        h5url:''
      }
    },
    onLoad() {
      // #ifdef APP-PLUS
      // this.banben = plus.runtime.version
      // #endif
      this.getdata()
    },
    methods:{
      getdata(){
        this.$loading()
        uni.request({
          url:this.$url + '/api/edition/index',
          success: (res) => {
            uni.hideLoading()
            console.log(res.data);
            this.h5url = res.data.data.website
            this.banben = res.data.data.version
          }
        })
      },
      openurl(){
        this.$openurl(this.h5url)
      }
    }
  }
</script>

<style lang="scss">
  .center-text{
    position: fixed;
    width: 750rpx;
    height: 100vh;
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text{
      font-size: 30rpx;
    }
  }
  .bg-img {
    position: fixed;
    top: 0;
    left: 0;
    width: 750rpx;
    height: 100vh;
  }
</style>
