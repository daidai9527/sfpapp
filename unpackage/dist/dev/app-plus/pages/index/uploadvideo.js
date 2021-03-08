"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 100);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!******************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/main.js?{"type":"appStyle"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),

/***/ 100:
/*!*************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/main.js?{"page":"pages%2Findex%2Fuploadvideo"} ***!
  \*************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_index_uploadvideo_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/index/uploadvideo.nvue?mpType=page */ 101);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_index_uploadvideo_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_index_uploadvideo_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/index/uploadvideo'\n        _pages_index_uploadvideo_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_index_uploadvideo_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsaUZBQUc7QUFDWCxRQUFRLGlGQUFHO0FBQ1gsUUFBUSxpRkFBRztBQUNYLGdCQUFnQixpRkFBRyIsImZpbGUiOiIxMDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2luZGV4L3VwbG9hZHZpZGVvLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcbiAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvaW5kZXgvdXBsb2FkdmlkZW8nXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///100\n");

/***/ }),

/***/ 101:
/*!*******************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/index/uploadvideo.nvue?mpType=page ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uploadvideo_nvue_vue_type_template_id_22d7f03a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploadvideo.nvue?vue&type=template&id=22d7f03a&mpType=page */ 102);\n/* harmony import */ var _uploadvideo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploadvideo.nvue?vue&type=script&lang=js&mpType=page */ 104);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uploadvideo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uploadvideo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uploadvideo.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 106).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uploadvideo.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 106).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uploadvideo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uploadvideo_nvue_vue_type_template_id_22d7f03a_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uploadvideo_nvue_vue_type_template_id_22d7f03a_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"0e62cf98\",\n  false,\n  _uploadvideo_nvue_vue_type_template_id_22d7f03a_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/uploadvideo.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0k7QUFDcEk7QUFDMkU7QUFDTDtBQUN0RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDBFQUFpRTtBQUNySCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMEVBQWlFO0FBQzFIOztBQUVBOztBQUVBO0FBQ2tOO0FBQ2xOLGdCQUFnQiwyTUFBVTtBQUMxQixFQUFFLDZGQUFNO0FBQ1IsRUFBRSxrR0FBTTtBQUNSLEVBQUUsMkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VwbG9hZHZpZGVvLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjJkN2YwM2EmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VwbG9hZHZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdXBsb2FkdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdXBsb2FkdmlkZW8ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91cGxvYWR2aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi/ngavni5DkuIvovb0vSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjBlNjJjZjk4XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L3VwbG9hZHZpZGVvLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///101\n");

/***/ }),

