
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/start/qidongtu","pages/start/kaiping","pages/start/first","pages/player/buy","pages/notice/notice","pages/player/addplayer","pages/start/start","pages/index/index","pages/player/player","pages/player/video","pages/mine/duihuan","pages/mine/yijian","pages/mine/about","pages/video/guishu","pages/mine/myguanzhu","pages/mine/zaixian","pages/index/gonggao","pages/index/pingxia","pages/mine/viphuiyuan","pages/video/videoinfo","pages/userinfo/userinfo","pages/index/uploadtuwen","pages/video/cilianjieinfo","pages/index/uploadduanwen","pages/index/uploadwenda","pages/index/uploadvideo","pages/index/tuweninfo","pages/index/videoinfo","pages/index/wendainfo","pages/index/duanweninfo","pages/index/seach","pages/video/seach","pages/video/authorinfo","pages/mine/userinfo","pages/mine/tofenxiang","pages/mine/fenxiang","pages/mine/tixian","pages/mine/yinhangka","pages/mine/zhifubao","pages/mine/qianbao","pages/mine/renwu","pages/mine/kefu","pages/video/video","pages/small/small","pages/notice/notice","pages/mine/mine","pages/login/wangji","pages/login/zhuce","pages/login/login"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom","bounce":"none"},"tabBar":{"backgroundColor":"#fff","borderStyle":"black","color":"#CECECE","selectedColor":"#666","iconWidth":"22px","list":[{"pagePath":"pages/index/index","text":"首頁","selectedIconPath":"static/images/10.png","iconPath":"static/images/1.png"},{"pagePath":"pages/video/video","text":"視頻","selectedIconPath":"static/images/6.png","iconPath":"static/images/3.png"},{"pagePath":"pages/player/player","text":"直播","selectedIconPath":"static/images/160.png","iconPath":"static/images/161.png"},{"pagePath":"pages/small/small","text":"抖啪","selectedIconPath":"static/images/7.png","iconPath":"static/images/2.png"},{"pagePath":"pages/mine/mine","text":"我的","selectedIconPath":"static/images/8.png","iconPath":"static/images/4.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"小猪社区","compilerVersion":"2.9.8","entryPagePath":"pages/start/qidongtu","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/start/qidongtu","meta":{"isQuit":true},"window":{}},{"path":"/pages/start/kaiping","meta":{},"window":{}},{"path":"/pages/start/first","meta":{},"window":{}},{"path":"/pages/player/buy","meta":{},"window":{"navigationBarTitleText":"","navigationStyle":"default","navigationBarBackgroundColor":"#FAAE19","navigationBarTextStyle":"white"}},{"path":"/pages/notice/notice","meta":{},"window":{"navigationBarTitleText":"娛樂","navigationStyle":"default","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/player/addplayer","meta":{},"window":{"navigationBarTitleText":"主播认证","navigationStyle":"default"}},{"path":"/pages/start/start","meta":{"isNVue":true},"window":{}},{"path":"/pages/index/index","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"首頁"}},{"path":"/pages/player/player","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/player/video","meta":{"isNVue":true},"window":{"navigationBarTextStyle":"white","softinputMode":"adjustResize","backgroundColor":"#000"}},{"path":"/pages/mine/duihuan","meta":{},"window":{"navigationBarTitleText":"兑换会员","navigationStyle":"default"}},{"path":"/pages/mine/yijian","meta":{},"window":{"navigationBarTitleText":"意見回饋","navigationStyle":"default"}},{"path":"/pages/mine/about","meta":{},"window":{"navigationBarTitleText":"關於社區"}},{"path":"/pages/video/guishu","meta":{},"window":{"navigationBarTitleText":"专题分类","navigationStyle":"default"}},{"path":"/pages/mine/myguanzhu","meta":{},"window":{"navigationBarTitleText":"我的關注","navigationStyle":"default"}},{"path":"/pages/mine/zaixian","meta":{},"window":{"navigationBarTitleText":"線上客服","navigationStyle":"default"}},{"path":"/pages/index/gonggao","meta":{},"window":{"navigationStyle":"custom","animationDuration":200,"animationType":"fade-in","backgroundColor":"rgba(0,0,0,0)","background":"transparent","popGesture":"none"}},{"path":"/pages/index/pingxia","meta":{},"window":{"navigationStyle":"custom","animationDuration":200,"animationType":"fade-in","backgroundColor":"rgba(0,0,0,0)","background":"transparent","popGesture":"none"}},{"path":"/pages/mine/viphuiyuan","meta":{},"window":{"navigationBarTitleText":"vip會員"}},{"path":"/pages/video/videoinfo","meta":{"isNVue":true},"window":{"navigationBarTitleText":"視頻详情","navigationStyle":"custom","navigationBarTextStyle":"white","softinputMode":"adjustResize"}},{"path":"/pages/userinfo/userinfo","meta":{"isNVue":true},"window":{"navigationBarTitleText":"用户详情","titleNView":{"type":"transparent"}}},{"path":"/pages/index/uploadtuwen","meta":{},"window":{"navigationBarTitleText":"上传图文","navigationStyle":"custom"}},{"path":"/pages/video/cilianjieinfo","meta":{},"window":{"navigationBarTitleText":"磁链接详情","navigationStyle":"custom","softinputMode":"adjustResize"}},{"path":"/pages/index/uploadduanwen","meta":{},"window":{"navigationBarTitleText":"上传短文","navigationStyle":"custom"}},{"path":"/pages/index/uploadwenda","meta":{},"window":{"navigationBarTitleText":"上传问答","navigationStyle":"custom"}},{"path":"/pages/index/uploadvideo","meta":{"isNVue":true},"window":{"navigationBarTitleText":"上传視頻","navigationStyle":"custom"}},{"path":"/pages/index/tuweninfo","meta":{},"window":{"navigationBarTitleText":"图文详情","navigationStyle":"custom","softinputMode":"adjustResize"}},{"path":"/pages/index/videoinfo","meta":{"isNVue":true},"window":{"navigationBarTitleText":"視頻详情","navigationStyle":"custom","softinputMode":"adjustResize"}},{"path":"/pages/index/wendainfo","meta":{},"window":{"navigationBarTitleText":"问答详情","navigationStyle":"custom","softinputMode":"adjustResize"}},{"path":"/pages/index/duanweninfo","meta":{},"window":{"navigationBarTitleText":"短文详情","navigationStyle":"custom","softinputMode":"adjustResize"}},{"path":"/pages/index/seach","meta":{"isNVue":true},"window":{"navigationBarTitleText":"首页蒐索","navigationStyle":"custom"}},{"path":"/pages/video/seach","meta":{},"window":{"navigationBarTitleText":"首页蒐索","navigationStyle":"custom"}},{"path":"/pages/video/authorinfo","meta":{},"window":{"navigationBarTitleText":"作者詳情","titleNView":{"type":"transparent"}}},{"path":"/pages/mine/userinfo","meta":{},"window":{"navigationBarTitleText":"個人資訊","navigationStyle":"default"}},{"path":"/pages/mine/tofenxiang","meta":{},"window":{"navigationBarTitleText":"推廣分享獲取永久會員","navigationStyle":"default","navigationBarBackgroundColor":"#FFCB2F","navigationBarTextStyle":"white"}},{"path":"/pages/mine/fenxiang","meta":{},"window":{"navigationBarTitleText":"代理賺錢","navigationStyle":"default","titleNView":{"buttons":[{"text":"分享","fontSize":"14"}]}}},{"path":"/pages/mine/tixian","meta":{},"window":{"navigationBarTitleText":"體現","navigationStyle":"default"}},{"path":"/pages/mine/yinhangka","meta":{},"window":{"navigationBarTitleText":"綁定銀行卡","navigationStyle":"default","titleNView":{"buttons":[{"text":"提交","fontSize":"15px"}]}}},{"path":"/pages/mine/zhifubao","meta":{},"window":{"navigationBarTitleText":"綁定支付寶","navigationStyle":"default","titleNView":{"buttons":[{"text":"提交","fontSize":"15px"}]}}},{"path":"/pages/mine/qianbao","meta":{},"window":{"navigationBarTitleText":"我的錢包","navigationStyle":"default"}},{"path":"/pages/mine/renwu","meta":{},"window":{"navigationBarTitleText":"任務中心","navigationStyle":"default"}},{"path":"/pages/mine/kefu","meta":{},"window":{"navigationBarTitleText":"在綫客服","navigationStyle":"default","softinputMode":"adjustResize"}},{"path":"/pages/video/video","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"視頻"}},{"path":"/pages/small/small","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"抖啪","navigationBarTextStyle":"white","softinputMode":"adjustResize"}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/login/wangji","meta":{},"window":{"navigationStyle":"default","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/login/zhuce","meta":{},"window":{"navigationStyle":"default","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/login/login","meta":{},"window":{"navigationStyle":"default","navigationBarBackgroundColor":"#fff"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
