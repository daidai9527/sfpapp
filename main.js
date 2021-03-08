import Vue from 'vue'
import App from './App'
import '@/js_sdk/ican-H5Api/ican-H5Api.js'
import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

// import uView from "uview-ui";
// Vue.use(uView);
Vue.config.productionTip = false
App.mpType = 'app' 
Vue.component('uni-load-more', uniLoadMore)
// Vue.prototype.$url = 'http://xmm.sht98.vip'//真实
// Vue.prototype.$url = 'http://test.sht98.vip'//演示
Vue.prototype.$url = 'http://178.236.47.25'//客户
// Vue.prototype.$websockerurl = "ws://websocket.sht98.vip:8282"//真实
Vue.prototype.$websockerurl = "ws://178.236.47.25:8282"//客户
Vue.prototype.$header = {
  'content-type': 'application/x-www-form-urlencoded'
}
Vue.prototype.$loading = function(){
  uni.showLoading({
    mask:true,
    title:"請稍後"
  })
}
Vue.prototype.$openurl = function(url){
  // #ifdef APP-PLUS
  plus.runtime.openURL(url)
  // #endif
  // #ifdef H5
  window.location.href = url
  // #endif
  if(uni.getStorageSync("usertoken")){
    uni.request({
      url:this.$url + '/api/adv/click',
      header:{
        token:uni.getStorageSync("usertoken")
      },
      success: (res) => {
        console.log(res);
      }
    })
  }
 
}
const app = new Vue({
  ...App
})
app.$mount()
