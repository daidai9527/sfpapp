<template>
  <view>
    <view style="position: relative;">
      <video @tap="playvideo" :initial-time="1" :src="src.video_url" :controls="false" :style="{height:windowheight + 'px'}"
        class="videolist" id="myvideo" :vslide-gesture-in-fullscreen="false" :loop="true" :show-center-play-btn="false"
        @play="videoloadings" @timeupdate="videoloading"></video>
      <view class="fengmian" :style="{height:windowheight + 'px'}" v-if="isshowfengmian">
        <image :src="src.video_image" class="fengmian-img" :style="{height:windowheight + 'px'}" mode="aspectFit"></image>
      </view>
      <image v-if="isshow" src="../../static/images/31.png" mode="aspectFit" class="playicon" :style="{top:windowheight/2-90 + 'px'}"></image>
      <view v-if="islookvideo == 2" class="videolist1" :style="{height:windowheight + 'px'}">
        <text class="no-play-text">免費觀看已用完</text>
        <text class="no-play-text">推送1人即送VIP，可無限疊加</text>
        <text class="no-play-text">開通會員享有更多優惠</text>
        <view class="no-play-butt">
          <text class="no-play-butt1" @tap="totuisong">去推送</text>
          <text class="no-play-butt1" @tap="tovip">開通會員</text>
        </view>
      </view>
      <image v-if="showgg && ggdata" :src="ggdata.image_text" @tap="openurl(ggdata.url)" mode="aspectFit" class="guanggao-img"></image>
      <image v-if="showgg && ggdata" src="../../static/images/120.png" mode="aspectFit" class="gg-close" @tap.stop="closeguanggao"></image>
      <view class="header-img" @tap.stop="touserinfo">
        <image :src="src.avator_image" class="user-img"></image>
        <image src="../../static/images/118.png" mode="aspectFit" class="guanzhu-butt"></image>
      </view>
      <view class="dianzan" @tap.stop="dianzan">
        <image v-if="give == 1" src="../../static/images/121.png" mode="aspectFit" class="dianzan-img"></image>
        <image v-else src="../../static/images/32.png" mode="aspectFit" class="dianzan-img"></image>
        <text class="dianzan-text">{{isdianzan}}</text>
      </view>
      <view class="pinglun" @tap.stop="openpinglun">
        <image src="../../static/images/33.png" mode="aspectFit" class="pinglun-img"></image>
        <text class="pinglun-text">{{src.comment}}</text>
      </view>
      <view class="fenxiang" @tap.stop="tofenxiang">
        <image src="../../static/images/34.png" mode="aspectFit" class="fenxiang-img"></image>
        <text class="fenxiang-text">分享</text>
      </view>
      <!--image src="../../static/images/35.png" mode="aspectFit" class="xiangji" @tap.stop="toupload"></image-->
      <view class="user-view">
        <!-- <image class="user-img" src="../../static/images/27.png" mode="aspectFit"></image> -->
        <view class="user-right">
          <!-- <view class="name">
            <text class="user-name">这是名字</text>
            <text class="guanzhu-butt">關注</text>
          </view> -->
          <view class="video-jianjie">
            <text class="jianjie">{{src.title}}</text>
          </view>
        </view>
      </view>
    </view>
    <uni-popup type="bottom" ref="pinglun" @change="changepopup">
      <view class="pinglun-popup">
        <view class="pinglun-tab">
          <view class="pinglun-tab-left">
            <text class="pinglun-tab-left1">評論</text>
            <!-- <text class="pinglun-tab-left2">(25)</text> -->
          </view>
          <!-- <view class="pinglun-tab-right">
            <text class="pinglun-tab-right1" :class="num == 1 ? 'gaoliang' : ''" @tap="qiehuan(1)">全部</text>
            <text class="pinglun-tab-right1" :class="num == 2 ? 'gaoliang' : ''" @tap="qiehuan(2)">热门</text>
            <text class="pinglun-tab-right1" :class="num == 3 ? 'gaoliang' : ''" @tap="qiehuan(3)">最新</text>
          </view> -->
        </view>
        <scroll-view scroll-y="true" class="scrollheight" @scrolltolower="scrolldown">
          <view class="pinglun-item" v-for="(item,index) in pinglunlist" :key="'id' + index">
            <view class="item-left">
              <view class="item-left-header">
                <image :src="item.avator_image" class="item-left-header1"></image>
              </view>
              <view class="item-left-user">
                <view class="item-left-user-top">
                  <text class="item-left-user-top-name">{{item.name}}</text>
                  <!-- <image src="../../static/images/16.png" class="item-center-img2"></image> -->
                  <image class="item-center-img2" v-if="item.level  ==  0" mode="aspectFit" src="/static/images/142.png"></image>
                  <image class="item-center-img2" v-if="item.level  ==  1" mode="aspectFit" src="/static/images/143.png"></image>
                  <image class="item-center-img2" v-if="item.level  ==  2" mode="aspectFit" src="/static/images/141.png"></image>
                  
                  <!-- <image src="../../static/images/54.png" class="item-center-img1"></image> -->
                  <!-- <image src="../../static/images/111.png" class="item-left-user-top-img"></image> -->
                </view>
                <text class="item-left-user-text">{{item.content}}</text>
                <!-- <text class="item-left-user-time">{{item.creat_time}}</text> -->
              </view>
            </view>
            <view class="item-right">
              <!-- <image src="../../static/images/109.png" class="item-right-img"></image> -->
              <!-- <text class="item-right-text">0</text> -->
            </view>
          </view>
          <uni-load-more :status="more" v-if="pinglunlist.length > 9"></uni-load-more>
        </scroll-view>
        <view class="input-view" :style="{bottom:inputbottom + 'px'}">
          <input v-model="pingluntext" type="text" placeholder="嚴禁留言添加聯系方式，请发送私信" class="input-input" :adjust-position="false" />
          <text @tap="topinglun" class="input-text">發送</text>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
  import uniPopup from "@/components/uni-popup/uni-popup.vue"
  export default {
    props: {
      windowheight: {
        type: Number
      },
      src: {
        type: Object,
        default: () => {
          return {}
        }
      },
      ggdata: {
        type: Object,
        default: () => {
          return {}
        }
      },
      index: {
        type: Number
      },
      inputbottom: {
        type: Number,
        default: 0
      }
    },
    components: {
      uniPopup,
    },
    created() {
      this.myvideo = uni.createVideoContext('myvideo', this)
      this.give = this.src.give
      this.isdianzan = this.src.thumbs
    },
    data() {
      return {
        myvideo: null,
        videotime: 0,
        isshow: true,
        num: 1,
        isshowfengmian: true,
        page: 1,
        url: getApp().globalData.url,
        header: getApp().globalData.header,
        pinglunlist: [],
        more: 'more',
        pingluntext: '',
        isdianzan: 0,
        openurls: getApp().globalData.openurl,
        showgg: true,
        give: 0,
        islookvideo:0
      };
    },
    methods: {
      toupload(e) {
        e.stopPropagation()
        if (uni.getStorageSync("usertoken")) {
          uni.navigateTo({
            url: "/pages/index/uploadvideo"
          })
        } else {
          uni.showToast({
            icon: "none",
            title: "請登入"
          })
        }
      },
      tofenxiang(e) {
        e.stopPropagation()
        if (uni.getStorageSync("usertoken")) {
          uni.navigateTo({
            url: "/pages/mine/tofenxiang"
          })
        } else {
          uni.showToast({
            icon: "none",
            title: "請登入"
          })
        }
      },
      closeguanggao(e) {
        e.stopPropagation()
        this.showgg = false
      },
      openurl(url) {
        this.openurls(url)
      },
      dianzan(e) {
        e.stopPropagation()
        if (!uni.getStorageSync("usertoken")) {
          uni.showToast({
            icon: "none",
            title: "請登入"
          })
          return false
        }
        uni.showLoading({
          mask: true,
          title: "請稍後"
        })
        uni.request({
          url: this.url + '/api/Tvideo/thumbs',
          method: "GET",
          header: {
            token: uni.getStorageSync("usertoken")
          },
          data: {
            id: this.src.id
          },
          success: (res) => {
            uni.hideLoading()
            if (res.data.code == 200) {
              this.give = 1
              this.isdianzan++
            } else {
              uni.showToast({
                icon: "none",
                title: res.data.msg,
                duration: 2000
              })
            }
            // console.log(res.data);
          }
        })
      },
      topinglun() {
        if (this.pingluntext == "") {
          uni.showToast({
            icon: "none",
            title: "請輸入評論"
          })
          return false
        }
        if (uni.getStorageSync("usertoken")) {
          uni.showLoading({
            mask: true,
            title: "請稍後"
          })
          uni.request({
            url: this.url + '/api/comment/addcomment',
            method: "POST",
            header: {
              token: uni.getStorageSync("usertoken")
            },
            data: {
              class: 4,
              community_id: this.src.id,
              content: this.pingluntext
            },
            success: (res) => {
              uni.hideLoading()
              uni.showToast({
                icon: "none",
                title: res.data.msg
              })
              if (res.data.code == 200) {
                this.pingluntext = ""
              }
              // console.log(res.data);
            }
          })
        } else {
          uni.showToast({
            icon: "none",
            title: "請登入"
          })
        }

      },
      scrolldown() {
        this.page++
        this.more = 'loading'
        this.getpinglun()
      },
      qiehuan(val) {
        this.num = val
      },
      getpinglun() {
        uni.request({
          url: this.url + '/api/comment/tvideo',
          data: {
            current: this.page,
            every: 10,
            id: this.src.id,
            num: this.src.comment
          },
          success: (res) => {
            uni.hideLoading()
            if (res.data.data.length > 0) {
              this.pinglunlist = this.pinglunlist.concat(res.data.data)
              this.more = 'more'
            } else {
              this.page--
              this.more = "noMore"
            }
            // this.pinglunlist.concat(res.data.data)
            // console.log(res.data);
          }
        })

      },
      openpinglun(e) {
        e.stopPropagation()
        uni.showLoading({
          mask: true,
          title: "請稍後"
        })
        this.getpinglun()
        this.$refs.pinglun.open()
      },
      touserinfo(e) {
        e.stopPropagation()
        console.log(this.src);
        // uni.navigateTo({
        //   url:'../../pages/userinfo/userinfo?id=' + this.src.user_id + '&isguanzhu=0' + '&class=1'
        // })
      },
      changepopup(e) {
        if (e.show) {
          uni.hideTabBar()
        } else {
          uni.showTabBar()
        }
      },
      videoloadings(e) {
        // console.log(e);
        if (this.isshow) {
          this.myvideo.pause()
        }
      },
      videoloading() {
        // console.log(this.index);
        // this.isshowfengmian = false
        // console.log(this.isshowfengmian);
        this.isshowfengmian = false
        uni.hideLoading()
        if (this.isshow) {
          this.myvideo.pause()
        }
      },
      playvideo() {
        if (this.isshow) {
          this.startplay()
        } else {
          this.isshow = true
          this.myvideo.pause()
        }
      },
      tovip() {
        if (uni.getStorageSync("usertoken")) {
          uni.navigateTo({
            url: "/pages/mine/viphuiyuan"
          })
        } else {
          uni.showToast({
            icon: "none",
            title: "請登入"
          })
        }
      },
      totuisong() {
        if (uni.getStorageSync("usertoken")) {
          uni.navigateTo({
            url: "/pages/mine/fenxiang"
          })
        } else {
          uni.showToast({
            icon: "none",
            title: "請登入"
          })
        }
      },
      videoplay() {
        if (this.isshow) {
          this.myvideo.pause()
        }

      },
      startplay() {
        if(this.islookvideo != 0){
          if(this.islookvideo == 1){
            this.myvideo.play()
            this.isshow = false
          }else{
            this.islookvideo = 2
          }
          return false
        }
        uni.showLoading({
          mask: true,
          title: "請稍後"
        })  
        if (uni.getStorageSync("usertoken")) {
          uni.request({
            url: this.url + '/api/community/edit',
            method: "POST",
            data: {
              class: 0
            },
            header: {
              token: uni.getStorageSync("usertoken")
            },
            success: (res) => {
              console.log(res.data);
              uni.hideLoading()
              if (res.data.code == 200) {
                this.islookvideo = 1
                this.myvideo.play()
                this.isshow = false
              } else {
                this.islookvideo = 2
              }
            }
          })
        } else {
          uni.request({
            url: this.url + '/api/yk/del',
            method: "POST",
            data: {
              code: uni.getStorageSync("youkedata").code,
              class: 0
            },
            success: (res) => {
              console.log(res.data);
              if (res.data.code == 200) {
                this.islookvideo = 1
                this.myvideo.play()
                this.isshow = false
              } else {
                this.islookvideo = 2
              }
            }
          })
        }
       

      },
      stopplay() {
        // this.myvideo.pause()
        this.isshow = true
      },
    }
  }
