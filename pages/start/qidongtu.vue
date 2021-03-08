<template>
  <view>
    <image src="../../static/about.png" class="qidongtu"></image>
    <uni-popup ref="banben" :maskClick="false">
      <view class="banben-box">
        <image src="../../static/images/126.png" class="banben-bg"></image>
        <view class="banben-content">
          <view class="title">
            發現新版本
          </view>
          <scroll-view scroll-y="true" class="scroll-content">
            <rich-text :nodes="version.content"></rich-text>
          </scroll-view>
          <view class="shengji" v-if="jindu == 1" @tap="xiazia">
            立即陞級
          </view>
          <view class="jindu" v-else-if="jindu == 2">
              <progress class="jindutiao" border-radius="100" stroke-width="20" activeColor="#ffe940" :percent="xiazaidata.progress"
                show-info />
          </view>
          <view class="shengji" v-else-if="jindu == 3" @tap="anzhuang">
            下載完成，去安裝
          </view>
        </view>
        <image src="../../static/images/120.png" class="banben-close" @tap="closebanben"></image>
      </view>
    </uni-popup>
  </view>
</template>

<script>
  import uniPopup from "@/components/uni-popup/uni-popup.vue"
  export default {
    data() {
      return {
        version: [],
        jindu:1,
        xiazaidata:[],
        downapk:''
      }
    },
    components: {
      uniPopup
    },
    onLoad() {
      // #ifdef APP-PLUS
      this.getdata()
      // #endif
      // #ifdef H5
      // setTimeout(() => {
      //   this.$refs.banben.open()
      // },1000)
      
      this.next()
      // #endif
    },
    methods: {
      anzhuang(){
        plus.runtime.install(this.downapk, {}, {}, function(
          error) {
          uni.showToast({
            icon: "none",
            title: '安裝失敗',
            duration: 1500
          });
        })
      },
      xiazia(){
        this.jindu = 2
        var download = uni.downloadFile({
          url:this.version.file_text,
          success: (res) => {
            if(this.xiazaidata.progress == 100){
              this.downapk = res.tempFilePath
              this.jindu = 3
              this.anzhuang()
            }else{
              uni.showToast({
                icon:"none",
                title:"下載失敗"
              })
              this.jindu = 1
            }
            
            // console.log(res.tempFilePath);
          }
        })
        download.onProgressUpdate((res) => {
          this.xiazaidata = res
        })
      },
      closebanben(){
        this.$refs.banben.close()
        this.next()
      },
      next() {
        if (uni.getStorageSync("isfirst")) {
          uni.redirectTo({
            url: "./kaiping"
          })
        } else {
          uni.reLaunch({
            url: "./start"
          })
          uni.setStorageSync("isfirst", true)
        }
      },
      getdata() {
        // this.$loading()
        uni.request({
          url: this.$url + '/api/edition/index',
          success: (res) => {
            uni.hideLoading()
            if (res.data.code == 200) {
              this.version = res.data.data
              if (plus.runtime.version != this.version.version) {
                this.$refs.banben.open()
              } else {
                this.next()
              }
              // console.log(res.data.data);
            } else {
              uni.showToast({
                icon: "none",
                title: "檢查版本失敗"
              })
            }

          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .banben-box{
    width: 602rpx;
    height: 1000rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .banben-bg{
      width: 602rpx;
      height: 830rpx;
    }
    .banben-content{
      width: 602rpx;
      height: 830rpx;
      position: absolute;
      top: 0;
      left: 0;
      
      .title{
        height: 250rpx;
        line-height: 250rpx;
        font-size:40rpx;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(32,32,32,1);
        margin-left: 72rpx;
      }
      .scroll-content{
        height: 400rpx;
        width: 458rpx;
        // background-color: rgba(0,0,0,0.5);
        margin: 0 auto;
      }
      .shengji{
        width:444rpx;
        height:88rpx;
        background:rgba(255,209,0,1);
        border-radius:12rpx;
        line-height: 88rpx;
        text-align: center;
        font-size:32rpx;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(32,32,32,1);
        margin: 40rpx auto;
      }
      .jindu{
        // background-color: rgba(0,0,0,0.5);
        height:88rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40rpx;
      }
      .jindutiao {
        width: 444rpx;
      }
    }
    .banben-close{
      width: 100rpx;
      height: 100rpx;
    }
  }
  .qidongtu {
    width: 750rpx;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
