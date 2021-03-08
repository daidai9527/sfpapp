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
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
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

/***/ 26:
/*!*********************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-load-more/uni-load-more.vue ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_load_more_vue_vue_type_template_id_5f6e5104_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-load-more.vue?vue&type=template&id=5f6e5104&scoped=true& */ 27);\n/* harmony import */ var _uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-load-more.vue?vue&type=script&lang=js& */ 29);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-load-more.vue?vue&type=style&index=0&id=5f6e5104&lang=scss&scoped=true& */ 31).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-load-more.vue?vue&type=style&index=0&id=5f6e5104&lang=scss&scoped=true& */ 31).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_load_more_vue_vue_type_template_id_5f6e5104_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_load_more_vue_vue_type_template_id_5f6e5104_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"5f6e5104\",\n  \"21e109ec\",\n  false,\n  _uni_load_more_vue_vue_type_template_id_5f6e5104_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/uni-load-more/uni-load-more.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0k7QUFDdEk7QUFDaUU7QUFDTDtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHVGQUErRTtBQUNuSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsdUZBQStFO0FBQ3hJOztBQUVBOztBQUVBO0FBQ2tOO0FBQ2xOLGdCQUFnQiwyTUFBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSxvR0FBTTtBQUNSLEVBQUUsNkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLWxvYWQtbW9yZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWY2ZTUxMDQmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktbG9hZC1tb3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLWxvYWQtbW9yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktbG9hZC1tb3JlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmNmU1MTA0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLWxvYWQtbW9yZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZjZlNTEwNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi/ngavni5DkuIvovb0vSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjVmNmU1MTA0XCIsXG4gIFwiMjFlMTA5ZWNcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy91bmktbG9hZC1tb3JlL3VuaS1sb2FkLW1vcmUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26\n");

/***/ }),

