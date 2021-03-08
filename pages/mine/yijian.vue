<template>
  <view>
    <view class="title">
      <text></text>
      <text>詳情描述（必填）</text>
    </view>
    <textarea class="textarea" placeholder="請詳盡描述遇到的問題，以使我們及時為您解决（10-100個字）" v-model="text"></textarea>
    <view class="imagelist">
      <view class="img-title" @tap="changeimg">
        <image src="../../static/images/113.png"></image>
      </view>
      <image v-for="(item,index) in imagelist" :key="index" :src="item" class="img-title" mode="aspectFill"></image>
    </view>
    <view class="xian"></view>
    <!-- <view class="title">
      <text></text>
      <text>我遇到的问题</text>
    </view>
    <view class="tab-content">
      <text v-for="(item,index) in datas" :key="index">{{item}}</text>
    </view> -->
    <view class="tijiao" @tap="tijiao">
      提交迴響
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        text: '',
        datas: ['無法播放','播放卡頓','標籤錯誤','分類錯誤','蒐索不准','推薦不准','無法下載','其他問題'],
        imagelist: [],
        urls: [],
        imagedata:''
      }
    },
    methods: {
      changeimg() {
        uni.chooseImage({
          sourceType: ['album'],
          success: (res) => {
            this.imagelist = res.tempFilePaths
            this.urls = []
            for (let i = 0; i < this.imagelist.length; i++) {
              this.urls.push({
                name: 'file' + i,
                uri: this.imagelist[i]
              })
            }
          }
        })
      },
      tijiao() {
        if (this.text == "") {
          uni.showToast({
            icon: "none",
            title: "請輸入詳細描述"
          })
          return false
        }
        if(this.imagelist.length > 0){
          this.uploadimg()
        }else{
          uni.showLoading({
            mask:true,
            title:'正在上傳'
          })
          this.uploadtext()
        }
      },
      uploadtext(){
        uni.request({
          url:this.$url + '/api/feedback/add',
          method:"POST",
          header:{
            token:uni.getStorageSync("usertoken")
          },
          data:{
            images:this.imagedata,
            content:this.text
          },
          success: (res) => {
            uni.hideLoading()
            if(res.data.code == 200){
              uni.showToast({
                icon:"none",
                title:"上传成功"
              })
              setTimeout(() => {
                uni.navigateBack()
              },1000)
            }else{
              uni.showToast({
                icon:"none",
                title:"迴響失敗"
              })
            }
            // console.log(res);
          }
        })
      },
      uploadimg(){
        uni.showLoading({
          mask:true,
          title:'正在上傳'
        })
        uni.uploadFile({
          url: this.$url + '/api/community/upload',
          files: this.urls,
          name: 'name',
          success: (res) => {
            if (JSON.parse(res.data).code == 200) {
              this.imagedata = JSON.parse(res.data).data
              this.uploadtext()
            } else {
              uni.hideLoading()
              uni.showToast({
                icon: "none",
                title: "上傳圖片失敗"
              })
            }
        
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .tijiao {
    width: 540rpx;
    height: 88rpx;
    margin: 70rpx auto 0 auto;
    background: rgba(255, 209, 0, 1);
    border-radius: 44rpx;
    text-align: center;
    line-height: 88rpx;
    font-size: 32rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }

  .tab-content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    text {
      display: inline-block;
      width: 200rpx;
      height: 72rpx;
      border-radius: 36rpx;
      border: 2rpx solid rgba(237, 237, 237, 1);
      margin: 0 22rpx 24rpx 22rpx;
      text-align: center;
      line-height: 72rpx;
      font-size: 28rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
  }

  .xian {
    width: 750rpx;
    height: 16rpx;
    background: rgba(245, 246, 248, 1);
  }

  .imagelist {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 32rpx 58rpx;

    .img-title {
      width: 136rpx;
      height: 136rpx;
      border-radius: 6rpx;
      border: 2rpx solid rgba(233, 233, 233, 1);
      display: flex;
      align-items: center;
      justify-content: center;

      image {
        width: 42rpx;
        height: 42rpx;
      }
    }
  }

  .textarea {
    margin: 0 58rpx;
    font-size: 28rpx;
  }

  .title {
    display: flex;
    align-items: center;
    margin: 22rpx 0 38rpx 0;

    text:first-child {
      display: inline-block;
      width: 8rpx;
      height: 30rpx;
      background: rgba(255, 209, 0, 1);
      border-radius: 4rpx;
      margin: 0rpx 8rpx 0 32rpx;
    }

    text:last-child {
      font-size: 32rpx;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(32, 32, 32, 1);
    }
  }
</style>
