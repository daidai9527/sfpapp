<template>
	<view>
		<view class="item">
			<view class="title">
				頭像
			</view>
			<view class="right" @tap="changeimg">
				<lazy :src="$url + avatarSrc" width="60rpx" height="60rpx" borderRadius="100rpx"></lazy>
				<image src="../../static/images/73.png" class="more"></image>
			</view>
		</view>
		<view class="item">
			<view class="title">
				昵稱
			</view>
			<view class="right">
				<input type="text" v-model="nicheng" />
				<image src="../../static/images/73.png" class="more"></image>
			</view>
		</view>
		<view class="item">
			<view class="title">
				個性簽名
			</view>
			<view class="right">
				<input type="text" v-model="qianming" placeholder="請輸入個性簽名"/>
				<image src="../../static/images/73.png" class="more"></image>
			</view>
		</view>
		<view class="xian"></view>
		<view class="item">
			<view class="title">
				性别
			</view>
			<picker mode="selector" :range="sex" @change="changesex">
				<view class="right">
					<text>{{sex[sexindex]}}</text>
					<image src="../../static/images/73.png" class="more"></image>
				</view>
			</picker>
		</view>
		<view class="item">
			<view class="title">
				地區
			</view>
			<picker mode="date" @change="changetime" start="1900-01-01">
				<view class="right">
					<text>{{timetext}}</text>
					<image src="../../static/images/73.png" class="more"></image>
				</view>
			</picker>
		</view>
		<view class="item">
			<view class="title">
				地區
			</view>
			<view class="right">
				<input type="text" v-model="city" placeholder="請輸入地區"/>
				<image src="../../static/images/73.png" class="more"></image>
			</view>
		</view>
		<view class="item">
			<view class="title">
				性取向
			</view>
			<picker mode="selector" :range="xing" @change="changexing">
				<view class="right">
					<text>{{xing[xingindex]}}</text>
					<image src="../../static/images/73.png" class="more"></image>
				</view>
			</picker>
		</view>
		<view class="item">
			<view class="title">
				婚恋
			</view>
			<picker mode="selector" :range="hunlian" @change="changehunlian">
				<view class="right">
					<text>{{hunlian[hunlianindex]}}</text>
					<image src="../../static/images/73.png" class="more"></image>
				</view>
			</picker>
		</view>
		<view class="item">
			<view class="title">
				交友意向
			</view>
			<view class="right">
				<input type="text" v-model="jiaoyou" placeholder="請輸入交友意向"/>
				<image src="../../static/images/73.png" class="more"></image>
			</view>
		</view>
    <view class="baocun" @tap="tosave">
      保存
    </view>
	</view>
</template>

<script>
	import lazy from "../../components/lazy-load.vue"
	export default {
		data() {
			return {
				url: '',
				avatarSrc: '',
				nicheng: '这是昵稱',
				qianming: '这家伙很懒，什么…',
				sex: ['男', '女'],
				sexindex: 0,
				timetext: '待完善',
				city: '',
				xing: ['未知', '喜歡男', '喜歡女'],
				xingindex: 0,
				hunlian: ['未婚', '已婚', '离异'],
				hunlianindex: 0,
				jiaoyou:'',
        userdata:[]
			}
		},
    onLoad() {
      this.getuserinfo()
    },
		components: {
			lazy
		},
		methods: {
      tosave(){
        uni.showLoading({
          mask:true,
          title:"請稍後"
        })
        uni.request({
          url:this.$url + '/api/user/edit',
          method:"POST",
          header:{
            token:uni.getStorageSync("usertoken")
          },
          data:{
            username:this.nicheng,
            gender:this.sexindex,
            birthday:this.timetext,
            avatar:this.avatarSrc,
            xqx:this.xingindex,
            hl:this.hunlianindex,
            jyyx:this.jiaoyou,
            bio:this.qianming,
            area:this.city
          },
          success: (res) => {
            uni.hideLoading()
            uni.showToast({
              icon:"none",
              title:res.data.msg
            })
            // console.log(res.data);
          }
        })
      },
      getuserinfo(){
        uni.showLoading({
          mask:true,
          title:"請稍後"
        })
        uni.request({
          url:this.$url + '/api/user/personal',
          method:"GET",
          header:{
            token:uni.getStorageSync("usertoken")
          },
          success: (res) => {
            uni.hideLoading()
            this.userdata = res.data.data
            this.nicheng = this.userdata.username
            this.sexindex = this.userdata.gender
            this.timetext = this.userdata.birthday
            this.avatarSrc = this.userdata.avatar
            this.xingindex = this.userdata.xqx ? this.userdata.xqx : 0
            this.hunlianindex = this.userdata.hl ? this.userdata.hl : 0
            this.jiaoyou = this.userdata.jyyx
            this.qianming = this.userdata.bio
            this.city = this.userdata.area
            console.log(res.data);
          }
        })
      },
			changehunlian(e) {
				this.hunlianindex = e.detail.value
			},
			changexing(e) {
				this.xingindex = e.detail.value
			},
			changetime(e) {
				this.timetext = e.detail.value
				// console.log(e.detail.value);
			},
			changesex(e) {
				this.sexindex = e.detail.value
				// console.log(e.detail.value);
			},
			changeimg() {
				uni.chooseImage({
					count: 1,
					success: (res) => {
            uni.showLoading({
              mask:true,
              title:"請稍後"
            })
            uni.uploadFile({
              url:this.$url + '/api/community/upload',
              filePath:res.tempFilePaths[0],
              name:'name',
              success: (res) => {
                uni.hideLoading()
                if(JSON.parse(res.data).code == 200){
                  this.avatarSrc = JSON.parse(res.data).data
                }
                console.log(res);
              },
              fail:() => {
                uni.hideLoading()
                uni.showToast({
                  icon:"none",
                  title:"上傳失敗"
                })
              }
            })
						// this.avatarSrc = res.tempFilePaths[0]
					}
				})
			}
		}
	}
</script>

<style lang="scss">
  .baocun{
    width: 700rpx;
    margin: 50rpx auto;
    border-radius: 20rpx;
    height: 88rpx;
    line-height: 88rpx;
    text-align: center;
    color: #fff;
    font-size: 32rpx;
    background-color: #F0AD4E;
  }
	.xian {
		width: 750rpx;
		height: 16rpx;
		background: rgba(245, 246, 248, 1);
	}

	.item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 22rpx 32rpx;

		.title {
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(32, 32, 32, 1);
		}

		.right {
			display: flex;
			align-items: center;

			.more {
				width: 23rpx;
				height: 23rpx;
				margin-left: 24rpx;
			}

			input,
			text {
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: rgba(102, 102, 102, 1);
				text-align: right;
			}
		}
	}
</style>
