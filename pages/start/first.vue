<template>
  <view @tap="openurl">
    <lazy image="/static/about.png" :src="guanggao.image_text" width="750rpx" height="100vh"></lazy>
    <view class="time" @tap.stop="toindex">{{time}}</view>
  </view>
</template>

<script>
  import lazy from "@/components/lazy-load.vue"
  export default {
    data() {
      return {
        guanggao: [],
        time: 5,
        daojishi: ''
      }
    },
    onLoad() {
      // this.$loading()
      uni.request({
        url: this.$url + '/api/adv/others',
        data: {
          class: 2
        },
        success: (res) => {
          uni.hideLoading()
          if(res.data.data.length > 0){
            if(uni.getStorageSync("firstguanggao")){
              var a = uni.getStorageSync("firstguanggao")
              if(a >= res.data.data.length){
                uni.setStorageSync("firstguanggao",1)
                this.guanggao = res.data.data[0]
              }else{
                a++
                uni.setStorageSync("firstguanggao",a)
                this.guanggao = res.data.data[a - 1]
              }
            }else{
              uni.setStorageSync("firstguanggao",1)
              this.guanggao = res.data.data[0]
            }
          }
          this.start()
          // console.log(res.data.data);
        }
      })
    },
    methods: {
      openurl(){
        console.log(this.guanggao);
        this.$openurl(this.guanggao.url)
      },
      start() {
        this.daojishi = setInterval(() => {
          this.time--
          if (this.time == 0) {
            this.time = 'X'
            clearInterval(this.daojishi)
          }
        }, 1000)
      },
      toindex() {
        // console.log(this.time);
        if (this.time == 'X') {
          uni.reLaunch({
            url: "../index/index"
          })
        }
      }
    },
    components: {
      lazy
    }
  }
</script>

<style lang="scss">
  .time {
    position: fixed;
    top: 30px;
    right: 20rpx;
    width: 100rpx;
    height: 100rpx;
    border-radius: 100rpx;
    background-color: #dddadf;
    text-align: center;
    line-height: 100rpx;
    font-size: 50rpx;
    z-index: 999;
  }
</style>
