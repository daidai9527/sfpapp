<template>
  <view>
    <view class="statusheight"></view>
    <view class="mine-header">
      <view class="userinfo">
        <view class="left">
          <view class="headimg">
            <image src="../../static/images/19.png" mode="aspectFit" class="vipgride"></image>
            <lazy v-if="userdata.avatar" :src="$url + userdata.avatar" borderRadius="100rpx" width="112rpx" height="112rpx"></lazy>
            <lazy v-else :src="youkedata.photo" borderRadius="100rpx" width="112rpx" height="112rpx"></lazy>
          </view>
          <view class="user">
            <view class="user-top">
              <view class="username">
                {{userdata.username ? userdata.username : '遊客模式'}}
              </view>
              <!-- <image src="../../static/images/80.png" mode="aspectFit" class="usergirde"></image> -->
              <!-- <image src="../../static/images/19.png" mode="aspectFit" class="vipgride"></image> -->
            </view>
            <view class="user-down">
              {{usertoken ? 
             (userdata.vip_time < time ? 
             (userdata.bio ? userdata.bio : '这家伙很懒，什么都没有留下') : 
             (userdata.vip_time)) : 
             '未登錄'}}
            </view>
          </view>
          <view class="right" @tap="tologin" v-if="usertoken">
            切換帳號
          </view>
          <view class="right" @tap="tologin" v-else>
            立即登入
          </view>
        </view>
      </view>
      <view class="content-count">
      <!--  <view class="left">
          <view>{{userdata.fensi ? userdata.fensi : 0}}</view>
          <view>粉絲</view>
        </view>
        <view class="left">
          <view>{{userdata.fabu ? userdata.fabu : 0}}</view>
          <view>發佈</view>
        </view> -->
        <view class="left">
          <view>{{userdata.guanzhu ? userdata.guanzhu : 0}}</view>
          <view>關注</view>
        </view>
      </view>
    </view>
    <view class="user-button">
      <view class="butt-top">
       <!-- <view class="butt-item butt-item1">
          <text class="title">我的錢包</text>
          <view class="down">
            <image src="../../static/images/13.png" mode="aspectFit"></image>
            <text>{{userdata.money ? userdata.money : '0.00'}}</text>
          </view>
        </view>
        <view class="butt-item butt-item2">
          <text class="title">累計體現</text>
          <view class="down">
            <image src="../../static/images/132.png" mode="aspectFit"></image>
            <text>0.00</text>
          </view>
        </view> -->
        <view class="butt-item butt-item3">
          <text class="title">累計推廣</text>
          <view class="down">
            <image src="../../static/images/133.png" mode="aspectFit"></image>
            <text>0</text>
          </view>
        </view>
      </view>
      <view class="butt-list">
       <view class="butt-item" @tap="tokefu">
          <image src="../../static/images/12.png" mode="aspectFit"></image>
          <text>在線客服</text>
        </view>
       <!-- <view class="butt-item" @tap="toqianbao">
          <image src="../../static/images/13.png" mode="aspectFit"></image>
          <text>錢包充值</text>
        </view>
        <view class="butt-item" @tap="tovip">
          <image src="../../static/images/127.png" mode="aspectFit"></image>
          <text>開通會員</text>
        </view> -->
        <view class="butt-item" @tap="torenwu">
          <image src="../../static/images/128.png" mode="aspectFit"></image>
          <text>任務中心</text>
        </view>
      </view>
      <view class="butt-list">
        <!-- <view class="butt-item" @tap="toqianbao">
          <image src="../../static/images/129.png" mode="aspectFit"></image>
          <text>提現</text>
        </view>
        <view class="butt-item" @tap="toduihuan">
          <image src="../../static/images/130.png" mode="aspectFit"></image>
          <text>激活碼</text>
        </view> -->
        <view class="butt-item" @tap="totongzhi">
          <image src="../../static/images/131.png" mode="aspectFit"></image>
          <text>消息</text>
        </view>
        <view class="butt-item" @tap="tofenxiang">
          <image src="../../static/images/11.png" mode="aspectFit"></image>
          <text>分享的vip</text>
        </view>
      </view>
    </view>
    <view class="fengexian"></view>
    <view class="jilu">
      <view class="title">
        觀影記錄
      </view>
      <scroll-view scroll-x="true" style="white-space: nowrap;">
        <view class="item" v-for="(item,index) in lishilist" :key="index" @tap="tovideoinfo(item)" v-if="item.video">
          <lazy v-if="item.video" :src="item.video.image_text" borderRadius="8rpx" width="242rpx" height="172rpx"></lazy>
          <view class="name" v-if="item.video">
            {{item.video.title}}
          </view>
        </view>
      </scroll-view>
    </view>
    <view class="fengexian"></view>
    <view class="down-item">
      <view class="left" @tap="toguanzhu">
        <image src="../../static/images/84.png" class="logo"></image>
        <text>我的關注</text>
      </view>
      <image src="../../static/images/81.png" class="right"></image>
    </view>
    <view class="down-item" @tap="toyijian">
      <view class="left">
        <image src="../../static/images/45.png" class="logo"></image>
        <text>意見回饋</text>
      </view>
      <image src="../../static/images/81.png" class="right"></image>
    </view>
    <view class="down-item" @tap="toabout">
      <view class="left">
        <image src="../../static/images/83.png" class="logo"></image>
        <text>關於社區</text>
      </view>
      <image src="../../static/images/81.png" class="right"></image>
    </view>
    <view class="down-item" @tap="touserinfo">
      <view class="left">
        <image src="../../static/images/82.png" class="logo"></image>
        <text>設定中心</text>
      </view>
      <image src="../../static/images/81.png" class="right"></image>
    </view>
  </view>
