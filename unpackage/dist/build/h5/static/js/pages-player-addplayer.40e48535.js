(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-player-addplayer"],{"02a9":function(t,e,i){t.exports=i.p+"static/img/163.bb5f4f3d.png"},4053:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.buttom[data-v-7b096552]{width:%?686?%;height:%?100?%;background:#bdbdbd;border-radius:%?50?%;text-align:center;line-height:%?100?%;margin:%?50?% auto;font-size:%?36?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff}.shenfenzheng[data-v-7b096552]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?32?%;margin-top:%?40?%}.shenfenzheng .border[data-v-7b096552]{width:%?326?%;height:%?224?%;border-radius:%?10?%;border:%?2?% dashed #bababa;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.shenfenzheng .border uni-text[data-v-7b096552]{font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999}.input-item[data-v-7b096552]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?32?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?100?%}.input-item .title[data-v-7b096552]{font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#202020;width:%?150?%}.input-item uni-input[data-v-7b096552]{font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999;width:%?300?%}.input-item .right[data-v-7b096552]{width:%?186?%;height:%?60?%;border-radius:%?30?%;font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#fff}.input-item .yanzheng[data-v-7b096552]{background-color:#bdbdbd;text-align:center;line-height:%?60?%}.bg-image[data-v-7b096552]{background-color:#f5f6f8;padding:%?34?% 0;width:%?750?%;text-align:center}.bg-image .image[data-v-7b096552]{width:%?418?%;height:%?280?%}',""]),t.exports=e},"6dda":function(t,e,i){var n=i("4053");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0394aa80",n,!0,{sourceMap:!1,shadowMode:!1})},"6eab":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"bg-image"},[n("v-uni-image",{staticClass:"image",attrs:{src:i("02a9")}})],1),n("v-uni-view",{staticClass:"input-item"},[n("v-uni-text",{staticClass:"title"},[t._v("真实姓名")]),n("v-uni-input",{attrs:{type:"text",placeholder:"请输入您的真实姓名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-uni-view",{staticClass:"right"})],1),n("v-uni-view",{staticClass:"input-item"},[n("v-uni-text",{staticClass:"title"},[t._v("身份证")]),n("v-uni-input",{attrs:{type:"text",placeholder:"请输入您的身份证号"},model:{value:t.shenfen,callback:function(e){t.shenfen=e},expression:"shenfen"}}),n("v-uni-view",{staticClass:"right"})],1),n("v-uni-view",{staticClass:"input-item"},[n("v-uni-text",{staticClass:"title"},[t._v("手机号")]),n("v-uni-input",{attrs:{type:"number",placeholder:"请填写手机号"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}}),n("v-uni-view",{staticClass:"right"})],1),n("v-uni-view",{staticClass:"input-item"},[n("v-uni-text",{staticClass:"title"},[t._v("验证码")]),n("v-uni-input",{attrs:{type:"number",placeholder:"请输入验证码"},model:{value:t.yzm,callback:function(e){t.yzm=e},expression:"yzm"}}),n("v-uni-view",{staticClass:"right yanzheng",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sengyzm.apply(void 0,arguments)}}},[t._v("获取验证码")])],1),n("v-uni-view",{staticClass:"shenfenzheng"},[n("v-uni-view",{staticClass:"border",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeimage1.apply(void 0,arguments)}}},[t.image1?t._e():n("v-uni-text",[t._v("+")]),t.image1?t._e():n("v-uni-text",[t._v("身份证正面")]),t.image1?n("v-uni-image",{staticClass:"border",attrs:{src:t.image1}}):t._e()],1),n("v-uni-view",{staticClass:"border",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeimage2.apply(void 0,arguments)}}},[t.image2?t._e():n("v-uni-text",[t._v("+")]),t.image2?t._e():n("v-uni-text",[t._v("身份证反面")]),t.image2?n("v-uni-image",{staticClass:"border",attrs:{src:t.image2}}):t._e()],1)],1),n("v-uni-view",{staticClass:"buttom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tijiao.apply(void 0,arguments)}}},[t._v("提交认证")])],1)},s=[]},"97ac":function(t,e,i){"use strict";var n=i("6dda"),a=i.n(n);a.a},"99a7":function(t,e,i){"use strict";i.r(e);var n=i("e302"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},e302:function(t,e,i){"use strict";i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{name:"",shenfen:"",tel:"",yzm:"",zimage:"",fimage:"",yzm2:"aaa",image1:"",image2:""}},methods:{changeimage1:function(){var t=this;uni.chooseImage({count:1,success:function(e){t.image1=e.tempFilePaths[0]}})},changeimage2:function(){var t=this;uni.chooseImage({count:1,success:function(e){t.image2=e.tempFilePaths[0]}})},sengyzm:function(){var t=this;if(""==this.tel)return uni.showToast({icon:"none",title:"请输入手机号"}),!1;this.$loading(),uni.request({url:this.$url+"/api/user/sendMsm",method:"POST",data:{mobile:this.tel},success:function(e){uni.hideLoading(),uni.showToast({icon:"none",title:"发送成功"}),t.yzm2=e.data}})},tijiao:function(){if(""==this.name)return uni.showToast({icon:"none",title:"请输入姓名"}),!1;var t=this.shenfen.toString();return t.length<18?(uni.showToast({icon:"none",title:"请输入身份证"}),!1):""==this.tel?(uni.showToast({icon:"none",title:"请输入手机号"}),!1):""==this.yzm?(uni.showToast({icon:"none",title:"请输入验证码"}),!1):this.yzm!=this.yzm2?(uni.showToast({icon:"none",title:"验证码不正确"}),!1):""==this.image1?(uni.showToast({icon:"none",title:"请选择身份证正面"}),!1):""==this.image2?(uni.showToast({icon:"none",title:"请选择身份证反面"}),!1):(this.$loading(),void setTimeout((function(){uni.hideLoading(),uni.showToast({icon:"none",title:"提交成功"})}),1e3))}}};e.default=n},f324:function(t,e,i){"use strict";i.r(e);var n=i("6eab"),a=i("99a7");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("97ac");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"7b096552",null,!1,n["a"],o);e["default"]=c.exports}}]);