(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-wendainfo"],{"02d0":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={uniLoadMore:e("7017").default},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("v-uni-view",{staticClass:"status-bar"}),n("v-uni-view",{staticClass:"tab-header"},[n("v-uni-view",{staticClass:"left",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toback.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:e("5eea")}})],1),n("v-uni-view",{staticClass:"center"},[t._v("问答详情")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"guanzhu",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toguanzhu.apply(void 0,arguments)}}},[t._v("關注")])],1)],1),n("v-uni-view",{staticClass:"bg-height"}),n("v-uni-view",{staticClass:"user-header"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-image",{staticClass:"user-img",attrs:{mode:"aspectFill",src:t.items.avatar_text}}),n("v-uni-view",{staticClass:"user-name"},[t._v(t._s(t.items.name))]),n("v-uni-image",{staticClass:"user-right",attrs:{src:e("b80a")}})],1)],1),n("v-uni-view",{staticClass:"tuwen-title"},[t._v(t._s(t.items.ask_text))]),n("v-uni-view",{staticClass:"image-list"},[n("v-uni-image",{attrs:{src:t.items.ask_texts}})],1),n("v-uni-view",{staticClass:"img-down"},[n("v-uni-view",{staticClass:"left"},[t._v("2小時以前·"+t._s(t.items.browse)+"次觀看")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-image",{attrs:{src:e("c056")},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.dianzan.apply(void 0,arguments)}}}),n("v-uni-text",[t._v(t._s(t.items.fabulous))]),n("v-uni-image",{attrs:{src:e("f27b")}}),n("v-uni-text",[t._v(t._s(t.items.comment))])],1)],1),t._l(t.gglist,(function(i,e){return n("v-uni-view",{key:e,staticClass:"guanggao",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openurl(i)}}},[n("v-uni-image",{attrs:{src:i.image_text}}),n("v-uni-view",[t._v("廣告")])],1)})),n("v-uni-view",{staticClass:"pinglun-header"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-text",[t._v("评论")])],1)],1),t._l(t.answer,(function(i,a){return n("v-uni-view",{key:a+"1",staticClass:"pinglun-item"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-image",{attrs:{src:i.image}})],1),n("v-uni-view",{staticClass:"center"},[n("v-uni-view",{staticClass:"name"},[n("v-uni-text",[t._v(t._s(i.name))])],1),n("v-uni-view",{staticClass:"content"},[t._v(t._s(i.text))])],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-image",{attrs:{src:e("5e17")}})],1)],1)})),n("uni-load-more",{attrs:{status:t.more}}),n("v-uni-view",{staticClass:"down-input"},[n("v-uni-input",{attrs:{type:"text",placeholder:"禁止留言联系方式，请发送私信","adjust-position":!1},model:{value:t.sendtext,callback:function(i){t.sendtext=i},expression:"sendtext"}}),n("v-uni-text",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sendwenda.apply(void 0,arguments)}}},[t._v("发送")])],1),n("v-uni-view",{staticClass:"bg-down"})],2)},s=[]},"1f65":function(t,i,e){"use strict";e.r(i);var n=e("e92f"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"5e17":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAkCAYAAADsHujfAAACoElEQVRYR8XYTUgUYRjA8f+zyWaIRl8YWEYRJNjMUB2iD4KsLtVB6lIRHvIWEYRJhyQKoYtSh65FB09BEvZBl6wO0ScVu1PEskSk0UGQCCWNdJ9417R23dlm1NmZ6zzv+/z2feaded4V5uDSfhbwjZvADqCXOMeljq9BppYgwV6x6tJMhqtT94UPxNksdQz5nX9uIAk6gZacpMI5sWkvNcSU5WAepE9sVpUa8gbYMC1pBdWylgE/mFmXRlPU8JM+lNi0hMJWsXlWGojLaTJ0FEwmNIpNT+iQP9s2hbKyYLIY+8XiXviQJG1o0Z2xRRyehwpRFxvlBUq5Z6IYtWLRHxpE01QxwkuUdZ5JhCEsFoqgoUA0zXx+cB/YWTSB8FRstvlBmJhA21c/Uc4Q3Sh7fSToFIdWH3HZkCmIai4qf0k1xVJGuQVs9zW50IjFnf/E6mQe0SR3UfYVeBmZ2l4Xm2ZzT5OcQrnkCxEs6C1wWDTBMFDhMXYcm7gImRAhpi63DeQLUOP5I2zKRBgPGfLKQN4B9RFDegzkCRTZZqVYkRgd3g/r5BKVBtJkIF0oRyMtTRnrDeQKyonIIMJw9lOgSdpR2iKEPBCbPaIuLWSyzW/hK/xn5II4nDeQ3KNAPidsSBm7pJ6HBnKADN2RrIgwSiWLZDWjou9pYIzeSCDwSBwasl9fTbAReB0R5Kw4XJyAJFmD8jEiyCZxMGciTGkWM8ZgBJABbJb/7UeUebj8Iq8xmoKFt2u6xKFpMk+2Q9Mk31GqCq5KWJAYh8TiRj7kM0ptUYjLMTJcC9Z8eUQLg1SywmzbfMhl4OS086v5n8Oi3tRR0yxjBBeletaYGK1i5b7Ng3XxEwfuM8BulCUzAgmPsThiur5/xweCzCixz0G/AUk9HlPhLikgAAAAAElFTkSuQmCC"},"5eea":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAACm0lEQVRIS63WzWsTQRQA8PcmX1hR0FAQwZvgB0gOghdBIwWpHwgVvSihoFhIyZrdFgqKSERET2ZmVgoeREER7EU9VKyIjXgQwYN/iJIixTYhO08mdEuMs19p5zo7P97szHtvEDYwpqam9iilngPAcQD44HneVRzUq1Qqu9Pp9GcA2NtjLAwETk5O7spkMouIuL83ICJaTQxaljWcSqV0ZAcMu/uRCCyXyztyuZzGDhmw5U6ncyI2aFnWdsbYJ0Q83I8R0R+l1Kjrul9igTMzM9va7fZHADhiwFaJ6LSUclHPRYKlUmlrPp9fAICjhm22ieicEELPd0co6DjOFqXUe0Q8ZsI8zzvvuu5871wgaFlWjjE2j4gjBqwDABc552/654xgrVbLNpvNt4g4avhnHhFdklLOmZLiP3BiYiIzNDT0GgDOGBYoIioJIV4GZdg/YLFYTBcKhTlEHDNERoh4hXP+LCxd18FarcaWlpZeAcAFEwYAZSHE46jc90G0bVtXjcsB2HUhxKMozL82GnsKAOOmBUqpaSnlwzhYF3Qc5w4R3Q5YcJNzfj8u1gWr1epPRMwbFt3jnN9KgnVB27Z/AcDOTQOr1epdRDRGopS6IaV8kCRKfcqbeyh+kYi4NhUhxGycSJNc7GtCiCdRaOzUAwCdx+NCiBexUs//KKw4EFFopQkssGHlCwACa2EgqCciCmxbKTUmpXwXq8D6H4W1ACJqMcbO1ut13bzWx0ab1Irneadc19W9ujsiQf1RWBsFgGUAOMk5/xobXPunYY3+N2NspF6vf48Vob+dsKcIETUBoJgIXIt0mDHWQMSD/SdMRN8SgxrRz7lsNtsAgH29KBGtDARqxPTgJKLBHpx+VGvoLBHpp0qj1WpZfwG1GDelYBDQiwAAAABJRU5ErkJggg=="},"6fde":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.pinglun-item[data-v-0f823809]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:%?34?%}.pinglun-item .right[data-v-0f823809]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.pinglun-item .right uni-image[data-v-0f823809]{width:%?35?%;height:%?35?%}.pinglun-item .right uni-text[data-v-0f823809]{font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999}.pinglun-item .center[data-v-0f823809]{width:%?550?%}.pinglun-item .center .time[data-v-0f823809]{font-size:%?20?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999}.pinglun-item .center .content[data-v-0f823809]{margin:%?6?% 0;font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333}.pinglun-item .center .name[data-v-0f823809]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.pinglun-item .center .name uni-text[data-v-0f823809]{font-size:%?28?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#333}.pinglun-item .center .name uni-image[data-v-0f823809]{width:%?25?%;height:%?25?%}.pinglun-item .left[data-v-0f823809]{width:%?80?%;height:%?80?%;margin-right:%?16?%}.pinglun-item .left uni-image[data-v-0f823809]{width:%?80?%;height:%?80?%;border-radius:%?100?%}.pinglun-item[data-v-0f823809]{padding:0 %?20?%}.pinglun-header[data-v-0f823809]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?12?% %?20?% %?32?% %?20?%}.pinglun-header .left uni-text[data-v-0f823809]:first-child{font-size:%?32?%;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#202020}.pinglun-header .right uni-text[data-v-0f823809]{font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#333;margin:0 %?12?%}.pinglun-header .right .gaoliang[data-v-0f823809]{color:#ff6669!important}.bg-down[data-v-0f823809]{width:%?750?%;height:%?118?%}.down-input[data-v-0f823809]{position:fixed;left:0;bottom:0;width:%?710?%;height:%?118?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?20?%;background:#fff;border:%?2?% solid #e5e5e5}.down-input uni-input[data-v-0f823809]{width:%?614?%;height:%?72?%;background:#f7f7f7;border-radius:%?36?%;text-indent:%?60?%;font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#979797}.down-input uni-text[data-v-0f823809]{font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#666}.guanggao[data-v-0f823809]{width:%?710?%;height:%?160?%;margin:0 auto %?16?% auto;position:relative}.guanggao uni-image[data-v-0f823809]{width:%?710?%;height:%?160?%}.guanggao uni-view[data-v-0f823809]{position:absolute;width:%?108?%;height:%?40?%;background:#000;border-radius:%?4?%;opacity:.53;text-align:center;line-height:%?40?%;font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#fff;right:0;bottom:%?16?%}.img-down[data-v-0f823809]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?20?%;margin-bottom:%?40?%}.img-down .left[data-v-0f823809]{font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999}.img-down .right[data-v-0f823809]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.img-down .right uni-image[data-v-0f823809]{width:%?36?%;height:%?36?%;margin-left:%?26?%;margin-right:%?16?%}.img-down .right uni-text[data-v-0f823809]{font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999}.image-list uni-image[data-v-0f823809]{width:%?750?%;height:%?486?%}.tuwen-title[data-v-0f823809]{padding:0 %?20?%;font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#202020;margin-bottom:%?16?%}.user-header[data-v-0f823809]{height:%?114?%;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.user-header .right[data-v-0f823809]{width:%?164?%;height:%?46?%}.user-header .left[data-v-0f823809]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.user-header .left .user-right[data-v-0f823809]{width:%?40?%;height:%?34?%}.user-header .left .user-name[data-v-0f823809]{font-size:%?28?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#202020;width:%?200?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0 %?16?%}.user-header .left .user-img[data-v-0f823809]{width:%?80?%;height:%?80?%;border-radius:%?100?%}.bg-height[data-v-0f823809]{height:calc(%?88?% + 0px)}.status-bar[data-v-0f823809]{height:0;width:%?750?%;position:fixed;top:0;left:0;background-color:#fff;z-index:10}.tab-header[data-v-0f823809]{width:%?686?%;position:fixed;top:0;left:0;height:%?88?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?32?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background-color:#fff;z-index:10}.tab-header .left[data-v-0f823809],\r\n.tab-header .center[data-v-0f823809],\r\n.tab-header .right[data-v-0f823809]{width:30%}.tab-header .left uni-image[data-v-0f823809]{width:%?18?%;height:%?33?%}.tab-header .center[data-v-0f823809]{text-align:center;font-size:%?32?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#202020}.tab-header .right[data-v-0f823809]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.tab-header .right uni-image[data-v-0f823809]{width:%?44?%;height:%?44?%}.tab-header .right .guanzhu[data-v-0f823809]{width:%?104?%;height:%?50?%;text-align:center;line-height:%?50?%;background-color:#f9d147;text-align:center;line-height:%?50?%;color:#fff;font-size:%?32?%;border-radius:%?100?%}',""]),t.exports=i},"7b39":function(t,i,e){var n=e("6fde");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("b8210d26",n,!0,{sourceMap:!1,shadowMode:!1})},82612:function(t,i,e){"use strict";var n=e("7b39"),a=e.n(n);a.a},b80a:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAADn0lEQVRIS7WWXWibZRTHf+dNk3VLsjlr96EIinObXgiCrM604IWCOPDKjzs/UJkfOMo+ukW9yM2wJYHhcBQURXsn3okfNw6UpcUV8UIY9JPCBOlsu3Ymb7bkTZ4jb2KypHnfJC14Lt/zP8/vOc/zf04i+ITmho+j+pFfnsX8nwSlRE/oPm+NKOgxCcc/9cqL10fNjQxizDlf6Ep+npXcA+V8b3iWnaEHPbXiwjkq4TOfrc83gTU3cgxjPvaFXnfmWM7uq+UFLcPvCO33h8ubEj79eX2+Aay54fcwet4fWphl2W7uTlDdFZmRHcED/nB9Q8LxL6r5Gljt4XdR/cQXulqYYcn27sotcjvfE5kmGjzoDcegvC6R+JcVOaD28NvABVQ975w1Z5ql7H60ovcPUd0bmZJo10P+cHlNImfGRO3ho8CoL/SGM8Xf2QPtobVDVPZGp4gGWsCtV0V/G7pAkedbtLGdEN2tO12XzWMj2L41XYEx0dnzW1i8ehE05ik0gTmi3HZxJzvImBks9fPDRfqjz1Tu+Pd4L7ZzGfT+5nVljbC1o+qHtlxVxSaHmHCTVpgiHD0sjybWbrv61xMP48gEqAtpDAkssY3etlBXYPMXlO5uXkNWEOmTWHK+5uqqSNNDT6PmB9CuhsKSzLHd6uy4M6UFLBpPTqQA8pT0Jy/VLLh+Z5o+8RbKaNOOt1gOXRJs2XWBWzglDyNar8hAcqy+1ntWp0+eQ3WwAaLWPBGpzGe/yOgsllk32eSsDKQ+bLo9rzVUExbj2W9RPVLLqywTsXp8TaYot8w/mHqPyDf0J1+Syo9FQ/hOIr2SiHA9Ow76SK1CAitsw4U3x025hinurktMErjnSXni+E0vecsRqJMf3Es+Pwm6p1xsZIao5f0+M8xhlSoGFLlKSPrkUHLR71bazF7QiaFDmNLPKFsRMQQtQ5BG1ztSoFAM/QfJEpSYPJ76o5Ud2oLdYr106gXEfF2e18ZaICqNz6Xarbsx4TmJpb5vacKOp5ELT596HzVngWuEA7vqahXbrILeCdagDCT9/0TU7aajjqt6TZ/8CtWXsQKrbGVn+XtOl1FzFyKj0p96p12n1fzGwFcSIVazP1Fid81k7tsN6AKxyBGRRPF/AZfv+3K8h6IzTtDah/t2ndI03V0xeWzkRqfQsvE3Iq4d+UT8IKXidxh16OZZ6UstbHSdTYHLnf9y+kVCZOTwyI8bhW66482A1tf8CwvqUVTyHywgAAAAAElFTkSuQmCC"},c056:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAADQUlEQVRYR8WYTWhUVxTHz7nzgWJXjToL051Q+qFgkS4UDVkoxWxkMjn3tnTbImpXgrRFCAh+LcXv7kvefZOkSdFFVilaC4VAA2lBFDSgolE0Kkokk7n/ckNmmBlnxjchmfd273Hu/f/e/9xz3r2PaQUuAGytvczMXwOYUkodEJGp5UzNyxlUOyafz+8qFovXK57PplKp7b29vXdbnX9FgKy13wH4pVKcmYe01rm4gE4C+KlGvJBOpzuz2eyTVqBWyqEBAKZWmJm/0lqPtRVofHw8OTMz84iI1tcKK6UOisiltgKFYdjjnLvaQPS4Maa/rUDW2j8AdNUTVUr1i8jxtgFZa/cD+K2RoFLqBxE53xag4eHhjkKhMAmgswlQVkQaAtcbt6wqA6DCMPwdQE+zt08mk5/kcrlbq+5QEATniOjwe4TeKqU+EJHiqgIFQXCKiH6MIHLDGLM7QlxVSOSULfWbC0T0fUSRE8aYYxFjy2H+K32WiHy1vAPHzDeZ+VtvexAEvhMPRBVg5hdE9CZC/ENmPiIif/pYDoJgjojWNKmUbSIyGYbhN865XyMItBzCzM9FZAMzOw/0mIgyjWZJJBI7+/r6/lpNIK+dTqfXZ7PZZz5ltwB8HDNQQSm11i8ND/Q3gC9jBrptjFk0xafMbw/2xgw0bIzpXQSy1loAEieQUuqYiJwoOXSlWW9px6Ku3Mh5h84AOBqjQ04p9aGIvCyl7GcAi3bVu1bbIWae0lpvLWn7RX2QiPwnIS6gi1rrQ2Wg9zW8NjiU01oPlYGstfsAXIvDIWZGKpXa4Dt0GSifz+8oFos34wAion+MMV9UavPg4OBnCwsL/8YEdNoYU3XA5DAMNznnHsQBxMxdWuvKfwLEY2Nj62ZnZ1/HAPQqk8l0dHd3L1SlzN9YawsAkm3uQ+Xv1ztAQRA8rXcU9oGlsrfWCgDbyMlWnzNzVbmXq2zJoTsANjdzaHR0NDM3N3efiFKtiteJv62U+rTeiWRxH22tbfT3AolEYksul/vPx4Vh2AXgHIAty4Vi5nki2lO7mKscmpiYSE1PT3/uM1Qp5Jx7JiL3asVHRkY+mp+f36iUinxqKc3hnHskIg8bvdD/NoTXNGGQ1rgAAAAASUVORK5CYII="},c39e:function(t,i,e){"use strict";e.r(i);var n=e("02d0"),a=e("1f65");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("82612");var o,g=e("f0c5"),r=Object(g["a"])(a["default"],n["b"],n["c"],!1,null,"0f823809",null,!1,n["a"],o);i["default"]=r.exports},e92f:function(t,i,e){"use strict";e("99af"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{num:1,items:[],page:1,sendtext:"",answer:[],more:"more",gglist:[]}},onLoad:function(t){this.id=t.id,this.getdata()},onReachBottom:function(){this.page++,this.more="loading",this.gethuida()},methods:{openurl:function(t){this.$openurl(t.url)},dianzan:function(){uni.getStorageSync("usertoken")?(this.$loading(),uni.request({url:this.$url+"/api/community/thumbs",method:"GET",header:{token:uni.getStorageSync("usertoken")},data:{id:this.items.id},success:function(t){uni.hideLoading(),200==t.data.code?uni.showToast({icon:"none",title:"點贊成功"}):uni.showToast({icon:"none",title:"點贊失敗"})}})):uni.showToast({icon:"none",title:"請登入"})},toguanzhu:function(){uni.getStorageSync("usertoken")?(this.$loading(),uni.request({url:this.$url+"/api/community/follow",method:"GET",header:{token:uni.getStorageSync("usertoken")},data:{id:this.items.user_id,class:this.items.status},success:function(t){uni.hideLoading(),uni.showToast({icon:"none",title:t.data.msg})}})):uni.showToast({icon:"none",title:"請登入"})},sendwenda:function(){var t=this;return uni.getStorageSync("usertoken")?""==this.sendtext?(uni.showToast({icon:"none",title:"請輸入內容"}),!1):(this.$loading(),void uni.request({url:this.$url+"/api/Ask/huida_add",method:"POST",header:{token:uni.getStorageSync("usertoken")},data:{cid:this.id,text:this.sendtext},success:function(i){uni.hideLoading(),200==i.data.code?(t.sendtext="",uni.showToast({icon:"none",title:i.data.msg})):uni.showToast({icon:"none",title:"发送失败"})}})):(uni.showToast({icon:"none",title:"請登入"}),!1)},gethuida:function(){var t=this;uni.request({url:this.$url+"/api/Ask/detail",method:"POST",data:{id:this.id,current:this.page,every:10},success:function(i){uni.hideLoading(),i.data.data.answer.length>0?(t.more="more",t.answer=t.answer.concat(i.data.data.answer)):(t.page--,t.more="noMore"),console.log(i.data)}})},getdata:function(){var t=this;this.$loading(),uni.request({url:this.$url+"/api/community/xq_community",method:"GET",data:{id:this.id},success:function(i){200==i.data.code&&(t.items=i.data.data),t.gethuida(),t.guanggao(),console.log(i.data)}})},guanggao:function(){var t=this;uni.request({url:this.$url+"/api/adv/adv",data:{class:0,limit:999},success:function(i){t.gglist=i.data.data}})},qiehuan:function(t){this.num=t},toback:function(){uni.navigateBack()}}};i.default=n},f27b:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAEZElEQVRYR+2YXWhcRRTHz5m7zaJuoAVjK6hN9M2Pgt65e2ONEhDSRlJoC4nQhwZRFD/6IGJBbRtRKxSKiB9gUJ8sPnSpIhpSBXEFu2nuzGANiFWQVBSkCRspKY21d+9fJu4ut2E33c1uU5XM03LnzDm/PXPvOf8Zpn/54Dif67rXMvM+APcQ0R1EtGqZ+KeIKBBCfKCUOhyPWQb0PO8+AIcBrF0mqGphPmxtbR3MZrOhNZgH7OrqWjM3N/c9EV1PRCOJRGIoDMMJY8yF5YD1fX9toVDoA3CQiFYz8x6t9f4yoOu6duIZIvrcGLN5OaAqxfB9vzMMw2NEdCGZTN6Uy+Wm5jPouu5xIvITicTd4+Pj9vcVG1LKEQAPEFGfMWZkHlBKeQ7AVS0tLVePjY3NXTG6f1j2A3iemV/QWr9ayiAslDHmoq/6SoC6rruHiF4WQryilNq7AljvLqxksN6MLbT/f2bQ9mgi2imE+COKokOVOkxnZ2d7GIYDzHwqCIIMM89XhvjwPO+2KIq2MPN3WuvRStmuO4M9PT3XzMzMTAC4uegwY4wZWCAybIu0rXJN8flBY8yzcRvf9zeEYRgQUXK+hTHv0lq/1fAWp9PpTYVC4WjMkc1MyhhzrvRMSvkogOGYzZQx5iLRUSrAJRtmVlrrdMOAruta2TURc5xXSrXFtzCdTvcVCoVPYzYntNZ3xoNLKZ8EUM4YM3+itd7aMGCxFQ4BeI6ZzzLzQ0qpMoydB8BSymE7R0S/O44zsLCn9/b2Jqenp62c20JEPziOsy0Igp+aAmiduK67SmsdVnr5S0H6+/tbMpnMX4uVGgs6Ojp6vppN3R9Jo3Wt3vUrgPVmrGnvYKOBa13/X9jivUT0ktWExph9JT14iojWJ5PJ9lwu90ut//Zy2Ekp3wPwMDM/orV+vwT4ERFtI6LHjTHvXI7Atfi0ZWpycvIkgA5mvktr/W0J0Fb0j5k5D8A3xvxci8Nm25ROl8x8oqOjQ2YymUL5DCKlPAJgOxGdEUK8FkXRccdxqh2g5oIg0LUCep53IzO3V7OPosjO7QCwmZkLQojOkv8yoFUt+Xz+bSIarCUwMz+ttX79UrZSytsBfEVEVrItOpj5NICdxpgvyn194QopZS8AK6fWE1Fi4TwzCwAb7XMhxGNKqXerRfV9/9YwDC3cdcz8IwB7B1NpnLF3M8lkctge1uMGSzpmSimfAvAmEUVCiEGl1KEKBfcWZv4GwDpmPtrW1rZ1sR5c7U8uCdA6k1LuBnDAvjNE9KDW+kgpiOd56wAcsyKXmb9MpVJ92Wz2z0ttcaX5JQMWIV8EMGTvUhzH2R4EwWfd3d2rZ2dnvyaiDcwcpFKp+7PZ7NmlwNk1DQEWIQ8A2E1E54UQ/VEUWal/LxGddBynKwiC/FLhmgJYhHwDwK7yl8f8GzNvVEr92ghc0wCtovY8z0I+YRW1EGKTUsoeohoeDW9xnMD3/RvCMDzdzIvPpgI2nK4KDv4GKw9XRRtESC0AAAAASUVORK5CYII="}}]);