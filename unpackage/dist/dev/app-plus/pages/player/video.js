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
/******/ 	return __webpack_require__(__webpack_require__.s = 146);
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

/***/ 10:
/*!*************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-popup/uni-popup.vue ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_popup_vue_vue_type_template_id_7da806a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=template&id=7da806a4&scoped=true& */ 11);\n/* harmony import */ var _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=script&lang=js& */ 22);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-popup.vue?vue&type=style&index=0&id=7da806a4&lang=scss&scoped=true& */ 24).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-popup.vue?vue&type=style&index=0&id=7da806a4&lang=scss&scoped=true& */ 24).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_popup_vue_vue_type_template_id_7da806a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_popup_vue_vue_type_template_id_7da806a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7da806a4\",\n  \"635bb5ac\",\n  false,\n  _uni_popup_vue_vue_type_template_id_7da806a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/uni-popup/uni-popup.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDNkQ7QUFDTDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1GQUEyRTtBQUMvSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUZBQTJFO0FBQ3BJOztBQUVBOztBQUVBO0FBQ2tOO0FBQ2xOLGdCQUFnQiwyTUFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZGE4MDZhNCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2RhODA2YTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2RhODA2YTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4v54Gr54uQ5LiL6L29L0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3ZGE4MDZhNFwiLFxuICBcIjYzNWJiNWFjXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvdW5pLXBvcHVwL3VuaS1wb3B1cC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),

/***/ 11:
/*!********************************************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-popup/uni-popup.vue?vue&type=template&id=7da806a4&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7da806a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=template&id=7da806a4&scoped=true& */ 12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7da806a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7da806a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7da806a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7da806a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 12:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-popup/uni-popup.vue?vue&type=template&id=7da806a4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uniTransition: __webpack_require__(/*! @/components/uni-transition/uni-transition.vue */ 13)
    .default
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showPopup
    ? _c(
        "view",
        { staticClass: ["uni-popup"], on: { touchmove: _vm.clear } },
        [
          _c("uni-transition", {
            attrs: {
              modeClass: ["fade"],
              styles: _vm.maskClass,
              duration: _vm.duration,
              show: _vm.showTrans
            },
            on: { click: _vm.onTap }
          }),
          _c(
            "uni-transition",
            {
              attrs: {
                modeClass: _vm.ani,
                styles: _vm.transClass,
                duration: _vm.duration,
                show: _vm.showTrans
              },
              on: { click: _vm.onTap }
            },
            [
              _c(
                "view",
                {
                  staticClass: ["uni-popup__wrapper-box"],
                  on: { click: _vm.clear }
                },
                [_vm._t("default")],
                2
              )
            ]
          )
        ],
        1
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 13:
/*!***********************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-transition/uni-transition.vue ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_transition_vue_vue_type_template_id_cce16df8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=template&id=cce16df8& */ 14);\n/* harmony import */ var _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=script&lang=js& */ 16);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-transition.vue?vue&type=style&index=0&lang=css& */ 19).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-transition.vue?vue&type=style&index=0&lang=css& */ 19).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_transition_vue_vue_type_template_id_cce16df8___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_transition_vue_vue_type_template_id_cce16df8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"350e89c4\",\n  false,\n  _uni_transition_vue_vue_type_template_id_cce16df8___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/uni-transition/uni-transition.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLCtEQUF1RDtBQUMzRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsK0RBQXVEO0FBQ2hIOztBQUVBOztBQUVBO0FBQ2tOO0FBQ2xOLGdCQUFnQiwyTUFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNjZTE2ZGY4JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi/ngavni5DkuIvovb0vSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjM1MGU4OWM0XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvdW5pLXRyYW5zaXRpb24vdW5pLXRyYW5zaXRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),

/***/ 14:
/*!******************************************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-transition/uni-transition.vue?vue&type=template&id=cce16df8& ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_cce16df8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=template&id=cce16df8& */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_cce16df8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_cce16df8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_cce16df8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_cce16df8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 146:
/*!********************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/main.js?{"page":"pages%2Fplayer%2Fvideo"} ***!
  \********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_player_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/player/video.nvue?mpType=page */ 147);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_player_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_player_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/player/video'\n        _pages_player_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_player_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsNEVBQUc7QUFDWCxRQUFRLDRFQUFHO0FBQ1gsUUFBUSw0RUFBRztBQUNYLGdCQUFnQiw0RUFBRyIsImZpbGUiOiIxNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL3BsYXllci92aWRlby5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL3BsYXllci92aWRlbydcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///146\n");

/***/ }),

/***/ 147:
/*!**************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/player/video.nvue?mpType=page ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video_nvue_vue_type_template_id_359266e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.nvue?vue&type=template&id=359266e8&mpType=page */ 148);\n/* harmony import */ var _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.nvue?vue&type=script&lang=js&mpType=page */ 150);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 152).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 152).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _video_nvue_vue_type_template_id_359266e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _video_nvue_vue_type_template_id_359266e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"1b2efde8\",\n  false,\n  _video_nvue_vue_type_template_id_359266e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/player/video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1FQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUVBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ2tOO0FBQ2xOLGdCQUFnQiwyTUFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxNDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzU5MjY2ZTgmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4v54Gr54uQ5LiL6L29L0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIxYjJlZmRlOFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9wbGF5ZXIvdmlkZW8ubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///147\n");

/***/ }),