/***/ 27:
/*!****************************************************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-load-more/uni-load-more.vue?vue&type=template&id=5f6e5104&scoped=true& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_template_id_5f6e5104_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-load-more.vue?vue&type=template&id=5f6e5104&scoped=true& */ 28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_template_id_5f6e5104_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_template_id_5f6e5104_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_template_id_5f6e5104_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_template_id_5f6e5104_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 28:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-load-more/uni-load-more.vue?vue&type=template&id=5f6e5104&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "view",
    { staticClass: ["uni-load-more"], on: { click: _vm.onClick } },
    [
      !_vm.webviewHide && _vm.status === "loading" && _vm.showIcon
        ? _c("loading-indicator", {
            staticClass: ["uni-load-more__img", "uni-load-more__img--nvue"],
            style: {
              color: _vm.color,
              width: _vm.iconSize + "px",
              height: _vm.iconSize + "px"
            },
            attrs: { animating: true }
          })
        : _vm._e(),
      _c(
        "u-text",
        { staticClass: ["uni-load-more__text"], style: { color: _vm.color } },
        [
          _vm._v(
            _vm._s(
              _vm.status === "more"
                ? _vm.contentText.contentdown
                : _vm.status === "loading"
                ? _vm.contentText.contentrefresh
                : _vm.contentText.contentnomore
            )
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 29:
/*!**********************************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-load-more/uni-load-more.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-load-more.vue?vue&type=script&lang=js& */ 30);\n/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlqQixDQUFnQiwyaUJBQUcsRUFBQyIsImZpbGUiOiIyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4v54Gr54uQ5LiL6L29L0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+eBq+eLkOS4i+i9vS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+eBq+eLkOS4i+i9vS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktbG9hZC1tb3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi/ngavni5DkuIvovb0vSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4v54Gr54uQ5LiL6L29L0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4v54Gr54uQ5LiL6L29L0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1sb2FkLW1vcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///29\n");

/***/ }),

/***/ 3:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/App.vue?vue&type=style&index=0&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ 30:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-load-more/uni-load-more.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar platform = uni.getSystemInfoSync().platform;\n\n/**\n                                                  * LoadMore 加載更多\n                                                  * @description 用于列表中，做滚动加载使用，展示 loading 的各种状态\n                                                  * @tutorial https://ext.dcloud.net.cn/plugin?id=29\n                                                  * @property {String} status = [more|loading|noMore] loading 的状态\n                                                  * \t@value more loading前\n                                                  * \t@value loading loading中\n                                                  * \t@value noMore 沒有更多了\n                                                  * @property {Number} iconSize 指定图标大小\n                                                  * @property {Boolean} iconSize = [true|false] 是否显示 loading 图标\n                                                  * @property {String} iconType = [snow|circle|auto] 指定图标样式\n                                                  * \t@value snow ios雪花加载样式\n                                                  * \t@value circle 安卓唤醒加载样式\n                                                  * \t@value auto 根据平台自动选择加载样式\n                                                  * @property {String} color 图标和文字颜色\n                                                  * @property {Object} contentText 各状态文字说明，值为：{contentdown: \"上拉显示更多\",contentrefresh: \"正在加载...\",contentnomore: \"没有更多数据了\"}\n                                                  * @event {Function} clickLoadMore 点击加載更多时触发\n                                                  */var _default2 =\n{\n  name: 'UniLoadMore',\n  props: {\n    status: {\n      // 上拉的状态：more-loading前；loading-loading中；noMore-沒有更多了\n      type: String,\n      default: 'more' },\n\n    showIcon: {\n      type: Boolean,\n      default: true },\n\n    iconType: {\n      type: String,\n      default: 'auto' },\n\n    iconSize: {\n      type: Number,\n      default: 24 },\n\n    color: {\n      type: String,\n      default: '#777777' },\n\n    contentText: {\n      type: Object,\n      default: function _default() {\n        return {\n          contentdown: '上拉显示更多',\n          contentrefresh: '正在加载...',\n          contentnomore: '没有更多数据了' };\n\n      } } },\n\n\n  data: function data() {\n    return {\n      webviewHide: false,\n      platform: platform };\n\n  },\n\n\n\n\n\n\n\n\n  mounted: function mounted() {var _this = this;\n\n    var pages = getCurrentPages();\n    var page = pages[pages.length - 1];\n    var currentWebview = page.$getAppWebview();\n    currentWebview.addEventListener('hide', function () {\n      _this.webviewHide = true;\n    });\n    currentWebview.addEventListener('show', function () {\n      _this.webviewHide = false;\n    });\n\n  },\n  methods: {\n    onClick: function onClick() {\n      this.$emit('clickLoadMore', {\n        detail: {\n          status: this.status } });\n\n\n    } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktbG9hZC1tb3JlL3VuaS1sb2FkLW1vcmUudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0EscUJBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFGQTtBQUdBLHFCQUhBLEVBREE7O0FBTUE7QUFDQSxtQkFEQTtBQUVBLG1CQUZBLEVBTkE7O0FBVUE7QUFDQSxrQkFEQTtBQUVBLHFCQUZBLEVBVkE7O0FBY0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBZEE7O0FBa0JBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQWxCQTs7QUFzQkE7QUFDQSxrQkFEQTtBQUVBLGFBRkEsc0JBRUE7QUFDQTtBQUNBLCtCQURBO0FBRUEsbUNBRkE7QUFHQSxrQ0FIQTs7QUFLQSxPQVJBLEVBdEJBLEVBRkE7OztBQW1DQSxNQW5DQSxrQkFtQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsd0JBRkE7O0FBSUEsR0F4Q0E7Ozs7Ozs7OztBQWlEQSxTQWpEQSxxQkFpREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQTtBQUNBO0FBQ0EsS0FGQTs7QUFJQSxHQTdEQTtBQThEQTtBQUNBLFdBREEscUJBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBREEsRUFEQTs7O0FBS0EsS0FQQSxFQTlEQSxFIiwiZmlsZSI6IjMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwidW5pLWxvYWQtbW9yZVwiIEBjbGljaz1cIm9uQ2xpY2tcIj5cclxuXHRcdDwhLS0gI2lmZGVmIEFQUC1OVlVFIC0tPlxyXG5cdFx0PGxvYWRpbmctaW5kaWNhdG9yIHYtaWY9XCIhd2Vidmlld0hpZGUgJiYgc3RhdHVzID09PSAnbG9hZGluZycgJiYgc2hvd0ljb25cIiA6c3R5bGU9XCJ7Y29sb3I6IGNvbG9yLHdpZHRoOmljb25TaXplKydweCcsaGVpZ2h0Omljb25TaXplKydweCd9XCIgOmFuaW1hdGluZz1cInRydWVcIiBjbGFzcz1cInVuaS1sb2FkLW1vcmVfX2ltZyB1bmktbG9hZC1tb3JlX19pbWctLW52dWVcIj48L2xvYWRpbmctaW5kaWNhdG9yPlxyXG5cdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHQ8IS0tICNpZmRlZiBINSAtLT5cclxuXHRcdDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjI1IDI1IDUwIDUwXCIgdi1pZj1cIiF3ZWJ2aWV3SGlkZSAmJiAoaWNvblR5cGU9PT0nY2lyY2xlJyB8fCBpY29uVHlwZT09PSdhdXRvJyAmJiBwbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKSAmJiBzdGF0dXMgPT09ICdsb2FkaW5nJyAmJiBzaG93SWNvblwiXHJcblx0XHQ6c3R5bGU9XCJ7d2lkdGg6aWNvblNpemUrJ3B4JyxoZWlnaHQ6aWNvblNpemUrJ3B4J31cIiBjbGFzcz1cInVuaS1sb2FkLW1vcmVfX2ltZyB1bmktbG9hZC1tb3JlX19pbWctLWFuZHJvaWQtSDVcIj5cclxuXHRcdFx0PGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCIyMFwiIGZpbGw9XCJub25lXCIgOnN0eWxlPVwie2NvbG9yOmNvbG9yfVwiIDpzdHJva2Utd2lkdGg9XCIzXCI+PC9jaXJjbGU+XHJcblx0XHQ8L3N2Zz5cclxuXHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0PCEtLSAjaWZuZGVmIEFQUC1OVlVFIHx8IEg1IC0tPlxyXG5cdFx0PHZpZXcgdi1pZj1cIiF3ZWJ2aWV3SGlkZSAmJiAoaWNvblR5cGU9PT0nY2lyY2xlJyB8fCBpY29uVHlwZT09PSdhdXRvJyAmJiBwbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKSAmJiBzdGF0dXMgPT09ICdsb2FkaW5nJyAmJiBzaG93SWNvblwiXHJcblx0XHQ6c3R5bGU9XCJ7d2lkdGg6aWNvblNpemUrJ3B4JyxoZWlnaHQ6aWNvblNpemUrJ3B4J31cIiBjbGFzcz1cInVuaS1sb2FkLW1vcmVfX2ltZyB1bmktbG9hZC1tb3JlX19pbWctLWFuZHJvaWQtTVBcIj5cclxuXHRcdFx0PHZpZXcgOnN0eWxlPVwie2JvcmRlclRvcENvbG9yOmNvbG9yLGJvcmRlclRvcFdpZHRoOmljb25TaXplLzEyfVwiPjwvdmlldz5cclxuXHRcdFx0PHZpZXcgOnN0eWxlPVwie2JvcmRlclRvcENvbG9yOmNvbG9yLGJvcmRlclRvcFdpZHRoOmljb25TaXplLzEyfVwiPjwvdmlldz5cclxuXHRcdFx0PHZpZXcgOnN0eWxlPVwie2JvcmRlclRvcENvbG9yOmNvbG9yLGJvcmRlclRvcFdpZHRoOmljb25TaXplLzEyfVwiPjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0PCEtLSAjaWZuZGVmIEFQUC1OVlVFIC0tPlxyXG5cdFx0PHZpZXcgdi1lbHNlLWlmPVwiIXdlYnZpZXdIaWRlICYmIHN0YXR1cyA9PT0gJ2xvYWRpbmcnICYmIHNob3dJY29uXCIgOnN0eWxlPVwie3dpZHRoOmljb25TaXplKydweCcsaGVpZ2h0Omljb25TaXplKydweCd9XCIgY2xhc3M9XCJ1bmktbG9hZC1tb3JlX19pbWcgdW5pLWxvYWQtbW9yZV9faW1nLS1pb3MtSDVcIj5cclxuXHRcdFx0PGltYWdlIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeUpwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVNeTFqTURFeElEWTJMakUwTlRZMk1Td2dNakF4TWk4d01pOHdOaTB4TkRvMU5qb3lOeUFnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5UTmlBb1YybHVaRzkzY3lraUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlF6bEJNelUzT1RsRU9VTTBNVEZGT1VJME5UWkRORVJCUVVSQlF6STRSa1VpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2UXpsQk16VTNPVUZFT1VNME1URkZPVUkwTlRaRE5FUkJRVVJCUXpJNFJrVWlQaUE4ZUcxd1RVMDZSR1Z5YVhabFpFWnliMjBnYzNSU1pXWTZhVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBET1VFek5UYzVOMFE1UXpReE1VVTVRalExTmtNMFJFRkJSRUZETWpoR1JTSWdjM1JTWldZNlpHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcERPVUV6TlRjNU9FUTVRelF4TVVVNVFqUTFOa00wUkVGQlJFRkRNamhHUlNJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1B0K0FMU3dBQUE2Q1NVUkJWSGphMUZzTGtGWlZIYjk4TE0rRjViSEw4a2hBMWlTZWl5UUJDUk0rWUdxS1VubkpURExHSTBCR1psS0RJVTJNTWdsVWlEQXBFWnZTc1puUXRCUkp0S3dRTktRTUZZZVJEUjEwV09MZDhsallYZGgrdjh2NWZSM09kKzc5N3QxZG5Pbk8vT2ZjZTc3eitKLy8rYi9QK1pxdFhiczJzSjlNSmhOVVYxY0hKMDZjQ0pvM2J4N0VQYzJhTmN2cHk3cFdyVm9GKy9mdkR5b3FLb0kyYmRvRTlmWDFGN1RqTjhhK0VYQm4vZmtmdnc5NDJUZit3WU1IZzltelp3Zmp4bzBMRGh3NEVQYTF4Mk1iRncvZk9HZlBuZzFxYTJ0emNDa0lMc0xEeWRxMmJSc3VucE9UTU03VEQvVy90WkRaaFBkZUtEK3lHeEhoZHUzYUJWMjdkZzNPbkRsek1WQU5NaGVMQU8zYnR3OEtDd3VEbXBvYVg1T3hiZ1VJTUVxN0s4SWNQbnc0S0NzckMvcjM3eDhjUDM3OC80Y0FYQUIzdnFTa0pNdWlEaFRrdytYY3VYTmhPV2JNbUtCbHk1WWhVVDh4QXJoeUZ2UDBCZndSc0F1d3hKWkpzbS9uenAyRFRwMDZoZS9PVStjWjY0SzZvMGVQQmtPSERnMkdEeDhlNmdFYko1US9OSE51QUpRMWhnQmVIVURsUjduVlRrWThyUUF2QWk0ejM0dlIvbVBzMUZvUnNhQ2dJSlRoSTBlT0JDMWF0RWlGR0dWKzVNaVJvUzQ1ZWZKa3FGakpGWFYxZFF1QTAxMm0yV2N3VHc5OGZ5NkNxQmRzYWlJTzRDU2NyR1BIanZrNG9kaGF2UHF1UnRGV1hFQzI1VmdrUkVLT0NoL3FEU3Erdm4zN2h0ekQvbVpUT21PYzVVN3pLekJQRWVkeWdXc2hjRHlXdnMzMGlnQWJVKzZveU1nSkJDRmh3UUUwZmNjeE42MEF5OWllYmJqb0RoMDZoTW93alF4VDRmWHExU3NrQXJtSFpwa0Fydml4cC9rV3pIZE1lQXJFeFNKRWFpWElqalJqUko0RGFBR1dwaWJMelhOM0ZtMXZBNXRlQmdoM2oxUnYzYnAxWWdLd1BkbWYycDl6Y3lOWVlnUEtNZlkwVDVmNW5OWWR3MTU4bko4UWF3VzRDTEt3aU9CU0VnTy9ob2syZUJ5ZFIrM2RZSCtQTHhBNUo4VnYwS0JCd2VuVHAwUDJKV0F4Nit5RkVCZnM4bE1ZK3kwU1dNQk5JOUU0VGhLaTU4VktUZzNGUVpTMVJRRjFjejI3ZUMwUUhNdSszRTBTa1Vvd2poVnQ1VmRhV2hwMDc5NDlaSHYyUWQxRWpEWE0yY2xhMU0wbmwzR3hBczNKOXlSRXp5VGRGVktWRk9hRTlxUkE4R00wV2ViUnVvOUpHWktBN012MlNlUy9aOCtlb1E5QkFyTWZGckxHbzZqdnhiaEhiSlpuS1gyUnp6MU83UWhKSjlDczJaTWFXSXlxL3poZGVxUE5mSW9IZDU4Y2xJUUQrSlNYbDRkS2x5SUF1QmRWWFp3RlZXS3NwU1NveEUrK2g4eDRrM3VDbkVoRTRJNUt3UmlGV0dPVTBRV0tpQ1lMYmRvUk1SS0F1MmtROXZrZkxVNmRPaFgwNk5FamxIK3lNUlpTaW5udXlXbllvc1Zjamk4Q0VBLzZDZzJKRitJSVVCcW5HS1VUQ053dHdCTjRmODlSaUsxUjk2REVnTzJvME5EbXRFZHZWRmRWVllWK1AzVUFQVUVzNkdGd1YzUEhtWGtENHZoNzRpREZKeXNWSS9NbGFRaHdLZUJOVExZWDVWdUE4VDQvZ1p4QTRNUkdGeERCNlI3T21ZUGZ5eWtHUkpieWllK1huR1luUUlDL2NvSDkrdlVMaVlyeHJrTDlaQTkrMHlrYUhJZkVwTTdnZThUaUoyQ3NIWXd5TWZhZkFGMXlDR0JIWUliQ1ZEakRqS3Q3QmVCNTFEK0xnUWE2T2tHN0lEWUVFdHZRN2xuWExLTHRMZEx1SkJwRTRnUFVYY1cyK1BrWndPZXgrNGNHRGh3WURCa3lSTDcvSEZjRXdVR1BvLzh1V1JVcFluZnhHSGNvOEhrZXdMSEx5WW1BYXdBUHVJRlp4aE9wRGZKUThnYlV2NDF5T1JBcHRNV0JOcjZvcU1oV2lyZDUrdStpSG1CYjJuaGpEVjdIV0JOUVRnSzh5MTFsNU5ldFd6YzVVTHNjQXRTajduYk5JMHNraFdlVVpDYzBXNG55SC9qTzRWejB1MUllWWhiazRBaXdNNnRqeElXQnlIc29aOXFjSUJQSmQveStEd1BmQkVTT21DYS9RRjNXaVpIdWNMbEVEcE54Y05obWhlRU9QZ2RRTng2L1ZaRlF6Rlo1VE4wOEFIWFF0MklpM0VkeUZ1VXNQdFRjR1BoVzVpTWlDTkVMdnorR2RuOWh1RzRIVUphVy93M2cwd3hWMFhhRzdhckcyV2VLaVVXWU00WTdHTzVlenNoVEFSYmJXR3cvRHZYa3BwL2l2VnZFMEpWb014TjRycEd6Sk1oRTVQbCt4bEFUc0RJcWlrUDlGOUQyejNoOW5Pa3NFVUZoSytxTzRyY1Brb2FsTVEvSHFKTEl5YjNGM0pkanJDY3cxeVo4am95SkxSNWdDbzU0ZXRsYWc3cUlvZU5oMU4xQlJZajNEVEZKMGVsb3R4UGxWemtHdVlBbUwwVlNKVkdBSkE0MWM0WjZBM0J6VExmbjBIWXdZS0VJNkNVQU16WkVXdkxzSWNRT28xQW1teXlNNzJuSEpDZllzb2dmbEdWNmpFazl2eVFaWFN1cTZ3NGMxNk5zR2NHWmJ3T1ByK0gxUmtPazJMRXpqTmVweFFraWhIU0NRNHluQVlOUngyek1LVjkyQ1FNV3FqOEowQlJFOEVTaHhSRk42WXJmQ1JoQzB4M3IvWm00SWJRQ2NtSm9WMGtNYW1sbGNjUjZGakhxVUM1RjJSL3dTMmRjeW1PbGZBS09TNEttelFiNWNwTkMyTUM3SmhWbjV3alhvSjQ0clloTGg4bjBlWE9Db3JKeGE3UE9qYlNsQ0dWY3pyMzQvUnNBbXJjdm85cyt3R3AzdHpWaG50eGlYaUo0bnZFWWI0RkprZjBPOEhvY0FlUG1MdkN4bkwwQU9ScmFWZWtKazZUWWpEYWJSVlhmUkUybENOMWg2WlFSTjErSW5VYnNDcEt3b0JaSGgwZE9ETjlKQkNVZmZJdFh4RWF2VFFrVXRuZlRWQXBsQ1dMM0pJU3oyOWg0TmpvdG51U3NRS0pDazhkRitrSlI2UkFSanJxRlZtZlBuajNaYks4Y0lKMG1zZDZqZ0hQR3RmVlRROFZMbWx2aDRtY3Q5c29iUm1QaWMwRHlEUVFueC9ObGZZVWd5ejU5K29TY3NIMzc5cEF3WEFCRDMyblRwb1VISVRvRVNlSTVtbmJFL1VxRGR5TGNhZkVCZjJNQ3FnQzdOd3hJYk1SRUpRMGc0RDRzZkp3bkQrQW1ScklJMDVjZk1XSkUrTDExNjliUXIrZmlwMDZkR3A0b0o4M2xtWWQ1d2ovRW1NYTRUYUhpdm80RWVDZ3VZWkJua0I1ZzJhV0E2OU9JRW5VSE9hR3lzaklZTUdCQU1HblNwT0RZc1dQWndDcEZtbTRsTnErNGdTTFFBN2pjWDhEd3RqRXlSQzh3amFiblhFeDlrZlduVEprU0prQW85MHhwSlZWK0ZtY1ZOZVlBRjV6V25nUzRDNE85MU1CeG1BdjhibExFcGJqSTVzejlNVGRBaGNna0NUMVJPOG1aa0FqZmlZcFRFdlN0QVM1M1V3MXZBaVVHZ1ozR3B1UUVZdm9pQnFsSWFuN2tTREhuVHdKUUZOaVB1MCs1VnhDVlloY1pJak5yZFhVRGRwK0VxNUFaM0drZzhRQXlWWlJaSWs0VGw0UUFiRjljWEp4TllaTUF0QW9rZ3M0QnJOeEVwQ3R0ZVhnN0REVE1ES1lOU3VRZEtzbkpCZWs3SHhld3Z4YW9zV3hMWVh0dytjSnAxODIxN3dxbDRhS0NmQk5vRXUwTzVWVStQaGN0SjBZZVhENEM2SlFweXJscFNMVG9qcEdHR041WXdOemlDaGRJWkxrNGx2TGNGSjlqTVgzUWRpSW1ZOWJtR1FVK1RSVUw1Q0hJVFRSbGdGOEQ5b3VEMU1mbUxvRVBsNXhva0l1bVoyY2ZnTXBIdDQ3SVc5TjY0SHNoN3dRWVlqeUl1Z1d1RjVmQ3FZbmNYUmQ1dlBNV3lpenp2aGkvMzIrbnZHMGRaYzl2UjZmWk91MG1kNWUrdUM0MDhGdktTSU9ad1hsR3Z4UHY5NWl6QTJWdHZnMXhLRldBUkkrdk1YNjZIVWhwUVFiNjQzdVcxYlNqdVRXeXcyU0J2RHJCdmpGaWMxZUdHbHo1ZXNxM2tvOXVTSWxCUnFQdUZjQ3Y4RjRXSWNOMTJuVmFCZDBTYVl3STZQRERJbVIxMUprcWdIY1BtUXNzanhJbjZiVXNoeWdERkpVVHhQTXBIaytqZmpQZ3VwZ2RuWVYyUi9nN3hTanRwYWg4UkpCZXdod2YwZ0dLNlhJOTJ1NHdYRkVVNDBhZko0RE40aDVMY0FkKzQwSEkzSmdKZWN1VDBjMDYyVzBpMmhRSlVUY3hhbjMvQ01XMVBGMks2YmJBK0RhejR4UnMxRDNCcjFDbTBPaWhLQ3Fpelc3OC9uWEFGL0c1VFhyRWNWemFOTUg2Q3lNc3dxc0FIcUR5RExFeW91OGx3T1huS0Y4RGpJNktqVjNLek1CaVhrREg4aWovSDIxNEo1QTU5NmVrclozRjB6WGxXZUw3K1A1ZVVyTm8zL1F3QzE1dXh0aHV6aWR5N0R6S1J3RURhQVZpaURnS2JUYno3Q0puem8wYk43cElmSWlpZDhTdVB3bjI1bzNRQ21wbnlqbFpreXhQUDhFb21DSnpyR2I3R0pNeDd0TnNxNE1UMnhNVVlhaUVyWk9sdVR6S3NuejNnd0NlQ1p5VlJaSmZZcGxORW9rRWp3clB0eGx4amVZQWsrRjFGNzRWQXpQeFFSTllZZHRwT1V2V3M4SjFzR2hCSk1Oc2I3aWdOOHBsSnMxZVNtTEloTEtFNHJ2YUNYMjdnT2hMcExPc0l6Sjdxbi9pK3daemN2U09aMjMvZHU4VFpqd1Y4ekhJWG9QNFIzaWZCeGlGejFkY1ZwYTNhUG50UEUrYzZUbUlXRTlFdGNNbUFjUGRXQWhZaEFYeGNMT1FpOUwxV2hEMVNjOHAxZDJvTDdYR2lSS3A4RjRBMmk4Sy9uZkkreS9nc1RESi9ZQy84K0FENVVoMDRLSGlHbCtjSUZQbkJERHJQTWp3UkdrTFh5eE80VkdiZlFXbkRIMnYwYlZXRTNDOVFPWGxlcGJnakVmSUpRSTZYREczejVhaEQ5Y3cycFM3OGlwQjg1d3lTY05UdnNWemx6emhMOC9qUnJubVZqZkZKSy9tM200bmo5dmJnUVRndVQ4WFpUanNtNjcyUjV1SktFYVFtQkkvYzU4Z3l1czhaRGFnTHBFVlNKQkl5SHA0am4rK3hxUFY3MU9nUWdKWUVXT3RaL2hheFJ0S21XT0J1OHhkQkxmdFdsdHNZODR6RTZXSUV5L2VJT1dMK0JhYXlNeCtLSHRMN0VBa3FkTkRMaUVYbUVNVUhuaWVkdEpxZzlIbVp0ZnZ0MjZ2TmkwQmRHM0Z0M2c4Wk9mN1BBdTU5VHh0eml2TE5JZWt5aSt3RDFpOEN1VWlEOUZYQWE4QysveFMzSlBtWm5vbXljN0grZmI0L1NlMGJrNDFGZWw2MjFyNGNnVnhicTkxVjRqVnF3QjdIVGUyTTdqZ0IrUVdIYXZaa0RSUG1aY0FTb1pFbUJ4Nmk3NWJHalBjTWRMNC9WS0dGQUdXWmtHelBHMFhBYmRMOUE4MUc1TE9tVW5DOWhIS0plTzdkY1VNamJsU2wxMjg2N0VsRlR0YUdsMjB4dnZMR1BkVnovOFRWdVU3eTB4MVBHN3Z0TmcyNG96OVVvL1o0MTIrK1ZGV0k3RmNvZzl0dTlMbTZndlJtSVB2OXgxeG1RQXU2UkRrWHRiT3RsR0VtcGdENU52bnljMGRjdjBFRTZjZmRpMUhtaE1mOXdERjNrM2d0UnZFZWRoeGpwZ2ZxUGI5UFU5aUVKSG55T1VBN2JRVVhoNmtxL0Q3bDJpVGpXdjdYT0Q1MzBCRHI4aklydXMrc3JYanQ0TXp1bUpNSHVUc0JhNjNZS0UxK1JSNWxCakVpa0NDbldLV2lIZHpPZ0tPK25SSUJBRjg4emEvSUZtSjNlTVpvdjRDWXhHQmFiY3BHTDhFWXgrU2VNWEplUndITnNWL2grdmR4ZXVoRXBOM1p5Tlk3OEdtMmZrbkp4VkdoeWppeFBpUXZWa056VDFlbEQ5UHkvYVRBTDY0SGI5dmNZbUM5emZkWGRUL0MxTGVHYmc0cm5CYUFpaERGSkgxMlc1dWxmTkNOZS94VHNQM2JwOGlrekpzNUJGKzVQTmZBUVlBUGFzZVRkc0VjYVlBQUFBQVNVVk9SSzVDWUlJPVwiXHJcblx0XHRcdFx0XHRcdCBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHQ8dGV4dCBjbGFzcz1cInVuaS1sb2FkLW1vcmVfX3RleHRcIiA6c3R5bGU9XCJ7Y29sb3I6IGNvbG9yfVwiPnt7IHN0YXR1cyA9PT0gJ21vcmUnID8gY29udGVudFRleHQuY29udGVudGRvd24gOiBzdGF0dXMgPT09ICdsb2FkaW5nJyA/IGNvbnRlbnRUZXh0LmNvbnRlbnRyZWZyZXNoIDogY29udGVudFRleHQuY29udGVudG5vbW9yZSB9fTwvdGV4dD5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGNvbnN0IHBsYXRmb3JtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm1cclxuXHJcblx0LyoqXHJcblx0ICogTG9hZE1vcmUg5Yqg6LyJ5pu05aSaXHJcblx0ICogQGRlc2NyaXB0aW9uIOeUqOS6juWIl+ihqOS4re+8jOWBmua7muWKqOWKoOi9veS9v+eUqO+8jOWxleekuiBsb2FkaW5nIOeahOWQhOenjeeKtuaAgVxyXG5cdCAqIEB0dXRvcmlhbCBodHRwczovL2V4dC5kY2xvdWQubmV0LmNuL3BsdWdpbj9pZD0yOVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzdGF0dXMgPSBbbW9yZXxsb2FkaW5nfG5vTW9yZV0gbG9hZGluZyDnmoTnirbmgIFcclxuXHQgKiBcdEB2YWx1ZSBtb3JlIGxvYWRpbmfliY1cclxuXHQgKiBcdEB2YWx1ZSBsb2FkaW5nIGxvYWRpbmfkuK1cclxuXHQgKiBcdEB2YWx1ZSBub01vcmUg5rKS5pyJ5pu05aSa5LqGXHJcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IGljb25TaXplIOaMh+WumuWbvuagh+Wkp+Wwj1xyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gaWNvblNpemUgPSBbdHJ1ZXxmYWxzZV0g5piv5ZCm5pi+56S6IGxvYWRpbmcg5Zu+5qCHXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGljb25UeXBlID0gW3Nub3d8Y2lyY2xlfGF1dG9dIOaMh+WumuWbvuagh+agt+W8j1xyXG5cdCAqIFx0QHZhbHVlIHNub3cgaW9z6Zuq6Iqx5Yqg6L295qC35byPXHJcblx0ICogXHRAdmFsdWUgY2lyY2xlIOWuieWNk+WUpOmGkuWKoOi9veagt+W8j1xyXG5cdCAqIFx0QHZhbHVlIGF1dG8g5qC55o2u5bmz5Y+w6Ieq5Yqo6YCJ5oup5Yqg6L295qC35byPXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGNvbG9yIOWbvuagh+WSjOaWh+Wtl+minOiJslxyXG5cdCAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBjb250ZW50VGV4dCDlkITnirbmgIHmloflrZfor7TmmI7vvIzlgLzkuLrvvJp7Y29udGVudGRvd246IFwi5LiK5ouJ5pi+56S65pu05aSaXCIsY29udGVudHJlZnJlc2g6IFwi5q2j5Zyo5Yqg6L29Li4uXCIsY29udGVudG5vbW9yZTogXCLmsqHmnInmm7TlpJrmlbDmja7kuoZcIn1cclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBjbGlja0xvYWRNb3JlIOeCueWHu+WKoOi8ieabtOWkmuaXtuinpuWPkVxyXG5cdCAqL1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdVbmlMb2FkTW9yZScsXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRzdGF0dXM6IHtcclxuXHRcdFx0XHQvLyDkuIrmi4nnmoTnirbmgIHvvJptb3JlLWxvYWRpbmfliY3vvJtsb2FkaW5nLWxvYWRpbmfkuK3vvJtub01vcmUt5rKS5pyJ5pu05aSa5LqGXHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICdtb3JlJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93SWNvbjoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpY29uVHlwZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnYXV0bydcclxuXHRcdFx0fSxcclxuXHRcdFx0aWNvblNpemU6IHtcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMjRcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29sb3I6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJyM3Nzc3NzcnXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbnRlbnRUZXh0OiB7XHJcblx0XHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHRcdGRlZmF1bHQgKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdFx0Y29udGVudGRvd246ICfkuIrmi4nmmL7npLrmm7TlpJonLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50cmVmcmVzaDogJ+ato+WcqOWKoOi9vS4uLicsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnRub21vcmU6ICfmsqHmnInmm7TlpJrmlbDmja7kuoYnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHdlYnZpZXdIaWRlOiBmYWxzZSxcclxuXHRcdFx0XHRwbGF0Zm9ybTogcGxhdGZvcm1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vICNpZm5kZWYgQVBQLU5WVUVcclxuXHRcdGNvbXB1dGVkOntcclxuXHRcdFx0aWNvblNub3dXaWR0aCgpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKChNYXRoLmZsb29yKHRoaXMuaWNvblNpemUvMjQpfHwxKSoyKTtcclxuXHRcdFx0XHRyZXR1cm4gKE1hdGguZmxvb3IodGhpcy5pY29uU2l6ZS8yNCl8fDEpKjJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vICNlbmRpZlxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG5cdFx0XHR2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG5cdFx0XHR2YXIgY3VycmVudFdlYnZpZXcgPSBwYWdlLiRnZXRBcHBXZWJ2aWV3KCk7XHJcblx0XHRcdGN1cnJlbnRXZWJ2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUnLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy53ZWJ2aWV3SGlkZSA9IHRydWVcclxuXHRcdFx0fSlcclxuXHRcdFx0Y3VycmVudFdlYnZpZXcuYWRkRXZlbnRMaXN0ZW5lcignc2hvdycsICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLndlYnZpZXdIaWRlID0gZmFsc2VcclxuXHRcdFx0fSlcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRvbkNsaWNrKCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrTG9hZE1vcmUnLCB7XHJcblx0XHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdFx0c3RhdHVzOiB0aGlzLnN0YXR1cyxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHRAaW1wb3J0ICdAL3VuaS5zY3NzJztcclxuXHJcblx0LnVuaS1sb2FkLW1vcmUge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC51bmktbG9hZC1tb3JlX190ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHR9XHJcblxyXG5cdC51bmktbG9hZC1tb3JlX19pbWcge1xyXG5cdFx0d2lkdGg6IDI0cHg7XHJcblx0XHRoZWlnaHQ6IDI0cHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHR9XHJcblxyXG5cdC51bmktbG9hZC1tb3JlX19pbWctLW52dWUge1xyXG5cdFx0Y29sb3I6ICM2NjY2NjY7XHJcblx0fVxyXG5cclxuXHQudW5pLWxvYWQtbW9yZV9faW1nLS1hbmRyb2lkLFxyXG5cdC51bmktbG9hZC1tb3JlX19pbWctLWlvcyB7XHJcblx0XHR3aWR0aDogMjRweDtcclxuXHRcdGhlaWdodDogMjRweDtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdH1cclxuXHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdC51bmktbG9hZC1tb3JlX19pbWctLWFuZHJvaWQge1xyXG5cdFx0YW5pbWF0aW9uOiBsb2FkaW5nLWlvcyAxcyAwcyBsaW5lYXIgaW5maW5pdGU7XHJcblx0fVxyXG5cclxuXHRAa2V5ZnJhbWVzIGxvYWRpbmctYW5kcm9pZCB7XHJcblx0XHQwJSB7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdDEwMCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnVuaS1sb2FkLW1vcmVfX2ltZy0taW9zLUg1IHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGFuaW1hdGlvbjogbG9hZGluZy1pb3MtSDUgMXMgMHMgc3RlcC1lbmQgaW5maW5pdGU7XHJcblx0fVxyXG5cclxuXHQudW5pLWxvYWQtbW9yZV9faW1nLS1pb3MtSDU+aW1hZ2Uge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdH1cclxuXHJcblx0QGtleWZyYW1lcyBsb2FkaW5nLWlvcy1INSB7XHJcblx0XHQwJSB7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdDglIHtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdDE2JSB7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuXHRcdH1cclxuXHJcblx0XHQyNCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcblx0XHR9XHJcblxyXG5cdFx0MzIlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuXHRcdH1cclxuXHJcblx0XHQ0MCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdDQ4JSB7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcblx0XHR9XHJcblxyXG5cdFx0NTYlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcclxuXHRcdH1cclxuXHJcblx0XHQ2NCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdDczJSB7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcblx0XHR9XHJcblxyXG5cdFx0ODIlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuXHRcdH1cclxuXHJcblx0XHQ5MSUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdDEwMCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcblxyXG5cdC8qICNpZmRlZiBINSAqL1xyXG5cdC51bmktbG9hZC1tb3JlX19pbWctLWFuZHJvaWQtSDUge1xyXG5cdFx0YW5pbWF0aW9uOiBsb2FkaW5nLWFuZHJvaWQtSDUtcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuXHRcdHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudW5pLWxvYWQtbW9yZV9faW1nLS1hbmRyb2lkLUg1PmNpcmNsZSB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRhbmltYXRpb246IGxvYWRpbmctYW5kcm9pZC1INS1kYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcblx0XHRzdHJva2U6IGN1cnJlbnRDb2xvcjtcclxuXHRcdHN0cm9rZS1saW5lY2FwOiByb3VuZDtcclxuXHR9XHJcblxyXG5cdEBrZXlmcmFtZXMgbG9hZGluZy1hbmRyb2lkLUg1LXJvdGF0ZSB7XHJcblx0XHQwJSB7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdDEwMCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0QGtleWZyYW1lcyBsb2FkaW5nLWFuZHJvaWQtSDUtZGFzaCB7XHJcblx0XHQwJSB7XHJcblx0XHRcdHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcclxuXHRcdFx0c3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0NTAlIHtcclxuXHRcdFx0c3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDtcclxuXHRcdFx0c3Ryb2tlLWRhc2hvZmZzZXQ6IC00MDtcclxuXHRcdH1cclxuXHJcblx0XHQxMDAlIHtcclxuXHRcdFx0c3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDtcclxuXHRcdFx0c3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiAjZW5kaWYgKi9cclxuXHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSB8fCBINSAqL1xyXG5cdC51bmktbG9hZC1tb3JlX19pbWctLWFuZHJvaWQtTVAge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDI0cHg7XHJcblx0XHRoZWlnaHQ6IDI0cHg7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHRcdGFuaW1hdGlvbjogbG9hZGluZy1pb3MgMXMgMHMgZWFzZSBpbmZpbml0ZTtcclxuXHR9XHJcblxyXG5cdC51bmktbG9hZC1tb3JlX19pbWctLWFuZHJvaWQtTVA+dmlldyB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcclxuXHRcdGJvcmRlci10b3A6IHNvbGlkIDJweCAjNzc3Nzc3O1xyXG5cdFx0dHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnVuaS1sb2FkLW1vcmVfX2ltZy0tYW5kcm9pZC1NUD52aWV3Om50aC1jaGlsZCgxKXtcclxuXHRcdGFuaW1hdGlvbjogbG9hZGluZy1hbmRyb2lkLU1QLTEgMXMgMHMgbGluZWFyIGluZmluaXRlO1xyXG5cdH1cclxuXHJcblx0LnVuaS1sb2FkLW1vcmVfX2ltZy0tYW5kcm9pZC1NUD52aWV3Om50aC1jaGlsZCgyKXtcclxuXHRcdGFuaW1hdGlvbjogbG9hZGluZy1hbmRyb2lkLU1QLTIgMXMgMHMgbGluZWFyIGluZmluaXRlO1xyXG5cdH1cclxuXHJcblx0LnVuaS1sb2FkLW1vcmVfX2ltZy0tYW5kcm9pZC1NUD52aWV3Om50aC1jaGlsZCgzKXtcclxuXHRcdGFuaW1hdGlvbjogbG9hZGluZy1hbmRyb2lkLU1QLTMgMXMgMHMgbGluZWFyIGluZmluaXRlO1xyXG5cdH1cclxuXHJcblx0QGtleWZyYW1lcyBsb2FkaW5nLWFuZHJvaWQge1xyXG5cdFx0MCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHRcdH1cclxuXHJcblx0XHQxMDAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdEBrZXlmcmFtZXMgbG9hZGluZy1hbmRyb2lkLU1QLTF7XHJcblx0XHQwJXtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0XHR9XHJcblx0XHQ1MCV7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuXHRcdH1cclxuXHRcdDEwMCV7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdEBrZXlmcmFtZXMgbG9hZGluZy1hbmRyb2lkLU1QLTJ7XHJcblx0XHQwJXtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0XHR9XHJcblx0XHQ1MCV7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcblx0XHR9XHJcblx0XHQxMDAle1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRAa2V5ZnJhbWVzIGxvYWRpbmctYW5kcm9pZC1NUC0ze1xyXG5cdFx0MCV7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdFx0fVxyXG5cdFx0NTAle1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG5cdFx0fVxyXG5cdFx0MTAwJXtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuXHRcdH1cclxuXHR9XHJcblx0LyogI2VuZGlmICovXHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///30\n");

/***/ }),

/***/ 31:
/*!*******************************************************************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-load-more/uni-load-more.vue?vue&type=style&index=0&id=5f6e5104&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_style_index_0_id_5f6e5104_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-load-more.vue?vue&type=style&index=0&id=5f6e5104&lang=scss&scoped=true& */ 32);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_style_index_0_id_5f6e5104_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_style_index_0_id_5f6e5104_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_style_index_0_id_5f6e5104_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_style_index_0_id_5f6e5104_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_load_more_vue_vue_type_style_index_0_id_5f6e5104_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 32:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/components/uni-load-more/uni-load-more.vue?vue&type=style&index=0&id=5f6e5104&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-load-more": {
    "flexDirection": "row",
    "height": "40",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "uni-load-more__text": {
    "fontSize": "15"
  },
  "uni-load-more__img": {
    "width": "24",
    "height": "24",
    "marginRight": "8"
  },
  "uni-load-more__img--nvue": {
    "color": "#666666"
  },
  "uni-load-more__img--android": {
    "width": "24",
    "height": "24",
    "transform": "rotate(0deg)"
  },
  "uni-load-more__img--ios": {
    "width": "24",
    "height": "24",
    "transform": "rotate(0deg)"
  }
}

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