</template>

<script>
  import lazy from '../../components/lazy-load.vue'
  export default {
    data() {
      return {
        usertoken: '',
        userdata: [],
        youkedata: [],
        lishilist: [],
        time: ''
      };
    },
    components: {
      lazy
    },
    onShow() {
      uni.setTabBarStyle({
        backgroundColor: "#fff",
        selectedColor: "#666"
      })
      this.gettime()
      if (uni.getStorageSync("usertoken")) {
        this.getuserinfo()
        this.getlishi()
      } else {
        this.youke()
      }
    },
    methods: {
      gettime() {
        var year = new Date().getFullYear()
        var month = (new Date().getMonth() + 1) > 9 ? (new Date().getMonth() + 1) : ('0' + (new Date().getMonth() + 1))
        var day = new Date().getDate() > 9 ? new Date().getDate() : '0' + new Date().getDate()
        var hour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours()
        var minutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()
        var seconds = new Date().getSeconds() > 9 ? new Date().getSeconds() : '0' + new Date().getSeconds()
        this.time = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
        // console.log(time);

      },
      toabout() {
        uni.navigateTo({
          url: "./about"
        })
      },
      toyijian() {
        if (uni.getStorageSync("usertoken")) {
          uni.navigateTo({
            url: "./yijian"
          })
        } else {
          uni.showToast({
            icon: "none",
            title: "請登入"
          })
        }
      },
      toduihuan() {
        if (uni.getStorageSync("usertoken")) {
          uni.navigateTo({
            url: "./duihuan"
          })
        } else {
          uni.showToast({
            icon: "none",
            title: "請登入"
          })
        }
      },
      toguanzhu() {
        if (uni.getStorageSync("usertoken")) {
          uni.navigateTo({
            url: "./myguanzhu"
          })
        } else {
          uni.showToast({
            icon: "none",
            title: "請登入"
          })
        }
      },
      tovideoinfo(item) {
        // console.log(item);
        uni.navigateTo({
          url: "../video/videoinfo?id=" + item.videoid
        })
      },
      getlishi() {
        uni.request({
          url: this.$url + '/api/Browse/index',
          method: "GET",
          header: {
            token: uni.getStorageSync("usertoken")
          },
          success: (res) => {
            this.lishilist = res.data.data
            // console.log(res.data);
          }
        })
      },
      youke() {
        // console.log(this.youkedata);
        if (uni.getStorageSync("youkedata")) {
          this.youkedata = uni.getStorageSync("youkedata")
        } else {
          // #ifdef H5
          uni.request({
            url: this.$url + '/api/Yk/pc',
            method: "GET",
            success: (res) => {
              if (res.data.code == 200) {
                this.youkedata = res.data.data
                uni.setStorageSync("youkedata", res.data.data)
              }
              console.log(res.data.code);
            }
          })
          // #endif
        }

      },
      getuserinfo() {
        if (!this.usertoken) {
          uni.showLoading({
            mask: true,
            title: "請稍後"
          })
        }
        uni.request({
          url: this.$url + "/api/user/personal",
          method: "GET",
          header: {
            token: uni.getStorageSync("usertoken")
          },
          success: (res) => {
            uni.hideLoading()
            if (res.data.code == 200) {
              this.userdata = res.data.data
              uni.setStorageSync("userinfo", res.data.data)
              this.usertoken = uni.getStorageSync("usertoken")
            }else{
              uni.clearStorageSync()
            }
            
          }
        })
      },
      totongzhi() {
        uni.switchTab({
          url: "../notice/notice"
        })
      },
      tologin() {
        uni.navigateTo({
          url: "../login/login"
        })
      },
      torenwu() {
        if (uni.getStorageSync("usertoken")) {
          uni.navigateTo({
            url: "renwu"
          })
        } else {
          uni.showToast({
            icon: "none",
            title: "請登入"
          })
        }

      },
      tofenxiang() {
        if (uni.getStorageSync("usertoken")) {
          uni.navigateTo({
            url: "fenxiang"
          })
        } else {
          uni.showToast({
            icon: "none",
            title: "請登入"
          })
        }

      },
      tokefu() {
		 if (uni.getStorageSync("usertoken")) {
        uni.navigateTo({
          url: '../mine/kefu'
        })
		} else {
		  uni.showToast({
		    icon: "none",
		    title: "請登入"
		  })
		}
      },
      toqianbao() {
        if (uni.getStorageSync("usertoken")) {
          uni.navigateTo({
            url: 'qianbao'
          })
        } else {
          uni.showToast({
            icon: "none",
            title: "請登入"
          })
        }

      },
      tovip() {

        if (uni.getStorageSync("usertoken")) {
          uni.navigateTo({
            url: "viphuiyuan"
          })
        } else {
          uni.showToast({
            icon: "none",
            title: "請登入"
          })
        }
      },
      touserinfo() {
        if (uni.getStorageSync("usertoken")) {
          uni.navigateTo({
            url: "userinfo"
          })
        } else {
          uni.showToast({
            icon: "none",
            title: "請登入"
          })
        }

      }
    }
  }
