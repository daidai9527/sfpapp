<script>
  export default {
    globalData: {
      url: '',
      header: '',
      openurl: null,
      websockerurl:''
    },
    onLaunch: function() {
      // uni.setStorageSync("isfirst", false)

      this.gundong()
      this.startapp()
      // console.log('App Launch')
      // #ifdef H5
      uni.request({
        url: this.$url + '/api/Yk/pc',
        method: "GET",
        success: (res) => {
          if (res.data.code == 200) {
            // this.youkedata = res.data.data
            uni.setStorageSync("youkedata", res.data.data)
          }
          // console.log(res.data.code);
        }
      })
      // #endif
      this.othergg()
      // #ifdef APP-PLUS
      
      plus.device.getInfo({
        success: (e) => {
          // console.log('getDeviceInfo success: ' + JSON.stringify(e));
          uni.request({
            url: this.$url + '/api/Yk/app',
            method: "POST",
            data: {
              code: e.uuid
            },
            success: (res) => {
              if (res.data.code == 200) {
                uni.setStorageSync("youkedata", res.data.data)
              }
              // console.log(res.data);
            }
          })
        }
      });
      // #endif
    },
    onShow: function() {
      getApp().globalData.url = this.$url
      getApp().globalData.header = this.$header
      getApp().globalData.openurl = this.$openurl
      getApp().globalData.websockerurl = this.$websockerurl
      console.log('App Show')
    },
    onHide: function() {
      console.log('App Hide')
    },
    methods: {
      startapp() {
        uni.request({
          url: this.$url + '/api/mom/add',
          method: "GET",
          data: {
            class: uni.getStorageSync("usertoken") ? 1 : 0,
            userid: uni.getStorageSync("usertoken") ? uni.getStorageSync("userinfo").user_id : 0,
          }
        })
      },
      gundong() {
        uni.request({
          url: this.$url + '/api/comment/gdt',
          success: (res) => {
            // console.log(res.data);
            uni.setStorageSync("gundongtiao", res.data.data)
          }
        })
      },
      othergg() {
        uni.request({
          url: this.$url + '/api/adv/others',
          data: {
            class: 1
          },
          success: (res) => {
            
            // console.log(res.data.data);
            var item;
            if(res.data.data.length > 0){
              if(uni.getStorageSync("kaipingindex")){
                var a = uni.getStorageSync("kaipingindex")
                if(a >= res.data.data.length){
                  uni.setStorageSync("kaipingindex",1)
                  item = res.data.data[0]
                }else{
                  a++
                  uni.setStorageSync("kaipingindex",a)
                  item = res.data.data[a - 1]
                }
              }else{
                uni.setStorageSync("kaipingindex",1)
                item = res.data.data[0]
              }
              // #ifdef APP-PLUS
              uni.downloadFile({
                url: item.image_text,
                success: (img) => {
                  console.log(img.tempFilePath);
                  var obj = {
                    url: item.url,
                    image_text: img.tempFilePath
                  }
                  uni.setStorageSync("kaiping", obj)
                },
                fail: () => {
                  uni.setStorageSync("kaiping", item)
                }
              })
              // #endif
              // #ifdef H5
              uni.setStorageSync("kaiping", item)
              // #endif
            }else{
              uni.removeStorageSync("kaiping")
            }
          }
        })
      },
    }
  }
</script>

<style lang="scss">
  /*每个页面公共css */
  // @import "uview-ui/index.scss";
</style>