/***/ }),

/***/ 92:
/*!***********************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/main.js?{"page":"pages%2Findex%2Fvideoinfo"} ***!
  \***********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_index_videoinfo_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/index/videoinfo.nvue?mpType=page */ 93);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_index_videoinfo_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_index_videoinfo_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/index/videoinfo'\n        _pages_index_videoinfo_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_index_videoinfo_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsK0VBQUc7QUFDWCxRQUFRLCtFQUFHO0FBQ1gsUUFBUSwrRUFBRztBQUNYLGdCQUFnQiwrRUFBRyIsImZpbGUiOiI5Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvaW5kZXgvdmlkZW9pbmZvLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcbiAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvaW5kZXgvdmlkZW9pbmZvJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///92\n");

/***/ }),

/***/ 93:
/*!*****************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/index/videoinfo.nvue?mpType=page ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _videoinfo_nvue_vue_type_template_id_203d930b_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoinfo.nvue?vue&type=template&id=203d930b&mpType=page */ 94);\n/* harmony import */ var _videoinfo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoinfo.nvue?vue&type=script&lang=js&mpType=page */ 96);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _videoinfo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _videoinfo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./videoinfo.nvue?vue&type=style&index=0&lang=css&mpType=page */ 98).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./videoinfo.nvue?vue&type=style&index=0&lang=css&mpType=page */ 98).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _videoinfo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _videoinfo_nvue_vue_type_template_id_203d930b_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _videoinfo_nvue_vue_type_template_id_203d930b_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"09d1f185\",\n  false,\n  _videoinfo_nvue_vue_type_template_id_203d930b_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/videoinfo.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDeUU7QUFDTDtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHNFQUE4RDtBQUNsSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsc0VBQThEO0FBQ3ZIOztBQUVBOztBQUVBO0FBQ2tOO0FBQ2xOLGdCQUFnQiwyTUFBVTtBQUMxQixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI5My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdmlkZW9pbmZvLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjAzZDkzMGImbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3ZpZGVvaW5mby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZGVvaW5mby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi92aWRlb2luZm8ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3ZpZGVvaW5mby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+eBq+eLkOS4i+i9vS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMDlkMWYxODVcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvdmlkZW9pbmZvLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///93\n");

