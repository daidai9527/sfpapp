<template>
  <view>
    <author ref="guanzhu"></author>
  </view>
</template>

<script>
  import author from '../video/author-page.vue'
  export default {
    data() {
      return {

      }
    },
    mounted() {
      this.$refs.guanzhu.getdata(1)
    },
    components: {
      author
    }
  }
</script>

<style lang="scss">

</style>