/***/ 102:
/*!*************************************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/index/uploadvideo.nvue?vue&type=template&id=22d7f03a&mpType=page ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uploadvideo_nvue_vue_type_template_id_22d7f03a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uploadvideo.nvue?vue&type=template&id=22d7f03a&mpType=page */ 103);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uploadvideo_nvue_vue_type_template_id_22d7f03a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uploadvideo_nvue_vue_type_template_id_22d7f03a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uploadvideo_nvue_vue_type_template_id_22d7f03a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uploadvideo_nvue_vue_type_template_id_22d7f03a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 103:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/index/uploadvideo.nvue?vue&type=template&id=22d7f03a&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c("view", [
        _c("view", {
          staticClass: ["status-bar"],
          style: { height: _vm.statusheight + "px" }
        }),
        _c(
          "view",
          {
            staticClass: ["status-tabbar"],
            style: { top: _vm.statusheight + "px" }
          },
          [
            _c("u-image", {
              staticClass: ["back-img"],
              attrs: { src: "../../static/images/108.png" },
              on: { click: _vm.toback }
            }),
            _c("u-text", { staticClass: ["status-tabbar-title"] }, [
              _vm._v("發佈內容")
            ]),
            _c("u-image", {
              staticClass: ["submit-img"],
              attrs: { src: "../../static/images/112.png" },
              on: { click: _vm.tijiao }
            })
          ],
          1
        ),
        _c("view", {
          staticClass: ["header-bg"],
          style: { height: 44 + _vm.statusheight + "px" }
        }),
        _c(
          "view",
          { staticClass: ["input-title"] },
          [
            _c("u-input", {
              staticClass: ["input-input"],
              attrs: {
                type: "text",
                placeholder: "請輸入標題（至少三個字）",
                value: _vm.title
              },
              on: {
                input: function($event) {
                  _vm.title = $event.detail.value
                }
              }
            })
          ],
          1
        ),
        _c(
          "view",
          { staticClass: ["img-list"] },
          [
            _c(
              "view",
              { staticClass: ["change-img"], on: { click: _vm.changevideo } },
              [
                _c("u-image", {
                  staticClass: ["change-img-image"],
                  attrs: { src: "../../static/images/113.png" }
                }),
                _c("u-text", { staticClass: ["change-text"] }, [
                  _vm._v("請選擇視頻")
                ])
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["change-img"], on: { click: _vm.changeimg } },
              [
                _c("u-image", {
                  staticClass: ["change-img-image"],
                  attrs: { src: "../../static/images/113.png" }
                }),
                _c("u-text", { staticClass: ["change-text"] }, [
                  _vm._v("請選擇視頻封面")
                ])
              ],
              1
            ),
            _c("u-image", {
              staticClass: ["img-item"],
              attrs: { src: _vm.image, mode: "aspectFill" }
            }),
            _vm.imagelist
              ? _c("u-video", {
                  staticClass: ["myvideo"],
                  attrs: { src: _vm.imagelist.tempFilePath, controls: true }
                })
              : _vm._e()
          ],
          1
        )
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 104:
/*!*******************************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/index/uploadvideo.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uploadvideo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uploadvideo.nvue?vue&type=script&lang=js&mpType=page */ 105);\n/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uploadvideo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uploadvideo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uploadvideo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uploadvideo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uploadvideo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1rQixDQUFnQixxakJBQUcsRUFBQyIsImZpbGUiOiIxMDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+eBq+eLkOS4i+i9vS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi/ngavni5DkuIvovb0vSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi/ngavni5DkuIvovb0vSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXBsb2FkdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+eBq+eLkOS4i+i9vS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi/ngavni5DkuIvovb0vSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi/ngavni5DkuIvovb0vSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXBsb2FkdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///104\n");

/***/ }),