/***/ }),

/***/ 94:
/*!***********************************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/index/videoinfo.nvue?vue&type=template&id=203d930b&mpType=page ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoinfo_nvue_vue_type_template_id_203d930b_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoinfo.nvue?vue&type=template&id=203d930b&mpType=page */ 95);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoinfo_nvue_vue_type_template_id_203d930b_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoinfo_nvue_vue_type_template_id_203d930b_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoinfo_nvue_vue_type_template_id_203d930b_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoinfo_nvue_vue_type_template_id_203d930b_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 95:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/index/videoinfo.nvue?vue&type=template&id=203d930b&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uniLoadMore: __webpack_require__(/*! @/components/uni-load-more/uni-load-more.vue */ 26).default
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
        "div",
        [
          _c("view", {
            staticClass: ["status-bar"],
            style: { height: _vm.statusheight + "px" }
          }),
          _c(
            "view",
            {
              staticClass: ["nav-bar"],
              style: { top: _vm.statusheight + "px" }
            },
            [
              _c("u-image", {
                staticClass: ["nav-bar-img"],
                attrs: {
                  src: "../../static/images/108.png",
                  mode: "aspectFit"
                },
                on: { click: _vm.toback }
              }),
              _c("u-text", { staticClass: ["nav-bar-text"] }, [
                _vm._v("帖子詳情")
              ]),
              _c(
                "u-text",
                {
                  staticClass: ["nav-bar-guanzhu"],
                  on: { click: _vm.toguanzhu }
                },
                [_vm._v("關註")]
              )
            ],
            1
          ),
          _c("view", {
            staticClass: ["bg-bar"],
            style: { height: _vm.statusheight + 44 + "px" }
          }),
          _c("view", { staticClass: ["shequ-photo"] }, [
            _c("view", { staticClass: ["shequ-header"] }, [
              _c(
                "view",
                {
                  staticClass: ["shequ-header-left"],
                  on: { click: _vm.touserinfo }
                },
                [
                  _c(
                    "view",
                    { staticClass: ["header-user"] },
                    [
                      _c("u-image", {
                        staticClass: ["header-user-image"],
                        attrs: {
                          mode: "aspectFill",
                          autoBitmapRecycle: false,
                          src: _vm.items.avatar_text,
                          placeholder: "/static/images/51.png"
                        }
                      }),
                      _c("u-image", {
                        staticClass: ["user-image-vip"],
                        attrs: { src: "/static/images/56.png" }
                      })
                    ],
                    1
                  ),
                  _c("view", { staticClass: ["header-userinfo"] }, [
                    _c(
                      "view",
                      { staticClass: ["userinfo"] },
                      [
                        _c("u-text", { staticClass: ["user-name"] }, [
                          _vm._v(_vm._s(_vm.items.name))
                        ]),
                        _c("u-image", {
                          staticClass: ["user-vip"],
                          attrs: { src: "/static/images/52.png" }
                        })
                      ],
                      1
                    )
                  ])
                ]
              ),
              _c("view", { staticClass: ["shequ-header-right"] }, [
                _c("u-text", { staticClass: ["shequ-header-right1"] }, [
                  _vm._v("啪啪學院")
                ]),
                _c("u-text", { staticClass: ["shequ-header-right2"] }, [
                  _vm._v("@")
                ])
              ])
            ]),
            _c("view", { staticClass: ["item-text"] }, [
              _c("u-text", { staticClass: ["item-text-content"] }, [
                _vm._v(_vm._s(_vm.items.title))
              ])
            ]),
            _c(
              "view",
              { staticClass: ["myvideo"] },
              [
                _c("xk-video", {
                  ref: "video",
                  staticStyle: { width: "750rpx", height: "500rpx" },
                  attrs: { autoPlay: false, srcList: _vm.srcList }
                }),
                _c("u-image", {
                  staticClass: ["shuiyin"],
                  attrs: { src: "/static/images/139.png", mode: "aspectFit" }
                }),
                _vm.isshow
                  ? _c("u-image", {
                      staticClass: ["fengmian"],
                      attrs: { src: _vm.items.video_text, mode: "aspectFit" },
                      on: { click: _vm.playvideo }
                    })
                  : _vm._e(),
                _vm.isshow
                  ? _c("u-image", {
                      staticClass: ["play-img"],
                      attrs: { src: "/static/images/31.png" },
                      on: { click: _vm.playvideo }
                    })
                  : _vm._e(),
                _vm.bofangok
                  ? _c("view", { staticClass: ["no-play"] }, [
                      _c("u-text", { staticClass: ["no-play-text"] }, [
                        _vm._v("免費觀看已用完")
                      ]),
                      _c("u-text", { staticClass: ["no-play-text"] }, [
                        _vm._v("推送1人即送VIP，可無限疊加")
                      ]),
                      _c("u-text", { staticClass: ["no-play-text"] }, [
                        _vm._v("開通會員享有更多優惠")
                      ]),
                      _c("view", { staticClass: ["no-play-butt"] }, [
                        _c(
                          "u-text",
                          {
                            staticClass: ["no-play-butt1"],
                            on: { click: _vm.totuisong }
                          },
                          [_vm._v("去推送")]
                        ),
                        _c(
                          "u-text",
                          {
                            staticClass: ["no-play-butt1"],
                            on: { click: _vm.tovip }
                          },
                          [_vm._v("開通會員")]
                        )
                      ])
                    ])
                  : _vm._e()
              ],
              1
            ),
            _c("view", { staticClass: ["wenzhang-down"] }, [
              _c("u-text", { staticClass: ["wenzhang-down-left"] }, [
                _vm._v("2小時以前·" + _vm._s(_vm.items.browse) + "次觀看")
              ]),
              _c(
                "view",
                { staticClass: ["wenzhang-down-right"] },
                [
                  _vm.items.give
                    ? _c("u-image", {
                        staticClass: ["wenzhang-dianzan"],
                        attrs: { src: "/static/images/121.png" },
                        on: { click: _vm.dianzan }
                      })
                    : _c("u-image", {
                        staticClass: ["wenzhang-dianzan"],
                        attrs: { src: "/static/images/125.png" },
                        on: { click: _vm.dianzan }
                      }),
                  _c("u-text", { staticClass: ["wenzhang-dianzan-count"] }, [
                    _vm._v(_vm._s(_vm.items.fabulous))
                  ]),
                  _c("u-image", {
                    staticClass: ["wenzhang-dianzan"],
                    attrs: { src: "/static/images/68.png" }
                  }),
                  _c("u-text", { staticClass: ["wenzhang-dianzan-count"] }, [
                    _vm._v(_vm._s(_vm.items.comment))
                  ])
                ],
                1
              )
            ]),
            _c("view", { staticClass: ["fengexian"] })
          ]),
          _vm._l(_vm.gglist, function(item, index) {
            return _c(
              "view",
              {
                key: index,
                staticClass: ["guanggao"],
                on: {
                  click: function($event) {
                    _vm.openurl(item)
                  }
                }
              },
              [
                _c("u-image", {
                  staticClass: ["guanggap-img"],
                  attrs: { src: item.image_text }
                }),
                _c("u-text", { staticClass: ["guanggao-text"] }, [
                  _vm._v("廣告")
                ])
              ],
              1
            )
          }),
          _c("view", { staticClass: ["pinglun-title"] }, [
            _c("u-text", { staticClass: ["pinglun-title"] }, [_vm._v("評論")])
          ]),
          _vm._l(_vm.pinglunlist, function(item, index) {
            return _c(
              "view",
              { key: index + "1", staticClass: ["pinglun-item"] },
              [
                _c("u-image", {
                  staticClass: ["pinglun-item-header"],
                  attrs: { src: item.avator_image }
                }),
                _c("view", { staticClass: ["pinglun-item-center"] }, [
                  _c(
                    "view",
                    { staticClass: ["item-center-top"] },
                    [
                      _c("u-text", { staticClass: ["item-center-name"] }, [
                        _vm._v(_vm._s(item.name))
                      ]),
                      item.level == 0
                        ? _c("u-image", {
                            staticClass: ["item-center-img2"],
                            attrs: {
                              mode: "aspectFit",
                              src: "/static/images/142.png"
                            }
                          })
                        : _vm._e(),
                      item.level == 1
                        ? _c("u-image", {
                            staticClass: ["item-center-img2"],
                            attrs: {
                              mode: "aspectFit",
                              src: "/static/images/143.png"
                            }
                          })
                        : _vm._e(),
                      item.level == 2
                        ? _c("u-image", {
                            staticClass: ["item-center-img2"],
                            attrs: {
                              mode: "aspectFit",
                              src: "/static/images/141.png"
                            }
                          })
                        : _vm._e(),
                      _c("u-image", {
                        staticClass: ["item-center-img1"],
                        attrs: { src: "../../static/images/54.png" }
                      })
                    ],
                    1
                  ),
                  _c("u-text", { staticClass: ["item-center-text"] }, [
                    _vm._v(_vm._s(item.content))
                  ])
                ]),
                _c("view", { staticClass: ["pinglun-item-dianzan"] })
              ],
              1
            )
          }),
          _vm.pinglunlist.length > 9
            ? _c("uni-load-more", { attrs: { status: _vm.more } })
            : _vm._e(),
          _c("view", { staticClass: ["down-bg"] }),
          _c(
            "view",
            { staticClass: ["input-bar"] },
            [
              _c("u-input", {
                staticClass: ["input-text"],
                attrs: {
                  type: "text",
                  placeholder: "嚴禁留言添加聯系方式，请发送私信",
                  value: _vm.pingluntext
                },
                on: {
                  input: function($event) {
                    _vm.pingluntext = $event.detail.value
                  }
                }
              }),
              _c(
                "u-text",
                { staticClass: ["input-send"], on: { click: _vm.topinglun } },
                [_vm._v("發送")]
              )
            ],
            1
          )
        ],
        2
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 96:
/*!*****************************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/index/videoinfo.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoinfo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoinfo.nvue?vue&type=script&lang=js&mpType=page */ 97);\n/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoinfo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoinfo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoinfo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoinfo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoinfo_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlrQixDQUFnQixtakJBQUcsRUFBQyIsImZpbGUiOiI5Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4v54Gr54uQ5LiL6L29L0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+eBq+eLkOS4i+i9vS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+eBq+eLkOS4i+i9vS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlb2luZm8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL+eBq+eLkOS4i+i9vS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi/ngavni5DkuIvovb0vSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi/ngavni5DkuIvovb0vSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW9pbmZvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///96\n");

/***/ }),

