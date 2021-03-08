<template>
  <view id="jieping" class="fenxiang" style="background: url('../../static/images/138.png') repeat-y;background-size:100% 100%;">
    <!-- <view class="mengceng"></view> -->
    <!-- <view class="status-bar"></view> -->
    <!-- #ifdef H5 -->
    <view class="status-tabbar">
      <text style="color: #fff;font-size: 32rpx;" @tap="toback">返回</text>
      <text style="color: #fff;font-size: 32rpx;margin-right: 40rpx;">推廣分享獲取永久會員</text>
      <text></text>
    </view>
    <!-- #endif -->

    <image :src="userinfo.photo" class="erweima-img"></image>
    <view class="code">
      {{userinfo.number}}
    </view>
    <view class="but">
      <image src="../../static/images/95.png" @tap="baocun"></image>
      <image src="../../static/images/94.png" @tap="fuzhi"></image>
    </view>
    <canvas canvas-id="mycode" class="mycanvas" style="position: fixed;"></canvas>
  </view>
</template>

<script>
  import h5Copy from '@/js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js'

  import html2canvas from "@/js_sdk/html2canvas.js"
  export default {
    data() {
      return {
        userinfo: [],
        fenxiangtext: ''
      }
    },
    components: {},
    onLoad() {
      this.getdata()
    },
    methods: {
      getdata() {
        this.$loading()
        uni.request({
          url: this.$url + '/api/user/qrcode',
          header: {
            token: uni.getStorageSync("usertoken")
          },
          success: (res) => {
            this.userinfo = res.data.data
            uni.request({
              url: this.$url + '/api/task/fxlj',
              success: (text) => {
                uni.hideLoading()
                this.fenxiangtext = text.data.data
                console.log(text.data.data);
              }
            })

            // console.log(res.data);
          }
        })
      },
      fuzhi() {
        // #ifdef H5
        const result = h5Copy(this.fenxiangtext)
        if (result === false) {
          uni.showToast({
            title: '不支持',
          })
        } else {
          uni.showToast({
            title: '複製成功',
            icon: 'none'
          })
        }
        // #endif
        // #ifdef APP-VUE
        uni.setClipboardData({
          data: this.fenxiangtext,
          success: () => {
            uni.showToast({
              icon: "none",
              title: "複製成功"
            })
          }
        })
        // #endif
      },
      toback() {
        uni.navigateBack()
      },
      dataURLtoBlob(dataurl) {
        var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {
          type: mime
        });
      },
      downloadFile(url, name = 'What\'s the fuvk') {
        var a = document.createElement("a")
        a.setAttribute("href", url)
        a.setAttribute("download", name)
        a.setAttribute("target", "_blank")
        let clickEvent = document.createEvent("MouseEvents");
        clickEvent.initEvent("click", true, true);
        a.dispatchEvent(clickEvent);
        uni.request({
          url: this.$url + '/api/task/share',
          header: {
            token: uni.getStorageSync("usertoken")
          },
          success: (res) => {
            console.log(res);
          }
        })
      },
      downloadFileByBase64(base64, name) {
        var myBlob = this.dataURLtoBlob(base64)
        var myUrl = URL.createObjectURL(myBlob)
        this.downloadFile(myUrl, name)
      },
      baocun() {

        // #ifdef H5
        new html2canvas(document.getElementById('jieping')).then(canvas => {
          // canvas为转换后的Canvas对象
          let oImg = new Image();
          oImg.src = canvas.toDataURL(); // 导出图片
          // console.log(canvas.toDataURL());
          this.downloadFileByBase64(canvas.toDataURL(), 'ss')

        });
        // #endif
        // #ifdef APP-PLUS
        this.$loading()
        var canvas = uni.createCanvasContext('mycode')
        uni.getImageInfo({
          src: "../../static/WechatIMG22.png",
          success: (res) => {
            // console.log(res.path);
            canvas.drawImage(res.path, 0, 0, 300, 500)

            canvas.setFillStyle("#000000")
            canvas.setFontSize(14)
            canvas.fillText(this.userinfo.number, 140, 470)

            uni.getImageInfo({
              src: this.userinfo.photo,
              success: (res) => {
                canvas.drawImage(res.path, 210, 420, 60, 60)
                canvas.draw()
                setTimeout(() => {
                  uni.canvasToTempFilePath({
                    canvasId: 'mycode',
                    success: (res) => {
                      // console.log(res.tempFilePath);
                      uni.saveImageToPhotosAlbum({
                        filePath: res.tempFilePath,
                        success: () => {
                          uni.hideLoading()
                          uni.showToast({
                            icon: "none",
                            title: "保存成功"
                          })
                          uni.request({
                            url: this.$url + '/api/task/share',
                            header: {
                              token: uni.getStorageSync("usertoken")
                            },
                            success: (res) => {
                              console.log(res);
                            }
                          })
                          
                        }
                      })
                    }
                  })
                },500)
                
                
              }
            })

          }
        })
        
        // #endif
      }
    }
  }
</script>

<style lang="scss">
  .mycanvas {
    position: fixed;
    width: 300px;
    height: 500px;
    // background-color: #fff;
    
    opacity: 0;
  }

  .bg-img {
    width: 600rpx;
    height: 1000rpx;
    border-radius: 20rpx;
  }

  .but {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 670rpx;
    bottom: 36rpx;
    padding: 0 40rpx;

    image {
      width: 240rpx;
      height: 85rpx;
      opacity: 0;
    }
  }

  .code {
    position: absolute;
    bottom: 13.2vh;
    right: 230rpx;
    font-size: 34rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000;
  }

  .label {
    margin: 16rpx 0 22rpx 0;
    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(87, 76, 23, 1);
  }

  .title {
    padding: 34rpx 0 24rpx 0;
    font-size: 32rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(32, 32, 32, 1);
  }

  .erweima-img {
    position: absolute;
    width: 140rpx;
    height: 140rpx;
    bottom: 13vh;
    right: 70rpx;
  }

  .fenxiang {
    width: 750rpx;
    /* #ifdef H5 */
    height: 100vh;
    // height:calc(100vh - 44px - var(--status-bar-height));
    /* #endif */
    /* #ifdef APP-VUE */
    height: 100vh;
    /* #endif */
    position: relative;
    z-index: 10;


    .status-bar {
      height: var(--status-bar-height);
    }

    .status-tabbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20rpx;
    }
  }
</style>