/***/ 105:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/index/uploadvideo.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      imagelist: '',\n      statusheight: 0,\n      image: '',\n      title: '',\n      url: getApp().globalData.url,\n      header: getApp().globalData.header,\n      loadtext: '' };\n\n  },\n  onLoad: function onLoad() {\n    this.statusheight = uni.getSystemInfoSync().statusBarHeight;\n  },\n  methods: {\n    toback: function toback() {\n      uni.navigateBack({\n        delta: 1 });\n\n    },\n    tijiao: function tijiao() {var _this = this;\n      if (!this.title) {\n        uni.showToast({\n          icon: \"none\",\n          title: \"請輸入標題\" });\n\n        return false;\n      }\n      var upvideo;\n      uni.showLoading({\n        mask: true,\n        title: \"正在上傳图片\" });\n\n      uni.uploadFile({\n        url: this.url + '/api/community/upload',\n        filePath: this.image,\n        name: 'name',\n        success: function success(res) {\n          if (JSON.parse(res.data).code == 200) {\n            upvideo = uni.uploadFile({\n              url: _this.url + '/api/community/upload',\n              filePath: _this.imagelist.tempFilePath,\n              name: \"name\",\n              success: function success(video) {\n                if (JSON.parse(video.data).code == 200) {\n                  uni.showLoading({\n                    mask: true,\n                    title: \"正在上傳\" });\n\n                  uni.request({\n                    url: _this.url + '/api/community/add_video',\n                    method: \"POST\",\n                    header: {\n                      token: uni.getStorageSync('usertoken') },\n\n                    data: {\n                      title: _this.title,\n                      video: JSON.parse(video.data).data,\n                      video_image: JSON.parse(res.data).data },\n\n                    success: function success(result) {\n                      uni.hideLoading();\n                      // console.log(result.data);\n                      uni.showToast({\n                        icon: 'none',\n                        title: res.data.msg });\n\n                    } });\n\n                } else {\n                  uni.hideLoading();\n                  uni.showToast({\n                    icon: \"none\",\n                    title: \"上传視頻失败\" });\n\n                }\n                // console.log(JSON.parse(video.data));\n              } });\n\n            upvideo.onProgressUpdate(function (res) {\n              // console.log(res);\n              if (res.progress == 100) {} else {\n                uni.showLoading({\n                  mask: true,\n                  title: '正在上傳視頻(' + res.progress + '%)' });\n\n              }\n            });\n          } else {\n            uni.hideLoading();\n            uni.showToast({\n              icon: \"none\",\n              title: \"上傳圖片失敗\" });\n\n          }\n          // console.log(JSON.parse(res.data));\n        } });\n\n\n    },\n    changeimg: function changeimg() {var _this2 = this;\n      uni.chooseImage({\n        count: 1,\n        success: function success(res) {\n          // console.log(res.tempFilePaths);\n          _this2.image = res.tempFilePaths[0];\n        } });\n\n    },\n    changevideo: function changevideo() {var _this3 = this;\n      uni.chooseVideo({\n        sourceType: ['album'],\n        success: function success(res) {\n          _this3.imagelist = res;\n          __f__(\"log\", res, \" at pages/index/uploadvideo.nvue:152\");\n        } });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 35)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvdXBsb2FkdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLHFCQUZBO0FBR0EsZUFIQTtBQUlBLGVBSkE7QUFLQSxrQ0FMQTtBQU1BLHdDQU5BO0FBT0Esa0JBUEE7O0FBU0EsR0FYQTtBQVlBLFFBWkEsb0JBWUE7QUFDQTtBQUNBLEdBZEE7QUFlQTtBQUNBLFVBREEsb0JBQ0E7QUFDQTtBQUNBLGdCQURBOztBQUdBLEtBTEE7QUFNQSxVQU5BLG9CQU1BO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsd0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHVCQUZBOztBQUlBO0FBQ0EsK0NBREE7QUFFQSw0QkFGQTtBQUdBLG9CQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0Esc0RBREE7QUFFQSxvREFGQTtBQUdBLDBCQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSxpQ0FGQTs7QUFJQTtBQUNBLCtEQURBO0FBRUEsa0NBRkE7QUFHQTtBQUNBLDREQURBLEVBSEE7O0FBTUE7QUFDQSx3Q0FEQTtBQUVBLHdEQUZBO0FBR0EsNERBSEEsRUFOQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQURBO0FBRUEsMkNBRkE7O0FBSUEscUJBbEJBOztBQW9CQSxpQkF6QkEsTUF5QkE7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxtQ0FGQTs7QUFJQTtBQUNBO0FBQ0EsZUF0Q0E7O0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSx3REFGQTs7QUFJQTtBQUNBLGFBUkE7QUFTQSxXQWxEQSxNQWtEQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDZCQUZBOztBQUlBO0FBQ0E7QUFDQSxTQS9EQTs7O0FBa0VBLEtBckZBO0FBc0ZBLGFBdEZBLHVCQXNGQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUxBOztBQU9BLEtBOUZBO0FBK0ZBLGVBL0ZBLHlCQStGQTtBQUNBO0FBQ0EsNkJBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUxBOztBQU9BLEtBdkdBLEVBZkEsRSIsImZpbGUiOiIxMDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPHZpZXc+XHJcbiAgICA8dmlldyBjbGFzcz1cInN0YXR1cy1iYXJcIiA6c3R5bGU9XCJ7aGVpZ2h0OnN0YXR1c2hlaWdodCArICdweCd9XCI+PC92aWV3PlxyXG4gICAgPHZpZXcgY2xhc3M9XCJzdGF0dXMtdGFiYmFyXCIgOnN0eWxlPVwie3RvcDpzdGF0dXNoZWlnaHQgKyAncHgnfVwiPlxyXG4gICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy8xMDgucG5nXCIgY2xhc3M9XCJiYWNrLWltZ1wiIEB0YXA9XCJ0b2JhY2tcIj48L2ltYWdlPlxyXG4gICAgICA8dGV4dCBjbGFzcz1cInN0YXR1cy10YWJiYXItdGl0bGVcIj7nmbzkvYjlhaflrrk8L3RleHQ+XHJcbiAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzExMi5wbmdcIiBjbGFzcz1cInN1Ym1pdC1pbWdcIiBAdGFwPVwidGlqaWFvXCI+PC9pbWFnZT5cclxuICAgIDwvdmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwiaGVhZGVyLWJnXCIgOnN0eWxlPVwie2hlaWdodDo0NCArIHN0YXR1c2hlaWdodCArICdweCd9XCI+PC92aWV3PlxyXG4gICAgPHZpZXcgY2xhc3M9XCJpbnB1dC10aXRsZVwiPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dC1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLoq4vovLjlhaXmqJnpoYzvvIjoh7PlsJHkuInlgIvlrZfvvIlcIiB2LW1vZGVsPVwidGl0bGVcIiAvPlxyXG4gICAgPC92aWV3PlxyXG4gICAgPCEtLSA8dmlldyBjbGFzcz1cInRleHRhcmVhXCI+XHJcbiAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIuivtOeCueS7gOS5iFwiIGNsYXNzPVwidGV4dGFyZWEtdGV4dFwiLz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJkb3duLXRleHRhcmVhXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJkb3duLXRleHRhcmVhLWxlZnRcIj4wLzIwMDwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImRvd24tdGV4dGFyZWEtcmlnaHRcIj7luLbntrLnq5nvvIzlu6PlkYrvvIzoga/nuavmlrnlvI/nmoTkuIDlvovliKDpmaTvvIzpnIDnqL3moLjmiY3og73pgJrpgY7vvIE8L3RleHQ+XHJcbiAgICAgIDwvdmlldz5cclxuICAgIDwvdmlldz4gLS0+XHJcbiAgICA8dmlldyBjbGFzcz1cImltZy1saXN0XCI+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwiY2hhbmdlLWltZ1wiIEB0YXA9XCJjaGFuZ2V2aWRlb1wiPlxyXG4gICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzExMy5wbmdcIiBjbGFzcz1cImNoYW5nZS1pbWctaW1hZ2VcIj48L2ltYWdlPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY2hhbmdlLXRleHRcIj7oq4vpgbjmk4foppbpoLs8L3RleHQ+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJjaGFuZ2UtaW1nXCIgQHRhcD1cImNoYW5nZWltZ1wiPlxyXG4gICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzExMy5wbmdcIiBjbGFzcz1cImNoYW5nZS1pbWctaW1hZ2VcIj48L2ltYWdlPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY2hhbmdlLXRleHRcIj7oq4vpgbjmk4foppbpoLvlsIHpnaI8L3RleHQ+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPGltYWdlIDpzcmM9XCJpbWFnZVwiIG1vZGU9XCJhc3BlY3RGaWxsXCIgY2xhc3M9XCJpbWctaXRlbVwiPjwvaW1hZ2U+XHJcbiAgICAgIDx2aWRlbyB2LWlmPVwiaW1hZ2VsaXN0XCIgOnNyYz1cImltYWdlbGlzdC50ZW1wRmlsZVBhdGhcIiBjb250cm9scyBjbGFzcz1cIm15dmlkZW9cIj48L3ZpZGVvPlxyXG4gICAgICA8IS0tIDxpbWFnZSA6c3JjPVwiaXRlbVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGltYWdlbGlzdFwiIGNsYXNzPVwiaW1nLWl0ZW1cIiA6a2V5PVwiaW5kZXhcIiBtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+IC0tPlxyXG4gICAgPC92aWV3PlxyXG4gIDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpbWFnZWxpc3Q6ICcnLFxyXG4gICAgICAgIHN0YXR1c2hlaWdodDogMCxcclxuICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIHVybDogZ2V0QXBwKCkuZ2xvYmFsRGF0YS51cmwsXHJcbiAgICAgICAgaGVhZGVyOiBnZXRBcHAoKS5nbG9iYWxEYXRhLmhlYWRlcixcclxuICAgICAgICBsb2FkdGV4dDogJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgdGhpcy5zdGF0dXNoZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHRcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHRvYmFjaygpIHtcclxuICAgICAgICB1bmkubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgdGlqaWFvKCkge1xyXG4gICAgICAgIGlmICghdGhpcy50aXRsZSkge1xyXG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIGljb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLoq4vovLjlhaXmqJnpoYxcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdXB2aWRlb1xyXG4gICAgICAgIHVuaS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICBtYXNrOiB0cnVlLFxyXG4gICAgICAgICAgdGl0bGU6IFwi5q2j5Zyo5LiK5YKz5Zu+54mHXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIHVuaS51cGxvYWRGaWxlKHtcclxuICAgICAgICAgIHVybDogdGhpcy51cmwgKyAnL2FwaS9jb21tdW5pdHkvdXBsb2FkJyxcclxuICAgICAgICAgIGZpbGVQYXRoOiB0aGlzLmltYWdlLFxyXG4gICAgICAgICAgbmFtZTogJ25hbWUnLFxyXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoSlNPTi5wYXJzZShyZXMuZGF0YSkuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICB1cHZpZGVvID0gdW5pLnVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLnVybCArICcvYXBpL2NvbW11bml0eS91cGxvYWQnLFxyXG4gICAgICAgICAgICAgICAgZmlsZVBhdGg6IHRoaXMuaW1hZ2VsaXN0LnRlbXBGaWxlUGF0aCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHZpZGVvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChKU09OLnBhcnNlKHZpZGVvLmRhdGEpLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pLnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLmraPlnKjkuIrlgrNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLnVybCArICcvYXBpL2NvbW11bml0eS9hZGRfdmlkZW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOnVuaS5nZXRTdG9yYWdlU3luYygndXNlcnRva2VuJylcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlbzogSlNPTi5wYXJzZSh2aWRlby5kYXRhKS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb19pbWFnZTogSlNPTi5wYXJzZShyZXMuZGF0YSkuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pLmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOidub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpyZXMuZGF0YS5tc2dcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuS4iuS8oOimlumgu+Wksei0pVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHZpZGVvLmRhdGEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIHVwdmlkZW8ub25Qcm9ncmVzc1VwZGF0ZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5wcm9ncmVzcyA9PSAxMDApIHt9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB1bmkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmraPlnKjkuIrlgrPoppbpoLsoJyArIHJlcy5wcm9ncmVzcyArICclKSdcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHVuaS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuS4iuWCs+WclueJh+WkseaVl1wiXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHJlcy5kYXRhKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZWltZygpIHtcclxuICAgICAgICB1bmkuY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy50ZW1wRmlsZVBhdGhzKTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IHJlcy50ZW1wRmlsZVBhdGhzWzBdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgY2hhbmdldmlkZW8oKSB7XHJcbiAgICAgICAgdW5pLmNob29zZVZpZGVvKHtcclxuICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nXSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZWxpc3QgPSByZXNcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIC5pbnB1dC1pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDI4cnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0M7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHJnYmEoMTUzLCAxNTMsIDE1MywgMSk7XHJcbiAgfVxyXG5cclxuICAubXl2aWRlbyB7XHJcbiAgICB3aWR0aDogNjkwcnB4O1xyXG4gICAgaGVpZ2h0OiAzNTBycHg7XHJcbiAgfVxyXG5cclxuICAuaW1nLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMzJycHg7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICB9XHJcblxyXG4gIC5pbWctaXRlbSB7XHJcbiAgICB3aWR0aDogMjMwcnB4O1xyXG4gICAgaGVpZ2h0OiAyMzBycHg7XHJcbiAgfVxyXG5cclxuICAuY2hhbmdlLWltZyB7XHJcbiAgICB3aWR0aDogMjI2cnB4O1xyXG4gICAgaGVpZ2h0OiAyMjZycHg7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXItd2lkdGg6IDJycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzMywgMjMzLCAyMzMsIDEpO1xyXG4gICAgLy8gYm9yZGVyOjJycHggc29saWQgcmdiYSgyMzMsMjMzLDIzMywxKTtcclxuXHJcbiAgfVxyXG5cclxuICAuY2hhbmdlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyOHJweDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gIH1cclxuXHJcbiAgLmNoYW5nZS1pbWctaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDYwcnB4O1xyXG4gICAgaGVpZ2h0OiA2MHJweDtcclxuICB9XHJcblxyXG4gIC50ZXh0YXJlYSB7XHJcbiAgICBwYWRkaW5nOiAxNnJweCAzMnJweDtcclxuXHJcbiAgfVxyXG5cclxuICAuZG93bi10ZXh0YXJlYSB7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICB9XHJcblxyXG4gIC5kb3duLXRleHRhcmVhLWxlZnQge1xyXG4gICAgZm9udC1zaXplOiAyNHJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NCwgMTczLCA1NCwgMSk7XHJcbiAgfVxyXG5cclxuICAuZG93bi10ZXh0YXJlYS1yaWdodCB7XHJcbiAgICBmb250LXNpemU6IDI0cnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0M7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA3NSwgNzksIDEpO1xyXG4gIH1cclxuXHJcbiAgLnRleHRhcmVhLXRleHQge1xyXG4gICAgd2lkdGg6IDY4NnJweDtcclxuICAgIGhlaWdodDogMjAwcnB4O1xyXG4gICAgZm9udC1zaXplOiAyOHJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDEpO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDE2cnB4IDMycnB4O1xyXG4gIH1cclxuXHJcbiAgLnN0YXR1cy1iYXIge1xyXG4gICAgd2lkdGg6IDc1MHJweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLWJnIHtcclxuICAgIHdpZHRoOiA3NTBycHg7XHJcbiAgfVxyXG5cclxuICAuc3RhdHVzLXRhYmJhciB7XHJcbiAgICBoZWlnaHQ6IDg4cnB4O1xyXG4gICAgd2lkdGg6IDc1MHJweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLyogI2lmZGVmIEg1ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICB9XHJcblxyXG4gIC5iYWNrLWltZyB7XHJcbiAgICB3aWR0aDogMThycHg7XHJcbiAgICBoZWlnaHQ6IDMzcnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycnB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5zdWJtaXQtaW1nIHtcclxuICAgIHdpZHRoOiAxMTJycHg7XHJcbiAgICBoZWlnaHQ6IDU2cnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMnJweDtcclxuICB9XHJcblxyXG4gIC5zdGF0dXMtdGFiYmFyLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMzJycHg7XHJcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdTQy1NZWRpdW0sIFBpbmdGYW5nIFNDO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiByZ2JhKDMyLCAzMiwgMzIsIDEpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDk4cnB4O1xyXG4gIH1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///105\n");

/***/ }),

/***/ 106:
/*!****************************************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/index/uploadvideo.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uploadvideo_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uploadvideo.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 107);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uploadvideo_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uploadvideo_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uploadvideo_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uploadvideo_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uploadvideo_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 107:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/index/uploadvideo.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "input-input": {
    "fontSize": "28rpx",
    "fontFamily": "PingFangSC-Regular, PingFang SC",
    "fontWeight": "400",
    "color": "#999999"
  },
  "myvideo": {
    "width": "690rpx",
    "height": "350rpx"
  },
  "img-list": {
    "paddingTop": "32rpx",
    "paddingRight": "32rpx",
    "paddingBottom": "32rpx",
    "paddingLeft": "32rpx",
    "flexDirection": "row",
    "alignItems": "center",
    "flexWrap": "wrap"
  },
  "img-item": {
    "width": "230rpx",
    "height": "230rpx"
  },
  "change-img": {
    "width": "226rpx",
    "height": "226rpx",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#e9e9e9"
  },
  "change-text": {
    "fontSize": "28rpx",
    "color": "#999999"
  },
  "change-img-image": {
    "width": "60rpx",
    "height": "60rpx"
  },
  "textarea": {
    "paddingTop": "16rpx",
    "paddingRight": "32rpx",
    "paddingBottom": "16rpx",
    "paddingLeft": "32rpx"
  },
  "down-textarea": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "down-textarea-left": {
    "fontSize": "24rpx",
    "fontFamily": "PingFangSC-Regular, PingFang SC",
    "fontWeight": "400",
    "color": "#fead36"
  },
  "down-textarea-right": {
    "fontSize": "24rpx",
    "fontFamily": "PingFangSC-Regular, PingFang SC",
    "fontWeight": "400",
    "color": "#ff4b4f"
  },
  "textarea-text": {
    "width": "686rpx",
    "height": "200rpx",
    "fontSize": "28rpx",
    "fontFamily": "PingFangSC-Regular, PingFang SC",
    "fontWeight": "400",
    "color": "#999999"
  },
  "input-title": {
    "paddingTop": "16rpx",
    "paddingRight": "32rpx",
    "paddingBottom": "16rpx",
    "paddingLeft": "32rpx"
  },
  "status-bar": {
    "width": "750rpx",
    "position": "fixed",
    "backgroundColor": "#ffffff"
  },
  "header-bg": {
    "width": "750rpx"
  },
  "status-tabbar": {
    "height": "88rpx",
    "width": "750rpx",
    "position": "fixed",
    "left": 0,
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "back-img": {
    "width": "18rpx",
    "height": "33rpx",
    "marginLeft": "32rpx"
  },
  "submit-img": {
    "width": "112rpx",
    "height": "56rpx",
    "marginRight": "32rpx"
  },
  "status-tabbar-title": {
    "fontSize": "32rpx",
    "fontFamily": "PingFangSC-Medium, PingFang SC",
    "fontWeight": "500",
    "color": "#202020",
    "marginLeft": "98rpx"
  }
}

/***/ }),

/***/ 2:
/*!*******************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/App.vue?vue&type=style&index=0&lang=scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 21:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 3:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/App.vue?vue&type=style&index=0&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 35:
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ })

/******/ });