/***/ 148:
/*!********************************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/player/video.nvue?vue&type=template&id=359266e8&mpType=page ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_359266e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=template&id=359266e8&mpType=page */ 149);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_359266e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_359266e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_359266e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_359266e8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 149:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/player/video.nvue?vue&type=template&id=359266e8&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uniPopup: __webpack_require__(/*! @/components/uni-popup/uni-popup.vue */ 10).default
}
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
      _c(
        "view",
        { style: { height: _vm.windowheight + "px" } },
        [
          _vm.videodata.direct_url
            ? _c("u-video", {
                staticClass: ["myvideo"],
                attrs: {
                  src: _vm.videodata.direct_url,
                  autoplay: true,
                  objectFit: "cover",
                  showCenterPlayBtn: false,
                  controls: false,
                  id: "myvideo"
                },
                on: { play: _vm.playvideo, error: _vm.error, pause: _vm.pause }
              })
            : _vm._e(),
          _vm.guanggaodata
            ? _c(
                "view",
                { staticClass: ["guanggaobox"] },
                [
                  _c("u-image", {
                    staticClass: ["guanggao-image"],
                    attrs: {
                      src: _vm.guanggaodata.image_text,
                      mode: "aspectFit"
                    },
                    on: {
                      click: function($event) {
                        _vm.openurl(_vm.guanggaodata)
                      }
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm.guanggaodata1
            ? _c(
                "view",
                { staticClass: ["guanggaobox1"] },
                [
                  _c("u-image", {
                    staticClass: ["guanggao-image"],
                    attrs: {
                      src: _vm.guanggaodata1.image_text,
                      mode: "aspectFit"
                    },
                    on: {
                      click: function($event) {
                        _vm.openurl(_vm.guanggaodata1)
                      }
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _c(
            "scroll-view",
            {
              staticClass: ["chat-scroll"],
              attrs: {
                scrollY: "true",
                scrollTop: _vm.todown,
                scrollIntoView: _vm.scrollID,
                scrollWithAnimation: true
              }
            },
            [
              _c("u-text", { ref: "box", staticClass: ["chat-gg"] }, [
                _vm._v(_vm._s(_vm.wenan))
              ]),
              _c("u-text", { ref: "box1", staticClass: ["chat-gg"] }, [
                _vm._v(_vm._s(_vm.wenan1))
              ]),
              _vm._l(_vm.chatlist, function(item, index) {
                return _c(
                  "view",
                  {
                    key: index,
                    ref: "scroll" + index,
                    refInFor: true,
                    staticClass: ["chat-text"],
                    attrs: { id: "scroll" + index }
                  },
                  [
                    _c("view", { staticClass: ["chat-right"] }, [
                      _c(
                        "view",
                        { staticClass: ["chat-right-dengji"] },
                        [
                          item.level <= 10
                            ? _c("u-image", {
                                staticClass: ["dengji-icon"],
                                attrs: { src: "../../static/images/165.png" }
                              })
                            : item.level <= 20
                            ? _c("u-image", {
                                staticClass: ["dengji-icon"],
                                attrs: { src: "../../static/images/166.png" }
                              })
                            : _c("u-image", {
                                staticClass: ["dengji-icon"],
                                attrs: { src: "../../static/images/167.png" }
                              }),
                          _c("u-text", { staticClass: ["dengji-text"] }, [
                            _vm._v(_vm._s(item.level))
                          ])
                        ],
                        1
                      ),
                      _c(
                        "view",
                        { staticClass: ["chat-right-logo"] },
                        [
                          item.logoicon == 1
                            ? _c("u-image", {
                                staticClass: ["logo-icon"],
                                attrs: { src: "../../static/images/168.png" }
                              })
                            : item.logoicon == 2
                            ? _c("u-image", {
                                staticClass: ["logo-icon"],
                                attrs: { src: "../../static/images/169.png" }
                              })
                            : _c("u-image", {
                                staticClass: ["logo-icon"],
                                attrs: { src: "../../static/images/170.png" }
                              }),
                          _c("u-text", { staticClass: ["dengji-text"] }, [
                            _vm._v("小猪社区")
                          ])
                        ],
                        1
                      ),
                      _c(
                        "u-text",
                        {
                          staticClass: ["chat-right-text2"],
                          staticStyle: { color: "#96D8F6" }
                        },
                        [_vm._v(_vm._s(item.name) + "：")]
                      )
                    ]),
                    _c("u-text", { staticClass: ["chat-text-text"] }, [
                      _vm._v(_vm._s(item.message))
                    ])
                  ]
                )
              })
            ],
            2
          ),
          _c("view", { staticClass: ["add-box"] }, [
            _c("view", { staticClass: ["add2-box"] }, [
              _c(
                "view",
                {
                  staticClass: ["scroll-add-box"],
                  style: { top: _vm.addtop + "px" }
                },
                _vm._l(_vm.addlist, function(item, index) {
                  return _c(
                    "view",
                    {
                      key: index,
                      staticClass: ["chat-right1"],
                      style: {
                        opacity: index == _vm.addlist.length - 1 ? 1 : 0
                      }
                    },
                    [
                      _c(
                        "view",
                        { staticClass: ["chat-right1-dengji"] },
                        [
                          item.level <= 10
                            ? _c("u-image", {
                                staticClass: ["dengji-icon"],
                                attrs: { src: "../../static/images/165.png" }
                              })
                            : item.level <= 20
                            ? _c("u-image", {
                                staticClass: ["dengji-icon"],
                                attrs: { src: "../../static/images/166.png" }
                              })
                            : _c("u-image", {
                                staticClass: ["dengji-icon"],
                                attrs: { src: "../../static/images/167.png" }
                              }),
                          _c("u-text", { staticClass: ["dengji-text"] }, [
                            _vm._v(_vm._s(item.level))
                          ])
                        ],
                        1
                      ),
                      _c("u-text", { staticClass: ["chat-right-text2"] }, [
                        _vm._v(_vm._s(item.name) + _vm._s(item.message))
                      ])
                    ]
                  )
                }),
                0
              )
            ])
          ]),
          _c("view", { staticClass: ["gift-box"] }, [
            _c("view", { staticClass: ["gift2-box"] }, [
              _c(
                "view",
                {
                  staticClass: ["scroll-gift-box"],
                  style: { top: _vm.gifttop + "px" }
                },
                _vm._l(_vm.giftlist, function(item, index) {
                  return _c(
                    "view",
                    { key: index, staticClass: ["gift-right1"] },
                    [
                      _c("u-image", {
                        staticClass: ["gift-item"],
                        attrs: { src: item.image }
                      }),
                      _c("view", { staticClass: ["gift-center"] }, [
                        _c("u-text", { staticClass: ["gift-center-text1"] }, [
                          _vm._v(_vm._s(item.name))
                        ]),
                        _c("u-text", { staticClass: ["gift-center-text2"] }, [
                          _vm._v(_vm._s(item.message1))
                        ])
                      ]),
                      item.message == 0
                        ? _c("u-image", {
                            staticClass: ["gift-image"],
                            attrs: {
                              src: "../../static/images/158.png",
                              mode: "aspectFit"
                            }
                          })
                        : item.message == 1
                        ? _c("u-image", {
                            staticClass: ["gift-image"],
                            attrs: {
                              src: "../../static/images/154.png",
                              mode: "aspectFit"
                            }
                          })
                        : item.message == 2
                        ? _c("u-image", {
                            staticClass: ["gift-image"],
                            attrs: {
                              src: "../../static/images/155.png",
                              mode: "aspectFit"
                            }
                          })
                        : item.message == 3
                        ? _c("u-image", {
                            staticClass: ["gift-image"],
                            attrs: {
                              src: "../../static/images/156.png",
                              mode: "aspectFit"
                            }
                          })
                        : item.message == 4
                        ? _c("u-image", {
                            staticClass: ["gift-image"],
                            attrs: {
                              src: "../../static/images/152.png",
                              mode: "aspectFit"
                            }
                          })
                        : item.message == 5
                        ? _c("u-image", {
                            staticClass: ["gift-image"],
                            attrs: {
                              src: "../../static/images/157.png",
                              mode: "aspectFit"
                            }
                          })
                        : item.message == 6
                        ? _c("u-image", {
                            staticClass: ["gift-image"],
                            attrs: {
                              src: "../../static/images/153.png",
                              mode: "aspectFit"
                            }
                          })
                        : item.message == 7
                        ? _c("u-image", {
                            staticClass: ["gift-image"],
                            attrs: {
                              src: "../../static/images/159.png",
                              mode: "aspectFit"
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                }),
                0
              )
            ])
          ]),
          _c(
            "view",
            { staticClass: ["pinglun-box"] },
            [
              _c(
                "scroll-view",
                { staticClass: ["pinglun-scroll"], attrs: { scrollX: "true" } },
                _vm._l(_vm.danmulist, function(item, index) {
                  return _c(
                    "u-text",
                    {
                      key: index,
                      staticClass: ["pinglun-scroll-text"],
                      on: {
                        click: function($event) {
                          _vm.sendtext(item)
                        }
                      }
                    },
                    [_vm._v(_vm._s(item))]
                  )
                }),
                0
              )
            ],
            1
          ),
          _c("view", { staticClass: ["down-tab"] }, [
            _c(
              "view",
              { staticClass: ["down-tab-left"] },
              [
                _c("u-image", {
                  staticClass: ["down-tab-left-image"],
                  attrs: { src: "../../static/images/149.png" }
                }),
                _c("u-input", {
                  staticClass: ["down-tab-left-text"],
                  attrs: {
                    type: "text",
                    focus: _vm.focus,
                    placeholder: "聊点什么…",
                    adjustPosition: false,
                    value: _vm.player_text
                  },
                  on: {
                    input: function($event) {
                      _vm.player_text = $event.detail.value
                    }
                  }
                })
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["down-tab-right"] },
              [
                _c("u-image", {
                  staticClass: ["down-tab-right-img"],
                  attrs: { src: "../../static/images/164.png" },
                  on: { click: _vm.opengame }
                }),
                _c("u-image", {
                  staticClass: ["down-tab-right-img"],
                  attrs: { src: "../../static/images/147.png" },
                  on: { click: _vm.openliwu }
                }),
                _c("u-image", {
                  staticClass: ["down-tab-right-img"],
                  attrs: { src: "../../static/images/146.png" },
                  on: { click: _vm.back }
                })
              ],
              1
            )
          ]),
          _c(
            "view",
            {
              staticClass: ["input-down"],
              style: { bottom: _vm.input_bottom + "px" }
            },
            [
              _c("u-input", {
                staticClass: ["input-input"],
                attrs: {
                  type: "text",
                  placeholder: "聊点什么...",
                  focus: _vm.focus,
                  adjustPosition: false,
                  value: _vm.player_text
                },
                on: {
                  input: function($event) {
                    _vm.player_text = $event.detail.value
                  }
                }
              }),
              _c(
                "u-text",
                { staticClass: ["input-send"], on: { click: _vm.add } },
                [_vm._v("发送")]
              )
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: ["header"],
              style: { top: _vm.statusheight + 10 + "px" }
            },
            [
              _c("view", { staticClass: ["user-header"] }, [
                _c(
                  "view",
                  { staticClass: ["header-left"] },
                  [
                    _vm.userdata
                      ? _c("u-image", {
                          staticClass: ["user-image"],
                          attrs: { src: _vm.userdata.image_text },
                          on: { click: _vm.openuser }
                        })
                      : _vm._e()
                  ],
                  1
                ),
                _c("view", { staticClass: ["header-center"] }, [
                  _c("u-text", { staticClass: ["center-down-text"] }, [
                    _vm._v(_vm._s(_vm.userdata.name))
                  ]),
                  _c(
                    "view",
                    { staticClass: ["center-down"] },
                    [
                      _c("u-image", {
                        staticClass: ["center-down-img"],
                        attrs: { src: "../../static/images/145.png" }
                      }),
                      _c(
                        "u-text",
                        { staticStyle: { color: "#fff", fontSize: "26rpx" } },
                        [_vm._v(_vm._s(_vm.redu))]
                      )
                    ],
                    1
                  )
                ]),
                _c(
                  "view",
                  { staticClass: ["header-right"] },
                  [
                    _c("u-image", {
                      staticClass: ["guanzhu-but"],
                      attrs: { src: "../../static/images/144.png" },
                      on: { click: _vm.guanzhu }
                    })
                  ],
                  1
                )
              ]),
              _c(
                "scroll-view",
                { staticClass: ["guibin-scroll"], attrs: { scrollX: "true" } },
                _vm._l(_vm.guibindata, function(item, index) {
                  return _c("u-image", {
                    key: index,
                    staticClass: ["guibin-image"],
                    attrs: { src: item.image_text },
                    on: {
                      click: function($event) {
                        _vm.openguibin(item)
                      }
                    }
                  })
                }),
                1
              ),
              _c("view", { staticClass: ["guibin-count"] }, [
                _c("u-text", { staticClass: ["guibin-count-text"] }, [
                  _vm._v(_vm._s(_vm.videodata.vip))
                ]),
                _c("u-text", { staticClass: ["guibin-count-text"] }, [
                  _vm._v("贵宾")
                ])
              ])
            ],
            1
          ),
          _c("uni-popup", { ref: "userinfo" }, [
            _c(
              "view",
              { staticClass: ["user-popup"] },
              [
                _c("view", { staticClass: ["user-top"] }, [
                  _c("u-text", { staticClass: ["user-top-left"] }, [
                    _vm._v("举报")
                  ]),
                  _c(
                    "u-text",
                    {
                      staticClass: ["user-top-right"],
                      on: { click: _vm.closepopup }
                    },
                    [_vm._v("X")]
                  )
                ]),
                _c("u-image", {
                  staticClass: ["user-popup-image"],
                  attrs: { src: _vm.userinfo.image_text }
                }),
                _c("u-text", { staticClass: ["user-popup-name"] }, [
                  _vm._v(_vm._s(_vm.userinfo.name))
                ]),
                _c("u-text", { staticClass: ["user-popup-detail"] }, [
                  _vm._v(_vm._s(_vm.userinfo.content))
                ]),
                _c("view", { staticClass: ["user-popup-count"] }, [
                  _c("u-text", { staticClass: ["user-popup-count-left"] }, [
                    _vm._v("房间号 " + _vm._s(_vm.videodata.room_number))
                  ]),
                  _c("u-text", { staticClass: ["user-popup-count-center"] }, [
                    _vm._v("|")
                  ]),
                  _c("u-text", { staticClass: ["user-popup-count-right"] }, [
                    _vm._v("粉丝 " + _vm._s(_vm.userinfo.fans))
                  ])
                ]),
                _c("view", { staticClass: ["view-dengji"] }, [
                  _c(
                    "view",
                    { staticClass: ["dengji-popup"] },
                    [
                      _c("u-image", {
                        staticClass: ["dengji-image"],
                        attrs: { src: "../../static/images/127.png" }
                      }),
                      _c("view", { staticClass: ["dengji-right"] }, [
                        _c("u-text", { staticClass: ["dengji-right-text"] }, [
                          _vm._v("主播等级")
                        ]),
                        _c("u-text", { staticClass: ["dengji-right-text"] }, [
                          _vm._v(_vm._s(_vm.userinfo.level))
                        ])
                      ])
                    ],
                    1
                  )
                ]),
                _c("view", { staticClass: ["popup-down"] }, [
                  _c(
                    "view",
                    { staticClass: ["popup-down-left"] },
                    [
                      _c("view", { staticClass: ["dengji-right"] }, [
                        _c(
                          "u-text",
                          { staticClass: ["popup-down-left-text"] },
                          [_vm._v("他的成就")]
                        ),
                        _c(
                          "u-text",
                          { staticClass: ["popup-down-left-text"] },
                          [_vm._v("暂无")]
                        )
                      ]),
                      _c("u-image", {
                        staticClass: ["dengji-image"],
                        attrs: { src: "../../static/images/127.png" }
                      })
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: ["popup-down-right"] },
                    [
                      _c("view", { staticClass: ["dengji-right"] }, [
                        _c(
                          "u-text",
                          { staticClass: ["popup-down-right-text"] },
                          [_vm._v("礼物墙")]
                        ),
                        _vm.userinfo.direct
                          ? _c(
                              "u-text",
                              { staticClass: ["popup-down-right-text"] },
                              [
                                _vm._v(
                                  "共点亮" +
                                    _vm._s(_vm.userinfo.direct.gift) +
                                    "个"
                                )
                              ]
                            )
                          : _vm._e()
                      ]),
                      _c("u-image", {
                        staticClass: ["dengji-image"],
                        attrs: { src: "../../static/images/127.png" }
                      })
                    ],
                    1
                  )
                ])
              ],
              1
            )
          ]),
          _c("uni-popup", { ref: "guibininfo" }, [
            _c(
              "view",
              { staticClass: ["user-popup"] },
              [
                _c("view", { staticClass: ["user-top"] }, [
                  _c("u-text", { staticClass: ["user-top-left"] }),
                  _c(
                    "u-text",
                    {
                      staticClass: ["user-top-right"],
                      on: { click: _vm.closepopup }
                    },
                    [_vm._v("X")]
                  )
                ]),
                _c("u-image", {
                  staticClass: ["user-popup-image"],
                  attrs: { src: _vm.guibininfo.image_text }
                }),
                _c("u-text", { staticClass: ["user-popup-name"] }, [
                  _vm._v(_vm._s(_vm.guibininfo.name))
                ]),
                _c("u-text", { staticClass: ["user-popup-detail"] }, [
                  _vm._v("这个人很懒，没有留下什么东西")
                ]),
                _c("view", { staticClass: ["view-dengji"] }, [
                  _c(
                    "view",
                    { staticClass: ["dengji-popup"] },
                    [
                      _c("u-image", {
                        staticClass: ["dengji-image"],
                        attrs: { src: "../../static/images/127.png" }
                      }),
                      _c("view", { staticClass: ["dengji-right"] }, [
                        _c("u-text", { staticClass: ["dengji-right-text"] }, [
                          _vm._v("用户等级")
                        ]),
                        _c("u-text", { staticClass: ["dengji-right-text"] }, [
                          _vm._v(_vm._s(_vm.guibininfo.level))
                        ])
                      ])
                    ],
                    1
                  )
                ]),
                _c("view", { staticClass: ["popup-down"] }, [
                  _c(
                    "view",
                    { staticClass: ["popup-down-left"] },
                    [
                      _c("view", { staticClass: ["dengji-right"] }, [
                        _c(
                          "u-text",
                          { staticClass: ["popup-down-left-text"] },
                          [_vm._v("他的成就")]
                        ),
                        _c(
                          "u-text",
                          { staticClass: ["popup-down-left-text"] },
                          [_vm._v("暂无")]
                        )
                      ]),
                      _c("u-image", {
                        staticClass: ["dengji-image"],
                        attrs: { src: "../../static/images/127.png" }
                      })
                    ],
                    1
                  )
                ])
              ],
              1
            )
          ]),
          _c("uni-popup", { ref: "game", attrs: { type: "bottom" } }, [
            _c(
              "view",
              { staticClass: ["popup-game"] },
              _vm._l(_vm.gamelist, function(item, index) {
                return _c(
                  "view",
                  {
                    key: index,
                    staticClass: ["popup-game-item"],
                    on: {
                      click: function($event) {
                        _vm.openurl(item)
                      }
                    }
                  },
                  [
                    _c("u-image", {
                      staticClass: ["game-image"],
                      attrs: { src: item.image_text }
                    }),
                    _c("u-text", { staticClass: ["game-text"] }, [
                      _vm._v(_vm._s(item.name))
                    ])
                  ],
                  1
                )
              }),
              0
            )
          ]),
          _c("uni-popup", { ref: "liwu", attrs: { type: "bottom" } }, [
            _vm.liwulist.length > 0
              ? _c("view", { staticClass: ["popup-liwu"] }, [
                  _c("u-text", { staticClass: ["liwu-title"] }, [
                    _vm._v("礼物")
                  ]),
                  _c("view", { staticClass: ["liwu-list"] }, [
                    _c(
                      "view",
                      {
                        staticClass: [
                          "liwu-item",
                          "border-top",
                          "border-right"
                        ],
                        on: {
                          click: function($event) {
                            _vm.sendliwu(0)
                          }
                        }
                      },
                      [
                        _c("u-image", {
                          staticClass: ["liwu-image"],
                          attrs: {
                            src: "/static/images/158.png",
                            mode: "aspectFit"
                          }
                        }),
                        _c("u-text", { staticClass: ["liwu-text"] }, [
                          _vm._v("小飞机")
                        ]),
                        _c(
                          "view",
                          { staticClass: ["liwu-price"] },
                          [
                            _c("u-image", {
                              staticClass: ["huobi-img"],
                              attrs: {
                                src: "../../static/images/151.png",
                                mode: "aspectFit"
                              }
                            }),
                            _c("u-text", { staticClass: ["price-text"] }, [
                              _vm._v(_vm._s(_vm.liwulist[0].price))
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _c(
                      "view",
                      {
                        staticClass: [
                          "liwu-item",
                          "border-top",
                          "border-right"
                        ],
                        on: {
                          click: function($event) {
                            _vm.sendliwu(1)
                          }
                        }
                      },
                      [
                        _c("u-image", {
                          staticClass: ["liwu-image"],
                          attrs: {
                            src: "../../static/images/154.png",
                            mode: "aspectFit"
                          }
                        }),
                        _c("u-text", { staticClass: ["liwu-text"] }, [
                          _vm._v("666")
                        ]),
                        _c(
                          "view",
                          { staticClass: ["liwu-price"] },
                          [
                            _c("u-image", {
                              staticClass: ["huobi-img"],
                              attrs: {
                                src: "../../static/images/151.png",
                                mode: "aspectFit"
                              }
                            }),
                            _c("u-text", { staticClass: ["price-text"] }, [
                              _vm._v(_vm._s(_vm.liwulist[1].price))
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _c(
                      "view",
                      {
                        staticClass: [
                          "liwu-item",
                          "border-top",
                          "border-right"
                        ],
                        on: {
                          click: function($event) {
                            _vm.sendliwu(2)
                          }
                        }
                      },
                      [
                        _c("u-image", {
                          staticClass: ["liwu-image"],
                          attrs: {
                            src: "../../static/images/155.png",
                            mode: "aspectFit"
                          }
                        }),
                        _c("u-text", { staticClass: ["liwu-text"] }, [
                          _vm._v("啪啪啪")
                        ]),
                        _c(
                          "view",
                          { staticClass: ["liwu-price"] },
                          [
                            _c("u-image", {
                              staticClass: ["huobi-img"],
                              attrs: {
                                src: "../../static/images/151.png",
                                mode: "aspectFit"
                              }
                            }),
                            _c("u-text", { staticClass: ["price-text"] }, [
                              _vm._v(_vm._s(_vm.liwulist[2].price))
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _c(
                      "view",
                      {
                        staticClass: ["liwu-item", "border-top"],
                        on: {
                          click: function($event) {
                            _vm.sendliwu(3)
                          }
                        }
                      },
                      [
                        _c("u-image", {
                          staticClass: ["liwu-image"],
                          attrs: {
                            src: "../../static/images/156.png",
                            mode: "aspectFit"
                          }
                        }),
                        _c("u-text", { staticClass: ["liwu-text"] }, [
                          _vm._v("大红包")
                        ]),
                        _c(
                          "view",
                          { staticClass: ["liwu-price"] },
                          [
                            _c("u-image", {
                              staticClass: ["huobi-img"],
                              attrs: {
                                src: "../../static/images/151.png",
                                mode: "aspectFit"
                              }
                            }),
                            _c("u-text", { staticClass: ["price-text"] }, [
                              _vm._v(_vm._s(_vm.liwulist[3].price))
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _c(
                      "view",
                      {
                        staticClass: [
                          "liwu-item",
                          "border-top",
                          "border-right",
                          "",
                          "border-bottom"
                        ],
                        on: {
                          click: function($event) {
                            _vm.sendliwu(4)
                          }
                        }
                      },
                      [
                        _c("u-image", {
                          staticClass: ["liwu-image"],
                          attrs: {
                            src: "../../static/images/152.png",
                            mode: "aspectFit"
                          }
                        }),
                        _c("u-text", { staticClass: ["liwu-text"] }, [
                          _vm._v("杜蕾斯")
                        ]),
                        _c(
                          "view",
                          { staticClass: ["liwu-price"] },
                          [
                            _c("u-image", {
                              staticClass: ["huobi-img"],
                              attrs: {
                                src: "../../static/images/151.png",
                                mode: "aspectFit"
                              }
                            }),
                            _c("u-text", { staticClass: ["price-text"] }, [
                              _vm._v(_vm._s(_vm.liwulist[4].price))
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _c(
                      "view",
                      {
                        staticClass: [
                          "liwu-item",
                          "border-top",
                          "border-right",
                          "",
                          "border-bottom"
                        ],
                        on: {
                          click: function($event) {
                            _vm.sendliwu(5)
                          }
                        }
                      },
                      [
                        _c("u-image", {
                          staticClass: ["liwu-image"],
                          attrs: {
                            src: "../../static/images/157.png",
                            mode: "aspectFit"
                          }
                        }),
                        _c("u-text", { staticClass: ["liwu-text"] }, [
                          _vm._v("鲜花")
                        ]),
                        _c(
                          "view",
                          { staticClass: ["liwu-price"] },
                          [
                            _c("u-image", {
                              staticClass: ["huobi-img"],
                              attrs: {
                                src: "../../static/images/151.png",
                                mode: "aspectFit"
                              }
                            }),
                            _c("u-text", { staticClass: ["price-text"] }, [
                              _vm._v(_vm._s(_vm.liwulist[5].price))
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _c(
                      "view",
                      {
                        staticClass: [
                          "liwu-item",
                          "border-top",
                          "border-right",
                          "",
                          "border-bottom"
                        ],
                        on: {
                          click: function($event) {
                            _vm.sendliwu(6)
                          }
                        }
                      },
                      [
                        _c("u-image", {
                          staticClass: ["liwu-image"],
                          attrs: {
                            src: "../../static/images/153.png",
                            mode: "aspectFit"
                          }
                        }),
                        _c("u-text", { staticClass: ["liwu-text"] }, [
                          _vm._v("520")
                        ]),
                        _c(
                          "view",
                          { staticClass: ["liwu-price"] },
                          [
                            _c("u-image", {
                              staticClass: ["huobi-img"],
                              attrs: {
                                src: "../../static/images/151.png",
                                mode: "aspectFit"
                              }
                            }),
                            _c("u-text", { staticClass: ["price-text"] }, [
                              _vm._v(_vm._s(_vm.liwulist[6].price))
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _c(
                      "view",
                      {
                        staticClass: [
                          "liwu-item",
                          "border-top",
                          "border-bottom"
                        ],
                        on: {
                          click: function($event) {
                            _vm.sendliwu(7)
                          }
                        }
                      },
                      [
                        _c("u-image", {
                          staticClass: ["liwu-image"],
                          attrs: {
                            src: "../../static/images/159.png",
                            mode: "aspectFit"
                          }
                        }),
                        _c("u-text", { staticClass: ["liwu-text"] }, [
                          _vm._v("威力粽")
                        ]),
                        _c(
                          "view",
                          { staticClass: ["liwu-price"] },
                          [
                            _c("u-image", {
                              staticClass: ["huobi-img"],
                              attrs: {
                                src: "../../static/images/151.png",
                                mode: "aspectFit"
                              }
                            }),
                            _c("u-text", { staticClass: ["price-text"] }, [
                              _vm._v(_vm._s(_vm.liwulist[7].price))
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _c("view", { staticClass: ["liwu-down"] }, [
                    _c(
                      "view",
                      {
                        staticClass: ["liwu-down-left"],
                        on: { click: _vm.tobuy }
                      },
                      [
                        _c("u-image", {
                          staticClass: ["huobi-img"],
                          attrs: {
                            src: "../../static/images/151.png",
                            mode: "aspectFit"
                          }
                        }),
                        _c("u-text", { staticClass: ["liwu-price-text"] }, [
                          _vm._v(_vm._s(_vm.money))
                        ]),
                        _c("u-image", {
                          staticClass: ["liwu-more"],
                          attrs: {
                            src: "../../static/images/81.png",
                            mode: "aspectFit"
                          }
                        })
                      ],
                      1
                    ),
                    _c("u-text", { staticClass: ["liwu-down-right"] }, [
                      _vm._v("赠送")
                    ])
                  ])
                ])
              : _vm._e()
          ]),
          _vm.showfengmian || _vm.isxiabo
            ? _c("u-image", {
                staticClass: ["fengmian-image"],
                style: { height: _vm.windowheight + "px" },
                attrs: {
                  src: "/static/WechatIMG15.png",
                  fadeShow: false,
                  mode: "aspectFill"
                }
              })
            : _vm._e(),
          _vm.isxiabo
            ? _c(
                "view",
                {
                  staticClass: ["xiabo"],
                  style: { height: _vm.windowheight + "px" }
                },
                [
                  _c(
                    "u-text",
                    {
                      staticClass: ["xiabo-close"],
                      style: { top: _vm.statusheight + 10 + "px" },
                      on: { click: _vm.back }
                    },
                    [_vm._v("X")]
                  ),
                  _c(
                    "view",
                    { staticClass: ["xiabo-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["xiabo-image"],
                        attrs: {
                          src: _vm.userdata.image_text,
                          mode: "aspectFit"
                        }
                      }),
                      _c("view", { staticClass: ["xiabo-view"] }, [
                        _c("u-text", { staticClass: ["xiabo-name"] }, [
                          _vm._v(_vm._s(_vm.userdata.name))
                        ]),
                        _c("u-text", { staticClass: ["xiabo-dengji"] }, [
                          _vm._v("LV" + _vm._s(_vm.userdata.level))
                        ])
                      ]),
                      _c("u-text", { staticClass: ["xiabo-tips"] }, [
                        _vm._v("直播已结束")
                      ])
                    ],
                    1
                  )
                ]
              )
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 15:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-transition/uni-transition.vue?vue&type=template&id=cce16df8& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.isShow
    ? _c(
        "view",
        {
          ref: "ani",
          staticClass: ["uni-transition"],
          class: [_vm.ani.in],
          style: "transform:" + _vm.transform + ";" + _vm.stylesObject,
          on: { click: _vm.change }
        },
        [_vm._t("default")],
        2
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 150:
/*!**************************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/player/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=script&lang=js&mpType=page */ 151);\n/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZqQixDQUFnQiwraUJBQUcsRUFBQyIsImZpbGUiOiIxNTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+eBq+eLkOS4i+i9vS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi/ngavni5DkuIvovb0vSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi/ngavni5DkuIvovb0vSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+eBq+eLkOS4i+i9vS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi/ngavni5DkuIvovb0vSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi/ngavni5DkuIvovb0vSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///150\n");

/***/ }),

/***/ 151:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/player/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _uniPopup = _interopRequireDefault(__webpack_require__(/*! @/components/uni-popup/uni-popup.vue */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar dom = weex.requireModule('dom');var _default = { data: function data() {return { windowheight: 0, statusheight: 0, todown: 0, input_bottom: -50, focus: false, player_text: '', id: '', url: getApp().globalData.url, header: getApp().globalData.header, websockerurl: getApp().globalData.websockerurl, videodata: [], userdata: [], userinfo: [], guibininfo: [], guibindata: [], socketTask: null, client_id: '', wenan: '', wenan1: '', showfengmian: true, chatlist: [], addlist: [], giftlist: [], isxiabo: false, gamelist: [], liwulist: [], openurls: getApp().globalData.openurl, addtop: 40, gifttop: 100, redu: 0, money: '0.00', srcList: [{ name: '標清', url: '' }], guanggaodata: {}, time: '', danmulist: ['裤子都脱了你让我看这个', '撸管一时爽，一直花堂一直爽', '我完事了，你们呢', '趴下，屁股翘高', '真的很想插进去爽一下'], guanggaodata1: [], scrollID: '' };}, onShow: function onShow() {if (uni.getStorageSync(\"usertoken\")) {this.getuserinfo();}}, onLoad: function onLoad(option) {var _this = this;this.id = option.id;this.fengmian = option.img;this.getguanggao();this.windowheight = uni.getSystemInfoSync().windowHeight;this.statusheight = uni.getSystemInfoSync().statusBarHeight;uni.onKeyboardHeightChange(function (e) {if (e.height == 0) {_this.focus = false;_this.input_bottom = -50;} else {_this.focus = true;_this.input_bottom = e.height;} // console.log(e.height);\n    });this.getvideo();this.getwenan();}, onUnload: function onUnload() {uni.closeSocket();clearInterval(this.time);}, components: { uniPopup: _uniPopup.default }, onReady: function onReady() {var _this2 = this;this.wenan = '正在连接聊天服务器...';dom.getComponentRect(this.$refs.box, function (option) {// console.log(option.size)\n      _this2.todown = _this2.todown + option.size.height + 10;});dom.getComponentRect(this.$refs.box1, function (option) {// console.log(option.size)\n      _this2.todown = _this2.todown + option.size.height + 10;});}, methods: { closepopup: function closepopup() {this.$refs.guibininfo.close();this.$refs.userinfo.close();}, sendtext: function sendtext(str) {if (this.client_id) {this.player_text = str;this.add();} else {uni.showToast({ icon: \"none\", title: \"聊天服务器未连接成功\" });}}, getguanggao: function getguanggao() {var _this3 = this;uni.request({ url: this.url + '/direct/adv', success: function success(res) {_this3.guanggaodata = res.data.data;} });uni.request({ url: this.url + '/direct/dadv', success: function success(res) {__f__(\"log\", res.data, \" at pages/player/video.nvue:432\");_this3.guanggaodata1 = res.data.data;} });}, getuserinfo: function getuserinfo() {var _this4 = this;uni.request({ url: this.url + '/api/user/personal', header: { token: uni.getStorageSync(\"usertoken\") }, success: function success(res) {_this4.money = res.data.data.money; // console.log(res);\n        } });}, tobuy: function tobuy() {if (uni.getStorageSync(\"usertoken\")) {uni.navigateTo({ url: \"./buy\" });} else {uni.showToast({ icon: \"none\", title: \"請登入\" });}}, sendliwu: function sendliwu(index) {var _this5 = this;if (uni.getStorageSync(\"usertoken\")) {uni.showLoading({ mask: true, title: '請稍後' });uni.request({ url: this.url + '/gift/buy/' + this.liwulist[index].price, method: \"POST\", header: { token: uni.getStorageSync(\"usertoken\") }, data: { room_number: this.videodata.room_number, giftid: index }, success: function success(res) {uni.hideLoading();__f__(\"log\", res.data, \" at pages/player/video.nvue:479\");if (res.data.code == 200) {uni.showToast({ icon: \"none\", title: res.data.data.msg });_this5.getuserinfo();} else {uni.showToast({ icon: \"none\", title: res.data.msg });}} });} else {uni.showToast({ icon: \"none\", title: \"請登入\" });}}, openurl: function openurl(item) {this.openurls(item.url);}, openliwu: function openliwu() {var _this6 = this;if (this.liwulist.length > 0) {this.$refs.liwu.open();return false;}uni.showLoading({ mask: true, title: \"請稍後\" });uni.request({ url: this.url + '/direct/gifts', success: function success(res) {uni.hideLoading();_this6.liwulist = res.data.data;__f__(\"log\", res.data, \" at pages/player/video.nvue:519\");_this6.$refs.liwu.open();} });}, playvideo: function playvideo(e) {this.showfengmian = false;this.isxiabo = false;}, guanzhu: function guanzhu() {if (uni.getStorageSync(\"usertoken\")) {uni.showLoading({ mask: true, title: '請稍後' });uni.request({ url: this.url + '/follow/add', method: \"POST\", header: { token: uni.getStorageSync(\"usertoken\") }, data: { anchorid: this.userdata.id }, success: function success(res) {uni.hideLoading();uni.showToast({ icon: \"none\", title: res.data.msg }); // console.log(res.data);\n          } });} else {uni.showToast({ icon: \"none\", title: \"請登入\" });}}, openguibin: function openguibin(item) {this.guibininfo = item; // console.log(item);\n      this.$refs.guibininfo.open();}, getwenan: function getwenan() {var _this7 = this;uni.request({ url: this.url + '/direct/copywriting', success: function success(res) {_this7.wenan1 = res.data.data; // console.log(res.data.data);\n        } });}, getwebsocket: function getwebsocket() {var _this8 = this;uni.connectSocket({ url: this.websockerurl, success: function success(res) {__f__(\"log\", res, \" at pages/player/video.nvue:578\");}, fail: function fail(res) {__f__(\"log\", res, \" at pages/player/video.nvue:581\");} });uni.onSocketOpen(function (res) {__f__(\"log\", res, \" at pages/player/video.nvue:585\");});uni.onSocketError(function (err) {_this8.wenan = '连接聊天服务器失败';});uni.onSocketMessage(function (res) {if (JSON.parse(res.data).type == 'init') {// console.log(JSON.parse(res.data));\n          _this8.client_id = JSON.parse(res.data).client_id;if (_this8.client_id) {clearInterval(_this8.time);uni.request({ url: _this8.url + '/api/Webstock/group_add', method: \"POST\", header: { token: uni.getStorageSync(\"usertoken\") ? uni.getStorageSync(\"usertoken\") : '' }, data: { client_id: _this8.client_id, room_number: _this8.videodata.room_number }, success: function success(res) {_this8.wenan = '连接聊天服务器成功';__f__(\"log\", '连接聊天服务器成功', \" at pages/player/video.nvue:608\");} });} else {_this8.wenan = '连接聊天服务器失败'; // this.sendtime()\n          }} else {if (JSON.parse(res.data).type == 'add') {// console.log(JSON.parse(res.data));\n            _this8.addlist.push(JSON.parse(res.data));_this8.addtop = _this8.addtop - 40;} else {if (JSON.parse(res.data).type == 'gift') {// console.log(JSON.parse(res.data));\n              var obj = JSON.parse(res.data);\n              if (obj.message == 0) {\n                obj.message1 = '送出一个小飞机';\n              } else if (obj.message == 1) {\n                obj.message1 = '送出一个666';\n              } else if (obj.message == 2) {\n                obj.message1 = '送出一个啪啪啪';\n              } else if (obj.message == 3) {\n                obj.message1 = '送出一个大红包';\n              } else if (obj.message == 4) {\n                obj.message1 = '送出一个杜蕾斯';\n              } else if (obj.message == 5) {\n                obj.message1 = '送出一个鲜花';\n              } else if (obj.message == 6) {\n                obj.message1 = '送出一个520';\n              } else if (obj.message == 7) {\n                obj.message1 = '送出一个威力粽';\n              }\n              _this8.gifttop = _this8.gifttop - 50;\n              _this8.giftlist.push(obj);\n            } else if (JSON.parse(res.data).type == 'send') {\n              var icon = Math.floor(Math.random() * 4);\n              var obj = JSON.parse(res.data);\n              obj.logoicon = icon;\n              _this8.chatlist.push(obj);\n              var id = 'scroll' + (_this8.chatlist.length - 1);\n              setTimeout(function () {\n\n                var result = dom.getComponentRect(_this8.$refs[id][0], function (option) {\n                  if (uni.getSystemInfoSync().platform == \"ios\") {\n                    _this8.scrollID = 'scroll' + (_this8.chatlist.length - 1);\n                  } else {\n                    _this8.todown = _this8.todown + option.size.height + 16;\n                  }\n                });\n\n              }, 100);\n            } else {\n              _this8.redu = JSON.parse(res.data).num;\n            }\n          }\n        }\n        __f__(\"log\", JSON.parse(res.data), \" at pages/player/video.nvue:665\");\n      });\n    },\n    sendtime: function sendtime() {\n      this.time = setInterval(function () {\n        uni.sendSocketMessage({\n          data: \"client\",\n          success: function success(res) {\n            __f__(\"log\", res, \" at pages/player/video.nvue:673\");\n          } });\n\n      }, 500);\n\n    },\n    getvideo: function getvideo() {var _this9 = this;\n      // uni.showLoading({\n      //   mask: true,\n      //   title: \"請稍後\"\n      // })\n      uni.request({\n        url: this.url + '/direct/read/' + this.id,\n        success: function success(res) {\n          // uni.hideLoading()\n          // this.showfengmian = false\n\n          _this9.videodata = res.data.data;\n          _this9.userdata = res.data.data.anchor;\n          _this9.guibindata = res.data.data.vips;\n          _this9.redu = _this9.videodata.online;\n          _this9.srcList = [{\n            name: '標清',\n            url: _this9.videodata.direct_url }];\n\n          // console.log(this.videodata.direct_url);\n          _this9.getwebsocket();\n          __f__(\"log\", res.data.data, \" at pages/player/video.nvue:700\");\n        } });\n\n    },\n    back: function back() {\n      uni.navigateBack();\n    },\n    opengame: function opengame() {var _this10 = this;\n      if (this.gamelist.length > 0) {\n        this.$refs.game.open();\n        return false;\n      }\n      uni.showLoading({\n        mask: true,\n        title: \"請稍後\" });\n\n      uni.request({\n        url: this.url + '/direct/app',\n        method: \"GET\",\n        success: function success(res) {\n          uni.hideLoading();\n          _this10.$refs.game.open();\n          _this10.gamelist = res.data.data;\n          // console.log(res.data);\n        } });\n\n    },\n    openuser: function openuser() {var _this11 = this;\n      uni.showLoading({\n        mask: true,\n        title: \"請稍後\" });\n\n      uni.request({\n        url: this.url + '/anchor/read/' + this.userdata.id,\n        success: function success(res) {\n          uni.hideLoading();\n          _this11.userinfo = res.data.data;\n          _this11.$refs.userinfo.open();\n          // console.log(res.data.data);\n        } });\n\n    },\n    pause: function pause() {\n      uni.createVideoContext('myvideo').play();\n    },\n    error: function error(e) {\n      this.isxiabo = true;\n      __f__(\"log\", e, \" at pages/player/video.nvue:747\");\n      return false;\n      uni.showModal({\n        content: \"资源加载错误，请重试\",\n        confirmText: \"重试\",\n        success: function success(res) {\n          if (res.confirm) {\n            uni.createVideoContext('myvideo').play();\n          }\n          if (res.cancel) {\n            uni.navigateBack();\n          }\n        } });\n\n    },\n    add: function add() {var _this12 = this;\n      if (uni.getStorageSync(\"usertoken\")) {\n        if (!this.client_id) {\n          uni.showToast({\n            icon: \"none\",\n            title: \"聊天服务器未连接成功\" });\n\n          return false;\n        }\n        uni.showLoading({\n          mask: true,\n          title: \"请稍后\" });\n\n        uni.request({\n          url: this.url + '/api/Webstock/group_send',\n          method: \"POST\",\n          header: {\n            token: uni.getStorageSync(\"usertoken\") },\n\n          data: {\n            room_number: this.videodata.room_number,\n            client_id: this.client_id,\n            message: this.player_text,\n            type: 'add' },\n\n          success: function success(res) {\n            uni.hideLoading();\n            __f__(\"log\", res.data, \" at pages/player/video.nvue:789\");\n            if (res.data.code == 200) {\n              uni.showToast({\n                icon: \"none\",\n                title: res.data.data.msg });\n\n              _this12.player_text = \"\";\n              uni.hideKeyboard();\n            } else {\n              uni.showToast({\n                icon: \"none\",\n                title: res.data.msg });\n\n            }\n          } });\n\n      } else {\n        uni.showToast({\n          icon: \"none\",\n          title: \"請登入\" });\n\n      }\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 35)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcGxheWVyL3ZpZGVvLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa1RBLDRHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLG9DLGVBR0EsRUFDQSxJQURBLGtCQUNBLENBQ0EsU0FDQSxlQURBLEVBRUEsZUFGQSxFQUdBLFNBSEEsRUFLQSxpQkFMQSxFQU1BLFlBTkEsRUFPQSxlQVBBLEVBUUEsTUFSQSxFQVNBLDRCQVRBLEVBVUEsa0NBVkEsRUFXQSw4Q0FYQSxFQVlBLGFBWkEsRUFhQSxZQWJBLEVBY0EsWUFkQSxFQWVBLGNBZkEsRUFnQkEsY0FoQkEsRUFpQkEsZ0JBakJBLEVBa0JBLGFBbEJBLEVBbUJBLFNBbkJBLEVBb0JBLFVBcEJBLEVBcUJBLGtCQXJCQSxFQXNCQSxZQXRCQSxFQXVCQSxXQXZCQSxFQXdCQSxZQXhCQSxFQXlCQSxjQXpCQSxFQTBCQSxZQTFCQSxFQTJCQSxZQTNCQSxFQTRCQSxxQ0E1QkEsRUE2QkEsVUE3QkEsRUE4QkEsWUE5QkEsRUErQkEsT0EvQkEsRUFnQ0EsYUFoQ0EsRUFpQ0EsWUFDQSxVQURBLEVBRUEsT0FGQSxHQWpDQSxFQXFDQSxnQkFyQ0EsRUFzQ0EsUUF0Q0EsRUF1Q0EsZ0ZBdkNBLEVBd0NBLGlCQXhDQSxFQXlDQSxZQXpDQSxHQTJDQSxDQTdDQSxFQThDQSxNQTlDQSxvQkE4Q0EsQ0FDQSxzQ0FDQSxtQkFDQSxDQUVBLENBbkRBLEVBb0RBLE1BcERBLGtCQW9EQSxNQXBEQSxFQW9EQSxrQkFDQSxvQkFDQSwyQkFDQSxtQkFDQSx5REFDQSw0REFDQSx5Q0FDQSxvQkFDQSxvQkFDQSx5QkFDQSxDQUhBLE1BR0EsQ0FDQSxtQkFDQSw4QkFDQSxDQVBBLENBU0E7QUFDQSxLQVZBLEVBV0EsZ0JBRUEsZ0JBQ0EsQ0F4RUEsRUF5RUEsUUF6RUEsc0JBeUVBLENBQ0Esa0JBQ0EseUJBQ0EsQ0E1RUEsRUE2RUEsY0FDQSwyQkFEQSxFQTdFQSxFQWdGQSxPQWhGQSxxQkFnRkEsbUJBQ0EsNEJBRUEsd0RBQ0E7QUFDQSw4REFDQSxDQUhBLEVBSUEseURBQ0E7QUFDQSw4REFDQSxDQUhBLEVBS0EsQ0E1RkEsRUE2RkEsV0FDQSxVQURBLHdCQUNBLENBQ0EsOEJBQ0EsNEJBQ0EsQ0FKQSxFQUtBLFFBTEEsb0JBS0EsR0FMQSxFQUtBLENBQ0EscUJBQ0EsdUJBQ0EsV0FDQSxDQUhBLE1BR0EsQ0FDQSxnQkFDQSxZQURBLEVBRUEsbUJBRkEsSUFJQSxDQUVBLENBaEJBLEVBaUJBLFdBakJBLHlCQWlCQSxtQkFDQSxjQUNBLDZCQURBLEVBRUEsZ0NBQ0Esb0NBQ0EsQ0FKQSxJQU1BLGNBQ0EsOEJBREEsRUFFQSxnQ0FDQSwwREFDQSxxQ0FDQSxDQUxBLElBT0EsQ0EvQkEsRUFnQ0EsV0FoQ0EseUJBZ0NBLG1CQUNBLGNBQ0Esb0NBREEsRUFFQSxVQUNBLHNDQURBLEVBRkEsRUFLQSxnQ0FDQSxtQ0FEQSxDQUVBO0FBQ0EsU0FSQSxJQVVBLENBM0NBLEVBNENBLEtBNUNBLG1CQTRDQSxDQUNBLHNDQUNBLGlCQUNBLFlBREEsSUFHQSxDQUpBLE1BSUEsQ0FDQSxnQkFDQSxZQURBLEVBRUEsWUFGQSxJQUlBLENBQ0EsQ0F2REEsRUF3REEsUUF4REEsb0JBd0RBLEtBeERBLEVBd0RBLG1CQUNBLHNDQUNBLGtCQUNBLFVBREEsRUFFQSxZQUZBLElBSUEsY0FDQSx5REFEQSxFQUVBLGNBRkEsRUFHQSxVQUNBLHNDQURBLEVBSEEsRUFNQSxRQUNBLHVDQURBLEVBRUEsYUFGQSxFQU5BLEVBVUEsZ0NBQ0Esa0JBQ0EsMERBQ0EsMkJBQ0EsZ0JBQ0EsWUFEQSxFQUVBLHdCQUZBLElBSUEscUJBQ0EsQ0FOQSxNQU1BLENBQ0EsZ0JBQ0EsWUFEQSxFQUVBLG1CQUZBLElBSUEsQ0FDQSxDQXpCQSxJQTRCQSxDQWpDQSxNQWlDQSxDQUNBLGdCQUNBLFlBREEsRUFFQSxZQUZBLElBSUEsQ0FDQSxDQWhHQSxFQWlHQSxPQWpHQSxtQkFpR0EsSUFqR0EsRUFpR0EsQ0FDQSx3QkFDQSxDQW5HQSxFQW9HQSxRQXBHQSxzQkFvR0EsbUJBQ0EsK0JBQ0EsdUJBQ0EsYUFDQSxDQUNBLGtCQUNBLFVBREEsRUFFQSxZQUZBLElBSUEsY0FDQSwrQkFEQSxFQUVBLGdDQUNBLGtCQUNBLGdDQUNBLDBEQUNBLHlCQUNBLENBUEEsSUFVQSxDQXZIQSxFQXdIQSxTQXhIQSxxQkF3SEEsQ0F4SEEsRUF3SEEsQ0FDQSwwQkFDQSxxQkFDQSxDQTNIQSxFQTRIQSxPQTVIQSxxQkE0SEEsQ0FDQSxzQ0FDQSxrQkFDQSxVQURBLEVBRUEsWUFGQSxJQUlBLGNBQ0EsNkJBREEsRUFFQSxjQUZBLEVBR0EsVUFDQSxzQ0FEQSxFQUhBLEVBTUEsUUFDQSwwQkFEQSxFQU5BLEVBU0EsZ0NBQ0Esa0JBQ0EsZ0JBQ0EsWUFEQSxFQUVBLG1CQUZBLElBRkEsQ0FNQTtBQUNBLFdBaEJBLElBa0JBLENBdkJBLE1BdUJBLENBQ0EsZ0JBQ0EsWUFEQSxFQUVBLFlBRkEsSUFJQSxDQUNBLENBMUpBLEVBMkpBLFVBM0pBLHNCQTJKQSxJQTNKQSxFQTJKQSxDQUNBLHVCQURBLENBRUE7QUFDQSxtQ0FDQSxDQS9KQSxFQWdLQSxRQWhLQSxzQkFnS0EsbUJBQ0EsY0FDQSxxQ0FEQSxFQUVBLGdDQUNBLDhCQURBLENBRUE7QUFDQSxTQUxBLElBT0EsQ0F4S0EsRUF5S0EsWUF6S0EsMEJBeUtBLG1CQUNBLG9CQUNBLHNCQURBLEVBRUEsZ0NBQ0EscURBQ0EsQ0FKQSxFQUtBLDBCQUNBLHFEQUNBLENBUEEsSUFTQSxpQ0FDQSxxREFDQSxDQUZBLEVBR0Esa0NBQ0EsMkJBQ0EsQ0FGQSxFQUdBLG9DQUNBLDBDQUNBO0FBQ0EsNERBQ0EsdUJBQ0EsMkJBQ0EsY0FDQSwyQ0FEQSxFQUVBLGNBRkEsRUFHQSxVQUNBLDZFQURBLEVBSEEsRUFNQSxRQUNBLDJCQURBLEVBRUEseUNBRkEsRUFOQSxFQVVBLGdDQUNBLDJCQUNBLDZEQUNBLENBYkEsSUFlQSxDQWpCQSxNQWlCQSxDQUNBLDJCQURBLENBRUE7QUFDQSxXQUNBLENBeEJBLE1Bd0JBLENBQ0EseUNBQ0E7QUFDQSxzREFDQSxtQ0FDQSxDQUpBLE1BSUEsQ0FDQSwwQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBRkEsTUFFQTtBQUNBO0FBQ0EsZUFGQSxNQUVBO0FBQ0E7QUFDQSxlQUZBLE1BRUE7QUFDQTtBQUNBLGVBRkEsTUFFQTtBQUNBO0FBQ0EsZUFGQSxNQUVBO0FBQ0E7QUFDQSxlQUZBLE1BRUE7QUFDQTtBQUNBLGVBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUF0QkEsTUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFOQTs7QUFRQSxlQVZBLEVBVUEsR0FWQTtBQVdBLGFBakJBLE1BaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BNUVBO0FBNkVBLEtBdFFBO0FBdVFBLFlBdlFBLHNCQXVRQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBO0FBQ0E7QUFDQSxXQUpBOztBQU1BLE9BUEEsRUFPQSxHQVBBOztBQVNBLEtBalJBO0FBa1JBLFlBbFJBLHNCQWtSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFEQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSw0Q0FGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxTQWpCQTs7QUFtQkEsS0ExU0E7QUEyU0EsUUEzU0Esa0JBMlNBO0FBQ0E7QUFDQSxLQTdTQTtBQThTQSxZQTlTQSxzQkE4U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxvQkFGQTs7QUFJQTtBQUNBLHFDQURBO0FBRUEscUJBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FSQTs7QUFVQSxLQWpVQTtBQWtVQSxZQWxVQSxzQkFrVUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsb0JBRkE7O0FBSUE7QUFDQSwwREFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVBBOztBQVNBLEtBaFZBO0FBaVZBLFNBalZBLG1CQWlWQTtBQUNBO0FBQ0EsS0FuVkE7QUFvVkEsU0FwVkEsaUJBb1ZBLENBcFZBLEVBb1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLHlCQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVZBOztBQVlBLEtBcFdBO0FBcVdBLE9BcldBLGlCQXFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsK0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxzQkFGQTs7QUFJQTtBQUNBLG9EQURBO0FBRUEsd0JBRkE7QUFHQTtBQUNBLGtEQURBLEVBSEE7O0FBTUE7QUFDQSxtREFEQTtBQUVBLHFDQUZBO0FBR0EscUNBSEE7QUFJQSx1QkFKQSxFQU5BOztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLHdDQUZBOztBQUlBO0FBQ0E7QUFDQSxhQVBBLE1BT0E7QUFDQTtBQUNBLDRCQURBO0FBRUEsbUNBRkE7O0FBSUE7QUFDQSxXQTVCQTs7QUE4QkEsT0ExQ0EsTUEwQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsc0JBRkE7O0FBSUE7QUFDQSxLQXRaQSxFQTdGQSxFIiwiZmlsZSI6IjE1MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8dmlldyBzdHlsZT1cInZpZGVvLWRlbW9cIiA6c3R5bGU9XCJ7aGVpZ2h0OndpbmRvd2hlaWdodCArICdweCd9XCI+XHJcbiAgICA8dmlkZW8gdi1pZj1cInZpZGVvZGF0YS5kaXJlY3RfdXJsXCIgOnNyYz1cInZpZGVvZGF0YS5kaXJlY3RfdXJsXCIgQHBsYXk9XCJwbGF5dmlkZW9cIiA6YXV0b3BsYXk9XCJ0cnVlXCIgb2JqZWN0LWZpdD1cImNvdmVyXCJcclxuICAgICAgOnNob3ctY2VudGVyLXBsYXktYnRuPVwiZmFsc2VcIiA6Y29udHJvbHM9XCJmYWxzZVwiIGNsYXNzPVwibXl2aWRlb1wiIEBlcnJvcj1cImVycm9yXCIgQHBhdXNlPVwicGF1c2VcIiBpZD1cIm15dmlkZW9cIj48L3ZpZGVvPlxyXG4gICAgPCEtLSA8eGstdmlkZW8gdi1pZj1cInZpZGVvZGF0YS5kaXJlY3RfdXJsXCIgOmxpdmVNb2RlPVwidHJ1ZVwiIDpoaWRlUGxheWJhY2tSYXRlPVwiZmFsc2VcIiByZWY9XCJ2aWRlb1wiIGNsYXNzPVwibXl2aWRlb1wiIDphdXRvUGxheT1cInRydWVcIiA6c3JjTGlzdD1cInNyY0xpc3RcIj48L3hrLXZpZGVvPiAtLT5cclxuICAgIDx2aWV3IGNsYXNzPVwiZ3VhbmdnYW9ib3hcIiB2LWlmPVwiZ3VhbmdnYW9kYXRhXCI+XG4gICAgICA8aW1hZ2UgQHRhcD1cIm9wZW51cmwoZ3VhbmdnYW9kYXRhKVwiIDpzcmM9XCJndWFuZ2dhb2RhdGEuaW1hZ2VfdGV4dFwiIGNsYXNzPVwiZ3VhbmdnYW8taW1hZ2VcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cbiAgICA8L3ZpZXc+XG4gICAgPHZpZXcgY2xhc3M9XCJndWFuZ2dhb2JveDFcIiB2LWlmPVwiZ3VhbmdnYW9kYXRhMVwiPlxuICAgICAgPGltYWdlIEB0YXA9XCJvcGVudXJsKGd1YW5nZ2FvZGF0YTEpXCIgOnNyYz1cImd1YW5nZ2FvZGF0YTEuaW1hZ2VfdGV4dFwiIGNsYXNzPVwiZ3VhbmdnYW8taW1hZ2VcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cbiAgICA8L3ZpZXc+XHJcbiAgICA8c2Nyb2xsLXZpZXcgc2Nyb2xsLXk9XCJ0cnVlXCIgY2xhc3M9XCJjaGF0LXNjcm9sbFwiIDpzY3JvbGwtdG9wPVwidG9kb3duXCIgOnNjcm9sbC1pbnRvLXZpZXc9XCJzY3JvbGxJRFwiIDpzY3JvbGwtd2l0aC1hbmltYXRpb249XCJ0cnVlXCI+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwiY2hhdC1nZ1wiIHJlZj1cImJveFwiPnt7d2VuYW59fTwvdGV4dD5cclxuICAgICAgPHRleHQgY2xhc3M9XCJjaGF0LWdnXCIgcmVmPVwiYm94MVwiPnt7d2VuYW4xfX08L3RleHQ+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwiY2hhdC10ZXh0XCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gY2hhdGxpc3RcIiA6a2V5PVwiaW5kZXhcIiA6cmVmPVwiJ3Njcm9sbCcgKyBpbmRleFwiIDppZD1cIidzY3JvbGwnICsgaW5kZXhcIj5cclxuICAgICAgICA8dmlldyBjbGFzcz1cImNoYXQtcmlnaHRcIj5cbiAgICAgICAgICA8dmlldyBjbGFzcz1cImNoYXQtcmlnaHQtZGVuZ2ppXCI+XG4gICAgICAgICAgICA8aW1hZ2Ugdi1pZj1cIml0ZW0ubGV2ZWwgPD0gMTBcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE2NS5wbmdcIiBjbGFzcz1cImRlbmdqaS1pY29uXCI+PC9pbWFnZT5cbiAgICAgICAgICAgIDxpbWFnZSB2LWVsc2UtaWY9XCJpdGVtLmxldmVsIDw9IDIwXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy8xNjYucG5nXCIgY2xhc3M9XCJkZW5namktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICA8aW1hZ2UgIHYtZWxzZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE2Ny5wbmdcIiBjbGFzcz1cImRlbmdqaS1pY29uXCI+PC9pbWFnZT5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZGVuZ2ppLXRleHRcIj57e2l0ZW0ubGV2ZWx9fTwvdGV4dD5cbiAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJjaGF0LXJpZ2h0LWxvZ29cIj5cbiAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE2OC5wbmdcIiB2LWlmPVwiaXRlbS5sb2dvaWNvbiA9PSAxXCIgY2xhc3M9XCJsb2dvLWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTY5LnBuZ1wiIHYtZWxzZS1pZj1cIml0ZW0ubG9nb2ljb24gPT0gMlwiIGNsYXNzPVwibG9nby1pY29uXCI+PC9pbWFnZT5cbiAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE3MC5wbmdcIiB2LWVsc2UgY2xhc3M9XCJsb2dvLWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJkZW5namktdGV4dFwiPuWwj+eMquekvuWMujwvdGV4dD5cbiAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNoYXQtcmlnaHQtdGV4dDJcIiBzdHlsZT1cImNvbG9yOiAjOTZEOEY2O1wiPnt7aXRlbS5uYW1lfX3vvJo8L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY2hhdC10ZXh0LXRleHRcIj57e2l0ZW0ubWVzc2FnZX19PC90ZXh0PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICA8L3Njcm9sbC12aWV3PlxyXG4gICAgPHZpZXcgY2xhc3M9XCJhZGQtYm94XCI+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwiYWRkMi1ib3hcIj5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInNjcm9sbC1hZGQtYm94XCIgOnN0eWxlPVwie3RvcDphZGR0b3AgKyAncHgnfVwiPlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJjaGF0LXJpZ2h0MVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGFkZGxpc3RcIiA6a2V5PVwiaW5kZXhcIiA6c3R5bGU9XCJ7b3BhY2l0eTppbmRleCA9PSAoYWRkbGlzdC5sZW5ndGggLSAxKSA/IDEgOiAwfVwiPlxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJjaGF0LXJpZ2h0MS1kZW5namlcIj5cbiAgICAgICAgICAgICAgPGltYWdlIHYtaWY9XCJpdGVtLmxldmVsIDw9IDEwXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy8xNjUucG5nXCIgY2xhc3M9XCJkZW5namktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDxpbWFnZSB2LWVsc2UtaWY9XCJpdGVtLmxldmVsIDw9IDIwXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy8xNjYucG5nXCIgY2xhc3M9XCJkZW5namktaWNvblwiPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDxpbWFnZSAgdi1lbHNlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTY3LnBuZ1wiIGNsYXNzPVwiZGVuZ2ppLWljb25cIj48L2ltYWdlPlxuICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImRlbmdqaS10ZXh0XCI+e3tpdGVtLmxldmVsfX08L3RleHQ+XG4gICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgIDwhLS0gPHRleHQgY2xhc3M9XCJjaGF0LXJpZ2h0LXRleHQxXCIgdi1pZj1cIml0ZW0ubGV2ZWwgPD0gMTBcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNGRjZBNkE7XCI+TFYue3tpdGVtLmxldmVsfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2hhdC1yaWdodC10ZXh0MVwiIHYtZWxzZS1pZj1cIml0ZW0ubGV2ZWwgPD0gMjBcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNGRkQxNkE7XCI+TFYue3tpdGVtLmxldmVsfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2hhdC1yaWdodC10ZXh0MVwiIHYtZWxzZSBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICM2QUJERkY7XCI+TFYue3tpdGVtLmxldmVsfX08L3RleHQ+IC0tPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNoYXQtcmlnaHQtdGV4dDJcIj57e2l0ZW0ubmFtZX19e3tpdGVtLm1lc3NhZ2V9fTwvdGV4dD5cclxuICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgIDwvdmlldz5cclxuICAgIDwvdmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwiZ2lmdC1ib3hcIj5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJnaWZ0Mi1ib3hcIj5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInNjcm9sbC1naWZ0LWJveFwiIDpzdHlsZT1cInt0b3A6Z2lmdHRvcCArICdweCd9XCI+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cImdpZnQtcmlnaHQxXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gZ2lmdGxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgICAgICAgICAgPGltYWdlIDpzcmM9XCJpdGVtLmltYWdlXCIgY2xhc3M9XCJnaWZ0LWl0ZW1cIj48L2ltYWdlPlxyXG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImdpZnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJnaWZ0LWNlbnRlci10ZXh0MVwiPnt7aXRlbS5uYW1lfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJnaWZ0LWNlbnRlci10ZXh0MlwiPnt7aXRlbS5tZXNzYWdlMX19PC90ZXh0PlxyXG4gICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgIDxpbWFnZSB2LWlmPVwiaXRlbS5tZXNzYWdlID09IDBcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE1OC5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCIgY2xhc3M9XCJnaWZ0LWltYWdlXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgPGltYWdlIHYtZWxzZS1pZj1cIml0ZW0ubWVzc2FnZSA9PSAxXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy8xNTQucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiIGNsYXNzPVwiZ2lmdC1pbWFnZVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgIDxpbWFnZSB2LWVsc2UtaWY9XCJpdGVtLm1lc3NhZ2UgPT0gMlwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTU1LnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIiBjbGFzcz1cImdpZnQtaW1hZ2VcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICA8aW1hZ2Ugdi1lbHNlLWlmPVwiaXRlbS5tZXNzYWdlID09IDNcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE1Ni5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCIgY2xhc3M9XCJnaWZ0LWltYWdlXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgPGltYWdlIHYtZWxzZS1pZj1cIml0ZW0ubWVzc2FnZSA9PSA0XCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy8xNTIucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiIGNsYXNzPVwiZ2lmdC1pbWFnZVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgIDxpbWFnZSB2LWVsc2UtaWY9XCJpdGVtLm1lc3NhZ2UgPT0gNVwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTU3LnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIiBjbGFzcz1cImdpZnQtaW1hZ2VcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICA8aW1hZ2Ugdi1lbHNlLWlmPVwiaXRlbS5tZXNzYWdlID09IDZcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE1My5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCIgY2xhc3M9XCJnaWZ0LWltYWdlXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgPGltYWdlIHYtZWxzZS1pZj1cIml0ZW0ubWVzc2FnZSA9PSA3XCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy8xNTkucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiIGNsYXNzPVwiZ2lmdC1pbWFnZVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICA8L3ZpZXc+XG4gICAgPHZpZXcgY2xhc3M9XCJwaW5nbHVuLWJveFwiPlxuICAgICAgPHNjcm9sbC12aWV3IHNjcm9sbC14PVwidHJ1ZVwiIGNsYXNzPVwicGluZ2x1bi1zY3JvbGxcIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJwaW5nbHVuLXNjcm9sbC10ZXh0XCIgQHRhcD1cInNlbmR0ZXh0KGl0ZW0pXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gZGFubXVsaXN0XCIgOmtleT1cImluZGV4XCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICA8L3Njcm9sbC12aWV3PlxuICAgIDwvdmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwiZG93bi10YWJcIj5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJkb3duLXRhYi1sZWZ0XCI+XHJcbiAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTQ5LnBuZ1wiIGNsYXNzPVwiZG93bi10YWItbGVmdC1pbWFnZVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJkb3duLXRhYi1sZWZ0LXRleHRcIiA6Zm9jdXM9XCJmb2N1c1wiIHBsYWNlaG9sZGVyPVwi6IGK54K55LuA5LmI4oCmXCIgOmFkanVzdC1wb3NpdGlvbj1cImZhbHNlXCJcclxuICAgICAgICAgIHYtbW9kZWw9XCJwbGF5ZXJfdGV4dFwiIC8+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJkb3duLXRhYi1yaWdodFwiPlxyXG4gICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE2NC5wbmdcIiBjbGFzcz1cImRvd24tdGFiLXJpZ2h0LWltZ1wiIEB0YXA9XCJvcGVuZ2FtZVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTQ3LnBuZ1wiIGNsYXNzPVwiZG93bi10YWItcmlnaHQtaW1nXCIgQHRhcD1cIm9wZW5saXd1XCI+PC9pbWFnZT5cclxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy8xNDYucG5nXCIgY2xhc3M9XCJkb3duLXRhYi1yaWdodC1pbWdcIiBAdGFwPVwiYmFja1wiPjwvaW1hZ2U+XHJcbiAgICAgIDwvdmlldz5cclxuICAgIDwvdmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwiaW5wdXQtZG93blwiIDpzdHlsZT1cIntib3R0b206aW5wdXRfYm90dG9tICsgJ3B4J31cIj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLogYrngrnku4DkuYguLi5cIiA6Zm9jdXM9XCJmb2N1c1wiIGNsYXNzPVwiaW5wdXQtaW5wdXRcIiA6YWRqdXN0LXBvc2l0aW9uPVwiZmFsc2VcIiB2LW1vZGVsPVwicGxheWVyX3RleHRcIiAvPlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImlucHV0LXNlbmRcIiBAdGFwPVwiYWRkXCI+5Y+R6YCBPC90ZXh0PlxyXG4gICAgPC92aWV3PlxuICAgIDx2aWV3IGNsYXNzPVwiaGVhZGVyXCIgOnN0eWxlPVwie3RvcDpzdGF0dXNoZWlnaHQgKyAxMCArICdweCd9XCI+XG4gICAgICA8dmlldyBjbGFzcz1cInVzZXItaGVhZGVyXCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiaGVhZGVyLWxlZnRcIj5cbiAgICAgICAgICA8aW1hZ2Ugdi1pZj1cInVzZXJkYXRhXCIgOnNyYz1cInVzZXJkYXRhLmltYWdlX3RleHRcIiBjbGFzcz1cInVzZXItaW1hZ2VcIiBAdGFwPVwib3BlbnVzZXJcIj48L2ltYWdlPlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiaGVhZGVyLWNlbnRlclwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2VudGVyLWRvd24tdGV4dFwiPnt7dXNlcmRhdGEubmFtZX19PC90ZXh0PlxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwiY2VudGVyLWRvd25cIj5cbiAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE0NS5wbmdcIiBjbGFzcz1cImNlbnRlci1kb3duLWltZ1wiPjwvaW1hZ2U+XG4gICAgICAgICAgICA8dGV4dCBzdHlsZT1cImNvbG9yOiAjZmZmO2ZvbnQtc2l6ZTogMjZycHg7XCI+e3tyZWR1fX08L3RleHQ+XG4gICAgICAgICAgPC92aWV3PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiaGVhZGVyLXJpZ2h0XCI+XG4gICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTQ0LnBuZ1wiIGNsYXNzPVwiZ3VhbnpodS1idXRcIiBAdGFwPVwiZ3VhbnpodVwiPjwvaW1hZ2U+XG4gICAgICAgIDwvdmlldz5cbiAgICAgIDwvdmlldz5cbiAgICAgIDxzY3JvbGwtdmlldyBzY3JvbGwteD1cInRydWVcIiBjbGFzcz1cImd1aWJpbi1zY3JvbGxcIj5cbiAgICAgICAgPGltYWdlIEB0YXA9XCJvcGVuZ3VpYmluKGl0ZW0pXCIgOnNyYz1cIml0ZW0uaW1hZ2VfdGV4dFwiIGNsYXNzPVwiZ3VpYmluLWltYWdlXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gZ3VpYmluZGF0YVwiXG4gICAgICAgICAgOmtleT1cImluZGV4XCI+PC9pbWFnZT5cbiAgICAgIDwvc2Nyb2xsLXZpZXc+XG4gICAgICA8dmlldyBjbGFzcz1cImd1aWJpbi1jb3VudFwiPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImd1aWJpbi1jb3VudC10ZXh0XCI+e3t2aWRlb2RhdGEudmlwfX08L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiZ3VpYmluLWNvdW50LXRleHRcIj7otLXlrr48L3RleHQ+XG4gICAgICA8L3ZpZXc+XG4gICAgPC92aWV3PlxyXG4gICAgPHVuaS1wb3B1cCByZWY9XCJ1c2VyaW5mb1wiPlxyXG4gICAgICA8dmlldyBjbGFzcz1cInVzZXItcG9wdXBcIj5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInVzZXItdG9wXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInVzZXItdG9wLWxlZnRcIj7kuL7miqU8L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInVzZXItdG9wLXJpZ2h0XCIgQHRhcD1cImNsb3NlcG9wdXBcIj5YPC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8aW1hZ2UgOnNyYz1cInVzZXJpbmZvLmltYWdlX3RleHRcIiBjbGFzcz1cInVzZXItcG9wdXAtaW1hZ2VcIj48L2ltYWdlPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidXNlci1wb3B1cC1uYW1lXCI+e3t1c2VyaW5mby5uYW1lfX08L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJ1c2VyLXBvcHVwLWRldGFpbFwiPnt7dXNlcmluZm8uY29udGVudH19PC90ZXh0PlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwidXNlci1wb3B1cC1jb3VudFwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ1c2VyLXBvcHVwLWNvdW50LWxlZnRcIj7miL/pl7Tlj7cge3t2aWRlb2RhdGEucm9vbV9udW1iZXJ9fTwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidXNlci1wb3B1cC1jb3VudC1jZW50ZXJcIj58PC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ1c2VyLXBvcHVwLWNvdW50LXJpZ2h0XCI+57KJ5LidIHt7dXNlcmluZm8uZmFuc319PC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInZpZXctZGVuZ2ppXCI+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cImRlbmdqaS1wb3B1cFwiPlxyXG4gICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy8xMjcucG5nXCIgY2xhc3M9XCJkZW5namktaW1hZ2VcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImRlbmdqaS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZGVuZ2ppLXJpZ2h0LXRleHRcIj7kuLvmkq3nrYnnuqc8L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJkZW5namktcmlnaHQtdGV4dFwiPnt7dXNlcmluZm8ubGV2ZWx9fTwvdGV4dD5cclxuICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInBvcHVwLWRvd25cIj5cclxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwicG9wdXAtZG93bi1sZWZ0XCI+XHJcbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZGVuZ2ppLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJwb3B1cC1kb3duLWxlZnQtdGV4dFwiPuS7lueahOaIkOWwsTwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInBvcHVwLWRvd24tbGVmdC10ZXh0XCI+5pqC5pegPC90ZXh0PlxyXG4gICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzEyNy5wbmdcIiBjbGFzcz1cImRlbmdqaS1pbWFnZVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cInBvcHVwLWRvd24tcmlnaHRcIj5cclxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJkZW5namktcmlnaHRcIj5cclxuICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInBvcHVwLWRvd24tcmlnaHQtdGV4dFwiPuekvOeJqeWimTwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInBvcHVwLWRvd24tcmlnaHQtdGV4dFwiIHYtaWY9XCJ1c2VyaW5mby5kaXJlY3RcIj7lhbHngrnkuq57e3VzZXJpbmZvLmRpcmVjdC5naWZ0fX3kuKo8L3RleHQ+XHJcbiAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTI3LnBuZ1wiIGNsYXNzPVwiZGVuZ2ppLWltYWdlXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPCEtLSA8dmlldyBjbGFzcz1cInBvcHVwLWJpYW9xaWFuXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInBvcHVwLWJpYW9xaWFuLXRleHRcIiB2LWZvcj1cIihhLGIpIGluIDRcIiA6a2V5PVwiYlwiPuWkmuaJjeWkmuiJujwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+IC0tPlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICA8L3VuaS1wb3B1cD5cclxuICAgIDx1bmktcG9wdXAgcmVmPVwiZ3VpYmluaW5mb1wiPlxyXG4gICAgICA8dmlldyBjbGFzcz1cInVzZXItcG9wdXBcIj5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInVzZXItdG9wXCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInVzZXItdG9wLWxlZnRcIj48L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInVzZXItdG9wLXJpZ2h0XCIgQHRhcD1cImNsb3NlcG9wdXBcIj5YPC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8aW1hZ2UgOnNyYz1cImd1aWJpbmluZm8uaW1hZ2VfdGV4dFwiIGNsYXNzPVwidXNlci1wb3B1cC1pbWFnZVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJ1c2VyLXBvcHVwLW5hbWVcIj57e2d1aWJpbmluZm8ubmFtZX19PC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidXNlci1wb3B1cC1kZXRhaWxcIj7ov5nkuKrkurrlvojmh5LvvIzmsqHmnInnlZnkuIvku4DkuYjkuJzopb88L3RleHQ+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ2aWV3LWRlbmdqaVwiPlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJkZW5namktcG9wdXBcIj5cclxuICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTI3LnBuZ1wiIGNsYXNzPVwiZGVuZ2ppLWltYWdlXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJkZW5namktcmlnaHRcIj5cclxuICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImRlbmdqaS1yaWdodC10ZXh0XCI+55So5oi3562J57qnPC90ZXh0PlxyXG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZGVuZ2ppLXJpZ2h0LXRleHRcIj57e2d1aWJpbmluZm8ubGV2ZWx9fTwvdGV4dD5cclxuICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInBvcHVwLWRvd25cIj5cclxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwicG9wdXAtZG93bi1sZWZ0XCI+XHJcbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZGVuZ2ppLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJwb3B1cC1kb3duLWxlZnQtdGV4dFwiPuS7lueahOaIkOWwsTwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInBvcHVwLWRvd24tbGVmdC10ZXh0XCI+5pqC5pegPC90ZXh0PlxyXG4gICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzEyNy5wbmdcIiBjbGFzcz1cImRlbmdqaS1pbWFnZVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICA8L3VuaS1wb3B1cD5cclxuICAgIDx1bmktcG9wdXAgdHlwZT1cImJvdHRvbVwiIHJlZj1cImdhbWVcIj5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJwb3B1cC1nYW1lXCI+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJwb3B1cC1nYW1lLWl0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBnYW1lbGlzdFwiIDprZXk9XCJpbmRleFwiIEB0YXA9XCJvcGVudXJsKGl0ZW0pXCI+XHJcbiAgICAgICAgICA8aW1hZ2UgOnNyYz1cIml0ZW0uaW1hZ2VfdGV4dFwiIGNsYXNzPVwiZ2FtZS1pbWFnZVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImdhbWUtdGV4dFwiPnt7aXRlbS5uYW1lfX08L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICA8L3VuaS1wb3B1cD5cclxuICAgIDx1bmktcG9wdXAgdHlwZT1cImJvdHRvbVwiIHJlZj1cImxpd3VcIj5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJwb3B1cC1saXd1XCIgdi1pZj1cImxpd3VsaXN0Lmxlbmd0aCA+IDBcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImxpd3UtdGl0bGVcIj7npLzniak8L3RleHQ+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJsaXd1LWxpc3RcIj5cclxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwibGl3dS1pdGVtIGJvcmRlci10b3AgYm9yZGVyLXJpZ2h0XCIgQHRhcD1cInNlbmRsaXd1KDApXCI+XHJcbiAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltYWdlcy8xNTgucG5nXCIgY2xhc3M9XCJsaXd1LWltYWdlXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibGl3dS10ZXh0XCI+5bCP6aOe5py6PC90ZXh0PlxyXG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImxpd3UtcHJpY2VcIj5cclxuICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy8xNTEucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiIGNsYXNzPVwiaHVvYmktaW1nXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInByaWNlLXRleHRcIj57e2xpd3VsaXN0WzBdLnByaWNlfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwibGl3dS1pdGVtIGJvcmRlci10b3AgYm9yZGVyLXJpZ2h0XCIgQHRhcD1cInNlbmRsaXd1KDEpXCI+XHJcbiAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE1NC5wbmdcIiBjbGFzcz1cImxpd3UtaW1hZ2VcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJsaXd1LXRleHRcIj42NjY8L3RleHQ+XHJcbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwibGl3dS1wcmljZVwiPlxyXG4gICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE1MS5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCIgY2xhc3M9XCJodW9iaS1pbWdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicHJpY2UtdGV4dFwiPnt7bGl3dWxpc3RbMV0ucHJpY2V9fTwvdGV4dD5cclxuICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJsaXd1LWl0ZW0gYm9yZGVyLXRvcCBib3JkZXItcmlnaHRcIiBAdGFwPVwic2VuZGxpd3UoMilcIj5cclxuICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTU1LnBuZ1wiIGNsYXNzPVwibGl3dS1pbWFnZVwiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImxpd3UtdGV4dFwiPuWVquWVquWVqjwvdGV4dD5cclxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJsaXd1LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTUxLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIiBjbGFzcz1cImh1b2JpLWltZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJwcmljZS10ZXh0XCI+e3tsaXd1bGlzdFsyXS5wcmljZX19PC90ZXh0PlxyXG4gICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cImxpd3UtaXRlbSBib3JkZXItdG9wXCIgQHRhcD1cInNlbmRsaXd1KDMpXCI+XHJcbiAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE1Ni5wbmdcIiBjbGFzcz1cImxpd3UtaW1hZ2VcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJsaXd1LXRleHRcIj7lpKfnuqLljIU8L3RleHQ+XHJcbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwibGl3dS1wcmljZVwiPlxyXG4gICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE1MS5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCIgY2xhc3M9XCJodW9iaS1pbWdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicHJpY2UtdGV4dFwiPnt7bGl3dWxpc3RbM10ucHJpY2V9fTwvdGV4dD5cclxuICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJsaXd1LWl0ZW0gYm9yZGVyLXRvcCBib3JkZXItcmlnaHQgIGJvcmRlci1ib3R0b21cIiBAdGFwPVwic2VuZGxpd3UoNClcIj5cclxuICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTUyLnBuZ1wiIGNsYXNzPVwibGl3dS1pbWFnZVwiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImxpd3UtdGV4dFwiPuadnOiVvuaWrzwvdGV4dD5cclxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJsaXd1LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTUxLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIiBjbGFzcz1cImh1b2JpLWltZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJwcmljZS10ZXh0XCI+e3tsaXd1bGlzdFs0XS5wcmljZX19PC90ZXh0PlxyXG4gICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cImxpd3UtaXRlbSBib3JkZXItdG9wIGJvcmRlci1yaWdodCAgYm9yZGVyLWJvdHRvbVwiIEB0YXA9XCJzZW5kbGl3dSg1KVwiPlxyXG4gICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy8xNTcucG5nXCIgY2xhc3M9XCJsaXd1LWltYWdlXCIgbW9kZT1cImFzcGVjdEZpdFwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibGl3dS10ZXh0XCI+6bKc6IqxPC90ZXh0PlxyXG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImxpd3UtcHJpY2VcIj5cclxuICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy8xNTEucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiIGNsYXNzPVwiaHVvYmktaW1nXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInByaWNlLXRleHRcIj57e2xpd3VsaXN0WzVdLnByaWNlfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwibGl3dS1pdGVtIGJvcmRlci10b3AgYm9yZGVyLXJpZ2h0ICBib3JkZXItYm90dG9tXCIgQHRhcD1cInNlbmRsaXd1KDYpXCI+XHJcbiAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE1My5wbmdcIiBjbGFzcz1cImxpd3UtaW1hZ2VcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJsaXd1LXRleHRcIj41MjA8L3RleHQ+XHJcbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwibGl3dS1wcmljZVwiPlxyXG4gICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE1MS5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCIgY2xhc3M9XCJodW9iaS1pbWdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicHJpY2UtdGV4dFwiPnt7bGl3dWxpc3RbNl0ucHJpY2V9fTwvdGV4dD5cclxuICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJsaXd1LWl0ZW0gYm9yZGVyLXRvcCBib3JkZXItYm90dG9tXCIgQHRhcD1cInNlbmRsaXd1KDcpXCI+XHJcbiAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE1OS5wbmdcIiBjbGFzcz1cImxpd3UtaW1hZ2VcIiBtb2RlPVwiYXNwZWN0Rml0XCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJsaXd1LXRleHRcIj7lqIHlipvnsr08L3RleHQ+XHJcbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwibGl3dS1wcmljZVwiPlxyXG4gICAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE1MS5wbmdcIiBtb2RlPVwiYXNwZWN0Rml0XCIgY2xhc3M9XCJodW9iaS1pbWdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicHJpY2UtdGV4dFwiPnt7bGl3dWxpc3RbN10ucHJpY2V9fTwvdGV4dD5cclxuICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dmlldyBjbGFzcz1cImxpd3UtZG93blwiPlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJsaXd1LWRvd24tbGVmdFwiIEB0YXA9XCJ0b2J1eVwiPlxyXG4gICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy8xNTEucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiIGNsYXNzPVwiaHVvYmktaW1nXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJsaXd1LXByaWNlLXRleHRcIj57e21vbmV5fX08L3RleHQ+XHJcbiAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzgxLnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIiBjbGFzcz1cImxpd3UtbW9yZVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImxpd3UtZG93bi1yaWdodFwiPui1oOmAgTwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgIDwvdmlldz5cclxuICAgIDwvdW5pLXBvcHVwPlxyXG4gICAgPGltYWdlIHNyYz1cIi9zdGF0aWMvV2VjaGF0SU1HMTUucG5nXCIgOmZhZGUtc2hvdz1cImZhbHNlXCIgbW9kZT1cImFzcGVjdEZpbGxcIiBjbGFzcz1cImZlbmdtaWFuLWltYWdlXCIgOnN0eWxlPVwie2hlaWdodDp3aW5kb3doZWlnaHQgKyAncHgnfVwiXHJcbiAgICAgIHYtaWY9XCJzaG93ZmVuZ21pYW4gfHwgaXN4aWFib1wiPjwvaW1hZ2U+XHJcbiAgICA8dmlldyBjbGFzcz1cInhpYWJvXCIgOnN0eWxlPVwie2hlaWdodDp3aW5kb3doZWlnaHQgKyAncHgnfVwiIHYtaWY9XCJpc3hpYWJvXCI+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwieGlhYm8tY2xvc2VcIiA6c3R5bGU9XCJ7dG9wOnN0YXR1c2hlaWdodCArIDEwICsgJ3B4J31cIiBAdGFwPVwiYmFja1wiPlg8L3RleHQ+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwieGlhYm8tYm94XCI+XHJcbiAgICAgICAgPGltYWdlIDpzcmM9XCJ1c2VyZGF0YS5pbWFnZV90ZXh0XCIgbW9kZT1cImFzcGVjdEZpdFwiIGNsYXNzPVwieGlhYm8taW1hZ2VcIj48L2ltYWdlPlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwieGlhYm8tdmlld1wiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ4aWFiby1uYW1lXCI+e3t1c2VyZGF0YS5uYW1lfX08L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cInhpYWJvLWRlbmdqaVwiPkxWe3t1c2VyZGF0YS5sZXZlbH19PC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInhpYWJvLXRpcHNcIj7nm7Tmkq3lt7Lnu5PmnZ88L3RleHQ+XHJcbiAgICAgICAgPCEtLSA8dGV4dCBjbGFzcz1cInhpYWJvLXRpbWVcIj7kuIrmrKHnm7Tmkq3ml7bpl7TvvJoyMDIwLTAxLTA4IDIxOjAwOjAwPC90ZXh0PlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwieGlhYm8tdGFiXCI+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cInhpYWJvLXRhYi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwieGlhYm8tdGFiLWl0ZW0tdGV4dFwiPjEuMeS4hzwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ4aWFiby10YWItaXRlbS10ZXh0XCI+5Lq65rCU5YC8PC90ZXh0PlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJ4aWFiby10YWItaXRlbVwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInhpYWJvLXRhYi1pdGVtLXRleHRcIj4xOjAwOjIyPC90ZXh0PlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInhpYWJvLXRhYi1pdGVtLXRleHRcIj7nm7Tmkq3ml7bplb88L3RleHQ+XHJcbiAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPC92aWV3PiAtLT5cclxuICAgICAgPC92aWV3PlxyXG4gICAgPC92aWV3PlxyXG4gIDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHVuaVBvcHVwIGZyb20gJ0AvY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZSdcclxuICAvLyAjaWZkZWYgQVBQLU5WVUVcclxuICBjb25zdCBkb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpXHJcbiAgLy8gI2VuZGlmXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgd2luZG93aGVpZ2h0OiAwLFxyXG4gICAgICAgIHN0YXR1c2hlaWdodDogMCxcclxuICAgICAgICB0b2Rvd246IDAsXHJcblxyXG4gICAgICAgIGlucHV0X2JvdHRvbTogLTUwLFxyXG4gICAgICAgIGZvY3VzOiBmYWxzZSxcclxuICAgICAgICBwbGF5ZXJfdGV4dDogJycsXHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIHVybDogZ2V0QXBwKCkuZ2xvYmFsRGF0YS51cmwsXHJcbiAgICAgICAgaGVhZGVyOiBnZXRBcHAoKS5nbG9iYWxEYXRhLmhlYWRlcixcbiAgICAgICAgd2Vic29ja2VydXJsOiBnZXRBcHAoKS5nbG9iYWxEYXRhLndlYnNvY2tlcnVybCxcclxuICAgICAgICB2aWRlb2RhdGE6IFtdLFxyXG4gICAgICAgIHVzZXJkYXRhOiBbXSxcclxuICAgICAgICB1c2VyaW5mbzogW10sXHJcbiAgICAgICAgZ3VpYmluaW5mbzogW10sXHJcbiAgICAgICAgZ3VpYmluZGF0YTogW10sXHJcbiAgICAgICAgc29ja2V0VGFzazogbnVsbCxcclxuICAgICAgICBjbGllbnRfaWQ6ICcnLFxyXG4gICAgICAgIHdlbmFuOiAnJyxcclxuICAgICAgICB3ZW5hbjE6ICcnLFxyXG4gICAgICAgIHNob3dmZW5nbWlhbjogdHJ1ZSxcclxuICAgICAgICBjaGF0bGlzdDogW10sXHJcbiAgICAgICAgYWRkbGlzdDogW10sXHJcbiAgICAgICAgZ2lmdGxpc3Q6IFtdLFxyXG4gICAgICAgIGlzeGlhYm86IGZhbHNlLFxyXG4gICAgICAgIGdhbWVsaXN0OiBbXSxcclxuICAgICAgICBsaXd1bGlzdDogW10sXHJcbiAgICAgICAgb3BlbnVybHM6IGdldEFwcCgpLmdsb2JhbERhdGEub3BlbnVybCxcclxuICAgICAgICBhZGR0b3A6IDQwLFxyXG4gICAgICAgIGdpZnR0b3A6IDEwMCxcclxuICAgICAgICByZWR1OiAwLFxyXG4gICAgICAgIG1vbmV5OiAnMC4wMCcsXHJcbiAgICAgICAgc3JjTGlzdDogW3tcclxuICAgICAgICAgIG5hbWU6ICfmqJnmuIUnLFxyXG4gICAgICAgICAgdXJsOiAnJ1xyXG4gICAgICAgIH1dLFxuICAgICAgICBndWFuZ2dhb2RhdGE6e30sXG4gICAgICAgIHRpbWU6JycsXG4gICAgICAgIGRhbm11bGlzdDpbJ+ijpOWtkOmDveiEseS6huS9oOiuqeaIkeeci+i/meS4qicsJ+aSuOeuoeS4gOaXtueIve+8jOS4gOebtOiKseWgguS4gOebtOeIvScsJ+aIkeWujOS6i+S6hu+8jOS9oOS7rOWRoicsJ+i2tOS4i++8jOWxgeiCoee/mOmrmCcsJ+ecn+eahOW+iOaDs+aPkui/m+WOu+eIveS4gOS4iyddLFxuICAgICAgICBndWFuZ2dhb2RhdGExOltdLFxuICAgICAgICBzY3JvbGxJRDonJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICBpZiAodW5pLmdldFN0b3JhZ2VTeW5jKFwidXNlcnRva2VuXCIpKSB7XHJcbiAgICAgICAgdGhpcy5nZXR1c2VyaW5mbygpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKG9wdGlvbikge1xyXG4gICAgICB0aGlzLmlkID0gb3B0aW9uLmlkXHJcbiAgICAgIHRoaXMuZmVuZ21pYW4gPSBvcHRpb24uaW1nXHJcbiAgICAgIHRoaXMuZ2V0Z3VhbmdnYW8oKVxyXG4gICAgICB0aGlzLndpbmRvd2hlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodFxyXG4gICAgICB0aGlzLnN0YXR1c2hlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnN0YXR1c0JhckhlaWdodFxyXG4gICAgICB1bmkub25LZXlib2FyZEhlaWdodENoYW5nZSgoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmhlaWdodCA9PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmZvY3VzID0gZmFsc2VcclxuICAgICAgICAgIHRoaXMuaW5wdXRfYm90dG9tID0gLTUwXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZm9jdXMgPSB0cnVlXHJcbiAgICAgICAgICB0aGlzLmlucHV0X2JvdHRvbSA9IGUuaGVpZ2h0XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmhlaWdodCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuZ2V0dmlkZW8oKVxyXG5cclxuICAgICAgdGhpcy5nZXR3ZW5hbigpXHJcbiAgICB9LFxyXG4gICAgb25VbmxvYWQoKSB7XHJcbiAgICAgIHVuaS5jbG9zZVNvY2tldCgpXG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZSlcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIHVuaVBvcHVwXHJcbiAgICB9LFxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgdGhpcy53ZW5hbiA9ICfmraPlnKjov57mjqXogYrlpKnmnI3liqHlmaguLi4nXHJcbiAgICAgIC8vICNpZmRlZiBBUFAtTlZVRVxyXG4gICAgICBkb20uZ2V0Q29tcG9uZW50UmVjdCh0aGlzLiRyZWZzLmJveCwgb3B0aW9uID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24uc2l6ZSlcclxuICAgICAgICB0aGlzLnRvZG93biA9IHRoaXMudG9kb3duICsgb3B0aW9uLnNpemUuaGVpZ2h0ICsgMTBcclxuICAgICAgfSlcclxuICAgICAgZG9tLmdldENvbXBvbmVudFJlY3QodGhpcy4kcmVmcy5ib3gxLCBvcHRpb24gPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbi5zaXplKVxyXG4gICAgICAgIHRoaXMudG9kb3duID0gdGhpcy50b2Rvd24gKyBvcHRpb24uc2l6ZS5oZWlnaHQgKyAxMFxyXG4gICAgICB9KVxyXG4gICAgICAvLyAjZW5kaWZcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XG4gICAgICBjbG9zZXBvcHVwKCl7XG4gICAgICAgIHRoaXMuJHJlZnMuZ3VpYmluaW5mby5jbG9zZSgpXG4gICAgICAgIHRoaXMuJHJlZnMudXNlcmluZm8uY2xvc2UoKVxuICAgICAgfSxcbiAgICAgIHNlbmR0ZXh0KHN0cil7XG4gICAgICAgIGlmKHRoaXMuY2xpZW50X2lkKXtcbiAgICAgICAgICB0aGlzLnBsYXllcl90ZXh0ID0gc3RyXG4gICAgICAgICAgdGhpcy5hZGQoKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIGljb246XCJub25lXCIsXG4gICAgICAgICAgICB0aXRsZTpcIuiBiuWkqeacjeWKoeWZqOacqui/nuaOpeaIkOWKn1wiXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH0sXG4gICAgICBnZXRndWFuZ2dhbygpe1xuICAgICAgICB1bmkucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOnRoaXMudXJsICsgJy9kaXJlY3QvYWR2JyxcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmd1YW5nZ2FvZGF0YSA9IHJlcy5kYXRhLmRhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHVuaS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6dGhpcy51cmwgKyAnL2RpcmVjdC9kYWR2JyxcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmd1YW5nZ2FvZGF0YTEgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcclxuICAgICAgZ2V0dXNlcmluZm8oKSB7XHJcbiAgICAgICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB0aGlzLnVybCArICcvYXBpL3VzZXIvcGVyc29uYWwnLFxyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgIHRva2VuOiB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VydG9rZW5cIilcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW9uZXkgPSByZXMuZGF0YS5kYXRhLm1vbmV5XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgdG9idXkoKSB7XHJcbiAgICAgICAgaWYgKHVuaS5nZXRTdG9yYWdlU3luYyhcInVzZXJ0b2tlblwiKSkge1xyXG4gICAgICAgICAgdW5pLm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6IFwiLi9idXlcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIGljb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLoq4vnmbvlhaVcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNlbmRsaXd1KGluZGV4KSB7XHJcbiAgICAgICAgaWYgKHVuaS5nZXRTdG9yYWdlU3luYyhcInVzZXJ0b2tlblwiKSkge1xyXG4gICAgICAgICAgdW5pLnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgbWFzazogdHJ1ZSxcclxuICAgICAgICAgICAgdGl0bGU6ICfoq4vnqI3lvownXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsICsgJy9naWZ0L2J1eS8nICsgdGhpcy5saXd1bGlzdFtpbmRleF0ucHJpY2UsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgIHRva2VuOiB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VydG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIHJvb21fbnVtYmVyOiB0aGlzLnZpZGVvZGF0YS5yb29tX251bWJlcixcclxuICAgICAgICAgICAgICBnaWZ0aWQ6IGluZGV4XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICB1bmkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICBpY29uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLmRhdGEubXNnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXR1c2VyaW5mbygpXHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICBpY29uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1zZ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgaWNvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuiri+eZu+WFpVwiXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb3BlbnVybChpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5vcGVudXJscyhpdGVtLnVybClcclxuICAgICAgfSxcclxuICAgICAgb3Blbmxpd3UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGl3dWxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdGhpcy4kcmVmcy5saXd1Lm9wZW4oKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVuaS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICBtYXNrOiB0cnVlLFxyXG4gICAgICAgICAgdGl0bGU6IFwi6KuL56iN5b6MXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdGhpcy51cmwgKyAnL2RpcmVjdC9naWZ0cycsXHJcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHVuaS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIHRoaXMubGl3dWxpc3QgPSByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgdGhpcy4kcmVmcy5saXd1Lm9wZW4oKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICB9LFxyXG4gICAgICBwbGF5dmlkZW8oZSkge1xyXG4gICAgICAgIHRoaXMuc2hvd2ZlbmdtaWFuID0gZmFsc2VcclxuICAgICAgICB0aGlzLmlzeGlhYm8gPSBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICBndWFuemh1KCkge1xyXG4gICAgICAgIGlmICh1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VydG9rZW5cIikpIHtcclxuICAgICAgICAgIHVuaS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn6KuL56iN5b6MJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCArICcvZm9sbG93L2FkZCcsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgIHRva2VuOiB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VydG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIGFuY2hvcmlkOiB0aGlzLnVzZXJkYXRhLmlkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICB1bmkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzLmRhdGEubXNnXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICBpY29uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwi6KuL55m75YWlXCJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvcGVuZ3VpYmluKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLmd1aWJpbmluZm8gPSBpdGVtXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgdGhpcy4kcmVmcy5ndWliaW5pbmZvLm9wZW4oKVxyXG4gICAgICB9LFxyXG4gICAgICBnZXR3ZW5hbigpIHtcclxuICAgICAgICB1bmkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHRoaXMudXJsICsgJy9kaXJlY3QvY29weXdyaXRpbmcnLFxyXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLndlbmFuMSA9IHJlcy5kYXRhLmRhdGFcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZ2V0d2Vic29ja2V0KCkge1xyXG4gICAgICAgIHVuaS5jb25uZWN0U29ja2V0KHtcclxuICAgICAgICAgIHVybDogdGhpcy53ZWJzb2NrZXJ1cmwsXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdW5pLm9uU29ja2V0T3BlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdW5pLm9uU29ja2V0RXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgdGhpcy53ZW5hbiA9ICfov57mjqXogYrlpKnmnI3liqHlmajlpLHotKUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICB1bmkub25Tb2NrZXRNZXNzYWdlKChyZXMpID0+IHtcclxuICAgICAgICAgIGlmIChKU09OLnBhcnNlKHJlcy5kYXRhKS50eXBlID09ICdpbml0Jykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHJlcy5kYXRhKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpZW50X2lkID0gSlNPTi5wYXJzZShyZXMuZGF0YSkuY2xpZW50X2lkXG4gICAgICAgICAgICBpZih0aGlzLmNsaWVudF9pZCl7XG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lKVxuICAgICAgICAgICAgICB1bmkucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLnVybCArICcvYXBpL1dlYnN0b2NrL2dyb3VwX2FkZCcsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgIHRva2VuOiB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VydG9rZW5cIikgPyB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VydG9rZW5cIikgOiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudF9pZCxcbiAgICAgICAgICAgICAgICAgIHJvb21fbnVtYmVyOiB0aGlzLnZpZGVvZGF0YS5yb29tX251bWJlclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy53ZW5hbiA9ICfov57mjqXogYrlpKnmnI3liqHlmajmiJDlip8nXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6L+e5o6l6IGK5aSp5pyN5Yqh5Zmo5oiQ5YqfJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIHRoaXMud2VuYW4gPSAn6L+e5o6l6IGK5aSp5pyN5Yqh5Zmo5aSx6LSlJ1xuICAgICAgICAgICAgICAvLyB0aGlzLnNlbmR0aW1lKClcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChKU09OLnBhcnNlKHJlcy5kYXRhKS50eXBlID09ICdhZGQnKSB7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShyZXMuZGF0YSkpO1xyXG4gICAgICAgICAgICAgIHRoaXMuYWRkbGlzdC5wdXNoKEpTT04ucGFyc2UocmVzLmRhdGEpKVxyXG4gICAgICAgICAgICAgIHRoaXMuYWRkdG9wID0gdGhpcy5hZGR0b3AgLSA0MFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChKU09OLnBhcnNlKHJlcy5kYXRhKS50eXBlID09ICdnaWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShyZXMuZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IEpTT04ucGFyc2UocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLm1lc3NhZ2UgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICBvYmoubWVzc2FnZTEgPSAn6YCB5Ye65LiA5Liq5bCP6aOe5py6J1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvYmoubWVzc2FnZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgIG9iai5tZXNzYWdlMSA9ICfpgIHlh7rkuIDkuKo2NjYnXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9iai5tZXNzYWdlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgb2JqLm1lc3NhZ2UxID0gJ+mAgeWHuuS4gOS4quWVquWVquWVqidcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2JqLm1lc3NhZ2UgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICBvYmoubWVzc2FnZTEgPSAn6YCB5Ye65LiA5Liq5aSn57qi5YyFJ1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvYmoubWVzc2FnZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgIG9iai5tZXNzYWdlMSA9ICfpgIHlh7rkuIDkuKrmnZzolb7mlq8nXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9iai5tZXNzYWdlID09IDUpIHtcclxuICAgICAgICAgICAgICAgICAgb2JqLm1lc3NhZ2UxID0gJ+mAgeWHuuS4gOS4qumynOiKsSdcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2JqLm1lc3NhZ2UgPT0gNikge1xyXG4gICAgICAgICAgICAgICAgICBvYmoubWVzc2FnZTEgPSAn6YCB5Ye65LiA5LiqNTIwJ1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvYmoubWVzc2FnZSA9PSA3KSB7XHJcbiAgICAgICAgICAgICAgICAgIG9iai5tZXNzYWdlMSA9ICfpgIHlh7rkuIDkuKrlqIHlipvnsr0nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdpZnR0b3AgPSB0aGlzLmdpZnR0b3AgLSA1MFxyXG4gICAgICAgICAgICAgICAgdGhpcy5naWZ0bGlzdC5wdXNoKG9iailcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKEpTT04ucGFyc2UocmVzLmRhdGEpLnR5cGUgPT0gJ3NlbmQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGljb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNCk7XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IEpTT04ucGFyc2UocmVzLmRhdGEpXG4gICAgICAgICAgICAgICAgb2JqLmxvZ29pY29uID0gaWNvblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGF0bGlzdC5wdXNoKG9iailcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9ICdzY3JvbGwnICsgKHRoaXMuY2hhdGxpc3QubGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyAjaWZkZWYgQVBQLU5WVUVcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9tLmdldENvbXBvbmVudFJlY3QodGhpcy4kcmVmc1tpZF1bMF0sIG9wdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09IFwiaW9zXCIpe1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsSUQgPSAnc2Nyb2xsJyArICh0aGlzLmNoYXRsaXN0Lmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9kb3duID0gdGhpcy50b2Rvd24gKyBvcHRpb24uc2l6ZS5oZWlnaHQgICsgMTZcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgLy8gI2VuZGlmXHJcbiAgICAgICAgICAgICAgICB9LCAxMDApXHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVkdSA9IEpTT04ucGFyc2UocmVzLmRhdGEpLm51bVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShyZXMuZGF0YSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXG4gICAgICBzZW5kdGltZSgpe1xuICAgICAgICB0aGlzLnRpbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgdW5pLnNlbmRTb2NrZXRNZXNzYWdlKHtcbiAgICAgICAgICAgIGRhdGE6XCJjbGllbnRcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9LDUwMClcbiAgICAgICAgXG4gICAgICB9LFxyXG4gICAgICBnZXR2aWRlbygpIHtcclxuICAgICAgICAvLyB1bmkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIC8vICAgbWFzazogdHJ1ZSxcclxuICAgICAgICAvLyAgIHRpdGxlOiBcIuiri+eojeW+jFwiXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICB1bmkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHRoaXMudXJsICsgJy9kaXJlY3QvcmVhZC8nICsgdGhpcy5pZCxcclxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgLy8gdW5pLmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgLy8gdGhpcy5zaG93ZmVuZ21pYW4gPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgdGhpcy52aWRlb2RhdGEgPSByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgIHRoaXMudXNlcmRhdGEgPSByZXMuZGF0YS5kYXRhLmFuY2hvclxyXG4gICAgICAgICAgICB0aGlzLmd1aWJpbmRhdGEgPSByZXMuZGF0YS5kYXRhLnZpcHNcclxuICAgICAgICAgICAgdGhpcy5yZWR1ID0gdGhpcy52aWRlb2RhdGEub25saW5lXHJcbiAgICAgICAgICAgIHRoaXMuc3JjTGlzdCA9IFt7XHJcbiAgICAgICAgICAgICAgbmFtZTogJ+aomea4hScsXHJcbiAgICAgICAgICAgICAgdXJsOiB0aGlzLnZpZGVvZGF0YS5kaXJlY3RfdXJsXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudmlkZW9kYXRhLmRpcmVjdF91cmwpO1xyXG4gICAgICAgICAgICB0aGlzLmdldHdlYnNvY2tldCgpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGJhY2soKSB7XHJcbiAgICAgICAgdW5pLm5hdmlnYXRlQmFjaygpXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wZW5nYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVsaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMuJHJlZnMuZ2FtZS5vcGVuKClcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB1bmkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgbWFzazogdHJ1ZSxcclxuICAgICAgICAgIHRpdGxlOiBcIuiri+eojeW+jFwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICB1bmkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHRoaXMudXJsICsgJy9kaXJlY3QvYXBwJyxcclxuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgdW5pLmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgdGhpcy4kcmVmcy5nYW1lLm9wZW4oKVxyXG4gICAgICAgICAgICB0aGlzLmdhbWVsaXN0ID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgb3BlbnVzZXIoKSB7XHJcbiAgICAgICAgdW5pLnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgICAgICB0aXRsZTogXCLoq4vnqI3lvoxcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB0aGlzLnVybCArICcvYW5jaG9yL3JlYWQvJyArIHRoaXMudXNlcmRhdGEuaWQsXHJcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHVuaS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIHRoaXMudXNlcmluZm8gPSByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgIHRoaXMuJHJlZnMudXNlcmluZm8ub3BlbigpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhdXNlKCkge1xyXG4gICAgICAgIHVuaS5jcmVhdGVWaWRlb0NvbnRleHQoJ215dmlkZW8nKS5wbGF5KClcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IoZSkge1xyXG4gICAgICAgIHRoaXMuaXN4aWFibyA9IHRydWVcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB1bmkuc2hvd01vZGFsKHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwi6LWE5rqQ5Yqg6L296ZSZ6K+v77yM6K+36YeN6K+VXCIsXHJcbiAgICAgICAgICBjb25maXJtVGV4dDogXCLph43or5VcIixcclxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgdW5pLmNyZWF0ZVZpZGVvQ29udGV4dCgnbXl2aWRlbycpLnBsYXkoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgdW5pLm5hdmlnYXRlQmFjaygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBhZGQoKSB7XHJcbiAgICAgICAgaWYgKHVuaS5nZXRTdG9yYWdlU3luYyhcInVzZXJ0b2tlblwiKSkge1xuICAgICAgICAgIGlmKCF0aGlzLmNsaWVudF9pZCl7XG4gICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgaWNvbjpcIm5vbmVcIixcbiAgICAgICAgICAgICAgdGl0bGU6XCLogYrlpKnmnI3liqHlmajmnKrov57mjqXmiJDlip9cIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVuaS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuivt+eojeWQjlwiXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsICsgJy9hcGkvV2Vic3RvY2svZ3JvdXBfc2VuZCcsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgIHRva2VuOiB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VydG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIHJvb21fbnVtYmVyOiB0aGlzLnZpZGVvZGF0YS5yb29tX251bWJlcixcclxuICAgICAgICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMucGxheWVyX3RleHQsXHJcbiAgICAgICAgICAgICAgdHlwZTogJ2FkZCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgIHVuaS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICBpY29uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLmRhdGEubXNnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJfdGV4dCA9IFwiXCJcclxuICAgICAgICAgICAgICAgIHVuaS5oaWRlS2V5Ym9hcmQoKVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgaWNvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS5tc2dcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgaWNvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuiri+eZu+WFpVwiXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XG4gIC5ndWFuZ2dhb2JveDF7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMTUwcnB4O1xuICAgIHJpZ2h0OiAyNXJweDtcbiAgICB3aWR0aDogMjAwcnB4O1xuICAgIGhlaWdodDogMjUwcnB4O1xuICB9XG4gIC5waW5nbHVuLXNjcm9sbC10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMjhycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHJweCAyMHJweDtcbiAgICBtYXJnaW46IDAgMTBycHg7XG4gIH1cbiAgLnBpbmdsdW4tc2Nyb2xse1xuICAgIHdpZHRoOiA3MTBycHg7XG4gICAgaGVpZ2h0OiAxMDBycHg7XG4gICAgXG4gICAgLyogI2lmZGVmIEg1ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiAjZW5kaWYgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLnBpbmdsdW4tYm94e1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDEwMHJweDtcbiAgICB3aWR0aDogNzUwcnB4O1xuICAgIHBhZGRpbmc6IDAgMjBycHg7XG4gICAgaGVpZ2h0OiAxMDBycHg7XG4gICAgXG4gIH1cbiAgLmxvZ28taWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6MTMwcnB4O1xuICAgIGhlaWdodDozMnJweDtcbiAgfVxuICAuY2hhdC1yaWdodC1sb2dve1xuICAgIC8qICNpZmRlZiBINSAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogI2VuZGlmICovXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDoxMzBycHg7XG4gICAgaGVpZ2h0OjMycnB4O1xuICB9XG4gIC5jaGF0LXJpZ2h0LWRlbmdqaXtcbiAgICAvKiAjaWZkZWYgSDUgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qICNlbmRpZiAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDo3NnJweDtcbiAgICBoZWlnaHQ6MzJycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5kZW5namktdGV4dHtcbiAgICBmb250LXNpemU6MjFycHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDM4cnB4O1xuICB9XG4gIC5kZW5namktaWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6NzBycHg7XG4gICAgaGVpZ2h0OjMycnB4O1xuICB9XG4gIC5jaGF0LXJpZ2h0MS1kZW5naml7XG4gICAgLyogI2lmZGVmIEg1ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiAjZW5kaWYgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6NzBycHg7XG4gICAgaGVpZ2h0OjMycnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuZ3VhbmdnYW8taW1hZ2V7XG4gICAgd2lkdGg6IDIwMHJweDtcbiAgICBoZWlnaHQ6IDIwMHJweDtcbiAgfVxuICAuZ3VhbmdnYW9ib3h7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMTUwcnB4O1xuICAgIHJpZ2h0OiAyNXJweDtcbiAgICB3aWR0aDogMjAwcnB4O1xuICAgIGhlaWdodDogMjUwcnB4O1xuICB9XHJcbiAgLmdpZnQtY2VudGVyIHtcclxuICAgIHdpZHRoOiAxNjBycHg7XHJcbiAgfVxyXG5cclxuICAuZ2lmdC1jZW50ZXItdGV4dDEge1xyXG4gICAgZm9udC1zaXplOiAyNHJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLmdpZnQtY2VudGVyLXRleHQyIHtcclxuICAgIGZvbnQtc2l6ZTogMjJycHg7XHJcbiAgICBjb2xvcjogI0MwQzBDMDtcclxuICB9XHJcblxyXG4gIC5naWZ0LWltYWdlIHtcclxuICAgIHdpZHRoOiA1MHJweDtcclxuICAgIGhlaWdodDogNTBycHg7XHJcbiAgfVxyXG5cclxuICAuZ2lmdC1pdGVtIHtcclxuICAgIHdpZHRoOiA1MHJweDtcclxuICAgIGhlaWdodDogNTBycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBycHg7XHJcbiAgfVxyXG5cclxuICAuZ2lmdC1yaWdodDEge1xyXG4gICAgd2lkdGg6IDMwMHJweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAxMHJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHJweDtcclxuICB9XHJcblxyXG4gIC5zY3JvbGwtZ2lmdC1ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA0MDBycHg7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3A7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDA7XHJcbiAgfVxyXG5cclxuICAuZ2lmdDItYm94IHtcclxuICAgIHdpZHRoOiA0MDBycHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmdpZnQtYm94IHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmY7ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAyMHJweDtcclxuICAgIGJvdHRvbTogNzAwcnB4O1xyXG4gICAgd2lkdGg6IDQwMHJweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAuY2hhdC1yaWdodDEge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLyogI2lmZGVmIEg1ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogI2VuZGlmICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3JkZXItcmFkaXVzOiAyMHJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgcGFkZGluZzogMCAxMHJweDtcclxuICB9XHJcblxyXG4gIC5hZGQyLWJveCB7XHJcbiAgICB3aWR0aDogNTAwcnB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLnNjcm9sbC1hZGQtYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3A7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDA7XHJcbiAgfVxyXG5cclxuICAueGlhYm8tdGFiLWl0ZW0tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDMycnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiByZ2JhKDIwNiwgMjA2LCAyMDYsIDEpO1xyXG4gIH1cclxuXHJcbiAgLnhpYWJvLXRhYi1pdGVtIHtcclxuICAgIG1hcmdpbjogMCAxMjVycHg7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnhpYWJvLXRhYiB7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gIH1cclxuXHJcbiAgLnhpYWJvLXRpbWUge1xyXG4gICAgZm9udC1zaXplOiAyOHJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycnB4O1xyXG4gIH1cclxuXHJcbiAgLnhpYWJvLXRpcHMge1xyXG4gICAgZm9udC1zaXplOiA0MHJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycnB4O1xyXG4gIH1cclxuXHJcbiAgLnhpYWJvLWRlbmdqaSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNDBycHg7XHJcblxyXG4gICAgd2lkdGg6IDEwMHJweDtcclxuICAgIGhlaWdodDogNDBycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjA5LCAxMDYsIDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBycHg7XHJcbiAgICAvKiBib3JkZXI6MnB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMSk7ICovXHJcbiAgICBib3JkZXItd2lkdGg6IDJycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgZm9udC1zaXplOiAyOHJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIH1cclxuXHJcbiAgLnhpYWJvLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAyOHJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBycHg7XHJcbiAgfVxyXG5cclxuICAueGlhYm8tdmlldyB7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhycHg7XHJcbiAgfVxyXG5cclxuICAueGlhYm8taW1hZ2Uge1xyXG4gICAgd2lkdGg6IDE3NnJweDtcclxuICAgIGhlaWdodDogMTc2cnB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiA0cnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycnB4O1xyXG4gICAgLyogYm9yZGVyOjRweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDEpOyAqL1xyXG4gIH1cclxuXHJcbiAgLnhpYWJvLWJveCB7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjUwcnB4O1xyXG4gIH1cclxuXHJcbiAgLnhpYWJvLWNsb3NlIHtcclxuICAgIHdpZHRoOiAxMDBycHg7XHJcbiAgICBoZWlnaHQ6IDEwMHJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMDBycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogNTBycHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogNTBycHg7XHJcbiAgfVxyXG5cclxuICAueGlhYm8ge1xyXG4gICAgd2lkdGg6IDc1MHJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDksIDQ5LCA0OSwgMC4zKTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAubGl3dS1kb3duLXJpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTg1ODU7XHJcbiAgICB3aWR0aDogMTM2cnB4O1xyXG4gICAgaGVpZ2h0OiA0OHJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA0OHJweDtcclxuICAgIGZvbnQtc2l6ZTogMzBycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHJweDtcclxuICB9XHJcblxyXG4gIC5saXd1LW1vcmUge1xyXG4gICAgd2lkdGg6IDExcnB4O1xyXG4gICAgaGVpZ2h0OiAyMHJweDtcclxuICB9XHJcblxyXG4gIC5saXd1LXByaWNlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyOHJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogcmdiYSgyNDksIDI0OSwgMjQ5LCAxKTtcclxuICAgIG1hcmdpbjogMCAxMHJweDtcclxuICB9XHJcblxyXG4gIC5saXd1LWRvd24tbGVmdCB7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmxpd3UtZG93biB7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogMzBycHg7XHJcbiAgICBwYWRkaW5nOiAwIDMycnB4O1xyXG4gIH1cclxuXHJcbiAgLmxpd3UtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDE0OHJweDtcclxuICAgIGhlaWdodDogMTAycnB4O1xyXG4gIH1cclxuXHJcbiAgLmxpd3UtcHJpY2Uge1xyXG4gICAgLyogI2lmZGVmIEg1ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogI2VuZGlmICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5wcmljZS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XHJcbiAgfVxyXG5cclxuICAubGl3dS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgfVxyXG5cclxuICAuYm9yZGVyLXRvcCB7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAycnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOTc5Nzk3O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICB9XHJcblxyXG4gIC5ib3JkZXItcmlnaHQge1xyXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAycnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOTc5Nzk3O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICB9XHJcblxyXG4gIC5ib3JkZXItbGVmdCB7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMnJweDtcclxuICAgIGJvcmRlci1jb2xvcjogIzk3OTc5NztcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgfVxyXG5cclxuICAuYm9yZGVyLWJvdHRvbSB7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOTc5Nzk3O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICB9XHJcblxyXG4gIC5odW9iaS1pbWcge1xyXG4gICAgd2lkdGg6IDI0cnB4O1xyXG4gICAgaGVpZ2h0OiAyNHJweDtcclxuICB9XHJcblxyXG4gIC5saXd1LWl0ZW0ge1xyXG4gICAgd2lkdGg6IDE4NnJweDtcclxuICAgIGhlaWdodDogMTk4cnB4O1xyXG4gICAgLyogI2lmZGVmIEg1ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogI2VuZGlmICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmxpd3UtbGlzdCB7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLXRvcDogNDRycHg7XHJcbiAgfVxyXG5cclxuICAubGl3dS10aXRsZSB7XHJcbiAgICB3aWR0aDogODBycHg7XHJcbiAgICBmb250LXNpemU6IDMycnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiByZ2JhKDI0OSwgMjQ5LCAyNDksIDEpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI0Y1NTQ5MztcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDZycHg7XHJcbiAgICBwYWRkaW5nOiAyMHJweCAwIDEwcnB4IDA7XHJcbiAgICBtYXJnaW46IDAgMzJycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucG9wdXAtbGl3dSB7XHJcbiAgICB3aWR0aDogNzUwcnB4O1xyXG4gICAgaGVpZ2h0OiA2MzJycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCAxNCwgMTQsIDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjhycHg7XHJcbiAgfVxyXG5cclxuICAuYWRkLWJveCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDIwMHJweDtcclxuICAgIGxlZnQ6IDIwcnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIHdpZHRoOiA1MDBycHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgLyogdGV4dC1vdmVyZmxvdzogaGlkZGVuOyAqL1xyXG4gICAgLyogI2lmZGVmIEg1ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogI2VuZGlmICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5mZW5nbWlhbi1pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDc1MHJweDtcclxuICAgIC8qIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIHotaW5kZXg6OTk5O1xyXG4gICAgLyogZmlsdGVyOiBibHVyKDEwcHgpOyAqL1xyXG4gIH1cclxuXHJcbiAgLmdhbWUtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI4cnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDEpO1xyXG4gICAgbGluZXM6IDE7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdpZHRoOiAxMjRycHg7XHJcbiAgfVxyXG5cclxuICAuZ2FtZS1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTI0cnB4O1xyXG4gICAgaGVpZ2h0OiAxMjRycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHJweDtcclxuICB9XHJcblxyXG4gIC5wb3B1cC1nYW1lLWl0ZW0ge1xyXG4gICAgd2lkdGg6IDE4NnJweDtcclxuICAgIC8qICNpZmRlZiBINSAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qICNlbmRpZiAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHJweDtcclxuICAgIGxpbmVzOiAxO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfVxyXG5cclxuICAucG9wdXAtZ2FtZSB7XHJcblxyXG4gICAgLyogI2lmZGVmIEg1ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogI2VuZGlmICovXHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiA3NTBycHg7XHJcbiAgICBwYWRkaW5nOiA1MHJweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI4cnB4O1xyXG4gIH1cclxuXHJcbiAgLnBvcHVwLWJpYW9xaWFuLXRleHQge1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHJweDtcclxuICAgIHdpZHRoOiAxMTZycHg7XHJcbiAgICBoZWlnaHQ6IDQ0cnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0MSwgMjQxLCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRycHg7XHJcbiAgICBmb250LXNpemU6IDIycnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiByZ2JhKDEwMiwgMTAyLCAxMDIsIDEpO1xyXG4gICAgbWFyZ2luOiAwIDZycHg7XHJcbiAgfVxyXG5cclxuICAucG9wdXAtYmlhb3FpYW4ge1xyXG4gICAgd2lkdGg6IDUwNHJweDtcclxuICAgIC8qICNpZmRlZiBINSAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qICNlbmRpZiAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHJweDtcclxuICB9XHJcblxyXG4gIC5wb3B1cC1kb3duLXJpZ2h0LXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyMnJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogcmdiYSgxMDYsIDEyOSwgNTIsIDEpO1xyXG4gICAgbWFyZ2luOiA0cnB4IDA7XHJcbiAgfVxyXG5cclxuICAucG9wdXAtZG93bi1sZWZ0LXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyMnJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogcmdiYSg2NSwgMTQxLCAyMzksIDEpO1xyXG4gICAgbWFyZ2luOiA0cnB4IDA7XHJcbiAgfVxyXG5cclxuICAucG9wdXAtZG93bi1yaWdodCB7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDI0MHJweDtcclxuICAgIGhlaWdodDogMTE2cnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTAsIDIyNSwgMTU2LCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhycHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cnB4O1xyXG4gIH1cclxuXHJcbiAgLnBvcHVwLWRvd24tbGVmdCB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cnB4O1xyXG4gICAgLyogI2lmZGVmIEg1ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogI2VuZGlmICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAyNDBycHg7XHJcbiAgICBoZWlnaHQ6IDExNnJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA3LCAyMjgsIDI1NSwgMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cnB4O1xyXG4gIH1cclxuXHJcbiAgLnBvcHVwLWRvd24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjRycHg7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDUwNHJweDtcclxuXHJcbiAgfVxyXG5cclxuICAudmlldy1kZW5namkge1xyXG4gICAgd2lkdGg6IDUwNHJweDtcclxuICAgIC8qICNpZmRlZiBINSAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qICNlbmRpZiAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIC5kZW5namktcmlnaHQtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDIycnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIH1cclxuXHJcbiAgLmRlbmdqaS1pbWFnZSB7XHJcbiAgICB3aWR0aDogNDBycHg7XHJcbiAgICBoZWlnaHQ6IDQwcnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuICB9XHJcblxyXG4gIC5kZW5namktcG9wdXAge1xyXG4gICAgLyogI2lmZGVmIEg1ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogI2VuZGlmICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIwMHJweDtcclxuICAgIGhlaWdodDogODhycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NCwgMjAzLCA2MSwgMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDRycHg7XHJcbiAgfVxyXG5cclxuICAudXNlci1wb3B1cC1jb3VudC1jZW50ZXIge1xyXG4gICAgZm9udC1zaXplOiAyNHJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogcmdiYSgzMiwgMzIsIDMyLCAxKTtcclxuICAgIG1hcmdpbjogMCAxMHJweDtcclxuICB9XHJcblxyXG4gIC51c2VyLXBvcHVwLWNvdW50LXJpZ2h0IHtcclxuICAgIHdpZHRoOiAyMDBycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAyNHJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogcmdiYSgzMiwgMzIsIDMyLCAxKTtcclxuICB9XHJcblxyXG4gIC51c2VyLXBvcHVwLWNvdW50LWxlZnQge1xyXG4gICAgd2lkdGg6IDIwMHJweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyNHJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogcmdiYSgzMiwgMzIsIDMyLCAxKTtcclxuICB9XHJcblxyXG4gIC51c2VyLXBvcHVwLWNvdW50IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcnB4O1xyXG4gICAgLyogI2lmZGVmIEg1ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogI2VuZGlmICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnVzZXItcG9wdXAtZGV0YWlsIHtcclxuICAgIGZvbnQtc2l6ZTogMjRycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHJnYmEoMTUzLCAxNTMsIDE1MywgMSk7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHJweDtcclxuICB9XHJcblxyXG4gIC51c2VyLXBvcHVwLW5hbWUge1xyXG4gICAgbWFyZ2luLXRvcDogMTBycHg7XHJcbiAgICBmb250LXNpemU6IDI4cnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiByZ2JhKDMyLCAzMiwgMzIsIDEpO1xyXG4gIH1cclxuXHJcbiAgLnVzZXItcG9wdXAtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEzMHJweDtcclxuICAgIGhlaWdodDogMTMwcnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcnB4O1xyXG4gIH1cclxuXHJcbiAgLnVzZXItdG9wLXJpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XHJcbiAgfVxyXG5cclxuICAudXNlci10b3AtbGVmdCB7XHJcbiAgICBmb250LXNpemU6IDI0cnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiByZ2JhKDEwMiwgMTAyLCAxMDIsIDEpO1xyXG4gIH1cclxuXHJcbiAgLnVzZXItdG9wIHtcclxuICAgIHdpZHRoOiA1MDRycHg7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLnVzZXItcG9wdXAge1xyXG4gICAgLyogI2lmZGVmIEg1ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogI2VuZGlmICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA2MDBycHg7XHJcbiAgICAvKiBoZWlnaHQ6NzUwcnB4OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG4gICAgcGFkZGluZzogMjRycHggNDhycHggNDhycHggNDhycHg7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtaW5wdXQge1xyXG4gICAgd2lkdGg6IDUwMHJweDtcclxuICAgIGhlaWdodDogODhycHg7XHJcbiAgICBmb250LXNpemU6IDMycnB4O1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWRvd24ge1xyXG4gICAgd2lkdGg6IDc1MHJweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgLyogI2lmZGVmIEg1ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogI2VuZGlmICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMjBycHg7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtc2VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBBRDRFO1xyXG4gICAgZm9udC1zaXplOiAzMHJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcnB4O1xyXG4gICAgd2lkdGg6IDEwMHJweDtcclxuICAgIGhlaWdodDogNTBycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNTBycHg7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tIHtcclxuICAgIHdpZHRoOiA0NTBycHg7XHJcbiAgICBoZWlnaHQ6IDEwcnB4O1xyXG4gIH1cclxuXHJcbiAgLmNoYXQtcmlnaHQge1xyXG4gICAgLyogI2lmZGVmIEg1ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogI2VuZGlmICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcnB4O1xyXG4gIH1cclxuXHJcbiAgLmNoYXQtcmlnaHQtdGV4dDIge1xyXG4gICAgZm9udC1zaXplOiAyOHJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0Y2RUE5NjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuICB9XHJcblxyXG4gIC5jaGF0LXJpZ2h0LXRleHQxIHtcclxuICAgIHdpZHRoOiA3NnJweDtcclxuICAgIGhlaWdodDogMzBycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzBycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMTE3LCAyNTQsIDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVycHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDJycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICB9XHJcblxyXG4gIC5jaGF0LWdnIHtcclxuICAgIGZvbnQtc2l6ZTogMzBycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICNmZmEwMDA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDogNDUwcnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHJweDtcclxuICB9XHJcblxyXG4gIC5jaGF0LXRleHQge1xyXG4gICAgLyogI2lmZGVmIEg1ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogI2VuZGlmICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ5LCA0OSwgNDksIDAuMyk7ICovXHJcbiAgICBwYWRkaW5nOjAgMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycnB4O1xuICAgIHdpZHRoOiA0NTBycHg7XHJcbiAgfVxyXG5cclxuICAuY2hhdC10ZXh0LXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyNnJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAzNjBycHg7XHJcbiAgICAvKiB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7ICovXHJcbiAgfVxyXG5cclxuICAuY2hhdC1zY3JvbGwge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiA0MDBycHg7XHJcbiAgICB3aWR0aDogNDUwcnB4O1xyXG4gICAgYm90dG9tOiAyNzBycHg7XHJcbiAgICBsZWZ0OiAyMHJweDtcclxuICB9XHJcblxyXG4gIC5kb3duLXRhYi1sZWZ0LXRleHQge1xyXG4gICAgd2lkdGg6IDMwMHJweDtcclxuICAgIGZvbnQtc2l6ZTogMjZycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgfVxyXG5cclxuICAuZG93bi10YWItbGVmdC1pbWFnZSB7XHJcbiAgICB3aWR0aDogMzJycHg7XHJcbiAgICBoZWlnaHQ6IDMycnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHJweDtcclxuICB9XHJcblxyXG4gIC5kb3duLXRhYi1sZWZ0IHtcclxuICAgIHdpZHRoOiA0MjRycHg7XHJcbiAgICBoZWlnaHQ6IDY0cnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OSwgNDksIDQ5LCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMycnB4O1xyXG4gICAgb3BhY2l0eTogMC43MjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuICAgIC8qICNpZmRlZiBINSAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qICNlbmRpZiAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICB9XHJcblxyXG4gIC5kb3duLXRhYiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogNzUwcnB4O1xyXG4gICAgYm90dG9tOiAyNnJweDtcclxuICAgIC8qICNpZmRlZiBINSAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qICNlbmRpZiAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAuZG93bi10YWItcmlnaHQge1xyXG4gICAgLyogI2lmZGVmIEg1ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogI2VuZGlmICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5kb3duLXRhYi1yaWdodC1pbWcge1xyXG4gICAgd2lkdGg6IDcycnB4O1xyXG4gICAgaGVpZ2h0OiA3MnJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBycHg7XHJcbiAgfVxyXG5cclxuICAuZ3VpYmluLWNvdW50LXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyMHJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIH1cclxuXHJcbiAgLmd1aWJpbi1jb3VudCB7XHJcbiAgICB3aWR0aDogOTRycHg7XHJcbiAgICBoZWlnaHQ6IDY4cnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMzMsIDMzLCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cnB4O1xyXG4gICAgb3BhY2l0eTogMC41ODtcclxuICAgIC8qICNpZmRlZiBINSAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qICNlbmRpZiAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgfVxyXG5cclxuICAuZ3VpYmluLWltYWdlIHtcclxuICAgIHdpZHRoOiA2OHJweDtcclxuICAgIGhlaWdodDogNjhycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBycHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDJycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNHJweDtcclxuXHJcbiAgfVxyXG5cclxuICAuZ3VpYmluLXNjcm9sbCB7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgLyogI2VuZGlmICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAzMDBycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBycHg7XHJcbiAgfVxyXG5cclxuICAuY2VudGVyLWRvd24tdGV4dCB7XG4gICAgd2lkdGg6IDEzMHJweDtcclxuICAgIGZvbnQtc2l6ZTogMjRycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsaW5lczogMTtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcblxyXG4gIC5jZW50ZXItZG93bi1pbWcge1xyXG4gICAgd2lkdGg6IDIwcnB4O1xyXG4gICAgaGVpZ2h0OiAyNnJweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHJweDtcclxuICB9XHJcblxyXG4gIC5jZW50ZXItZG93biB7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmd1YW56aHUtYnV0IHtcclxuICAgIHdpZHRoOiA2MHJweDtcclxuICAgIGhlaWdodDogNjBycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRycHg7XHJcbiAgfVxyXG5cclxuICAudXNlci1pbWFnZSB7XHJcbiAgICB3aWR0aDogNjhycHg7XHJcbiAgICBoZWlnaHQ6IDY4cnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcnB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiAycnB4O1xyXG4gIH1cclxuXHJcbiAgLnVzZXItaGVhZGVyIHtcclxuICAgIHdpZHRoOiAyNzBycHg7XHJcbiAgICBoZWlnaHQ6IDY4cnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMzMsIDMzLCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cnB4O1xyXG4gICAgb3BhY2l0eTogMC42OTtcclxuICAgIC8qICNpZmRlZiBINSAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qICNlbmRpZiAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8qICNpZmRlZiBINSAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qICNlbmRpZiAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogNzUwcnB4O1xyXG4gICAgcGFkZGluZzogMCAyMHJweDtcclxuICB9XHJcblxyXG4gIC52aWRlby1kZW1vIHtcclxuICAgIC8qICNpZmRlZiBINSAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qICNlbmRpZiAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgKi9cclxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcblxyXG4gIH1cclxuXHJcbiAgLm15dmlkZW8ge1xyXG4gICAgd2lkdGg6IDc1MHJweDtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///151\n");

/***/ }),

/***/ 152:
/*!**********************************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/player/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 153);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 153:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/player/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "guanggaobox1": {
    "position": "fixed",
    "bottom": "150rpx",
    "right": "25rpx",
    "width": "200rpx",
    "height": "250rpx"
  },
  "pinglun-scroll-text": {
    "fontSize": "28rpx",
    "borderRadius": "100rpx",
    "backgroundColor": "rgba(0,0,0,0.3)",
    "color": "#ffffff",
    "paddingTop": "10rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "20rpx",
    "marginTop": 0,
    "marginRight": "10rpx",
    "marginBottom": 0,
    "marginLeft": "10rpx"
  },
  "pinglun-scroll": {
    "width": "710rpx",
    "height": "100rpx",
    "alignItems": "center",
    "flexDirection": "row"
  },
  "pinglun-box": {
    "position": "fixed",
    "bottom": "100rpx",
    "width": "750rpx",
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx",
    "height": "100rpx"
  },
  "logo-icon": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "width": "130rpx",
    "height": "32rpx"
  },
  "chat-right-logo": {
    "flexDirection": "row",
    "alignItems": "center",
    "position": "relative",
    "width": "130rpx",
    "height": "32rpx"
  },
  "chat-right-dengji": {
    "alignItems": "center",
    "flexDirection": "row",
    "width": "76rpx",
    "height": "32rpx",
    "position": "relative"
  },
  "dengji-text": {
    "fontSize": "21rpx",
    "color": "#ffffff",
    "marginLeft": "38rpx"
  },
  "dengji-icon": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "width": "70rpx",
    "height": "32rpx"
  },
  "chat-right1-dengji": {
    "alignItems": "center",
    "flexDirection": "row",
    "width": "70rpx",
    "height": "32rpx",
    "position": "relative"
  },
  "guanggao-image": {
    "width": "200rpx",
    "height": "200rpx"
  },
  "guanggaobox": {
    "position": "fixed",
    "top": "150rpx",
    "right": "25rpx",
    "width": "200rpx",
    "height": "250rpx"
  },
  "gift-center": {
    "width": "160rpx"
  },
  "gift-center-text1": {
    "fontSize": "24rpx",
    "color": "#ffffff"
  },
  "gift-center-text2": {
    "fontSize": "22rpx",
    "color": "#C0C0C0"
  },
  "gift-image": {
    "width": "50rpx",
    "height": "50rpx"
  },
  "gift-item": {
    "width": "50rpx",
    "height": "50rpx",
    "borderRadius": "100rpx"
  },
  "gift-right1": {
    "width": "300rpx",
    "height": "40",
    "marginBottom": "10",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingTop": 0,
    "paddingRight": "10rpx",
    "paddingBottom": 0,
    "paddingLeft": "10rpx",
    "backgroundColor": "rgba(0,0,0,0.5)",
    "borderRadius": "100rpx"
  },
  "scroll-gift-box": {
    "position": "absolute",
    "left": 0,
    "width": "400rpx",
    "transitionProperty": "top",
    "transitionDuration": 500
  },
  "@TRANSITION": {
    "scroll-gift-box": {
      "property": "top",
      "duration": 500
    },
    "scroll-add-box": {
      "property": "top",
      "duration": 500
    }
  },
  "gift2-box": {
    "width": "400rpx",
    "height": "100",
    "position": "relative"
  },
  "gift-box": {
    "position": "fixed",
    "left": "20rpx",
    "bottom": "700rpx",
    "width": "400rpx",
    "height": "100"
  },
  "chat-right1": {
    "height": "40",
    "alignItems": "center",
    "flexDirection": "row",
    "borderRadius": "20rpx",
    "backgroundColor": "rgba(0,0,0,0.2)",
    "paddingTop": 0,
    "paddingRight": "10rpx",
    "paddingBottom": 0,
    "paddingLeft": "10rpx"
  },
  "add2-box": {
    "width": "500rpx",
    "height": "40",
    "position": "relative"
  },
  "scroll-add-box": {
    "position": "absolute",
    "left": 0,
    "transitionProperty": "top",
    "transitionDuration": 500
  },
  "xiabo-tab-item-text": {
    "fontSize": "32rpx",
    "fontWeight": "500",
    "color": "rgba(206,206,206,1)"
  },
  "xiabo-tab-item": {
    "marginTop": 0,
    "marginRight": "125rpx",
    "marginBottom": 0,
    "marginLeft": "125rpx",
    "flexDirection": "column",
    "alignItems": "center"
  },
  "xiabo-tab": {
    "flexDirection": "row"
  },
  "xiabo-time": {
    "fontSize": "28rpx",
    "fontWeight": "500",
    "color": "rgba(255,255,255,1)",
    "marginBottom": "32rpx"
  },
  "xiabo-tips": {
    "fontSize": "40rpx",
    "fontWeight": "500",
    "color": "rgba(255,255,255,1)",
    "marginBottom": "12rpx"
  },
  "xiabo-dengji": {
    "textAlign": "center",
    "lineHeight": "40rpx",
    "width": "100rpx",
    "height": "40rpx",
    "backgroundColor": "rgba(255,209,106,1)",
    "borderRadius": "20rpx",
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "rgba(255,255,255,1)",
    "fontSize": "28rpx",
    "color": "rgba(255,255,255,1)"
  },
  "xiabo-name": {
    "fontSize": "28rpx",
    "fontWeight": "500",
    "color": "rgba(255,255,255,1)",
    "marginRight": "20rpx"
  },
  "xiabo-view": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginBottom": "48rpx"
  },
  "xiabo-image": {
    "width": "176rpx",
    "height": "176rpx",
    "borderWidth": "4rpx",
    "borderStyle": "solid",
    "borderColor": "rgba(255,255,255,1)",
    "borderRadius": "100rpx",
    "marginBottom": "32rpx"
  },
  "xiabo-box": {
    "flexDirection": "column",
    "alignItems": "center",
    "marginTop": "250rpx"
  },
  "xiabo-close": {
    "width": "100rpx",
    "height": "100rpx",
    "textAlign": "center",
    "lineHeight": "100rpx",
    "color": "#ffffff",
    "fontSize": "50rpx",
    "position": "fixed",
    "right": "50rpx"
  },
  "xiabo": {
    "width": "750rpx",
    "backgroundColor": "rgba(49,49,49,0.3)",
    "position": "fixed",
    "top": 0,
    "left": 0
  },
  "liwu-down-right": {
    "backgroundColor": "#858585",
    "width": "136rpx",
    "height": "48rpx",
    "textAlign": "center",
    "lineHeight": "48rpx",
    "fontSize": "30rpx",
    "color": "#ffffff",
    "borderRadius": "100rpx"
  },
  "liwu-more": {
    "width": "11rpx",
    "height": "20rpx"
  },
  "liwu-price-text": {
    "fontSize": "28rpx",
    "fontWeight": "500",
    "color": "rgba(249,249,249,1)",
    "marginTop": 0,
    "marginRight": "10rpx",
    "marginBottom": 0,
    "marginLeft": "10rpx"
  },
  "liwu-down-left": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "liwu-down": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": "30rpx",
    "paddingTop": 0,
    "paddingRight": "32rpx",
    "paddingBottom": 0,
    "paddingLeft": "32rpx"
  },
  "liwu-image": {
    "width": "148rpx",
    "height": "102rpx"
  },
  "liwu-price": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "price-text": {
    "fontSize": "24rpx",
    "fontWeight": "400",
    "color": "rgba(102,102,102,1)"
  },
  "liwu-text": {
    "fontSize": "24rpx",
    "fontWeight": "400",
    "color": "rgba(255,255,255,1)"
  },
  "border-top": {
    "borderTopWidth": "2rpx",
    "borderColor": "#979797",
    "borderStyle": "solid"
  },
  "border-right": {
    "borderRightWidth": "2rpx",
    "borderColor": "#979797",
    "borderStyle": "solid"
  },
  "border-left": {
    "borderLeftWidth": "2rpx",
    "borderColor": "#979797",
    "borderStyle": "solid"
  },
  "border-bottom": {
    "borderBottomWidth": "2rpx",
    "borderColor": "#979797",
    "borderStyle": "solid"
  },
  "huobi-img": {
    "width": "24rpx",
    "height": "24rpx"
  },
  "liwu-item": {
    "width": "186rpx",
    "height": "198rpx",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "liwu-list": {
    "flexDirection": "row",
    "alignItems": "center",
    "flexWrap": "wrap",
    "marginTop": "44rpx"
  },
  "liwu-title": {
    "width": "80rpx",
    "fontSize": "32rpx",
    "fontWeight": "500",
    "color": "rgba(249,249,249,1)",
    "borderStyle": "solid",
    "borderColor": "#F55493",
    "borderBottomWidth": "6rpx",
    "paddingTop": "20rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0,
    "marginTop": 0,
    "marginRight": "32rpx",
    "marginBottom": 0,
    "marginLeft": "32rpx",
    "textAlign": "center"
  },
  "popup-liwu": {
    "width": "750rpx",
    "height": "632rpx",
    "backgroundColor": "rgba(14,14,14,1)",
    "borderRadius": "28rpx"
  },
  "add-box": {
    "position": "fixed",
    "bottom": "200rpx",
    "left": "20rpx",
    "backgroundColor": "rgba(0,0,0,0)",
    "width": "500rpx",
    "height": "40",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "fengmian-image": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "width": "750rpx",
    "backgroundColor": "#000000",
    "zIndex": 999
  },
  "game-text": {
    "fontSize": "28rpx",
    "fontWeight": "400",
    "color": "rgba(51,51,51,1)",
    "lines": 1,
    "textOverflow": "ellipsis",
    "width": "124rpx"
  },
  "game-image": {
    "width": "124rpx",
    "height": "124rpx",
    "borderRadius": "20rpx"
  },
  "popup-game-item": {
    "width": "186rpx",
    "flexDirection": "column",
    "alignItems": "center",
    "marginBottom": "30rpx",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "popup-game": {
    "flexWrap": "wrap",
    "alignItems": "center",
    "flexDirection": "row",
    "width": "750rpx",
    "paddingTop": "50rpx",
    "paddingRight": 0,
    "paddingBottom": "50rpx",
    "paddingLeft": 0,
    "backgroundColor": "rgba(255,255,255,1)",
    "borderRadius": "28rpx"
  },
  "popup-biaoqian-text": {
    "textAlign": "center",
    "lineHeight": "44rpx",
    "width": "116rpx",
    "height": "44rpx",
    "backgroundColor": "rgba(241,241,241,1)",
    "borderRadius": "4rpx",
    "fontSize": "22rpx",
    "fontWeight": "400",
    "color": "rgba(102,102,102,1)",
    "marginTop": 0,
    "marginRight": "6rpx",
    "marginBottom": 0,
    "marginLeft": "6rpx"
  },
  "popup-biaoqian": {
    "width": "504rpx",
    "flexDirection": "row",
    "alignItems": "center",
    "marginTop": "30rpx"
  },
  "popup-down-right-text": {
    "fontSize": "22rpx",
    "fontWeight": "400",
    "color": "rgba(106,129,52,1)",
    "marginTop": "4rpx",
    "marginRight": 0,
    "marginBottom": "4rpx",
    "marginLeft": 0
  },
  "popup-down-left-text": {
    "fontSize": "22rpx",
    "fontWeight": "400",
    "color": "rgba(65,141,239,1)",
    "marginTop": "4rpx",
    "marginRight": 0,
    "marginBottom": "4rpx",
    "marginLeft": 0
  },
  "popup-down-right": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "width": "240rpx",
    "height": "116rpx",
    "backgroundColor": "rgba(210,225,156,1)",
    "borderRadius": "8rpx",
    "paddingTop": 0,
    "paddingRight": "16rpx",
    "paddingBottom": 0,
    "paddingLeft": "16rpx"
  },
  "popup-down-left": {
    "paddingTop": 0,
    "paddingRight": "16rpx",
    "paddingBottom": 0,
    "paddingLeft": "16rpx",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "width": "240rpx",
    "height": "116rpx",
    "backgroundColor": "rgba(207,228,255,1)",
    "borderRadius": "8rpx"
  },
  "popup-down": {
    "marginTop": "24rpx",
    "alignItems": "center",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "width": "504rpx"
  },
  "view-dengji": {
    "width": "504rpx",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "dengji-right-text": {
    "fontSize": "22rpx",
    "fontWeight": "400",
    "color": "rgba(255,255,255,1)"
  },
  "dengji-image": {
    "width": "40rpx",
    "height": "40rpx",
    "marginRight": "20rpx"
  },
  "dengji-popup": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "200rpx",
    "height": "88rpx",
    "backgroundColor": "rgba(254,203,61,1)",
    "borderRadius": "8rpx",
    "marginTop": "44rpx"
  },
  "user-popup-count-center": {
    "fontSize": "24rpx",
    "fontWeight": "400",
    "color": "rgba(32,32,32,1)",
    "marginTop": 0,
    "marginRight": "10rpx",
    "marginBottom": 0,
    "marginLeft": "10rpx"
  },
  "user-popup-count-right": {
    "width": "200rpx",
    "textAlign": "left",
    "fontSize": "24rpx",
    "fontWeight": "400",
    "color": "rgba(32,32,32,1)"
  },
  "user-popup-count-left": {
    "width": "200rpx",
    "textAlign": "right",
    "fontSize": "24rpx",
    "fontWeight": "400",
    "color": "rgba(32,32,32,1)"
  },
  "user-popup-count": {
    "marginTop": "10rpx",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "user-popup-detail": {
    "fontSize": "24rpx",
    "fontWeight": "400",
    "color": "rgba(153,153,153,1)",
    "marginTop": "10rpx"
  },
  "user-popup-name": {
    "marginTop": "10rpx",
    "fontSize": "28rpx",
    "fontWeight": "400",
    "color": "rgba(32,32,32,1)"
  },
  "user-popup-image": {
    "width": "130rpx",
    "height": "130rpx",
    "borderRadius": "100rpx"
  },
  "user-top-right": {
    "fontSize": "24rpx",
    "fontWeight": "400",
    "color": "rgba(102,102,102,1)"
  },
  "user-top-left": {
    "fontSize": "24rpx",
    "fontWeight": "400",
    "color": "rgba(102,102,102,1)"
  },
  "user-top": {
    "width": "504rpx",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "user-popup": {
    "flexDirection": "column",
    "alignItems": "center",
    "width": "600rpx",
    "backgroundColor": "rgba(255,255,255,1)",
    "borderRadius": "24rpx",
    "paddingTop": "24rpx",
    "paddingRight": "48rpx",
    "paddingBottom": "48rpx",
    "paddingLeft": "48rpx"
  },
  "input-input": {
    "width": "500rpx",
    "height": "88rpx",
    "fontSize": "32rpx"
  },
  "input-down": {
    "width": "750rpx",
    "height": "50",
    "backgroundColor": "#ffffff",
    "position": "fixed",
    "left": 0,
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx"
  },
  "input-send": {
    "backgroundColor": "#F0AD4E",
    "fontSize": "30rpx",
    "color": "#ffffff",
    "borderRadius": "100rpx",
    "width": "100rpx",
    "height": "50rpx",
    "textAlign": "center",
    "lineHeight": "50rpx"
  },
  "bottom": {
    "width": "450rpx",
    "height": "10rpx"
  },
  "chat-right": {
    "alignItems": "center",
    "flexDirection": "row",
    "marginBottom": "10rpx"
  },
  "chat-right-text2": {
    "fontSize": "28rpx",
    "fontWeight": "500",
    "color": "#F6EA96",
    "marginLeft": "10rpx"
  },
  "chat-right-text1": {
    "width": "76rpx",
    "height": "30rpx",
    "textAlign": "center",
    "lineHeight": "30rpx",
    "backgroundColor": "rgba(238,117,254,1)",
    "borderRadius": "15rpx",
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#ffffff",
    "fontSize": "20rpx",
    "fontWeight": "500",
    "color": "rgba(255,255,255,1)"
  },
  "chat-gg": {
    "fontSize": "30rpx",
    "fontWeight": "400",
    "color": "#ffa000",
    "flexWrap": "wrap",
    "width": "450rpx",
    "marginBottom": "10",
    "lineHeight": "40rpx"
  },
  "chat-text": {
    "flexDirection": "row",
    "alignItems": "center",
    "flexWrap": "wrap",
    "marginBottom": "10",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10",
    "borderRadius": "12rpx",
    "width": "450rpx"
  },
  "chat-text-text": {
    "fontSize": "26rpx",
    "fontWeight": "400",
    "color": "#ffffff",
    "flexWrap": "wrap",
    "width": "360rpx"
  },
  "chat-scroll": {
    "position": "fixed",
    "height": "400rpx",
    "width": "450rpx",
    "bottom": "270rpx",
    "left": "20rpx"
  },
  "down-tab-left-text": {
    "width": "300rpx",
    "fontSize": "26rpx",
    "fontWeight": "500",
    "color": "rgba(255,255,255,1)"
  },
  "down-tab-left-image": {
    "width": "32rpx",
    "height": "32rpx",
    "marginRight": "10rpx",
    "marginLeft": "30rpx"
  },
  "down-tab-left": {
    "width": "424rpx",
    "height": "64rpx",
    "backgroundColor": "rgba(49,49,49,1)",
    "borderRadius": "32rpx",
    "opacity": 0.72,
    "marginLeft": "20rpx",
    "alignItems": "center",
    "flexDirection": "row"
  },
  "down-tab": {
    "position": "fixed",
    "width": "750rpx",
    "bottom": "26rpx",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "down-tab-right": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "down-tab-right-img": {
    "width": "72rpx",
    "height": "72rpx",
    "marginRight": "20rpx"
  },
  "guibin-count-text": {
    "fontSize": "20rpx",
    "fontFamily": "PingFangSC-Regular, PingFang SC",
    "fontWeight": "400",
    "color": "rgba(255,255,255,1)"
  },
  "guibin-count": {
    "width": "94rpx",
    "height": "68rpx",
    "backgroundColor": "rgba(33,33,33,1)",
    "borderRadius": "34rpx",
    "opacity": 0.58,
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "guibin-image": {
    "width": "68rpx",
    "height": "68rpx",
    "borderRadius": "100rpx",
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#ffffff",
    "marginRight": "14rpx"
  },
  "guibin-scroll": {
    "alignItems": "center",
    "flexDirection": "row",
    "width": "300rpx",
    "marginLeft": "10rpx"
  },
  "center-down-text": {
    "width": "130rpx",
    "fontSize": "24rpx",
    "color": "#ffffff",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "center-down-img": {
    "width": "20rpx",
    "height": "26rpx",
    "marginRight": "4rpx"
  },
  "center-down": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "guanzhu-but": {
    "width": "60rpx",
    "height": "60rpx",
    "marginRight": "4rpx"
  },
  "user-image": {
    "width": "68rpx",
    "height": "68rpx",
    "borderRadius": "100rpx",
    "borderWidth": "2rpx",
    "borderStyle": "solid",
    "borderColor": "#ffffff",
    "marginLeft": "2rpx"
  },
  "user-header": {
    "width": "270rpx",
    "height": "68rpx",
    "backgroundColor": "rgba(33,33,33,1)",
    "borderRadius": "34rpx",
    "opacity": 0.69,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "header": {
    "position": "fixed",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "width": "750rpx",
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx"
  },
  "myvideo": {
    "width": "750rpx",
    "flex": 1
  }
}

/***/ }),

/***/ 16:
/*!************************************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=script&lang=js& */ 17);\n/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBqQixDQUFnQiw0aUJBQUcsRUFBQyIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4v54Gr54uQ5LiL6L29L0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+eBq+eLkOS4i+i9vS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+eBq+eLkOS4i+i9vS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4v54Gr54uQ5LiL6L29L0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+eBq+eLkOS4i+i9vS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+eBq+eLkOS4i+i9vS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),

/***/ 17:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //\n//\n//\n//\n//\n//\n//\n\n\nvar animation = __webpack_provided_uni_dot_requireNativePlugin('animation');\n\n/**\n                                                       * Transition 过渡动画\n                                                       * @description 简单过渡动画组件\n                                                       * @tutorial https://ext.dcloud.net.cn/plugin?id=985\n                                                       * @property {Boolean} show = [false|true] 控制组件显示或隐藏\n                                                          * @property {Array} modeClass = [fade|slide-top|slide-right|slide-bottom|slide-left|zoom-in|zoom-out] 过渡动画类型\n                                                          *  @value fade 渐隐渐出过渡\n                                                          *  @value slide-top 由上至下过渡\n                                                          *  @value slide-right 由右至左过渡\n                                                          *  @value slide-bottom 由下至上过渡\n                                                          *  @value slide-left 由左至右过渡\n                                                          *  @value zoom-in 由小到大过渡\n                                                          *  @value zoom-out 由大到小过渡\n                                                       * @property {Number} duration 过渡动画持续时间\n                                                       * @property {Object} styles 组件样式，同 css 样式，注意带’-‘连接符的属性需要使用小驼峰写法如：`backgroundColor:red`\n                                                       */var _default2 =\n{\n  name: 'uniTransition',\n  props: {\n    show: {\n      type: Boolean,\n      default: false },\n\n    modeClass: {\n      type: Array,\n      default: function _default() {\n        return [];\n      } },\n\n    duration: {\n      type: Number,\n      default: 300 },\n\n    styles: {\n      type: Object,\n      default: function _default() {\n        return {};\n      } } },\n\n\n  data: function data() {\n    return {\n      isShow: false,\n      transform: '',\n      ani: { in: '',\n        active: '' } };\n\n\n  },\n  watch: {\n    show: {\n      handler: function handler(newVal) {\n        if (newVal) {\n          this.open();\n        } else {\n          this.close();\n        }\n      },\n      immediate: true } },\n\n\n  computed: {\n    stylesObject: function stylesObject() {\n      var styles = _objectSpread(_objectSpread({},\n      this.styles), {}, {\n        'transition-duration': this.duration / 1000 + 's' });\n\n      var transfrom = '';\n      for (var i in styles) {\n        var line = this.toLine(i);\n        transfrom += line + ':' + styles[i] + ';';\n      }\n      return transfrom;\n    } },\n\n  created: function created() {\n    // this.timer = null\n    // this.nextTick = (time = 50) => new Promise(resolve => {\n    // \tclearTimeout(this.timer)\n    // \tthis.timer = setTimeout(resolve, time)\n    // \treturn this.timer\n    // });\n  },\n  methods: {\n    change: function change() {\n      this.$emit('click', {\n        detail: this.isShow });\n\n    },\n    open: function open() {var _this = this;\n      clearTimeout(this.timer);\n      this.isShow = true;\n      this.transform = '';\n      this.ani.in = '';\n      for (var i in this.getTranfrom(false)) {\n        if (i === 'opacity') {\n          this.ani.in = 'fade-in';\n        } else {\n          this.transform += \"\".concat(this.getTranfrom(false)[i], \" \");\n        }\n      }\n      this.$nextTick(function () {\n        setTimeout(function () {\n          _this._animation(true);\n        }, 50);\n      });\n\n    },\n    close: function close(type) {\n      clearTimeout(this.timer);\n      this._animation(false);\n    },\n    _animation: function _animation(type) {var _this2 = this;\n      var styles = this.getTranfrom(type);\n\n      if (!this.$refs['ani']) return;\n      animation.transition(this.$refs['ani'].ref, {\n        styles: styles,\n        duration: this.duration, //ms\n        timingFunction: 'ease',\n        needLayout: false,\n        delay: 0 //ms\n      }, function () {\n        if (!type) {\n          _this2.isShow = false;\n        }\n        _this2.$emit('change', {\n          detail: _this2.isShow });\n\n      });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    },\n    getTranfrom: function getTranfrom(type) {\n      var styles = {\n        transform: '' };\n\n      this.modeClass.forEach(function (mode) {\n        switch (mode) {\n          case 'fade':\n            styles.opacity = type ? 1 : 0;\n            break;\n          case 'slide-top':\n            styles.transform += \"translateY(\".concat(type ? '0' : '-100%', \") \");\n            break;\n          case 'slide-right':\n            styles.transform += \"translateX(\".concat(type ? '0' : '100%', \") \");\n            break;\n          case 'slide-bottom':\n            styles.transform += \"translateY(\".concat(type ? '0' : '100%', \") \");\n            break;\n          case 'slide-left':\n            styles.transform += \"translateX(\".concat(type ? '0' : '-100%', \") \");\n            break;\n          case 'zoom-in':\n            styles.transform += \"scale(\".concat(type ? 1 : 0.8, \") \");\n            break;\n          case 'zoom-out':\n            styles.transform += \"scale(\".concat(type ? 1 : 1.2, \") \");\n            break;}\n\n      });\n      return styles;\n    },\n    _modeClassArr: function _modeClassArr(type) {\n      var mode = this.modeClass;\n      if (typeof mode !== \"string\") {\n        var modestr = '';\n        mode.forEach(function (item) {\n          modestr += item + '-' + type + ',';\n        });\n        return modestr.substr(0, modestr.length - 1);\n      } else {\n        return mode + '-' + type;\n      }\n    },\n    // getEl(el) {\n    // \tconsole.log(el || el.ref || null);\n    // \treturn el || el.ref || null\n    // },\n    toLine: function toLine(name) {\n      return name.replace(/([A-Z])/g, \"-$1\").toLowerCase();\n    } } };exports.default = _default2;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBU0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQSx1QkFEQTtBQUVBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBLEVBREE7O0FBS0E7QUFDQSxpQkFEQTtBQUVBLGFBRkEsc0JBRUE7QUFDQTtBQUNBLE9BSkEsRUFMQTs7QUFXQTtBQUNBLGtCQURBO0FBRUEsa0JBRkEsRUFYQTs7QUFlQTtBQUNBLGtCQURBO0FBRUEsYUFGQSxzQkFFQTtBQUNBO0FBQ0EsT0FKQSxFQWZBLEVBRkE7OztBQXdCQSxNQXhCQSxrQkF3QkE7QUFDQTtBQUNBLG1CQURBO0FBRUEsbUJBRkE7QUFHQTtBQUNBLGtCQURBLEVBSEE7OztBQU9BLEdBaENBO0FBaUNBO0FBQ0E7QUFDQSxhQURBLG1CQUNBLE1BREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsT0FQQTtBQVFBLHFCQVJBLEVBREEsRUFqQ0E7OztBQTZDQTtBQUNBLGdCQURBLDBCQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLHlEQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWkEsRUE3Q0E7O0FBMkRBLFNBM0RBLHFCQTJEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBbEVBO0FBbUVBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBO0FBQ0EsMkJBREE7O0FBR0EsS0FMQTtBQU1BLFFBTkEsa0JBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxFQUZBO0FBR0EsT0FKQTs7QUFNQSxLQXhCQTtBQXlCQSxTQXpCQSxpQkF5QkEsSUF6QkEsRUF5QkE7QUFDQTtBQUNBO0FBQ0EsS0E1QkE7QUE2QkEsY0E3QkEsc0JBNkJBLElBN0JBLEVBNkJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQURBO0FBRUEsK0JBRkEsRUFFQTtBQUNBLDhCQUhBO0FBSUEseUJBSkE7QUFLQSxnQkFMQSxDQUtBO0FBTEEsU0FNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBREE7O0FBR0EsT0FiQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQSxLQXBFQTtBQXFFQSxlQXJFQSx1QkFxRUEsSUFyRUEsRUFxRUE7QUFDQTtBQUNBLHFCQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBckJBOztBQXVCQSxPQXhCQTtBQXlCQTtBQUNBLEtBbkdBO0FBb0dBLGlCQXBHQSx5QkFvR0EsSUFwR0EsRUFvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBO0FBQ0EsT0FOQSxNQU1BO0FBQ0E7QUFDQTtBQUNBLEtBL0dBO0FBZ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFwSEEsa0JBb0hBLElBcEhBLEVBb0hBO0FBQ0E7QUFDQSxLQXRIQSxFQW5FQSxFIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IHYtaWY9XCJpc1Nob3dcIiByZWY9XCJhbmlcIiBjbGFzcz1cInVuaS10cmFuc2l0aW9uXCIgOmNsYXNzPVwiW2FuaS5pbl1cIiA6c3R5bGU9XCIndHJhbnNmb3JtOicgK3RyYW5zZm9ybSsnOycrc3R5bGVzT2JqZWN0XCJcclxuXHQgQGNsaWNrPVwiY2hhbmdlXCI+XHJcblx0XHQgPHNsb3Q+PC9zbG90PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0Ly8gI2lmZGVmIEFQUC1OVlVFXG5cdGNvbnN0IGFuaW1hdGlvbiA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdhbmltYXRpb24nKTtcclxuXHQvLyAjZW5kaWZcblx0LyoqXG5cdCAqIFRyYW5zaXRpb24g6L+H5rih5Yqo55S7XG5cdCAqIEBkZXNjcmlwdGlvbiDnroDljZXov4fmuKHliqjnlLvnu4Tku7Zcblx0ICogQHR1dG9yaWFsIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTk4NVxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IHNob3cgPSBbZmFsc2V8dHJ1ZV0g5o6n5Yi257uE5Lu25pi+56S65oiW6ZqQ6JePXHJcbiAgICAgKiBAcHJvcGVydHkge0FycmF5fSBtb2RlQ2xhc3MgPSBbZmFkZXxzbGlkZS10b3B8c2xpZGUtcmlnaHR8c2xpZGUtYm90dG9tfHNsaWRlLWxlZnR8em9vbS1pbnx6b29tLW91dF0g6L+H5rih5Yqo55S757G75Z6LXG4gICAgICogIEB2YWx1ZSBmYWRlIOa4kOmakOa4kOWHuui/h+a4oVxuICAgICAqICBAdmFsdWUgc2xpZGUtdG9wIOeUseS4iuiHs+S4i+i/h+a4oVxuICAgICAqICBAdmFsdWUgc2xpZGUtcmlnaHQg55Sx5Y+z6Iez5bem6L+H5rihXG4gICAgICogIEB2YWx1ZSBzbGlkZS1ib3R0b20g55Sx5LiL6Iez5LiK6L+H5rihXG4gICAgICogIEB2YWx1ZSBzbGlkZS1sZWZ0IOeUseW3puiHs+WPs+i/h+a4oVxuICAgICAqICBAdmFsdWUgem9vbS1pbiDnlLHlsI/liLDlpKfov4fmuKFcbiAgICAgKiAgQHZhbHVlIHpvb20tb3V0IOeUseWkp+WIsOWwj+i/h+a4oVxuXHQgKiBAcHJvcGVydHkge051bWJlcn0gZHVyYXRpb24g6L+H5rih5Yqo55S75oyB57ut5pe26Ze0XG5cdCAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBzdHlsZXMg57uE5Lu25qC35byP77yM5ZCMIGNzcyDmoLflvI/vvIzms6jmhI/luKbigJkt4oCY6L+e5o6l56ym55qE5bGe5oCn6ZyA6KaB5L2/55So5bCP6am85bOw5YaZ5rOV5aaC77yaYGJhY2tncm91bmRDb2xvcjpyZWRgXG5cdCAqL1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICd1bmlUcmFuc2l0aW9uJyxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHNob3c6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vZGVDbGFzczoge1xyXG5cdFx0XHRcdHR5cGU6IEFycmF5LFxyXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIFtdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkdXJhdGlvbjoge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiAzMDBcclxuXHRcdFx0fSxcclxuXHRcdFx0c3R5bGVzOiB7XHJcblx0XHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xuXHRcdFx0XHRcdHJldHVybiB7fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aXNTaG93OiBmYWxzZSxcclxuXHRcdFx0XHR0cmFuc2Zvcm06ICcnLFxyXG5cdFx0XHRcdGFuaTogeyBpbjogJycsXHJcblx0XHRcdFx0XHRhY3RpdmU6ICcnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdHNob3c6IHtcclxuXHRcdFx0XHRoYW5kbGVyKG5ld1ZhbCkge1xyXG5cdFx0XHRcdFx0aWYgKG5ld1ZhbCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLm9wZW4oKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jbG9zZSgpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdHN0eWxlc09iamVjdCgpIHtcblx0XHRcdFx0bGV0IHN0eWxlcyA9IHtcclxuXHRcdFx0XHRcdC4uLnRoaXMuc3R5bGVzLFxyXG5cdFx0XHRcdFx0J3RyYW5zaXRpb24tZHVyYXRpb24nOiB0aGlzLmR1cmF0aW9uIC8gMTAwMCArICdzJ1xyXG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHRyYW5zZnJvbSA9ICcnXHJcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiBzdHlsZXMpIHtcblx0XHRcdFx0XHRsZXQgbGluZSA9IHRoaXMudG9MaW5lKGkpXHJcblx0XHRcdFx0XHR0cmFuc2Zyb20gKz0gbGluZSArICc6JyArIHN0eWxlc1tpXSArICc7J1xyXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRyYW5zZnJvbVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0Ly8gdGhpcy50aW1lciA9IG51bGxcclxuXHRcdFx0Ly8gdGhpcy5uZXh0VGljayA9ICh0aW1lID0gNTApID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG5cdFx0XHQvLyBcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxyXG5cdFx0XHQvLyBcdHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpXHJcblx0XHRcdC8vIFx0cmV0dXJuIHRoaXMudGltZXJcclxuXHRcdFx0Ly8gfSk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjaGFuZ2UoKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snLCB7XHJcblx0XHRcdFx0XHRkZXRhaWw6IHRoaXMuaXNTaG93XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0b3BlbigpIHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXHJcblx0XHRcdFx0dGhpcy5pc1Nob3cgPSB0cnVlXHJcblx0XHRcdFx0dGhpcy50cmFuc2Zvcm0gPSAnJ1xyXG5cdFx0XHRcdHRoaXMuYW5pLmluID0gJydcclxuXHRcdFx0XHRmb3IgKGxldCBpIGluIHRoaXMuZ2V0VHJhbmZyb20oZmFsc2UpKSB7XHJcblx0XHRcdFx0XHRpZiAoaSA9PT0gJ29wYWNpdHknKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYW5pLmluID0gJ2ZhZGUtaW4nXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRyYW5zZm9ybSArPSBgJHt0aGlzLmdldFRyYW5mcm9tKGZhbHNlKVtpXX0gYFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5fYW5pbWF0aW9uKHRydWUpXHJcblx0XHRcdFx0XHR9LCA1MClcclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xvc2UodHlwZSkge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lcilcclxuXHRcdFx0XHR0aGlzLl9hbmltYXRpb24oZmFsc2UpXHJcblx0XHRcdH0sXHJcblx0XHRcdF9hbmltYXRpb24odHlwZSkge1xyXG5cdFx0XHRcdGxldCBzdHlsZXMgPSB0aGlzLmdldFRyYW5mcm9tKHR5cGUpXHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXG5cdFx0XHRcdGlmKCF0aGlzLiRyZWZzWydhbmknXSkgcmV0dXJuXHJcblx0XHRcdFx0YW5pbWF0aW9uLnRyYW5zaXRpb24odGhpcy4kcmVmc1snYW5pJ10ucmVmLCB7XHJcblx0XHRcdFx0XHRzdHlsZXMsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogdGhpcy5kdXJhdGlvbiwgLy9tc1xyXG5cdFx0XHRcdFx0dGltaW5nRnVuY3Rpb246ICdlYXNlJyxcclxuXHRcdFx0XHRcdG5lZWRMYXlvdXQ6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZGVsYXk6IDAgLy9tc1xyXG5cdFx0XHRcdH0sICgpID0+IHtcclxuXHRcdFx0XHRcdGlmICghdHlwZSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlzU2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XHJcblx0XHRcdFx0XHRcdGRldGFpbDogdGhpcy5pc1Nob3dcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZuZGVmIEFQUC1OVlVFXHJcblx0XHRcdFx0dGhpcy50cmFuc2Zvcm0gPSAnJ1xyXG5cdFx0XHRcdGZvciAobGV0IGkgaW4gc3R5bGVzKSB7XHJcblx0XHRcdFx0XHRpZiAoaSA9PT0gJ29wYWNpdHknKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYW5pLmluID0gYGZhZGUtJHt0eXBlPydvdXQnOidpbid9YFxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy50cmFuc2Zvcm0gKz0gYCR7c3R5bGVzW2ldfSBgXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdGlmICghdHlwZSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlzU2hvdyA9IGZhbHNlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XHJcblx0XHRcdFx0XHRcdGRldGFpbDogdGhpcy5pc1Nob3dcclxuXHRcdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdH0sIHRoaXMuZHVyYXRpb24pXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRUcmFuZnJvbSh0eXBlKSB7XHJcblx0XHRcdFx0bGV0IHN0eWxlcyA9IHtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogJydcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5tb2RlQ2xhc3MuZm9yRWFjaCgobW9kZSkgPT4ge1xyXG5cdFx0XHRcdFx0c3dpdGNoIChtb2RlKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2ZhZGUnOlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlcy5vcGFjaXR5ID0gdHlwZSA/IDEgOiAwXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3NsaWRlLXRvcCc6XHJcblx0XHRcdFx0XHRcdFx0c3R5bGVzLnRyYW5zZm9ybSArPSBgdHJhbnNsYXRlWSgke3R5cGU/JzAnOictMTAwJSd9KSBgXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3NsaWRlLXJpZ2h0JzpcclxuXHRcdFx0XHRcdFx0XHRzdHlsZXMudHJhbnNmb3JtICs9IGB0cmFuc2xhdGVYKCR7dHlwZT8nMCc6JzEwMCUnfSkgYFxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICdzbGlkZS1ib3R0b20nOlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlcy50cmFuc2Zvcm0gKz0gYHRyYW5zbGF0ZVkoJHt0eXBlPycwJzonMTAwJSd9KSBgXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3NsaWRlLWxlZnQnOlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlcy50cmFuc2Zvcm0gKz0gYHRyYW5zbGF0ZVgoJHt0eXBlPycwJzonLTEwMCUnfSkgYFxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICd6b29tLWluJzpcclxuXHRcdFx0XHRcdFx0XHRzdHlsZXMudHJhbnNmb3JtICs9IGBzY2FsZSgke3R5cGU/MTowLjh9KSBgXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3pvb20tb3V0JzpcclxuXHRcdFx0XHRcdFx0XHRzdHlsZXMudHJhbnNmb3JtICs9IGBzY2FsZSgke3R5cGU/MToxLjJ9KSBgXHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm4gc3R5bGVzXHJcblx0XHRcdH0sXHJcblx0XHRcdF9tb2RlQ2xhc3NBcnIodHlwZSkge1xyXG5cdFx0XHRcdGxldCBtb2RlID0gdGhpcy5tb2RlQ2xhc3NcclxuXHRcdFx0XHRpZiAodHlwZW9mKG1vZGUpICE9PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0XHRsZXQgbW9kZXN0ciA9ICcnXHJcblx0XHRcdFx0XHRtb2RlLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRcdFx0bW9kZXN0ciArPSAoaXRlbSArICctJyArIHR5cGUgKyAnLCcpXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0cmV0dXJuIG1vZGVzdHIuc3Vic3RyKDAsIG1vZGVzdHIubGVuZ3RoIC0gMSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG1vZGUgKyAnLScgKyB0eXBlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBnZXRFbChlbCkge1xuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhlbCB8fCBlbC5yZWYgfHwgbnVsbCk7XHJcblx0XHRcdC8vIFx0cmV0dXJuIGVsIHx8IGVsLnJlZiB8fCBudWxsXHJcblx0XHRcdC8vIH0sXG5cdFx0XHR0b0xpbmUobmFtZSkge1xuXHRcdFx0XHRyZXR1cm4gbmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQudW5pLXRyYW5zaXRpb24ge1xyXG5cdFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcblx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG5cdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG5cdH1cclxuXHJcblx0LmZhZGUtaW4ge1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcblxyXG5cdC5mYWRlLWFjdGl2ZSB7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuXHJcblx0LnNsaWRlLXRvcC1pbiB7XHJcblx0XHQvKiB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7ICovXHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG5cdH1cclxuXHJcblx0LnNsaWRlLXRvcC1hY3RpdmUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG5cdFx0Lyogb3BhY2l0eTogMTsgKi9cclxuXHR9XHJcblxyXG5cdC5zbGlkZS1yaWdodC1pbiB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcblx0fVxyXG5cclxuXHQuc2xpZGUtcmlnaHQtYWN0aXZlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuXHR9XHJcblxyXG5cdC5zbGlkZS1ib3R0b20taW4ge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG5cdH1cclxuXHJcblx0LnNsaWRlLWJvdHRvbS1hY3RpdmUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG5cdH1cclxuXHJcblx0LnNsaWRlLWxlZnQtaW4ge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuXHR9XHJcblxyXG5cdC5zbGlkZS1sZWZ0LWFjdGl2ZSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuXHJcblx0Lnpvb20taW4taW4ge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG5cdH1cclxuXHJcblx0Lnpvb20tb3V0LWFjdGl2ZSB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdH1cclxuXHJcblx0Lnpvb20tb3V0LWluIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),

/***/ 18:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),

/***/ 19:
/*!********************************************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-transition/uni-transition.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=style&index=0&lang=css& */ 20);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ 20:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-transition/uni-transition.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@TRANSITION": {
    "uni-transition": {
      "timingFunction": "ease",
      "duration": 300,
      "property": "transform,opacity"
    }
  },
  "uni-transition": {
    "transitionTimingFunction": "ease",
    "transitionDuration": 300,
    "transitionProperty": "transform,opacity"
  },
  "fade-in": {
    "opacity": 0
  },
  "fade-active": {
    "opacity": 1
  },
  "slide-top-in": {
    "transform": "translateY(-100%)"
  },
  "slide-top-active": {
    "transform": "translateY(0)"
  },
  "slide-right-in": {
    "transform": "translateX(100%)"
  },
  "slide-right-active": {
    "transform": "translateX(0)"
  },
  "slide-bottom-in": {
    "transform": "translateY(100%)"
  },
  "slide-bottom-active": {
    "transform": "translateY(0)"
  },
  "slide-left-in": {
    "transform": "translateX(-100%)"
  },
  "slide-left-active": {
    "transform": "translateX(0)",
    "opacity": 1
  },
  "zoom-in-in": {
    "transform": "scale(0.8)"
  },
  "zoom-out-active": {
    "transform": "scale(1)"
  },
  "zoom-out-in": {
    "transform": "scale(1.2)"
  }
}

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

/***/ 22:
/*!**************************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=script&lang=js& */ 23);\n/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFqQixDQUFnQix1aUJBQUcsRUFBQyIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4v54Gr54uQ5LiL6L29L0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+eBq+eLkOS4i+i9vS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+eBq+eLkOS4i+i9vS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+eBq+eLkOS4i+i9vS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi/ngavni5DkuIvovb0vSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi/ngavni5DkuIvovb0vSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///22\n");

/***/ }),

/***/ 23:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\nvar _uniTransition = _interopRequireDefault(__webpack_require__(/*! ../uni-transition/uni-transition.vue */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/**\n * PopUp 弹出层\n * @description 弹出层组件，为了解决遮罩弹层的问题\n * @tutorial https://ext.dcloud.net.cn/plugin?id=329\n * @property {String} type = [top|center|bottom] 弹出方式\n * \t@value top 顶部弹出\n * \t@value center 中间弹出\n * \t@value bottom 底部弹出\n * @property {Boolean} animation = [ture|false] 是否开启动画\n * @property {Boolean} maskClick = [ture|false] 蒙版点击是否关闭弹窗\n * @event {Function} change 打开关闭弹窗触发，e={show: false}\n */var _default = { name: 'UniPopup', components: { uniTransition: _uniTransition.default }, props: { // 开启动画\n    animation: { type: Boolean,\n      default: true },\n\n    // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层\n    type: {\n      type: String,\n      default: 'center' },\n\n    // maskClick\n    maskClick: {\n      type: Boolean,\n      default: true } },\n\n\n  data: function data() {\n    return {\n      duration: 300,\n      ani: [],\n      showPopup: false,\n      showTrans: false,\n      maskClass: {\n        'position': 'fixed',\n        'bottom': 0,\n        'top': 0,\n        'left': 0,\n        'right': 0,\n        'backgroundColor': 'rgba(0, 0, 0, 0.4)' },\n\n      transClass: {\n        'position': 'fixed',\n        'left': 0,\n        'right': 0 } };\n\n\n  },\n  watch: {\n    type: {\n      handler: function handler(newVal) {\n        switch (this.type) {\n          case 'top':\n            this.ani = ['slide-top'];\n            this.transClass = {\n              'position': 'fixed',\n              'left': 0,\n              'right': 0 };\n\n            break;\n          case 'bottom':\n            this.ani = ['slide-bottom'];\n            this.transClass = {\n              'position': 'fixed',\n              'left': 0,\n              'right': 0,\n              'bottom': 0 };\n\n            break;\n          case 'center':\n            this.ani = ['zoom-out', 'fade'];\n            this.transClass = {\n              'position': 'fixed',\n\n\n\n\n              'bottom': 0,\n              'left': 0,\n              'right': 0,\n              'top': 0,\n              'justifyContent': 'center',\n              'alignItems': 'center' };\n\n\n            break;}\n\n      },\n      immediate: true } },\n\n\n  created: function created() {\n    if (this.animation) {\n      this.duration = 300;\n    } else {\n      this.duration = 0;\n    }\n  },\n  methods: {\n    clear: function clear(e) {\n      // TODO nvue 取消冒泡\n      e.stopPropagation();\n    },\n    open: function open() {var _this = this;\n      this.showPopup = true;\n      this.$nextTick(function () {\n        clearTimeout(_this.timer);\n        _this.timer = setTimeout(function () {\n          _this.showTrans = true;\n        }, 50);\n      });\n      this.$emit('change', {\n        show: true });\n\n    },\n    close: function close(type) {var _this2 = this;\n      this.showTrans = false;\n      this.$nextTick(function () {\n        clearTimeout(_this2.timer);\n        _this2.timer = setTimeout(function () {\n          _this2.$emit('change', {\n            show: false });\n\n          _this2.showPopup = false;\n        }, 300);\n      });\n    },\n    onTap: function onTap() {\n      if (!this.maskClick) return;\n      this.close();\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFZQSxpSDs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7a0JBYUEsRUFDQSxnQkFEQSxFQUVBLGNBQ0EscUNBREEsRUFGQSxFQUtBLFNBQ0E7QUFDQSxpQkFDQSxhQURBO0FBRUEsbUJBRkEsRUFGQTs7QUFNQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSx1QkFGQSxFQVBBOztBQVdBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG1CQUZBLEVBWkEsRUFMQTs7O0FBc0JBLE1BdEJBLGtCQXNCQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxhQUZBO0FBR0Esc0JBSEE7QUFJQSxzQkFKQTtBQUtBO0FBQ0EsMkJBREE7QUFFQSxtQkFGQTtBQUdBLGdCQUhBO0FBSUEsaUJBSkE7QUFLQSxrQkFMQTtBQU1BLCtDQU5BLEVBTEE7O0FBYUE7QUFDQSwyQkFEQTtBQUVBLGlCQUZBO0FBR0Esa0JBSEEsRUFiQTs7O0FBbUJBLEdBMUNBO0FBMkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSx1QkFGQTtBQUdBLHdCQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSx1QkFGQTtBQUdBLHdCQUhBO0FBSUEseUJBSkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FEQTs7Ozs7QUFNQSx5QkFOQTtBQU9BLHVCQVBBO0FBUUEsd0JBUkE7QUFTQSxzQkFUQTtBQVVBLHdDQVZBO0FBV0Esb0NBWEE7OztBQWNBLGtCQWxDQTs7QUFvQ0EsT0F0Q0E7QUF1Q0EscUJBdkNBLEVBREEsRUEzQ0E7OztBQXNGQSxTQXRGQSxxQkFzRkE7QUFDQTtBQUNBO0FBQ0EsS0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEdBNUZBO0FBNkZBO0FBQ0EsU0FEQSxpQkFDQSxDQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FKQTtBQUtBLFFBTEEsa0JBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxFQUVBLEVBRkE7QUFHQSxPQUxBO0FBTUE7QUFDQSxrQkFEQTs7QUFHQSxLQWhCQTtBQWlCQSxTQWpCQSxpQkFpQkEsSUFqQkEsRUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBREE7O0FBR0E7QUFDQSxTQUxBLEVBS0EsR0FMQTtBQU1BLE9BUkE7QUFTQSxLQTVCQTtBQTZCQSxTQTdCQSxtQkE2QkE7QUFDQTtBQUNBO0FBQ0EsS0FoQ0EsRUE3RkEsRSIsImZpbGUiOiIyMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyB2LWlmPVwic2hvd1BvcHVwXCIgY2xhc3M9XCJ1bmktcG9wdXBcIiBAdG91Y2htb3ZlLnN0b3AucHJldmVudD1cImNsZWFyXCI+XHJcblx0XHQ8dW5pLXRyYW5zaXRpb24gOm1vZGUtY2xhc3M9XCJbJ2ZhZGUnXVwiIDpzdHlsZXM9XCJtYXNrQ2xhc3NcIiA6ZHVyYXRpb249XCJkdXJhdGlvblwiIDpzaG93PVwic2hvd1RyYW5zXCIgQGNsaWNrPVwib25UYXBcIiAvPlxyXG5cdFx0PHVuaS10cmFuc2l0aW9uIDptb2RlLWNsYXNzPVwiYW5pXCIgOnN0eWxlcz1cInRyYW5zQ2xhc3NcIiA6ZHVyYXRpb249XCJkdXJhdGlvblwiIDpzaG93PVwic2hvd1RyYW5zXCIgQGNsaWNrPVwib25UYXBcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktcG9wdXBfX3dyYXBwZXItYm94XCIgQGNsaWNrLnN0b3A9XCJjbGVhclwiPlxyXG5cdFx0XHRcdDxzbG90IC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdW5pLXRyYW5zaXRpb24+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgdW5pVHJhbnNpdGlvbiBmcm9tICcuLi91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWUnXHJcblxyXG5cdC8qKlxyXG5cdCAqIFBvcFVwIOW8ueWHuuWxglxyXG5cdCAqIEBkZXNjcmlwdGlvbiDlvLnlh7rlsYLnu4Tku7bvvIzkuLrkuobop6PlhrPpga7nvanlvLnlsYLnmoTpl67pophcclxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9MzI5XHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IHR5cGUgPSBbdG9wfGNlbnRlcnxib3R0b21dIOW8ueWHuuaWueW8j1xuXHQgKiBcdEB2YWx1ZSB0b3Ag6aG26YOo5by55Ye6XHJcblx0ICogXHRAdmFsdWUgY2VudGVyIOS4remXtOW8ueWHulxyXG5cdCAqIFx0QHZhbHVlIGJvdHRvbSDlupXpg6jlvLnlh7pcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFuaW1hdGlvbiA9IFt0dXJlfGZhbHNlXSDmmK/lkKblvIDlkK/liqjnlLtcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IG1hc2tDbGljayA9IFt0dXJlfGZhbHNlXSDokpnniYjngrnlh7vmmK/lkKblhbPpl63lvLnnqpdcclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBjaGFuZ2Ug5omT5byA5YWz6Zet5by556qX6Kem5Y+R77yMZT17c2hvdzogZmFsc2V9XHJcblx0ICovXHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdVbmlQb3B1cCcsXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdHVuaVRyYW5zaXRpb25cclxuXHRcdH0sXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHQvLyDlvIDlkK/liqjnlLtcclxuXHRcdFx0YW5pbWF0aW9uOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOW8ueWHuuWxguexu+Wei++8jOWPr+mAieWAvO+8jHRvcDog6aG26YOo5by55Ye65bGC77ybYm90dG9t77ya5bqV6YOo5by55Ye65bGC77ybY2VudGVy77ya5YWo5bGP5by55Ye65bGCXHJcblx0XHRcdHR5cGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJ2NlbnRlcidcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gbWFza0NsaWNrXHJcblx0XHRcdG1hc2tDbGljazoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkdXJhdGlvbjogMzAwLFxyXG5cdFx0XHRcdGFuaTogW10sXHJcblx0XHRcdFx0c2hvd1BvcHVwOiBmYWxzZSxcclxuXHRcdFx0XHRzaG93VHJhbnM6IGZhbHNlLFxyXG5cdFx0XHRcdG1hc2tDbGFzczoge1xyXG5cdFx0XHRcdFx0J3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuXHRcdFx0XHRcdCdib3R0b20nOiAwLFxyXG5cdFx0XHRcdFx0J3RvcCc6IDAsXHJcblx0XHRcdFx0XHQnbGVmdCc6IDAsXHJcblx0XHRcdFx0XHQncmlnaHQnOiAwLFxyXG5cdFx0XHRcdFx0J2JhY2tncm91bmRDb2xvcic6ICdyZ2JhKDAsIDAsIDAsIDAuNCknXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR0cmFuc0NsYXNzOiB7XHJcblx0XHRcdFx0XHQncG9zaXRpb24nOiAnZml4ZWQnLFxyXG5cdFx0XHRcdFx0J2xlZnQnOiAwLFxyXG5cdFx0XHRcdFx0J3JpZ2h0JzogMCxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHR0eXBlOiB7XHJcblx0XHRcdFx0aGFuZGxlcjogZnVuY3Rpb24obmV3VmFsKSB7XHJcblx0XHRcdFx0XHRzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG5cdFx0XHRcdFx0XHRjYXNlICd0b3AnOlxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS10b3AnXVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHQnbGVmdCc6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHQncmlnaHQnOiAwLFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHRcdFx0XHRjYXNlICdib3R0b20nOlxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS1ib3R0b20nXVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXHJcblx0XHRcdFx0XHRcdFx0XHQnbGVmdCc6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHQncmlnaHQnOiAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0J2JvdHRvbSc6IDBcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRcdFx0Y2FzZSAnY2VudGVyJzpcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFuaSA9IFsnem9vbS1vdXQnLCAnZmFkZSddXHJcblx0XHRcdFx0XHRcdFx0dGhpcy50cmFuc0NsYXNzID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0J3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdFx0XHRcdFx0XHRcdCdkaXNwbGF5JzogJ2ZsZXgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0J2ZsZXhEaXJlY3Rpb24nOiAnY29sdW1uJyxcclxuXHRcdFx0XHRcdFx0XHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0J2JvdHRvbSc6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHQnbGVmdCc6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHQncmlnaHQnOiAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0J3RvcCc6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHQnanVzdGlmeUNvbnRlbnQnOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdCdhbGlnbkl0ZW1zJzogJ2NlbnRlcidcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdGlmICh0aGlzLmFuaW1hdGlvbikge1xyXG5cdFx0XHRcdHRoaXMuZHVyYXRpb24gPSAzMDBcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmR1cmF0aW9uID0gMFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjbGVhcihlKSB7XHJcblx0XHRcdFx0Ly8gVE9ETyBudnVlIOWPlua2iOWGkuazoVxyXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcclxuXHRcdFx0fSxcclxuXHRcdFx0b3BlbigpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dQb3B1cCA9IHRydWVcclxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lcilcclxuXHRcdFx0XHRcdHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zaG93VHJhbnMgPSB0cnVlXHJcblx0XHRcdFx0XHR9LCA1MCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XHJcblx0XHRcdFx0XHRzaG93OiB0cnVlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xvc2UodHlwZSkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd1RyYW5zID0gZmFsc2VcclxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lcilcclxuXHRcdFx0XHRcdHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xyXG5cdFx0XHRcdFx0XHRcdHNob3c6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gZmFsc2VcclxuXHRcdFx0XHRcdH0sIDMwMClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvblRhcCgpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMubWFza0NsaWNrKSByZXR1cm5cclxuXHRcdFx0XHR0aGlzLmNsb3NlKClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQudW5pLXBvcHVwIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdC8qICNpZmRlZiBINSAqL1xyXG5cdFx0dG9wOiB2YXIoLS13aW5kb3ctdG9wKTtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0LyogI2lmbmRlZiBINSAqL1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHR6LWluZGV4OiA5OTk7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcblxyXG5cdC51bmktcG9wdXBfX21hc2sge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHVuaS1iZy1jb2xvci1tYXNrO1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcblxyXG5cdC5tYXNrLWFuaSB7XHJcblx0XHR0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xyXG5cdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuXHR9XHJcblxyXG5cdC51bmktdG9wLW1hc2sge1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHR9XHJcblxyXG5cdC51bmktYm90dG9tLW1hc2sge1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHR9XHJcblxyXG5cdC51bmktY2VudGVyLW1hc2sge1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHR9XHJcblxyXG5cdC51bmktcG9wdXBfX3dyYXBwZXIge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR9XHJcblxyXG5cdC50b3Age1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MDBweCk7XHJcblx0fVxyXG5cclxuXHQuYm90dG9tIHtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MDBweCk7XHJcblx0fVxyXG5cclxuXHQuY2VudGVyIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdH1cclxuXHJcblx0LnVuaS1wb3B1cF9fd3JhcHBlci1ib3gge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblxyXG5cdC5jb250ZW50LWFuaSB7XHJcblx0XHQvLyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuXHRcdHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxuXHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcblx0fVxyXG5cclxuXHJcblx0LnVuaS10b3AtY29udGVudCB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcblx0fVxyXG5cclxuXHQudW5pLWJvdHRvbS1jb250ZW50IHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuXHR9XHJcblxyXG5cdC51bmktY2VudGVyLWNvbnRlbnQge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ }),

/***/ 24:
/*!***********************************************************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-popup/uni-popup.vue?vue&type=style&index=0&id=7da806a4&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7da806a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=style&index=0&id=7da806a4&lang=scss&scoped=true& */ 25);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7da806a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7da806a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7da806a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7da806a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7da806a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 25:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-popup/uni-popup.vue?vue&type=style&index=0&id=7da806a4&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-popup": {
    "position": "fixed",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0
  },
  "uni-popup__mask": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "rgba(0,0,0,0.4)",
    "opacity": 0
  },
  "@TRANSITION": {
    "mask-ani": {
      "property": "opacity",
      "duration": 200
    },
    "content-ani": {
      "property": "transform,opacity",
      "duration": 200
    }
  },
  "mask-ani": {
    "transitionProperty": "opacity",
    "transitionDuration": 200
  },
  "uni-top-mask": {
    "opacity": 1
  },
  "uni-bottom-mask": {
    "opacity": 1
  },
  "uni-center-mask": {
    "opacity": 1
  },
  "uni-popup__wrapper": {
    "position": "absolute"
  },
  "top": {
    "top": 0,
    "left": 0,
    "right": 0,
    "transform": "translateY(-500px)"
  },
  "bottom": {
    "bottom": 0,
    "left": 0,
    "right": 0,
    "transform": "translateY(500px)"
  },
  "center": {
    "bottom": 0,
    "left": 0,
    "right": 0,
    "top": 0,
    "justifyContent": "center",
    "alignItems": "center",
    "transform": "scale(1.2)",
    "opacity": 0
  },
  "uni-popup__wrapper-box": {
    "position": "relative"
  },
  "content-ani": {
    "transitionProperty": "transform,opacity",
    "transitionDuration": 200
  },
  "uni-top-content": {
    "transform": "translateY(0)"
  },
  "uni-bottom-content": {
    "transform": "translateY(0)"
  },
  "uni-center-content": {
    "transform": "scale(1)",
    "opacity": 1
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