</script>

<style lang="scss">
  .down-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20rpx 36rpx 26rpx 36rpx;

    .left {
      display: flex;
      align-items: center;

      image {
        width: 36rpx;
        height: 36rpx;
        margin-right: 30rpx;
      }

      text {
        font-size: 32rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(32, 32, 32, 1);
      }
    }

    .right {
      width: 16rpx;
      height: 28rpx;
    }
  }

  .jilu {
    padding: 0 32rpx;

    .title {
      padding: 28rpx 0 20rpx 0;
      font-size: 28rpx;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(32, 32, 32, 1);
    }

    .item {
      display: inline-flex;
      flex-direction: column;
      flex-wrap: nowrap;
      width: 242rpx;
      margin-right: 16rpx;

      .name {
        width: 242rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 28rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(32, 32, 0, 1);
        margin-top: 12rpx;
        margin-bottom: 24rpx;
      }
    }
  }

  .dengji-img {
    display: flex;
    align-items: center;
    padding: 20rpx 36rpx;

    image {
      width: 80rpx;
      height: 32rpx;
      margin-right: 16rpx;
    }
  }

  .content-count {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36rpx;

    .left {
      display: flex;
      flex-direction: column;
      width: 150rpx;
      height: 180rpx;
      justify-content: center;
      align-items: center;
      font-size: 28rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(32, 32, 32, 1);

      view {
        margin: 4rpx 0;
      }

    }


  }

  .fengexian {
    width: 750rpx;
    height: 16rpx;
    background: rgba(245, 246, 248, 1);
  }

  .user-button {
    .butt-list {
      display: flex;
      align-items: center;
      justify-content: space-around;

      .butt-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 150rpx;

        image {
          width: 48rpx;
          height: 48rpx;
          margin-bottom: 32rpx;
        }

        text {
          font-size: 30rpx;
          margin-bottom: 28rpx;
        }
      }
    }

    .butt-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 22rpx;
      // margin-top: -82rpx;
      margin-bottom: 32rpx;

      .butt-item1 {
        background: rgba(255, 254, 239, 1);
      }

      .butt-item2 {
        background-color: #EFF7FE;
      }

      .butt-item3 {
        background-color: #FFF5F4;
      }

      .butt-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 220rpx;
        height: 132rpx;

        border-radius: 8rpx;

        .title {
          font-size: 32rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          margin-bottom: 18rpx;
        }

        .down {
          display: flex;
          align-items: center;

          image {
            width: 36rpx;
            height: 36rpx;
            margin-right: 6rpx;
          }

          text {
            font-size: 28rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
          }
        }
      }
    }
  }

  .mine-header {
    // height: 394rpx;

    .vip-card {
      width: 686rpx;
      height: 90rpx;
      margin: 0 auto;
      background: linear-gradient(90deg, rgba(227, 186, 148, 1) 0%, rgba(249, 228, 205, 1) 100%);
      border-radius: 16rpx 16rpx 0rpx 0rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;

      text {
        margin: 0 32rpx;
      }

      text:first-child {
        font-size: 32rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(62, 62, 62, 1);
      }

      text:last-child {
        font-size: 24rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(62, 62, 62, 1);
      }
    }

    .user-count {
      display: flex;
      width: 686rpx;
      margin: 24rpx auto;
      align-items: center;
      justify-content: space-around;

      view {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 28rpx;

        text:last-child {
          color: rgba(153, 153, 153, 1);
        }
      }
    }

    .userinfo {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding-top: 30rpx;
      width: 686rpx;
      margin: 0 auto;

      .left {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;

        // flex-direction: column;
        // width: 686rpx;
        .right {
          border-radius: 10rpx;
          width: 186rpx;
          height: 60rpx;
          text-align: center;
          line-height: 60rpx;
          font-size: 32rpx;
          background-color: #060401;
          color: #fff;
        }

        .user {
          width: 400rpx;

          .user-down {
            // text-align: center;
            font-size: 24rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
          }

          .user-top {
            display: flex;
            align-items: center;

            .username {
              font-size: 32rpx;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: rgba(32, 32, 32, 1);
              overflow: hidden;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
              max-width: 200rpx;
              margin-bottom: 8rpx;
            }

            .usergirde {
              width: 90rpx;
              height: 34rpx;
              margin: 0 10rpx;
            }


          }
        }

        .headimg {
          margin-right: 20rpx;
          margin-top: 24rpx;
          position: relative;

          image {
            width: 112rpx;
            height: 112rpx;
            border-radius: 100rpx;
          }

          .vipgride {
            position: absolute;
            top: -20rpx;
            left: 20rpx;
            width: 76rpx;
            height: 30rpx;
            z-index: 999;
          }
        }
      }

      .right {
        image {
          width: 44rpx;
          height: 44rpx;
        }
      }
    }
  }

  .statusheight {
    height: var(--status-bar-height);
    background-color: #fff;
  }
</style>