/***/ 97:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/index/videoinfo.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      myvideo: null,\n      isshow: true,\n      id: '',\n      items: [],\n      url: getApp().globalData.url,\n      header: getApp().globalData.header,\n      gglist: [],\n      pinglunlist: [],\n      more: 'more',\n      page: 1,\n      pingluntext: '',\n      srcList: [{\n        name: '標清',\n        url: '' }],\n\n      openurls: getApp().globalData.openurl,\n      bofangok: false };\n\n  },\n  onReachBottom: function onReachBottom() {\n    this.page++;\n    this.more = 'loading';\n    this.getpinglun();\n  },\n  onLoad: function onLoad(option) {\n    this.statusheight = uni.getSystemInfoSync().statusBarHeight;\n    this.id = option.id;\n    this.setll();\n  },\n  onHide: function onHide() {\n\n    this.$refs.video.pause();\n\n  },\n  methods: {\n    setll: function setll() {var _this = this;\n      uni.request({\n        url: this.url + '/api/comment/community_ll',\n        method: \"POST\",\n        data: {\n          id: this.id },\n\n        success: function success(res) {\n          __f__(\"log\", res, \" at pages/index/videoinfo.nvue:164\");\n          _this.getdata();\n        } });\n\n    },\n    tovip: function tovip() {\n      if (uni.getStorageSync(\"usertoken\")) {\n        uni.navigateTo({\n          url: \"/pages/mine/viphuiyuan\" });\n\n      } else {\n        uni.showToast({\n          icon: \"none\",\n          title: \"請登入\" });\n\n      }\n\n    },\n    totuisong: function totuisong() {\n      if (uni.getStorageSync(\"usertoken\")) {\n        uni.navigateTo({\n          url: \"/pages/mine/fenxiang\" });\n\n      } else {\n        uni.showToast({\n          icon: \"none\",\n          title: \"請登入\" });\n\n      }\n    },\n    openurl: function openurl(item) {\n      // console.log(item);\n      this.openurls(item.url);\n    },\n    dianzan: function dianzan() {var _this2 = this;\n      if (uni.getStorageSync(\"usertoken\")) {\n        this.$loading();\n        uni.request({\n          url: this.url + \"/api/community/thumbs\",\n          method: \"GET\",\n          header: {\n            token: uni.getStorageSync(\"usertoken\") },\n\n          data: {\n            id: this.items.id },\n\n          success: function success(res) {\n            uni.hideLoading();\n            if (res.data.code == 200) {\n              uni.showToast({\n                icon: \"none\",\n                title: \"點贊成功\" });\n\n              _this2.items.fabulous++;\n              _this2.items.give = 1;\n            } else {\n              uni.showToast({\n                icon: \"none\",\n                title: res.data.msg });\n\n            }\n          } });\n\n      } else {\n        uni.showToast({\n          icon: \"none\",\n          title: \"請登入\" });\n\n      }\n    },\n    topinglun: function topinglun() {var _this3 = this;\n      if (this.pingluntext == \"\") {\n        uni.showToast({\n          icon: \"none\",\n          title: \"請輸入評論 \" });\n\n        return false;\n      }\n      if (uni.getStorageSync(\"usertoken\")) {\n        uni.showLoading({\n          mask: true,\n          title: \"請稍後\" });\n\n        uni.request({\n          url: this.url + '/api/comment/addcomment',\n          method: \"POST\",\n          header: {\n            token: uni.getStorageSync(\"usertoken\") },\n\n          data: {\n            class: 2,\n            community_id: this.id,\n            content: this.pingluntext },\n\n          success: function success(res) {\n            uni.hideLoading();\n            uni.showToast({\n              icon: \"none\",\n              title: res.data.msg });\n\n            if (res.data.code == 200) {\n              _this3.pingluntext = \"\";\n            }\n            // console.log(res.data);\n          } });\n\n      } else {\n        uni.showToast({\n          icon: \"none\",\n          title: \"請登入\" });\n\n      }\n\n    },\n    toguanzhu: function toguanzhu() {\n      if (uni.getStorageSync(\"usertoken\")) {\n        uni.showLoading({\n          mask: true,\n          title: \"請稍後\" });\n\n        uni.request({\n          url: this.url + \"/api/community/follow\",\n          method: \"GET\",\n          header: {\n            token: uni.getStorageSync(\"usertoken\") },\n\n          data: {\n            id: this.items.user_id,\n            class: this.items.status },\n\n          success: function success(res) {\n            uni.hideLoading();\n            // console.log(res.data.data);\n            uni.showToast({\n              icon: \"none\",\n              title: res.data.msg });\n\n          } });\n\n      } else {\n        uni.showToast({\n          icon: \"none\",\n          title: \"請登入\" });\n\n      }\n    },\n    toback: function toback() {\n      uni.navigateBack();\n    },\n    getdata: function getdata() {var _this4 = this;\n      uni.showLoading({\n        mask: true,\n        title: \"請稍後\" });\n\n      var header;\n      if (uni.getStorageSync(\"usertoken\")) {\n        header = {\n          token: uni.getStorageSync(\"usertoken\") };\n\n      } else {\n        header = {};\n      }\n      uni.request({\n        url: this.url + '/api/community/xq_community',\n        method: \"GET\",\n        data: {\n          id: this.id },\n\n        header: header,\n        success: function success(res) {\n\n\n          if (res.data.code == 200) {\n            _this4.items = res.data.data;\n          }\n          // console.log(res.data);\n          _this4.guanggao();\n          _this4.getpinglun();\n        } });\n\n\n    },\n    getpinglun: function getpinglun() {var _this5 = this;\n      uni.request({\n        url: this.url + '/api/comment/community',\n        data: {\n          current: this.page,\n          every: 10,\n          id: this.id,\n          num: this.items.comment,\n          class: 2 },\n\n        success: function success(res) {\n          if (res.data.data.length > 0) {\n            _this5.pinglunlist = _this5.pinglunlist.concat(res.data.data);\n            _this5.more = 'more';\n          } else {\n            _this5.page--;\n            _this5.more = \"noMore\";\n          }\n          // console.log(res.data);\n        } });\n\n    },\n    guanggao: function guanggao() {var _this6 = this;\n      uni.request({\n        url: this.url + '/api/adv/adv',\n        data: {\n          class: 0,\n          limit: 999 },\n\n        success: function success(res) {\n          uni.hideLoading();\n          _this6.gglist = res.data.data;\n          __f__(\"log\", res.data, \" at pages/index/videoinfo.nvue:378\");\n        } });\n\n    },\n    playvideo: function playvideo() {var _this7 = this;\n\n      uni.showLoading({\n        mask: true,\n        title: \"請稍後\" });\n\n      if (uni.getStorageSync(\"usertoken\")) {\n        uni.request({\n          url: this.url + '/api/community/edit',\n          method: \"POST\",\n          data: {\n            class: 0 },\n\n          header: {\n            token: uni.getStorageSync(\"usertoken\") },\n\n          success: function success(res) {\n            uni.hideLoading();\n            if (res.data.code == 200) {\n              _this7.isshow = false;\n\n              _this7.$refs.video.seek(20000);\n              _this7.srcList[0].url = _this7.items.video;\n              _this7.$refs.video.setParams({\n                srcList: _this7.srcList,\n                title: _this7.items.title,\n                liveMode: false });\n\n\n\n\n\n            } else {\n              _this7.bofangok = true;\n            }\n          } });\n\n      } else {\n        uni.request({\n          url: this.url + '/api/yk/del',\n          method: \"POST\",\n          data: {\n            code: uni.getStorageSync(\"youkedata\").code,\n            class: 0 },\n\n          success: function success(res) {\n            uni.hideLoading();\n            if (res.data.code == 200) {\n              _this7.isshow = false;\n\n              _this7.$refs.video.seek(20000);\n              _this7.srcList[0].url = _this7.items.video;\n              _this7.$refs.video.setParams({\n                srcList: _this7.srcList,\n                title: _this7.items.title,\n                liveMode: false });\n\n\n\n\n\n            } else {\n              _this7.bofangok = true;\n            }\n          } });\n\n      }\n    },\n    touserinfo: function touserinfo(e) {\n      e.stopPropagation();\n      uni.navigateTo({\n        url: \"/pages/userinfo/userinfo?id=\" + this.items.id });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 35)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvdmlkZW9pbmZvLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUhBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxrQkFGQTtBQUdBLFlBSEE7QUFJQSxlQUpBO0FBS0Esa0NBTEE7QUFNQSx3Q0FOQTtBQU9BLGdCQVBBO0FBUUEscUJBUkE7QUFTQSxrQkFUQTtBQVVBLGFBVkE7QUFXQSxxQkFYQTtBQVlBO0FBQ0Esa0JBREE7QUFFQSxlQUZBLEdBWkE7O0FBZ0JBLDJDQWhCQTtBQWlCQSxxQkFqQkE7O0FBbUJBLEdBckJBO0FBc0JBLGVBdEJBLDJCQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBMUJBO0FBMkJBLFFBM0JBLGtCQTJCQSxNQTNCQSxFQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBL0JBO0FBZ0NBLFFBaENBLG9CQWdDQTs7QUFFQTs7QUFFQSxHQXBDQTtBQXFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBLG1EQURBO0FBRUEsc0JBRkE7QUFHQTtBQUNBLHFCQURBLEVBSEE7O0FBTUE7QUFDQTtBQUNBO0FBQ0EsU0FUQTs7QUFXQSxLQWJBO0FBY0EsU0FkQSxtQkFjQTtBQUNBO0FBQ0E7QUFDQSx1Q0FEQTs7QUFHQSxPQUpBLE1BSUE7QUFDQTtBQUNBLHNCQURBO0FBRUEsc0JBRkE7O0FBSUE7O0FBRUEsS0ExQkE7QUEyQkEsYUEzQkEsdUJBMkJBO0FBQ0E7QUFDQTtBQUNBLHFDQURBOztBQUdBLE9BSkEsTUFJQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSxzQkFGQTs7QUFJQTtBQUNBLEtBdENBO0FBdUNBLFdBdkNBLG1CQXVDQSxJQXZDQSxFQXVDQTtBQUNBO0FBQ0E7QUFDQSxLQTFDQTtBQTJDQSxXQTNDQSxxQkEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFEQTtBQUVBLHVCQUZBO0FBR0E7QUFDQSxrREFEQSxFQUhBOztBQU1BO0FBQ0EsNkJBREEsRUFOQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUEsNkJBRkE7O0FBSUE7QUFDQTtBQUNBLGFBUEEsTUFPQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxtQ0FGQTs7QUFJQTtBQUNBLFdBeEJBOztBQTBCQSxPQTVCQSxNQTRCQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSxzQkFGQTs7QUFJQTtBQUNBLEtBOUVBO0FBK0VBLGFBL0VBLHVCQStFQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLHlCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxzQkFGQTs7QUFJQTtBQUNBLG1EQURBO0FBRUEsd0JBRkE7QUFHQTtBQUNBLGtEQURBLEVBSEE7O0FBTUE7QUFDQSxvQkFEQTtBQUVBLGlDQUZBO0FBR0EscUNBSEEsRUFOQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLGlDQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FyQkE7O0FBdUJBLE9BNUJBLE1BNEJBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLHNCQUZBOztBQUlBOztBQUVBLEtBMUhBO0FBMkhBLGFBM0hBLHVCQTJIQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLHNCQUZBOztBQUlBO0FBQ0EsaURBREE7QUFFQSx1QkFGQTtBQUdBO0FBQ0Esa0RBREEsRUFIQTs7QUFNQTtBQUNBLGtDQURBO0FBRUEsb0NBRkEsRUFOQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEsaUNBRkE7O0FBSUEsV0FqQkE7O0FBbUJBLE9BeEJBLE1Bd0JBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLHNCQUZBOztBQUlBO0FBQ0EsS0ExSkE7QUEySkEsVUEzSkEsb0JBMkpBO0FBQ0E7QUFDQSxLQTdKQTtBQThKQSxXQTlKQSxxQkE4SkE7QUFDQTtBQUNBLGtCQURBO0FBRUEsb0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsZ0RBREE7O0FBR0EsT0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBREE7QUFFQSxxQkFGQTtBQUdBO0FBQ0EscUJBREEsRUFIQTs7QUFNQSxzQkFOQTtBQU9BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQWhCQTs7O0FBbUJBLEtBOUxBO0FBK0xBLGNBL0xBLHdCQStMQTtBQUNBO0FBQ0EsZ0RBREE7QUFFQTtBQUNBLDRCQURBO0FBRUEsbUJBRkE7QUFHQSxxQkFIQTtBQUlBLGlDQUpBO0FBS0Esa0JBTEEsRUFGQTs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FsQkE7O0FBb0JBLEtBcE5BO0FBcU5BLFlBck5BLHNCQXFOQTtBQUNBO0FBQ0Esc0NBREE7QUFFQTtBQUNBLGtCQURBO0FBRUEsb0JBRkEsRUFGQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBVkE7O0FBWUEsS0FsT0E7QUFtT0EsYUFuT0EsdUJBbU9BOztBQUVBO0FBQ0Esa0JBREE7QUFFQSxvQkFGQTs7QUFJQTtBQUNBO0FBQ0EsK0NBREE7QUFFQSx3QkFGQTtBQUdBO0FBQ0Esb0JBREEsRUFIQTs7QUFNQTtBQUNBLGtEQURBLEVBTkE7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBREE7QUFFQSx5Q0FGQTtBQUdBLCtCQUhBOzs7Ozs7QUFTQSxhQWRBLE1BY0E7QUFDQTtBQUNBO0FBQ0EsV0E1QkE7O0FBOEJBLE9BL0JBLE1BK0JBO0FBQ0E7QUFDQSx1Q0FEQTtBQUVBLHdCQUZBO0FBR0E7QUFDQSxzREFEQTtBQUVBLG9CQUZBLEVBSEE7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBREE7QUFFQSx5Q0FGQTtBQUdBLCtCQUhBOzs7Ozs7QUFTQSxhQWRBLE1BY0E7QUFDQTtBQUNBO0FBQ0EsV0ExQkE7O0FBNEJBO0FBQ0EsS0F0U0E7QUF1U0EsY0F2U0Esc0JBdVNBLENBdlNBLEVBdVNBO0FBQ0E7QUFDQTtBQUNBLDJEQURBOztBQUdBLEtBNVNBLEVBckNBLEUiLCJmaWxlIjoiOTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDx2aWV3IGNsYXNzPVwic3RhdHVzLWJhclwiIDpzdHlsZT1cIntoZWlnaHQ6c3RhdHVzaGVpZ2h0ICsgJ3B4J31cIj48L3ZpZXc+XHJcbiAgICA8dmlldyBjbGFzcz1cIm5hdi1iYXJcIiA6c3R5bGU9XCJ7dG9wOnN0YXR1c2hlaWdodCArICdweCd9XCI+XHJcbiAgICAgIDxpbWFnZSBjbGFzcz1cIm5hdi1iYXItaW1nXCIgQHRhcD1cInRvYmFja1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTA4LnBuZ1wiIG1vZGU9XCJhc3BlY3RGaXRcIj48L2ltYWdlPlxyXG4gICAgICA8dGV4dCBjbGFzcz1cIm5hdi1iYXItdGV4dFwiPuW4luWtkOips+aDhTwvdGV4dD5cclxuICAgICAgPHRleHQgY2xhc3M9XCJuYXYtYmFyLWd1YW56aHVcIiBAdGFwPVwidG9ndWFuemh1XCI+6Zec6Ki7PC90ZXh0PlxyXG4gICAgPC92aWV3PlxyXG4gICAgPHZpZXcgY2xhc3M9XCJiZy1iYXJcIiA6c3R5bGU9XCJ7aGVpZ2h0OnN0YXR1c2hlaWdodCArIDQ0ICsgJ3B4J31cIj48L3ZpZXc+XHJcbiAgICA8dmlldyBjbGFzcz1cInNoZXF1LXBob3RvXCI+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwic2hlcXUtaGVhZGVyXCI+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJzaGVxdS1oZWFkZXItbGVmdFwiIEB0YXAuc3RvcD1cInRvdXNlcmluZm9cIj5cclxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaGVhZGVyLXVzZXJcIj5cclxuICAgICAgICAgICAgPGltYWdlIG1vZGU9XCJhc3BlY3RGaWxsXCIgOmF1dG9CaXRtYXBSZWN5Y2xlPVwiZmFsc2VcIiBjbGFzcz1cImhlYWRlci11c2VyLWltYWdlXCIgOnNyYz1cIml0ZW1zLmF2YXRhcl90ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi9zdGF0aWMvaW1hZ2VzLzUxLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltYWdlcy81Ni5wbmdcIiBjbGFzcz1cInVzZXItaW1hZ2UtdmlwXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaGVhZGVyLXVzZXJpbmZvXCI+XHJcbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwidXNlcmluZm9cIj5cclxuICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInVzZXItbmFtZVwiPnt7aXRlbXMubmFtZX19PC90ZXh0PlxyXG4gICAgICAgICAgICAgIDwhLS0gPGltYWdlIGNsYXNzPVwidXNlci1uZXdcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy8xNi5wbmdcIj48L2ltYWdlPiAtLT5cclxuICAgICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJ1c2VyLXZpcFwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzLzUyLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgPCEtLSA8aW1hZ2UgY2xhc3M9XCJ1c2VyLW9sZFwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzLzYwLnBuZ1wiPjwvaW1hZ2U+IC0tPlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInNoZXF1LWhlYWRlci1yaWdodFwiPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJzaGVxdS1oZWFkZXItcmlnaHQxXCI+5ZWq5ZWq5a246ZmiPC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJzaGVxdS1oZWFkZXItcmlnaHQyXCI+QDwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPCEtLSA8aW1hZ2UgY2xhc3M9XCJzaGVxdS1oZWFkZXItcmlnaHRcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzQ2LnBuZ1wiPjwvaW1hZ2U+IC0tPlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwiaXRlbS10ZXh0XCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJpdGVtLXRleHQtY29udGVudFwiPnt7aXRlbXMudGl0bGV9fTwvdGV4dD5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cIm15dmlkZW9cIj5cclxuICAgICAgICA8IS0tICNpZmRlZiBINSAtLT5cclxuICAgICAgICA8dmlkZW8gOnNyYz1cIml0ZW1zLnZpZGVvXCIgOmluaXRpYWwtdGltZT1cIjFcIiA6Y29udHJvbHM9XCJ0cnVlXCIgOnNob3ctY2VudGVyLXBsYXktYnRuPVwiZmFsc2VcIiBjbGFzcz1cIm15dmlkZW8taXRlbVwiIGlkPVwibXl2aWRlb3NcIj48L3ZpZGVvPlxyXG4gICAgICAgIDwhLS0gI2VuZGlmIC0tPlxyXG4gICAgICAgIDwhLS0gI2lmZGVmIEFQUC1OVlVFIC0tPlxyXG4gICAgICAgIDx4ay12aWRlbyByZWY9XCJ2aWRlb1wiIHN0eWxlPVwid2lkdGg6NzUwcnB4O2hlaWdodDo1MDBycHhcIiA6YXV0b1BsYXk9XCJmYWxzZVwiIDpzcmNMaXN0PVwic3JjTGlzdFwiPjwveGstdmlkZW8+XHJcbiAgICAgICAgPCEtLSAjZW5kaWYgLS0+XG4gICAgICAgIDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltYWdlcy8xMzkucG5nXCIgbW9kZT1cImFzcGVjdEZpdFwiIGNsYXNzPVwic2h1aXlpblwiPjwvaW1hZ2U+XHJcbiAgICAgICAgPGltYWdlIHYtaWY9XCJpc3Nob3dcIiA6c3JjPVwiaXRlbXMudmlkZW9fdGV4dFwiIG1vZGU9XCJhc3BlY3RGaXRcIiBjbGFzcz1cImZlbmdtaWFuXCIgQHRhcD1cInBsYXl2aWRlb1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgPGltYWdlIHYtaWY9XCJpc3Nob3dcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy8zMS5wbmdcIiBjbGFzcz1cInBsYXktaW1nXCIgQHRhcD1cInBsYXl2aWRlb1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgPHZpZXcgdi1pZj1cImJvZmFuZ29rXCIgY2xhc3M9XCJuby1wbGF5XCI+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cIm5vLXBsYXktdGV4dFwiPuWFjeiyu+ingOeci+W3sueUqOWujDwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibm8tcGxheS10ZXh0XCI+5o6o6YCBMeS6uuWNs+mAgVZJUO+8jOWPr+eEoemZkOeWiuWKoDwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibm8tcGxheS10ZXh0XCI+6ZaL6YCa5pyD5ZOh5Lqr5pyJ5pu05aSa5YSq5oOgPC90ZXh0PlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJuby1wbGF5LWJ1dHRcIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJuby1wbGF5LWJ1dHQxXCIgQHRhcD1cInRvdHVpc29uZ1wiPuWOu+aOqOmAgTwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJuby1wbGF5LWJ1dHQxXCIgQHRhcD1cInRvdmlwXCI+6ZaL6YCa5pyD5ZOhPC90ZXh0PlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cIndlbnpoYW5nLWRvd25cIj5cbiAgICAgICAgPCEtLSA8dmlldyBjbGFzcz1cIndlbnpoYW5nLWRvd24tbGVmdFwiPlxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cIndlbnpoYW5nLWRpYW56YW5cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy8xMDIucG5nXCI+PC9pbWFnZT5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cIndlbnpoYW5nLWRpYW56YW4tY291bnRcIj57e2l0ZW1zLmJyb3dzZX19PC90ZXh0PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwid2VuemhhbmctZG93bi1sZWZ0XCI+XG4gICAgICAgICAgPGltYWdlIGNsYXNzPVwid2VuemhhbmctZGlhbnphblwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzLzY4LnBuZ1wiPjwvaW1hZ2U+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ3ZW56aGFuZy1kaWFuemFuLWNvdW50XCI+e3tpdGVtcy5jb21tZW50fX08L3RleHQ+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ3ZW56aGFuZy1kb3duLWxlZnRcIj5cbiAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJ3ZW56aGFuZy1kaWFuemFuXCIgdi1pZj1cIml0ZW1zLmdpdmUgPT0gMVwiIEB0YXAuc3RvcD1cImRpYW56YW5cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy8xMjEucG5nXCI+PC9pbWFnZT5cbiAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJ3ZW56aGFuZy1kaWFuemFuXCIgdi1lbHNlIEB0YXAuc3RvcD1cImRpYW56YW5cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy8xMjUucG5nXCI+PC9pbWFnZT5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cIndlbnpoYW5nLWRpYW56YW4tY291bnRcIj57e2l0ZW1zLmZhYnVsb3VzfX08L3RleHQ+XG4gICAgICAgIDwvdmlldz4gLS0+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJ3ZW56aGFuZy1kb3duLWxlZnRcIj4y5bCP5pmC5Lul5YmNwrd7e2l0ZW1zLmJyb3dzZX195qyh6KeA55yLPC90ZXh0PlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwid2VuemhhbmctZG93bi1yaWdodFwiPlxyXG4gICAgICAgICAgPGltYWdlIGNsYXNzPVwid2VuemhhbmctZGlhbnphblwiIHYtaWY9XCJpdGVtcy5naXZlXCIgQHRhcD1cImRpYW56YW5cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy8xMjEucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cIndlbnpoYW5nLWRpYW56YW5cIiB2LWVsc2UgQHRhcD1cImRpYW56YW5cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy8xMjUucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwid2VuemhhbmctZGlhbnphbi1jb3VudFwiPnt7aXRlbXMuZmFidWxvdXN9fTwvdGV4dD5cclxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cIndlbnpoYW5nLWRpYW56YW5cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy82OC5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJ3ZW56aGFuZy1kaWFuemFuLWNvdW50XCI+e3tpdGVtcy5jb21tZW50fX08L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwiZmVuZ2V4aWFuXCI+PC92aWV3PlxyXG4gICAgPC92aWV3PlxyXG4gICAgPHZpZXcgY2xhc3M9XCJndWFuZ2dhb1wiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGdnbGlzdFwiIDprZXk9XCJpbmRleFwiIEB0YXA9XCJvcGVudXJsKGl0ZW0pXCI+XHJcbiAgICAgIDxpbWFnZSA6c3JjPVwiaXRlbS5pbWFnZV90ZXh0XCIgY2xhc3M9XCJndWFuZ2dhcC1pbWdcIj48L2ltYWdlPlxyXG4gICAgICA8dGV4dCBjbGFzcz1cImd1YW5nZ2FvLXRleHRcIj7lu6PlkYo8L3RleHQ+XHJcbiAgICA8L3ZpZXc+XHJcbiAgICA8dmlldyBjbGFzcz1cInBpbmdsdW4tdGl0bGVcIj5cclxuICAgICAgPHRleHQgY2xhc3M9XCJwaW5nbHVuLXRpdGxlXCI+6KmV6KuWPC90ZXh0PlxyXG4gICAgPC92aWV3PlxyXG4gICAgPHZpZXcgY2xhc3M9XCJwaW5nbHVuLWl0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBwaW5nbHVubGlzdFwiIDprZXk9XCJpbmRleCArICcxJ1wiPlxyXG4gICAgICA8aW1hZ2UgOnNyYz1cIml0ZW0uYXZhdG9yX2ltYWdlXCIgY2xhc3M9XCJwaW5nbHVuLWl0ZW0taGVhZGVyXCI+PC9pbWFnZT5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJwaW5nbHVuLWl0ZW0tY2VudGVyXCI+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJpdGVtLWNlbnRlci10b3BcIj5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaXRlbS1jZW50ZXItbmFtZVwiPnt7aXRlbS5uYW1lfX08L3RleHQ+XG4gICAgICAgICAgPGltYWdlIGNsYXNzPVwiaXRlbS1jZW50ZXItaW1nMlwiIHYtaWY9XCJpdGVtLmxldmVsICA9PSAgMFwiIG1vZGU9XCJhc3BlY3RGaXRcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy8xNDIucG5nXCI+PC9pbWFnZT5cbiAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpdGVtLWNlbnRlci1pbWcyXCIgdi1pZj1cIml0ZW0ubGV2ZWwgID09ICAxXCIgbW9kZT1cImFzcGVjdEZpdFwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzLzE0My5wbmdcIj48L2ltYWdlPlxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cIml0ZW0tY2VudGVyLWltZzJcIiB2LWlmPVwiaXRlbS5sZXZlbCAgPT0gIDJcIiBtb2RlPVwiYXNwZWN0Rml0XCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvMTQxLnBuZ1wiPjwvaW1hZ2U+XG4gICAgICAgICAgXHJcbiAgICAgICAgICA8IS0tIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzE2LnBuZ1wiIGNsYXNzPVwiaXRlbS1jZW50ZXItaW1nMlwiPjwvaW1hZ2U+IC0tPlxyXG4gICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvNTQucG5nXCIgY2xhc3M9XCJpdGVtLWNlbnRlci1pbWcxXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDwhLS0gPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvMTExLnBuZ1wiIGNsYXNzPVwiaXRlbS1jZW50ZXItaW1nXCI+PC9pbWFnZT4gLS0+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaXRlbS1jZW50ZXItdGV4dFwiPnt7aXRlbS5jb250ZW50fX08L3RleHQ+XHJcbiAgICAgICAgPCEtLSA8dGV4dCBjbGFzcz1cIml0ZW0tY2VudGVyLXRpbWVcIj57e2l0ZW0uY3JlYXRfdGltZX19PC90ZXh0PiAtLT5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cInBpbmdsdW4taXRlbS1kaWFuemFuXCI+PC92aWV3PlxyXG4gICAgICA8IS0tIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzLzEwOS5wbmdcIiBjbGFzcz1cInBpbmdsdW4taXRlbS1kaWFuemFuXCI+PC9pbWFnZT4gLS0+XHJcbiAgICA8L3ZpZXc+XHJcbiAgICA8dW5pLWxvYWQtbW9yZSA6c3RhdHVzPVwibW9yZVwiIHYtaWY9XCJwaW5nbHVubGlzdC5sZW5ndGggPiA5XCI+PC91bmktbG9hZC1tb3JlPlxyXG5cclxuICAgIDx2aWV3IGNsYXNzPVwiZG93bi1iZ1wiPjwvdmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwiaW5wdXQtYmFyXCI+XHJcbiAgICAgIDxpbnB1dCB2LW1vZGVsPVwicGluZ2x1bnRleHRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi5Zq056aB55WZ6KiA5re75Yqg6IGv57O75pa55byP77yM6K+35Y+R6YCB56eB5L+hXCIgY2xhc3M9XCJpbnB1dC10ZXh0XCIgLz5cclxuICAgICAgPHRleHQgY2xhc3M9XCJpbnB1dC1zZW5kXCIgQHRhcD1cInRvcGluZ2x1blwiPueZvOmAgTwvdGV4dD5cclxuICAgIDwvdmlldz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBteXZpZGVvOiBudWxsLFxyXG4gICAgICAgIGlzc2hvdzogdHJ1ZSxcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgIHVybDogZ2V0QXBwKCkuZ2xvYmFsRGF0YS51cmwsXHJcbiAgICAgICAgaGVhZGVyOiBnZXRBcHAoKS5nbG9iYWxEYXRhLmhlYWRlcixcclxuICAgICAgICBnZ2xpc3Q6IFtdLFxyXG4gICAgICAgIHBpbmdsdW5saXN0OiBbXSxcclxuICAgICAgICBtb3JlOiAnbW9yZScsXHJcbiAgICAgICAgcGFnZTogMSxcclxuICAgICAgICBwaW5nbHVudGV4dDogJycsXHJcbiAgICAgICAgc3JjTGlzdDogW3tcclxuICAgICAgICAgIG5hbWU6ICfmqJnmuIUnLFxyXG4gICAgICAgICAgdXJsOiAnJ1xyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIG9wZW51cmxzOiBnZXRBcHAoKS5nbG9iYWxEYXRhLm9wZW51cmwsXHJcbiAgICAgICAgYm9mYW5nb2s6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgICB0aGlzLnBhZ2UrK1xyXG4gICAgICB0aGlzLm1vcmUgPSAnbG9hZGluZydcclxuICAgICAgdGhpcy5nZXRwaW5nbHVuKClcclxuICAgIH0sXHJcbiAgICBvbkxvYWQob3B0aW9uKSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzaGVpZ2h0ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkuc3RhdHVzQmFySGVpZ2h0XHJcbiAgICAgIHRoaXMuaWQgPSBvcHRpb24uaWRcclxuICAgICAgdGhpcy5zZXRsbCgpXHJcbiAgICB9LFxyXG4gICAgb25IaWRlKCkge1xyXG4gICAgICAvLyAjaWZkZWYgQVBQLU5WVUVcclxuICAgICAgdGhpcy4kcmVmcy52aWRlby5wYXVzZSgpXHJcbiAgICAgIC8vICNlbmRpZlxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgc2V0bGwoKXtcclxuICAgICAgICB1bmkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6dGhpcy51cmwgKyAnL2FwaS9jb21tZW50L2NvbW11bml0eV9sbCcsXHJcbiAgICAgICAgICBtZXRob2Q6XCJQT1NUXCIsXHJcbiAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgaWQ6dGhpcy5pZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRkYXRhKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICB0b3ZpcCgpIHtcclxuICAgICAgICBpZiAodW5pLmdldFN0b3JhZ2VTeW5jKFwidXNlcnRva2VuXCIpKSB7XHJcbiAgICAgICAgICB1bmkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogXCIvcGFnZXMvbWluZS92aXBodWl5dWFuXCJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICBpY29uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwi6KuL55m75YWlXCJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSxcclxuICAgICAgdG90dWlzb25nKCkge1xyXG4gICAgICAgIGlmICh1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VydG9rZW5cIikpIHtcclxuICAgICAgICAgIHVuaS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy9taW5lL2ZlbnhpYW5nXCJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICBpY29uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwi6KuL55m75YWlXCJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvcGVudXJsKGl0ZW0pIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICB0aGlzLm9wZW51cmxzKGl0ZW0udXJsKVxyXG4gICAgICB9LFxyXG4gICAgICBkaWFuemFuKCkge1xyXG4gICAgICAgIGlmICh1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VydG9rZW5cIikpIHtcclxuICAgICAgICAgIHRoaXMuJGxvYWRpbmcoKVxyXG4gICAgICAgICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsICsgXCIvYXBpL2NvbW11bml0eS90aHVtYnNcIixcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICB0b2tlbjogdW5pLmdldFN0b3JhZ2VTeW5jKFwidXNlcnRva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBpZDogdGhpcy5pdGVtcy5pZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgdW5pLmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICBpY29uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi6bue6LSK5oiQ5YqfXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLmZhYnVsb3VzKytcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMuZ2l2ZSA9IDFcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgIGljb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogcmVzLmRhdGEubXNnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIGljb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLoq4vnmbvlhaVcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRvcGluZ2x1bigpIHtcclxuICAgICAgICBpZiAodGhpcy5waW5nbHVudGV4dCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgaWNvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuiri+i8uOWFpeipleirliBcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodW5pLmdldFN0b3JhZ2VTeW5jKFwidXNlcnRva2VuXCIpKSB7XHJcbiAgICAgICAgICB1bmkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgICBtYXNrOiB0cnVlLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLoq4vnqI3lvoxcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCArICcvYXBpL2NvbW1lbnQvYWRkY29tbWVudCcsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgIHRva2VuOiB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VydG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIGNsYXNzOiAyLFxyXG4gICAgICAgICAgICAgIGNvbW11bml0eV9pZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLnBpbmdsdW50ZXh0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICB1bmkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzLmRhdGEubXNnXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGluZ2x1bnRleHQgPSBcIlwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIGljb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLoq4vnmbvlhaVcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9LFxyXG4gICAgICB0b2d1YW56aHUoKSB7XHJcbiAgICAgICAgaWYgKHVuaS5nZXRTdG9yYWdlU3luYyhcInVzZXJ0b2tlblwiKSkge1xyXG4gICAgICAgICAgdW5pLnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgbWFzazogdHJ1ZSxcclxuICAgICAgICAgICAgdGl0bGU6IFwi6KuL56iN5b6MXCJcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICB1bmkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwgKyBcIi9hcGkvY29tbXVuaXR5L2ZvbGxvd1wiLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgIHRva2VuOiB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VydG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIGlkOiB0aGlzLml0ZW1zLnVzZXJfaWQsXHJcbiAgICAgICAgICAgICAgY2xhc3M6IHRoaXMuaXRlbXMuc3RhdHVzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICB1bmkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzLmRhdGEubXNnXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIGljb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLoq4vnmbvlhaVcIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRvYmFjaygpIHtcclxuICAgICAgICB1bmkubmF2aWdhdGVCYWNrKClcclxuICAgICAgfSxcclxuICAgICAgZ2V0ZGF0YSgpIHtcclxuICAgICAgICB1bmkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgbWFzazogdHJ1ZSxcclxuICAgICAgICAgIHRpdGxlOiBcIuiri+eojeW+jFwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICB2YXIgaGVhZGVyXHJcbiAgICAgICAgaWYgKHVuaS5nZXRTdG9yYWdlU3luYyhcInVzZXJ0b2tlblwiKSkge1xyXG4gICAgICAgICAgaGVhZGVyID0ge1xyXG4gICAgICAgICAgICB0b2tlbjogdW5pLmdldFN0b3JhZ2VTeW5jKFwidXNlcnRva2VuXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGhlYWRlciA9IHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdGhpcy51cmwgKyAnL2FwaS9jb21tdW5pdHkveHFfY29tbXVuaXR5JyxcclxuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBoZWFkZXI6IGhlYWRlcixcclxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5ndWFuZ2dhbygpXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0cGluZ2x1bigpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldHBpbmdsdW4oKSB7XHJcbiAgICAgICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB0aGlzLnVybCArICcvYXBpL2NvbW1lbnQvY29tbXVuaXR5JyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY3VycmVudDogdGhpcy5wYWdlLFxyXG4gICAgICAgICAgICBldmVyeTogMTAsXHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBudW06IHRoaXMuaXRlbXMuY29tbWVudCxcclxuICAgICAgICAgICAgY2xhc3M6IDJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLnBpbmdsdW5saXN0ID0gdGhpcy5waW5nbHVubGlzdC5jb25jYXQocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICAgICAgICB0aGlzLm1vcmUgPSAnbW9yZSdcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLnBhZ2UtLVxyXG4gICAgICAgICAgICAgIHRoaXMubW9yZSA9IFwibm9Nb3JlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZ3VhbmdnYW8oKSB7XHJcbiAgICAgICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB0aGlzLnVybCArICcvYXBpL2Fkdi9hZHYnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBjbGFzczogMCxcclxuICAgICAgICAgICAgbGltaXQ6IDk5OVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgdW5pLmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgdGhpcy5nZ2xpc3QgPSByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBwbGF5dmlkZW8oKSB7XHJcblxyXG4gICAgICAgIHVuaS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICBtYXNrOiB0cnVlLFxyXG4gICAgICAgICAgdGl0bGU6IFwi6KuL56iN5b6MXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICh1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VydG9rZW5cIikpIHtcclxuICAgICAgICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCArICcvYXBpL2NvbW11bml0eS9lZGl0JyxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIGNsYXNzOiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgIHRva2VuOiB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VydG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgIHVuaS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzc2hvdyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAvLyAjaWZkZWYgQVBQLU5WVUVcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMudmlkZW8uc2VlaygyMDAwMClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3JjTGlzdFswXS51cmwgPSB0aGlzLml0ZW1zLnZpZGVvXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnZpZGVvLnNldFBhcmFtcyh7XHJcbiAgICAgICAgICAgICAgICAgIHNyY0xpc3Q6IHRoaXMuc3JjTGlzdCxcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuaXRlbXMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgIGxpdmVNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAjZW5kaWZcclxuICAgICAgICAgICAgICAgIC8vICNpZmRlZiBINVxyXG4gICAgICAgICAgICAgICAgdGhpcy5teXZpZGVvLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgLy8gI2VuZGlmXHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9mYW5nb2sgPSB0cnVlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1bmkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwgKyAnL2FwaS95ay9kZWwnLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgY29kZTogdW5pLmdldFN0b3JhZ2VTeW5jKFwieW91a2VkYXRhXCIpLmNvZGUsXHJcbiAgICAgICAgICAgICAgY2xhc3M6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgIHVuaS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzc2hvdyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAvLyAjaWZkZWYgQVBQLU5WVUVcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMudmlkZW8uc2VlaygyMDAwMClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3JjTGlzdFswXS51cmwgPSB0aGlzLml0ZW1zLnZpZGVvXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnZpZGVvLnNldFBhcmFtcyh7XHJcbiAgICAgICAgICAgICAgICAgIHNyY0xpc3Q6IHRoaXMuc3JjTGlzdCxcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuaXRlbXMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgIGxpdmVNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAjZW5kaWZcclxuICAgICAgICAgICAgICAgIC8vICNpZmRlZiBINVxyXG4gICAgICAgICAgICAgICAgdGhpcy5teXZpZGVvLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgLy8gI2VuZGlmXHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9mYW5nb2sgPSB0cnVlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdG91c2VyaW5mbyhlKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIHVuaS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogXCIvcGFnZXMvdXNlcmluZm8vdXNlcmluZm8/aWQ9XCIgKyB0aGlzLml0ZW1zLmlkXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XG4gIC5zaHVpeWlue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDIwcnB4O1xuICAgIHdpZHRoOiAxNTBycHg7XG4gICAgaGVpZ2h0OiAxMDBycHg7XG4gIH1cclxuICAubm8tcGxheS1idXR0MSB7XHJcbiAgICBtYXJnaW46IDIwcnB4IDEwcnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItd2lkdGg6IDFycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcnB4O1xyXG4gICAgZm9udC1zaXplOiAyNnJweDtcclxuICAgIHdpZHRoOiAyMDBycHg7XHJcbiAgICBoZWlnaHQ6IDUwcnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcnB4O1xyXG4gIH1cclxuXHJcbiAgLm5vLXBsYXktYnV0dCB7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubm8tcGxheS10ZXh0IHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBmb250LXNpemU6IDI4cnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBycHg7XHJcbiAgfVxyXG5cclxuICAubm8tcGxheSB7XHJcbiAgICB3aWR0aDogNzUwcnB4O1xyXG4gICAgaGVpZ2h0OiA1MDBycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAzMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMxMzM7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtc2VuZCB7XHJcbiAgICBmb250LXNpemU6IDI4cnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0M7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtdGV4dCB7XHJcbiAgICB3aWR0aDogNjI0cnB4O1xyXG4gICAgaGVpZ2h0OiA3MnJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDcsIDI0NywgMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNnJweDtcclxuICAgIGZvbnQtc2l6ZTogMjRycHg7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAzNHJweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1iYXIge1xyXG4gICAgLyogI2lmZGVmIEg1ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogI2VuZGlmICovXHJcbiAgICBwYWRkaW5nOiAwIDIwcnB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcblxyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA3NTBycHg7XHJcbiAgICBoZWlnaHQ6IDExOHJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcblxyXG4gICAgLyogYm9yZGVyOjJycHggc29saWQgcmdiYSgyMjksMjI5LDIyOSwxKTsgKi9cclxuICB9XHJcblxyXG4gIC5kb3duLWJnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogNzUwcnB4O1xyXG4gICAgaGVpZ2h0OiAxMThycHg7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1jZW50ZXItdGltZSB7XHJcbiAgICBmb250LXNpemU6IDIwcnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0M7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHJnYmEoMTUzLCAxNTMsIDE1MywgMSk7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1jZW50ZXItdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDMycnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0M7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgMSk7XHJcbiAgICBtYXJnaW46IDZycHggMDtcclxuICB9XHJcblxyXG4gIC5pdGVtLWNlbnRlci1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjhycHg7XHJcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdTQy1NZWRpdW0sIFBpbmdGYW5nIFNDO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDEpO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tY2VudGVyLWltZzEge1xyXG4gICAgd2lkdGg6IDMwcnB4O1xyXG4gICAgaGVpZ2h0OiAyNnJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHJweDtcclxuICB9XHJcblxyXG4gIC5pdGVtLWNlbnRlci1pbWcyIHtcclxuICAgIHdpZHRoOiAxNTBycHg7XHJcbiAgICBoZWlnaHQ6IDQwcnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tY2VudGVyLXRvcCB7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnBpbmdsdW4taXRlbS1jZW50ZXIge1xyXG4gICAgd2lkdGg6IDU1MHJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBycHg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLDAsMCwwLjA3KTtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcnB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgfVxyXG5cclxuICAucGluZ2x1bi1pdGVtLWRpYW56YW4ge1xyXG4gICAgd2lkdGg6IDM0cnB4O1xyXG4gICAgaGVpZ2h0OiAzNHJweDtcclxuICB9XHJcblxyXG4gIC5waW5nbHVuLWl0ZW0taGVhZGVyIHtcclxuICAgIHdpZHRoOiA4MHJweDtcclxuICAgIGhlaWdodDogODBycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBycHg7XHJcbiAgfVxyXG5cclxuICAucGluZ2x1bi1pdGVtIHtcclxuICAgIC8qICNpZmRlZiBINSAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qICNlbmRpZiAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwIDIwcnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjZycHg7XHJcbiAgfVxyXG5cclxuICAucGluZ2x1bi10aXRsZSB7XHJcbiAgICBtYXJnaW46IDEwcnB4IDIwcnB4IDEwcnB4IDIwcnB4O1xyXG4gICAgLyogcGFkZGluZzogMzJycHggMDsgKi9cclxuICAgIGZvbnQtc2l6ZTogMzJycHg7XHJcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdTQy1TZW1pYm9sZCwgUGluZ0ZhbmcgU0M7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHJnYmEoMzIsIDMyLCAzMiwgMSk7XHJcbiAgfVxyXG5cclxuICAuZ3VhbmdnYW8tdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMTRycHg7XHJcbiAgICB3aWR0aDogMTA4cnB4O1xyXG4gICAgaGVpZ2h0OiA0MHJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41Myk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcnB4O1xyXG4gICAgZm9udC1zaXplOiAyNHJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIH1cclxuXHJcbiAgLmd1YW5nZ2FwLWltZyB7XHJcbiAgICB3aWR0aDogNzEwcnB4O1xyXG4gICAgaGVpZ2h0OiAxNjBycHg7XHJcbiAgfVxyXG5cclxuICAuZ3VhbmdnYW8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDcxMHJweDtcclxuICAgIGhlaWdodDogMTYwcnB4O1xyXG4gICAgbWFyZ2luOiAxNnJweCAyMHJweCAwIDIwcnB4O1xyXG4gIH1cclxuXHJcbiAgLm15dmlkZW8taXRlbSB7XHJcbiAgICB3aWR0aDogNzUwcnB4O1xyXG4gICAgaGVpZ2h0OiA1MDBycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLm15dmlkZW8ge1xyXG4gICAgd2lkdGg6IDc1MHJweDtcclxuICAgIGhlaWdodDogNTAwcnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhycHg7XHJcbiAgICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiAjZW5kaWYgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5wbGF5LWltZyB7XHJcbiAgICB3aWR0aDogMTIwcnB4O1xyXG4gICAgaGVpZ2h0OiAxMjBycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuICB9XHJcblxyXG4gIC5mZW5nbWlhbiB7XHJcbiAgICB3aWR0aDogNzUwcnB4O1xyXG4gICAgaGVpZ2h0OiA1MDBycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOGM4O1xyXG4gIH1cclxuXHJcbiAgLmZlbmdleGlhbiB7XHJcbiAgICB3aWR0aDogNzUwcnB4O1xyXG4gICAgaGVpZ2h0OiAxNnJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDYsIDI0OCwgMSk7XHJcbiAgfVxyXG5cclxuICAud2VuemhhbmctZGlhbnphbi1jb3VudCB7XHJcbiAgICBmb250LXNpemU6IDI4cnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDEpO1xyXG4gIH1cclxuXHJcbiAgLndlbnpoYW5nLWRpYW56YW4ge1xyXG4gICAgd2lkdGg6IDM2cnB4O1xyXG4gICAgaGVpZ2h0OiAzNnJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyOHJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZycHg7XHJcbiAgfVxyXG5cclxuICAud2VuemhhbmctZG93bi1yaWdodCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC53ZW56aGFuZy1kb3duLWxlZnQge1xuICAgIC8qICNpZmRlZiBINSAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogI2VuZGlmICovXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyOHJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogcmdiYSgxNTMsIDE1MywgMTUzLCAxKTtcclxuICB9XHJcblxyXG4gIC53ZW56aGFuZy1kb3duIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAyMHJweDtcclxuICAgIHdpZHRoOiA3NTBycHg7XHJcbiAgICBtYXJnaW46IDJycHggMCAyMHJweCAwO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tdGV4dC1jb250ZW50IHtcclxuICAgIHdpZHRoOiA2MDBycHg7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGxpbmVzOiAxO1xyXG4gICAgZm9udC1zaXplOiAzMnJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogcmdiYSgzMiwgMzIsIDMyLCAxKTtcclxuICB9XHJcblxyXG5cclxuICAuaXRlbS10ZXh0IHtcclxuICAgIG1hcmdpbjogMCAzMnJweCAxOHJweCAzMnJweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnNoZXF1LWhlYWRlci1yaWdodCB7XHJcbiAgICB3aWR0aDogMTQ4cnB4O1xyXG4gICAgaGVpZ2h0OiA0MnJweDtcclxuICAgIC8qICNpZmRlZiBINSAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qICNlbmRpZiAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB9XHJcblxyXG4gIC5zaGVxdS1oZWFkZXItcmlnaHQxIHtcclxuICAgIHdpZHRoOiAxMDZycHg7XHJcbiAgICBoZWlnaHQ6IDQycnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQycnB4O1xyXG4gICAgZm9udC1zaXplOiAyNHJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU0LCAxNDAsIDU0LCAwLjIzKTtcclxuICAgIGNvbG9yOiAjRkU4QzM2O1xyXG4gIH1cclxuXHJcbiAgLnNoZXF1LWhlYWRlci1yaWdodDIge1xyXG4gICAgd2lkdGg6IDQycnB4O1xyXG4gICAgaGVpZ2h0OiA0MnJweDtcclxuICAgIGZvbnQtc2l6ZTogMjhycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkU4QzM2O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNDJycHg7XHJcbiAgfVxyXG5cclxuICAudXNlci1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjhycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHJnYmEoMzIsIDMyLCAzMiwgMSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cnB4O1xyXG4gIH1cclxuXHJcbiAgLnVzZXItb2xkIHtcclxuICAgIHdpZHRoOiA3OHJweDtcclxuICAgIGhlaWdodDogMzBycHg7XHJcbiAgfVxyXG5cclxuICAudXNlci12aXAge1xyXG4gICAgd2lkdGg6IDI4cnB4O1xyXG4gICAgaGVpZ2h0OiAyOHJweDtcclxuXHJcbiAgfVxyXG5cclxuICAudXNlci1uZXcge1xyXG4gICAgd2lkdGg6IDgwcnB4O1xyXG4gICAgaGVpZ2h0OiAzMnJweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHJweDtcclxuICB9XHJcblxyXG4gIC51c2VyaW5mbyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItdXNlcmluZm8ge31cclxuXHJcbiAgLmhlYWRlci11c2VyLWltYWdlIHtcclxuICAgIHdpZHRoOiA3MnJweDtcclxuICAgIGhlaWdodDogNzJycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHJweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItdXNlciB7XHJcbiAgICB3aWR0aDogNzJycHg7XHJcbiAgICBoZWlnaHQ6IDkycnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIGJvcmRlci13aWR0aDogMXJweDtcclxuICBcdGJvcmRlci1jb2xvcjogIzAwMDtcclxuICBcdGJvcmRlci1zdHlsZTogc29saWQ7ICovXHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXJweDtcclxuICB9XHJcblxyXG4gIC51c2VyLWltYWdlLXZpcCB7XHJcbiAgICB3aWR0aDogNzJycHg7XHJcbiAgICBoZWlnaHQ6IDMwcnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcnB4O1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC5zaGVxdS1oZWFkZXItbGVmdCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zaGVxdS1oZWFkZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDE2cnB4IDIwcnB4O1xyXG4gIH1cclxuXHJcbiAgLmJnLWJhciB7XHJcbiAgICB3aWR0aDogNzUwcnB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDsgKi9cclxuICB9XHJcblxyXG4gIC5uYXYtYmFyLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAzMnJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1NDLU1lZGl1bSwgUGluZ0ZhbmcgU0M7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHJnYmEoMzIsIDMyLCAzMiwgMSk7XHJcbiAgfVxyXG5cclxuICAubmF2LWJhci1pbWcge1xyXG4gICAgd2lkdGg6IDQwcnB4O1xyXG4gICAgaGVpZ2h0OiAzM3JweDtcclxuICAgIG1hcmdpbjogMCA2MHJweCAwIDMycnB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdi1iYXItZ3VhbnpodSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMycnB4O1xyXG4gICAgd2lkdGg6IDEwNHJweDtcclxuICAgIGhlaWdodDogNTBycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlEMTQ3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDMycnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcnB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdi1iYXIge1xyXG4gICAgLyogI2lmZGVmIEg1ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogI2VuZGlmICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiA3NTBycHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gIH1cclxuXHJcbiAgLnN0YXR1cy1iYXIge1xyXG4gICAgd2lkdGg6IDc1MHJweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///97\n");

/***/ }),

/***/ 98:
/*!*************************************************************************************************************************************!*\
  !*** D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/index/videoinfo.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoinfo_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../../火狐下载/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoinfo.nvue?vue&type=style&index=0&lang=css&mpType=page */ 99);
