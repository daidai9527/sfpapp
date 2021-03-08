<template>
	<view>
		<view class="header">
		  <view class="item">
		    <text>{{money}}</text>
		    <text>余额（元）</text>
		  </view>
      <view class="item">
        <text>{{money}}</text>
        <text>可提现余额（元）</text>
      </view>
		</view>
    <view class="tab-list">
      <text>代理充值</text>
      <text @tap="kefu">在线充值</text>
    </view>
    <view class="buy-list">
      <view @tap="qiehuan(item,index)" class="item" v-for="(item,index) in buylist" :key="index" :class="num == index ? 'gaoliang' : ''">
        <text>到账{{item.price}}</text>
        <text>¥{{item.price}}</text>
      </view>
    </view>
    <view class="title">
      全程专人服务，殿堂级充值体验
    </view>
    <view class="box" @tap="yijian">
      <image src="../../static/images/83.png"></image>
      <text>问题反馈</text>
    </view>
    <view class="bottom" @tap="openbuy">
      立即充值
    </view>
    <uni-popup type="bottom" ref="buytype">
      <view class="buttom-type">
        <view class="pay-item" @tap="pay('alipay')">
          <image src="../../static/images/alipay.png"></image>
          <text>支付寶支付</text>
        </view>
        <view class="pay-item" @tap="pay('wechat')">
          <image src="../../static/images/wechat.png"></image>
          <text>微信支付</text>
        </view>
      </view>
    </uni-popup>
    <uni-popup ref="canvas">
      <canvas canvas-id="pay" class="my-canvas" @tap="saveimg"></canvas>
    </uni-popup>
	</view>
</template>

<script>
  import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		data(){
			return{
				money:'0.00',
        buylist:[],
        num:-1,
        buyitem:null
			}
		},
    components:{
      uniPopup
    },
    onLoad() {
      this.$loading()
      
      this.getbuylist()
    },
    onShow() {
      this.getmoney()
    },
    methods:{
      openbuy(){
        this.$loading()
        uni.request({
          url: this.$url + '/api/County/pay',
          success: (res) => {
            uni.hideLoading()
            if (res.data.data == 1) {
              // uni.showToast({
              //   icon: "none",
              //   title: "暫無充值通道"
              // })
              uni.navigateTo({
                url:"../mine/zaixian"
              })
            } else {
              this.$refs.buytype.open()
            }
          }
        })
      },
      pay(str){
        if(this.buyitem){
          this.$loading()
          uni.request({
            url:this.$url + '/api/order/recharge',
            method:"POST",
            header:{
              token:uni.getStorageSync("usertoken")
            },
            data:{
              list_id:this.buyitem.id,
              pay_type:str
            },
            success: (res) => {
              uni.hideLoading()
              if (str == 'alipay') {
                uni.hideLoading()
                // #ifdef APP-PLUS
                plus.runtime.openURL(res.data.data.jump_url,function(){
                  plus.runtime.openURL(res.data.data.qr)
                })
                // #endif
                // #ifdef H5
                window.location.href = res.data.data.qr
                // #endif
              }else{
                this.canvas = uni.createCanvasContext('pay')
                
                this.canvas.setFillStyle('green')
                // this.canvas.rect(0, 0, 400, 300)
                this.canvas.fillRect(0, 0, 300, 360)
                this.canvas.fill()
                
                this.canvas.setFontSize(22)
                this.canvas.setFillStyle("white")
                this.canvas.fillText('使用微信掃一掃進行支付', 30, 50)
                
                this.canvas.setFillStyle('white')
                this.canvas.fillRect(0, 360, 300, 450)
                // this.canvas.rect(0, 300, 300, 450)
                this.canvas.fill()
                
                this.canvas.setFontSize(28)
                this.canvas.setFillStyle("white")
                this.canvas.fillText('¥100.00', 107, 330)
                
                this.canvas.setFontSize(32)
                this.canvas.setFillStyle("black")
                this.canvas.fillText('微信支付', 90, 415)
                
                this.canvas.drawImage(res.data.data.qr_img, 50, 80, 200, 200)
                this.$refs.canvas.open()
                setTimeout(() => {
                  this.canvas.draw()
                  uni.hideLoading()
                  uni.showToast({
                    icon: "none",
                    title: "點擊保存二維碼"
                  })
                }, 1000)
                
                
              }
              console.log(res.data);
            }
          })
        }else{
          uni.showToast({
            icon:"none",
            title:"请选择充值金额"
          })
        }
      },
      saveimg() {
        uni.canvasToTempFilePath({
          canvasId: 'pay',
          success: (res) => {
            console.log(res.tempFilePath);
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: () => {
                uni.hideLoading()
                uni.showToast({
                  icon: "none",
                  title: "圖片保存成功",
                  success: () => {
      
                    setTimeout(() => {
                      uni.showLoading({
                        mask: true,
                        title: "正在打開微信"
                      })
                      var Intent = plus.android.importClass(
                        "android.content.Intent");
                      var ComponentName = plus.android.importClass(
                        'android.content.ComponentName')
                      var intent = new Intent();
                      intent.setComponent(new ComponentName("com.tencent.mm",
                        "com.tencent.mm.ui.LauncherUI"));
                      intent.putExtra("LauncherUI.From.Scaner.Shortcut", true);
                      intent.setFlags(335544320);
                      intent.setAction("android.intent.action.VIEW");
                      var main = plus.android.runtimeMainActivity();
                      main.startActivity(intent);
                      uni.hideLoading()
                    }, 1000)
                  }
                })
              }
            })
          }
        })
      },
      qiehuan(item,index){
        this.num = index
        this.buyitem = item
      },
      getbuylist(){
        uni.request({
          url:this.$url + '/pay/list',
          success: (res) => {
            uni.hideLoading()
            this.buylist = res.data.data
            console.log(res.data.data);
          }
        })
      },
      kefu(){
        uni.navigateTo({
          url:"../mine/zaixian"
        })
      },
      getmoney(){
        uni.request({
          url:this.$url + '/api/user/money',
          header:{
            token:uni.getStorageSync("usertoken")
          },
          success: (res) => {
            this.money = res.data.data
            // console.log(res.data.data);
          }
        })
      },
      yijian(){
        uni.navigateTo({
          url:"../mine/yijian"
        })
      }
    }
	}
