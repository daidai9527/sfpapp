<template>
  <view>
    <web-view v-if="webview" :src="webview"></web-view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        url: getApp().globalData.url,
        webview:''
      };
    },
    onLoad() {
      uni.request({
        url: this.$url + '/chat',
        success: (res) => {
          this.webview = res.data.data
          console.log(res.data.data);
        }
      })
    }
  }
</script>

<style lang="scss" scoped="scoped">

</style>