/* harmony import */ var _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoinfo_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoinfo_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoinfo_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoinfo_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoinfo_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 99:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Tencent Files/2967160974/FileRecv/华堂/bao/huatang3.0/pages/index/videoinfo.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "shuiyin": {
    "position": "absolute",
    "top": 0,
    "right": "20rpx",
    "width": "150rpx",
    "height": "100rpx"
  },
  "no-play-butt1": {
    "marginTop": "20rpx",
    "marginRight": "10rpx",
    "marginBottom": "20rpx",
    "marginLeft": "10rpx",
    "color": "#ffffff",
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#ffffff",
    "borderRadius": "100rpx",
    "fontSize": "26rpx",
    "width": "200rpx",
    "height": "50rpx",
    "textAlign": "center",
    "lineHeight": "50rpx"
  },
  "no-play-butt": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "no-play-text": {
    "color": "rgba(255,255,255,0.8)",
    "fontSize": "28rpx",
    "marginBottom": "10rpx"
  },
  "no-play": {
    "width": "750rpx",
    "height": "500rpx",
    "position": "absolute",
    "zIndex": 30,
    "backgroundColor": "#303133",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "input-send": {
    "fontSize": "28rpx",
    "fontFamily": "PingFangSC-Regular, PingFang SC",
    "fontWeight": "400",
    "color": "rgba(102,102,102,1)"
  },
  "input-text": {
    "width": "624rpx",
    "height": "72rpx",
    "backgroundColor": "rgba(247,247,247,1)",
    "borderRadius": "36rpx",
    "fontSize": "24rpx",
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": "34rpx"
  },
  "input-bar": {
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "alignItems": "center",
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "width": "750rpx",
    "height": "118rpx",
    "backgroundColor": "rgba(255,255,255,1)"
  },
  "down-bg": {
    "backgroundColor": "#ffffff",
    "width": "750rpx",
    "height": "118rpx"
  },
  "item-center-time": {
    "fontSize": "20rpx",
    "fontFamily": "PingFangSC-Regular, PingFang SC",
    "fontWeight": "400",
    "color": "rgba(153,153,153,1)"
  },
  "item-center-text": {
    "fontSize": "32rpx",
    "fontFamily": "PingFangSC-Regular, PingFang SC",
    "fontWeight": "400",
    "color": "rgba(51,51,51,1)",
    "marginTop": "6rpx",
    "marginRight": 0,
    "marginBottom": "6rpx",
    "marginLeft": 0
  },
  "item-center-name": {
    "fontSize": "28rpx",
    "fontFamily": "PingFangSC-Medium, PingFang SC",
    "fontWeight": "500",
    "color": "rgba(51,51,51,1)"
  },
  "item-center-img1": {
    "width": "30rpx",
    "height": "26rpx",
    "marginLeft": "10rpx"
  },
  "item-center-img2": {
    "width": "150rpx",
    "height": "40rpx",
    "marginLeft": "10rpx"
  },
  "item-center-top": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "pinglun-item-center": {
    "width": "550rpx",
    "paddingBottom": "20rpx",
    "borderBottomColor": "rgba(0,0,0,0.07)",
    "borderBottomWidth": "1rpx",
    "borderStyle": "solid"
  },
  "pinglun-item-dianzan": {
    "width": "34rpx",
    "height": "34rpx"
  },
  "pinglun-item-header": {
    "width": "80rpx",
    "height": "80rpx",
    "borderRadius": "100rpx"
  },
  "pinglun-item": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx",
    "marginBottom": "26rpx"
  },
  "pinglun-title": {
    "marginTop": "10rpx",
    "marginRight": "20rpx",
    "marginBottom": "10rpx",
    "marginLeft": "20rpx",
    "fontSize": "32rpx",
    "fontFamily": "PingFangSC-Semibold, PingFang SC",
    "fontWeight": "600",
    "color": "rgba(32,32,32,1)"
  },
  "guanggao-text": {
    "position": "absolute",
    "right": 0,
    "bottom": "14rpx",
    "width": "108rpx",
    "height": "40rpx",
    "backgroundColor": "rgba(0,0,0,0.53)",
    "borderRadius": "4rpx",
    "textAlign": "center",
    "lineHeight": "40rpx",
    "fontSize": "24rpx",
    "fontFamily": "PingFangSC-Regular, PingFang SC",
    "fontWeight": "400",
    "color": "rgba(255,255,255,1)"
  },
  "guanggap-img": {
    "width": "710rpx",
    "height": "160rpx"
  },
  "guanggao": {
    "position": "relative",
    "width": "710rpx",
    "height": "160rpx",
    "marginTop": "16rpx",
    "marginRight": "20rpx",
    "marginBottom": 0,
    "marginLeft": "20rpx"
  },
  "myvideo-item": {
    "width": "750rpx",
    "height": "500rpx",
    "position": "absolute",
    "top": 0,
    "left": 0
  },
  "myvideo": {
    "width": "750rpx",
    "height": "500rpx",
    "position": "relative",
    "marginBottom": "28rpx",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "play-img": {
    "width": "120rpx",
    "height": "120rpx",
    "position": "absolute",
    "zIndex": 20
  },
  "fengmian": {
    "width": "750rpx",
    "height": "500rpx",
    "position": "absolute",
    "top": 0,
    "left": 0,
    "zIndex": 10,
    "backgroundColor": "#c8c8c8"
  },
  "fengexian": {
    "width": "750rpx",
    "height": "16rpx",
    "backgroundColor": "rgba(245,246,248,1)"
  },
  "wenzhang-dianzan-count": {
    "fontSize": "28rpx",
    "fontWeight": "400",
    "color": "rgba(153,153,153,1)"
  },
  "wenzhang-dianzan": {
    "width": "36rpx",
    "height": "36rpx",
    "marginLeft": "28rpx",
    "marginRight": "16rpx"
  },
  "wenzhang-down-right": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "wenzhang-down-left": {
    "flexDirection": "row",
    "alignItems": "center",
    "fontSize": "28rpx",
    "fontWeight": "400",
    "color": "rgba(153,153,153,1)"
  },
  "wenzhang-down": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx",
    "width": "750rpx",
    "marginTop": "2rpx",
    "marginRight": 0,
    "marginBottom": "20rpx",
    "marginLeft": 0
  },
  "item-text-content": {
    "width": "600rpx",
    "textOverflow": "ellipsis",
    "lines": 1,
    "fontSize": "32rpx",
    "fontWeight": "400",
    "color": "rgba(32,32,32,1)"
  },
  "item-text": {
    "marginTop": 0,
    "marginRight": "32rpx",
    "marginBottom": "18rpx",
    "marginLeft": "32rpx",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "shequ-header-right": {
    "width": "148rpx",
    "height": "42rpx",
    "alignItems": "center",
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "shequ-header-right1": {
    "width": "106rpx",
    "height": "42rpx",
    "textAlign": "center",
    "lineHeight": "42rpx",
    "fontSize": "24rpx",
    "backgroundColor": "rgba(254,140,54,0.23)",
    "color": "#FE8C36"
  },
  "shequ-header-right2": {
    "width": "42rpx",
    "height": "42rpx",
    "fontSize": "28rpx",
    "backgroundColor": "#FE8C36",
    "color": "#ffffff",
    "textAlign": "center",
    "lineHeight": "42rpx"
  },
  "user-name": {
    "fontSize": "28rpx",
    "fontWeight": "600",
    "color": "rgba(32,32,32,1)",
    "marginBottom": "4rpx",
    "marginRight": "8rpx"
  },
  "user-old": {
    "width": "78rpx",
    "height": "30rpx"
  },
  "user-vip": {
    "width": "28rpx",
    "height": "28rpx"
  },
  "user-new": {
    "width": "80rpx",
    "height": "32rpx",
    "marginRight": "8rpx"
  },
  "userinfo": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "header-user-image": {
    "width": "72rpx",
    "height": "72rpx",
    "borderRadius": "100rpx",
    "marginTop": "20rpx"
  },
  "header-user": {
    "width": "72rpx",
    "height": "92rpx",
    "marginRight": "16rpx",
    "position": "relative",
    "marginBottom": "5rpx"
  },
  "user-image-vip": {
    "width": "72rpx",
    "height": "30rpx",
    "marginBottom": "-10rpx",
    "position": "absolute",
    "top": "0rpx",
    "left": 0
  },
  "shequ-header-left": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "shequ-header": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": "16rpx",
    "marginRight": "20rpx",
    "marginBottom": "16rpx",
    "marginLeft": "20rpx"
  },
  "bg-bar": {
    "width": "750rpx"
  },
  "nav-bar-text": {
    "fontSize": "32rpx",
    "fontFamily": "PingFangSC-Medium, PingFang SC",
    "fontWeight": "500",
    "color": "rgba(32,32,32,1)"
  },
  "nav-bar-img": {
    "width": "40rpx",
    "height": "33rpx",
    "marginTop": 0,
    "marginRight": "60rpx",
    "marginBottom": 0,
    "marginLeft": "32rpx"
  },
  "nav-bar-guanzhu": {
    "marginRight": "32rpx",
    "width": "104rpx",
    "height": "50rpx",
    "borderRadius": "100rpx",
    "backgroundColor": "#F9D147",
    "color": "#ffffff",
    "fontSize": "32rpx",
    "textAlign": "center",
    "lineHeight": "50rpx"
  },
  "nav-bar": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "width": "750rpx",
    "position": "fixed",
    "left": 0,
    "height": "44",
    "backgroundColor": "#ffffff",
    "zIndex": 99
  },
  "status-bar": {
    "width": "750rpx",
    "position": "fixed",
    "top": 0,
    "left": 0,
    "zIndex": 99,
    "backgroundColor": "#ffffff"
  }
}

/***/ })

/******/ });