</script>

<style lang="scss">
  .my-canvas {
    width: 300px;
    height: 450px;
  }
  .buttom-type {
    width: 750rpx;
    height: 300rpx;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
  
    .pay-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  
      image {
        width: 120rpx;
        height: 120rpx;
      }
  
      text {
        font-size: 30rpx;
        margin-top: 20rpx;
      }
    }
  }
  
  .bottom{
    position: fixed;
    width:686rpx;
    height:88rpx;
    background:rgba(255,209,0,1);
    border-radius:10rpx;
    text-align: center;
    line-height: 88rpx;
    left: 32rpx;
    bottom: 150rpx;
    font-size:32rpx;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color: #fff;
  }
  .box{
    width:180rpx;
    height:72rpx;
    background:rgba(245,244,249,1);
    border-radius:8rpx;
    margin: 20rpx 0 0 32rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    image{
      width: 32rpx;
      height: 32rpx;
    }
    text{
      font-size:24rpx;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color:rgba(51,51,51,1);
    }
  }
  .title{
    font-size:32rpx;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    margin: 30rpx 0 0 32rpx;
  }
  .buy-list{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 26rpx;
    margin-top: 32rpx;
    .item{
      width:220rpx;
      height:132rpx;
      background:rgba(245,244,249,1);
      border-radius:8rpx;
      margin: 0 5rpx 16rpx 5rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border:2rpx solid rgba(245,244,249,1);
      text:first-child{
        font-size:28rpx;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(102,102,102,1);
      }
      text:last-child{
        font-size:32rpx;
      }
    }
    .gaoliang{
      border:2rpx solid rgba(255,209,0,1);
    }
  }
  .tab-list{
    height: 108rpx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 2rpx solid #ECEAEA;
    text{
      width: 30rpx;
      white-space: nowrap;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size:32rpx;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:500;
      padding: 20rpx 0;
    }
    text:first-child{
      color: #FFD100;
      border-bottom: 4rpx solid #FFD100;
    }
  }
	.header{
    background-color: #FAAE19;
    height: 220rpx;
    display: flex;
    align-items: center;
    .item{
      width: 40%;
      display: flex;
      flex-direction: column;
      text{
        margin-left: 32rpx;
        color: #fff;
      }
      text:first-child{
        font-size:60rpx;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
      }
      text:last-child{
        font-size:28rpx;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
      }
    }
  }
</style>