</script>
<style>
  .gg-close {
    position: absolute;
    width: 60rpx;
    height: 60rpx;
    left: 210rpx;
    bottom: 350rpx;
  }

  .item-center-img1 {
    width: 30rpx;
    height: 26rpx;
    margin-left: 10rpx;
  }

  .item-center-img2 {
    width: 150rpx;
    height: 40rpx;
    margin-left: 10rpx;
  }

  .guanggao-img {
    position: absolute;
    left: 22rpx;
    width: 200rpx;
    height: 200rpx;
    bottom: 160rpx;
  }

  .fengmian {
    width: 750rpx;
    position: absolute;
    top: 0;
    left: 0;
  }

  .fengexian-img {
    width: 750rpx;
  }

  .gaoliang {
    color: #FF6669;
  }

  .pinglun-tab-right1 {
    margin: 0 12rpx;
    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }

  .pinglun-tab-right {
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;

  }

  .pinglun-tab-left2 {
    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .pinglun-tab-left1 {
    font-size: 32rpx;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(32, 32, 32, 1);
  }

  .pinglun-tab-left {
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: flex-end;

  }

  .pinglun-tab {
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16rpx 20rpx 32rpx 20rpx;
  }

  .input-text {
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }

  .input-input {
    width: 614rpx;
    height: 72rpx;
    background-color: rgba(247, 247, 247, 1);
    border-radius: 36rpx;
    padding: 0 0 0 60rpx;
    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(151, 151, 151, 1);
  }

  .input-view {
    position: fixed;
    /* bottom: 0; */
    left: 0;
    width: 750rpx;
    height: 100rpx;
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20rpx;
    background-color: #fff;
  }

  .input-down {
    height: 132rpx;
  }

  .scrollheight {
    height: 700rpx;
  }

  .item-left-user-time {
    font-size: 20rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .item-left-user-text {
    font-size: 32rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    margin-bottom: 8rpx;
  }

  .item-left-user-top-img {
    width: 24rpx;
    height: 24rpx;
    margin-left: 8rpx;
  }

  .item-left-user-top-name {
    font-size: 28rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }

  .item-left-user-top {
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
    margin-bottom: 12rpx;
  }

  .item-left-user {
    width: 540rpx;
    padding-bottom: 20rpx;
    border-bottom-width: 1rpx;
    border-bottom-color: rgba(0,0,0,0.07);
    border-bottom-style: solid;
  }

  .item-left-header1 {
    width: 80rpx;
    height: 80rpx;
    border-radius: 100rpx;

  }

  .item-left-header {
    width: 80rpx;
    height: 80rpx;
    margin-right: 16rpx;
  }

  .item-left {
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    align-items: center;
    flex-direction: row;
  }

  .item-right-text {
    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }

  .item-right-img {
    width: 36rpx;
    height: 36rpx;
    margin-right: 10rpx;
  }

  .item-right {
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
    width: 36rpx;
    height: 36rpx;

  }

  .pinglun-item {
    padding: 0 20rpx;
    margin-bottom: 26rpx;
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .header-img {
    position: absolute;
    right: 20rpx;
    bottom: 600rpx;
    border-radius: 100rpx;
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    flex-direction: column;
    align-items: center;
  }

  .pinglun-popup {
    width: 750rpx;
    height: 886rpx;
    background-color: #fff;
  }

  .user-view {
    position: absolute;
    bottom: 68rpx;
    left: 32rpx;
    flex-direction: row;
    align-items: center;
  }

  .user-right {
    flex-direction: column;
    justify-content: center;
  }

  .video-jianjie {
    margin-left: 16rpx;
  }

  .jianjie {
    font-size: 32rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    width: 350rpx;
    lines: 1;
    text-overflow: ellipsis;
    /* #ifdef H5 */
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    /* #endif */
  }

  .name {
    flex-direction: row;
    align-items: center;
    margin-bottom: 8rpx;
  }

  .user-name {
    color: #fff;
    font-size: 28rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    margin: 0 24rpx 0 16rpx;
  }

  .guanzhu-butt {
    width: 36rpx;
    height: 36rpx;
    border-radius: 100rpx;
    margin-top: -18rpx;
  }

  .user-img {
    width: 100rpx;
    height: 100rpx;
    border-radius: 100rpx;
    border-color: #fff;
    border-width: 2rpx;
    border-style: solid;
  }

  .xiangji {
    width: 60rpx;
    height: 60rpx;
    position: absolute;
    right: 34rpx;
    top: 80rpx;
  }
  .no-play-butt1 {
    margin: 20rpx 10rpx;
    color: #fff;
    border-width: 1rpx;
    border-style: solid;
    border-color: #fff;
    border-radius: 100rpx;
    font-size: 26rpx;
    width: 200rpx;
    height: 50rpx;
    text-align: center;
    line-height: 50rpx;
  }
  
  .no-play-butt {
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  
  .no-play-text {
    color: rgba(255, 255, 255, 0.8);
    font-size: 28rpx;
    margin-bottom: 10rpx;
  }
  .videolist1{
    width: 750rpx;
    position: absolute;
    background-color: #000;
    top: 0;
    left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .videolist {
    width: 750rpx;
    position: relative;
  }

  .playicon {
    position: absolute;
    width: 150rpx;
    height: 150rpx;
    left: 310rpx;
    opacity: 0.6;
  }

  .dianzan {
    width: 70rpx;
    position: absolute;
    right: 36rpx;
    bottom: 460rpx;
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    flex-direction: column;
    align-items: center;
  }

  .dianzan-text {
    color: #fff;
    font-size: 26rpx;
  }

  .dianzan-img {
    width: 64rpx;
    height: 64rpx;
  }

  .pinglun {
    width: 70rpx;
    position: absolute;
    right: 36rpx;
    bottom: 320rpx;
    align-items: center;
  }

  .pinglun-text {
    color: #fff;
    font-size: 26rpx;
  }

  .pinglun-img {
    width: 60rpx;
    height: 60rpx;
  }

  .fenxiang {
    width: 70rpx;
    position: absolute;
    right: 36rpx;
    bottom: 190rpx;
    align-items: center;
  }

  .fenxiang-text {
    color: #fff;
    font-size: 26rpx;
  }

  .fenxiang-img {
    width: 60rpx;
    height: 60rpx;
  }
</style>
