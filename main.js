/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../resources/fonts/Poppins-Regular.ttf */ \"./src/resources/fonts/Poppins-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../resources/fonts/Poppins-Medium.ttf */ \"./src/resources/fonts/Poppins-Medium.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../resources/fonts/Poppins-SemiBold.ttf */ \"./src/resources/fonts/Poppins-SemiBold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: 'Poppins';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    font-weight: 500;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n    font-weight: 600;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    font-family: 'Poppins', sans-serif;\n    min-width: 320px;\n}\n\n.container {\n\n    display: grid;\n    grid-template-columns: 368px 1fr;\n    color: white;\n    max-width: 80%;\n    margin-inline: auto;\n    /* border: 3px solid rebeccapurple; */\n    padding-block: 20px 178px;\n    row-gap: 16px;\n    /* overflow-x: hidden; */\n\n}\n\n.search-form {\n    grid-column: 1/3;\n    grid-row: 1/2;\n    padding: 16px 16px;\n    background: rgba(255, 255, 255, 20%);\n    border-radius: 16px;\n    position: relative;\n    /* margin-bottom: 32px; */\n    display: flex;\n}\n\n/* .search-submit {\n    position: relative;\n} */\n\n.search-submit {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    right: 37px;\n    border: none;\n    background: none;\n    cursor: pointer;\n}\n\n.search-form>input {\n    width: 100%;\n    padding: 12px 16px;\n    border-radius: 8px;\n    border: none;\n}\n\n.unit-control {\n    grid-column: 1/3;\n    grid-row: 2/3;\n}\n\ninput[type=\"radio\"],\nlabel {\n    cursor: pointer;\n}\n\n.current-overview {\n    grid-column: 1/2;\n    grid-row: 3/5;\n    margin-right: 16px;\n}\n\n.description-overview {\n    text-align: center;\n}\n\n.timezone {\n    font-weight: 500;\n    font-size: clamp(16px, 4vw, 2rem);\n}\n\n.hourly {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row: 3/4;\n    overflow: auto;\n    /* margin-bottom: 16px; */\n}\n\n.daily {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row: 4/5;\n    overflow: auto;\n}\n\n.daily-hour {\n    font-weight: 600;\n}\n\n.daily-condition,\n.hourly-condition {\n    font-size: 14px;\n    padding-bottom: 8px;\n    border-bottom: 1px solid rgba(255, 255, 255, 25%);\n}\n\n.daily-weather-values,\n.hourly-weather-details {\n    padding-top: 8px;\n}\n\n.daily-max-temp,\n.daily-min-temp,\n.daily-feelslike-temp,\n.daily-humidity {\n    font-weight: 600;\n    color: rgba(16, 254, 250, 88.3%);\n    font-size: 14px;\n}\n\n.daily-weather-icon,\n.hourly-weather-icon {\n    padding-block: 12px;\n    max-width: 104px;\n}\n\n.hourly-hour {\n    font-weight: 600;\n}\n\n\n.current-overview,\n.hourly,\n.daily {\n    /* background-color: rgba(0, 0, 0, 0.5); */\n    padding: 20px 40px;\n}\n\n.today-date {\n    font-size: 12px;\n    font-weight: 600;\n}\n\n.today-details {\n    display: flex;\n    flex-direction: column;\n}\n\n.today-detail {\n    display: flex;\n    justify-content: space-between;\n    padding-block: 16px;\n    border-bottom: 1px solid rgba(255, 255, 255, 25%);\n}\n\n.today-detail-value {\n    font-weight: 600;\n    color: rgba(16, 254, 250, 88.3%);\n}\n\n.hourly-list,\n.daily-list {\n    overflow: auto;\n    display: flex;\n    gap: 2rem;\n    /* grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n    grid-auto-flow: column; */\n    width: max-content;\n\n\n}\n\nsection {\n    /* background-image: url(\"../resources/images/bg_foggy_night.png\"); */\n    background-repeat: no-repeat;\n    background-size: cover;\n    /* height: 100dvh; */\n\n}\n\n.overlay {\n    border-image: linear-gradient(-60deg,\n            rgba(0, 0, 0, 70%) 0%,\n            rgba(27, 27, 27, 50%) 100%) fill 1;\n}\n\n.hourly-wrapper,\n.daily-wrapper {\n    overflow-x: auto;\n    width: 100%;\n\n\n}\n\n.hourly-item,\n.daily-item {\n    text-align: center;\n    /* padding-block: 21px; */\n    flex: 0 0 auto;\n\n    background: rgba(0, 0, 0, 50%);\n    padding: 12px;\n    border-radius: 8px;\n}\n\n.hourly-weather-details {\n    font-weight: 600;\n    color: rgba(16, 254, 250, 88.3%);\n    font-size: 14px;\n}\n\n.hourly,\n.daily {\n    /* margin-block: 23px;\n    padding-block: 21px; */\n\n}\n\n.hourly-title,\n.daily-title {\n    font-weight: 600;\n    font-size: 20px;\n    margin-bottom: 16px;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n}\n\n.gradient-bg {\n    /* background: linear-gradient(-60deg,\n            rgba(255, 255, 255, 50%) 0%,\n            rgba(235, 235, 235, 36.74%) 20%,\n            rgba(224, 224, 224, 28.75%) 28%,\n            rgba(212, 212, 212, 21.13%) 40%,\n            rgba(207, 207, 207, 17.56%) 48%,\n            rgba(202, 202, 202, 14.34%) 54%,\n            rgba(200, 200, 200, 12.63%) 59%,\n            rgba(196, 196, 196, 10%) 67%); */\n\n    background: linear-gradient(0deg, rgba(255, 255, 255, 8%) 0%,\n            rgba(255, 255, 255, 28%) 100%);\n\n    border-radius: 12px;\n    position: relative;\n    z-index: 1;\n}\n\n.border-wrap {\n    border-image: linear-gradient(to bottom, rgba(255, 255, 255, 50%) 0%,\n            rgba(255, 255, 255, 0%) 100%);\n    border-style: solid;\n    padding: 3px;\n}\n\n.gradient-bg::before {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    padding: 1px;\n    /* border thickness */\n    border-radius: 12px;\n    background: linear-gradient(to bottom, rgba(255, 255, 255, 50%) 0%,\n            rgba(255, 255, 255, 0%) 100%);\n    -webkit-mask:\n        linear-gradient(#fff 0 0) content-box,\n        linear-gradient(#fff 0 0);\n    -webkit-mask-composite: xor;\n    mask-composite: exclude;\n    pointer-events: none;\n    z-index: -1;\n}\n\n@media screen and (max-width: 1024px) {\n    .container {\n        grid-template-columns: 1fr;\n    }\n\n    .current-overview {\n        grid-row: 3/4;\n        /* margin-bottom: 16px; */\n    }\n\n    .hourly {\n        grid-row: 4/5;\n    }\n\n    .daily {\n        grid-row: 5/6;\n    }\n\n\n    .current-overview,\n    .daily,\n    .hourly {\n        grid-column: 1/3;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app-project/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://weather-app-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// the whatwg-fetch polyfill installs the fetch() function\n// on the global object (window or self)\n//\n// Return that as the export for use in Webpack, Browserify etc.\n__webpack_require__(/*! whatwg-fetch */ \"./node_modules/whatwg-fetch/fetch.js\");\nmodule.exports = self.fetch.bind(self);\n\n\n//# sourceURL=webpack://weather-app-project/./node_modules/isomorphic-fetch/fetch-npm-browserify.js?");

/***/ }),

/***/ "./node_modules/pexels/dist/main.module.js":
/*!*************************************************!*\
  !*** ./node_modules/pexels/dist/main.module.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ c)\n/* harmony export */ });\nvar t={photo:\"https://api.pexels.com/v1/\",video:\"https://api.pexels.com/videos/\",collections:\"https://api.pexels.com/v1/collections/\"};function r(r,e){var n={method:\"GET\",headers:{Accept:\"application/json\",\"Content-Type\":\"application/json\",\"User-Agent\":\"Pexels/JavaScript\",Authorization:r}},o=t[e];return function(t,r){return fetch(\"\"+o+t+\"?\"+function(t){return Object.keys(t).map(function(r){return r+\"=\"+t[r]}).join(\"&\")}(r||{}),n).then(function(t){if(!t.ok)throw new Error(t.statusText);return t.json()})}}function e(t){var e=r(t,\"collections\");return{all:function(t){return void 0===t&&(t={}),e(\"\",t)},media:function(t){var r=t.id,n=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r.indexOf(e=i[n])>=0||(o[e]=t[e]);return o}(t,[\"id\"]);return e(\"\"+r,n)},featured:function(t){return void 0===t&&(t={}),e(\"featured\",t)}}}function n(t){return!(!t||!t.photos)}var o={__proto__:null,isPhotos:n,isVideos:function(t){return!(!t||!t.videos)},isError:function(t){return!!t.error}};function i(t){var e=r(t,\"photo\");return{search:function(t){return e(\"/search\",t)},curated:function(t){return void 0===t&&(t={}),e(\"/curated\",t)},show:function(t){return e(\"/photos/\"+t.id)},random:function(){try{var t=Math.floor(1e3*Math.random());return Promise.resolve(this.curated({page:t,per_page:1})).then(function(t){return n(t)?t.photos[0]:t})}catch(t){return Promise.reject(t)}}}}function u(t){var e=r(t,\"video\");return{search:function(t){return e(\"/search\",t)},popular:function(t){return void 0===t&&(t={}),e(\"/popular\",t)},show:function(t){return e(\"/videos/\"+t.id)}}}function c(t){if(!t||\"string\"!=typeof t)throw new TypeError(\"An ApiKey must be provided when initiating the Pexel's client.\");return{typeCheckers:o,photos:i(t),videos:u(t),collections:e(t)}}__webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n//# sourceMappingURL=main.module.js.map\n\n\n//# sourceURL=webpack://weather-app-project/./node_modules/pexels/dist/main.module.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMException: () => (/* binding */ DOMException),\n/* harmony export */   Headers: () => (/* binding */ Headers),\n/* harmony export */   Request: () => (/* binding */ Request),\n/* harmony export */   Response: () => (/* binding */ Response),\n/* harmony export */   fetch: () => (/* binding */ fetch)\n/* harmony export */ });\n/* eslint-disable no-prototype-builtins */\nvar g =\n  (typeof globalThis !== 'undefined' && globalThis) ||\n  (typeof self !== 'undefined' && self) ||\n  // eslint-disable-next-line no-undef\n  (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g) ||\n  {}\n\nvar support = {\n  searchParams: 'URLSearchParams' in g,\n  iterable: 'Symbol' in g && 'iterator' in Symbol,\n  blob:\n    'FileReader' in g &&\n    'Blob' in g &&\n    (function() {\n      try {\n        new Blob()\n        return true\n      } catch (e) {\n        return false\n      }\n    })(),\n  formData: 'FormData' in g,\n  arrayBuffer: 'ArrayBuffer' in g\n}\n\nfunction isDataView(obj) {\n  return obj && DataView.prototype.isPrototypeOf(obj)\n}\n\nif (support.arrayBuffer) {\n  var viewClasses = [\n    '[object Int8Array]',\n    '[object Uint8Array]',\n    '[object Uint8ClampedArray]',\n    '[object Int16Array]',\n    '[object Uint16Array]',\n    '[object Int32Array]',\n    '[object Uint32Array]',\n    '[object Float32Array]',\n    '[object Float64Array]'\n  ]\n\n  var isArrayBufferView =\n    ArrayBuffer.isView ||\n    function(obj) {\n      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1\n    }\n}\n\nfunction normalizeName(name) {\n  if (typeof name !== 'string') {\n    name = String(name)\n  }\n  if (/[^a-z0-9\\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {\n    throw new TypeError('Invalid character in header field name: \"' + name + '\"')\n  }\n  return name.toLowerCase()\n}\n\nfunction normalizeValue(value) {\n  if (typeof value !== 'string') {\n    value = String(value)\n  }\n  return value\n}\n\n// Build a destructive iterator for the value list\nfunction iteratorFor(items) {\n  var iterator = {\n    next: function() {\n      var value = items.shift()\n      return {done: value === undefined, value: value}\n    }\n  }\n\n  if (support.iterable) {\n    iterator[Symbol.iterator] = function() {\n      return iterator\n    }\n  }\n\n  return iterator\n}\n\nfunction Headers(headers) {\n  this.map = {}\n\n  if (headers instanceof Headers) {\n    headers.forEach(function(value, name) {\n      this.append(name, value)\n    }, this)\n  } else if (Array.isArray(headers)) {\n    headers.forEach(function(header) {\n      if (header.length != 2) {\n        throw new TypeError('Headers constructor: expected name/value pair to be length 2, found' + header.length)\n      }\n      this.append(header[0], header[1])\n    }, this)\n  } else if (headers) {\n    Object.getOwnPropertyNames(headers).forEach(function(name) {\n      this.append(name, headers[name])\n    }, this)\n  }\n}\n\nHeaders.prototype.append = function(name, value) {\n  name = normalizeName(name)\n  value = normalizeValue(value)\n  var oldValue = this.map[name]\n  this.map[name] = oldValue ? oldValue + ', ' + value : value\n}\n\nHeaders.prototype['delete'] = function(name) {\n  delete this.map[normalizeName(name)]\n}\n\nHeaders.prototype.get = function(name) {\n  name = normalizeName(name)\n  return this.has(name) ? this.map[name] : null\n}\n\nHeaders.prototype.has = function(name) {\n  return this.map.hasOwnProperty(normalizeName(name))\n}\n\nHeaders.prototype.set = function(name, value) {\n  this.map[normalizeName(name)] = normalizeValue(value)\n}\n\nHeaders.prototype.forEach = function(callback, thisArg) {\n  for (var name in this.map) {\n    if (this.map.hasOwnProperty(name)) {\n      callback.call(thisArg, this.map[name], name, this)\n    }\n  }\n}\n\nHeaders.prototype.keys = function() {\n  var items = []\n  this.forEach(function(value, name) {\n    items.push(name)\n  })\n  return iteratorFor(items)\n}\n\nHeaders.prototype.values = function() {\n  var items = []\n  this.forEach(function(value) {\n    items.push(value)\n  })\n  return iteratorFor(items)\n}\n\nHeaders.prototype.entries = function() {\n  var items = []\n  this.forEach(function(value, name) {\n    items.push([name, value])\n  })\n  return iteratorFor(items)\n}\n\nif (support.iterable) {\n  Headers.prototype[Symbol.iterator] = Headers.prototype.entries\n}\n\nfunction consumed(body) {\n  if (body._noBody) return\n  if (body.bodyUsed) {\n    return Promise.reject(new TypeError('Already read'))\n  }\n  body.bodyUsed = true\n}\n\nfunction fileReaderReady(reader) {\n  return new Promise(function(resolve, reject) {\n    reader.onload = function() {\n      resolve(reader.result)\n    }\n    reader.onerror = function() {\n      reject(reader.error)\n    }\n  })\n}\n\nfunction readBlobAsArrayBuffer(blob) {\n  var reader = new FileReader()\n  var promise = fileReaderReady(reader)\n  reader.readAsArrayBuffer(blob)\n  return promise\n}\n\nfunction readBlobAsText(blob) {\n  var reader = new FileReader()\n  var promise = fileReaderReady(reader)\n  var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type)\n  var encoding = match ? match[1] : 'utf-8'\n  reader.readAsText(blob, encoding)\n  return promise\n}\n\nfunction readArrayBufferAsText(buf) {\n  var view = new Uint8Array(buf)\n  var chars = new Array(view.length)\n\n  for (var i = 0; i < view.length; i++) {\n    chars[i] = String.fromCharCode(view[i])\n  }\n  return chars.join('')\n}\n\nfunction bufferClone(buf) {\n  if (buf.slice) {\n    return buf.slice(0)\n  } else {\n    var view = new Uint8Array(buf.byteLength)\n    view.set(new Uint8Array(buf))\n    return view.buffer\n  }\n}\n\nfunction Body() {\n  this.bodyUsed = false\n\n  this._initBody = function(body) {\n    /*\n      fetch-mock wraps the Response object in an ES6 Proxy to\n      provide useful test harness features such as flush. However, on\n      ES5 browsers without fetch or Proxy support pollyfills must be used;\n      the proxy-pollyfill is unable to proxy an attribute unless it exists\n      on the object before the Proxy is created. This change ensures\n      Response.bodyUsed exists on the instance, while maintaining the\n      semantic of setting Request.bodyUsed in the constructor before\n      _initBody is called.\n    */\n    // eslint-disable-next-line no-self-assign\n    this.bodyUsed = this.bodyUsed\n    this._bodyInit = body\n    if (!body) {\n      this._noBody = true;\n      this._bodyText = ''\n    } else if (typeof body === 'string') {\n      this._bodyText = body\n    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {\n      this._bodyBlob = body\n    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {\n      this._bodyFormData = body\n    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n      this._bodyText = body.toString()\n    } else if (support.arrayBuffer && support.blob && isDataView(body)) {\n      this._bodyArrayBuffer = bufferClone(body.buffer)\n      // IE 10-11 can't handle a DataView body.\n      this._bodyInit = new Blob([this._bodyArrayBuffer])\n    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {\n      this._bodyArrayBuffer = bufferClone(body)\n    } else {\n      this._bodyText = body = Object.prototype.toString.call(body)\n    }\n\n    if (!this.headers.get('content-type')) {\n      if (typeof body === 'string') {\n        this.headers.set('content-type', 'text/plain;charset=UTF-8')\n      } else if (this._bodyBlob && this._bodyBlob.type) {\n        this.headers.set('content-type', this._bodyBlob.type)\n      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')\n      }\n    }\n  }\n\n  if (support.blob) {\n    this.blob = function() {\n      var rejected = consumed(this)\n      if (rejected) {\n        return rejected\n      }\n\n      if (this._bodyBlob) {\n        return Promise.resolve(this._bodyBlob)\n      } else if (this._bodyArrayBuffer) {\n        return Promise.resolve(new Blob([this._bodyArrayBuffer]))\n      } else if (this._bodyFormData) {\n        throw new Error('could not read FormData body as blob')\n      } else {\n        return Promise.resolve(new Blob([this._bodyText]))\n      }\n    }\n  }\n\n  this.arrayBuffer = function() {\n    if (this._bodyArrayBuffer) {\n      var isConsumed = consumed(this)\n      if (isConsumed) {\n        return isConsumed\n      } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {\n        return Promise.resolve(\n          this._bodyArrayBuffer.buffer.slice(\n            this._bodyArrayBuffer.byteOffset,\n            this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength\n          )\n        )\n      } else {\n        return Promise.resolve(this._bodyArrayBuffer)\n      }\n    } else if (support.blob) {\n      return this.blob().then(readBlobAsArrayBuffer)\n    } else {\n      throw new Error('could not read as ArrayBuffer')\n    }\n  }\n\n  this.text = function() {\n    var rejected = consumed(this)\n    if (rejected) {\n      return rejected\n    }\n\n    if (this._bodyBlob) {\n      return readBlobAsText(this._bodyBlob)\n    } else if (this._bodyArrayBuffer) {\n      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))\n    } else if (this._bodyFormData) {\n      throw new Error('could not read FormData body as text')\n    } else {\n      return Promise.resolve(this._bodyText)\n    }\n  }\n\n  if (support.formData) {\n    this.formData = function() {\n      return this.text().then(decode)\n    }\n  }\n\n  this.json = function() {\n    return this.text().then(JSON.parse)\n  }\n\n  return this\n}\n\n// HTTP methods whose capitalization should be normalized\nvar methods = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE']\n\nfunction normalizeMethod(method) {\n  var upcased = method.toUpperCase()\n  return methods.indexOf(upcased) > -1 ? upcased : method\n}\n\nfunction Request(input, options) {\n  if (!(this instanceof Request)) {\n    throw new TypeError('Please use the \"new\" operator, this DOM object constructor cannot be called as a function.')\n  }\n\n  options = options || {}\n  var body = options.body\n\n  if (input instanceof Request) {\n    if (input.bodyUsed) {\n      throw new TypeError('Already read')\n    }\n    this.url = input.url\n    this.credentials = input.credentials\n    if (!options.headers) {\n      this.headers = new Headers(input.headers)\n    }\n    this.method = input.method\n    this.mode = input.mode\n    this.signal = input.signal\n    if (!body && input._bodyInit != null) {\n      body = input._bodyInit\n      input.bodyUsed = true\n    }\n  } else {\n    this.url = String(input)\n  }\n\n  this.credentials = options.credentials || this.credentials || 'same-origin'\n  if (options.headers || !this.headers) {\n    this.headers = new Headers(options.headers)\n  }\n  this.method = normalizeMethod(options.method || this.method || 'GET')\n  this.mode = options.mode || this.mode || null\n  this.signal = options.signal || this.signal || (function () {\n    if ('AbortController' in g) {\n      var ctrl = new AbortController();\n      return ctrl.signal;\n    }\n  }());\n  this.referrer = null\n\n  if ((this.method === 'GET' || this.method === 'HEAD') && body) {\n    throw new TypeError('Body not allowed for GET or HEAD requests')\n  }\n  this._initBody(body)\n\n  if (this.method === 'GET' || this.method === 'HEAD') {\n    if (options.cache === 'no-store' || options.cache === 'no-cache') {\n      // Search for a '_' parameter in the query string\n      var reParamSearch = /([?&])_=[^&]*/\n      if (reParamSearch.test(this.url)) {\n        // If it already exists then set the value with the current time\n        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())\n      } else {\n        // Otherwise add a new '_' parameter to the end with the current time\n        var reQueryString = /\\?/\n        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()\n      }\n    }\n  }\n}\n\nRequest.prototype.clone = function() {\n  return new Request(this, {body: this._bodyInit})\n}\n\nfunction decode(body) {\n  var form = new FormData()\n  body\n    .trim()\n    .split('&')\n    .forEach(function(bytes) {\n      if (bytes) {\n        var split = bytes.split('=')\n        var name = split.shift().replace(/\\+/g, ' ')\n        var value = split.join('=').replace(/\\+/g, ' ')\n        form.append(decodeURIComponent(name), decodeURIComponent(value))\n      }\n    })\n  return form\n}\n\nfunction parseHeaders(rawHeaders) {\n  var headers = new Headers()\n  // Replace instances of \\r\\n and \\n followed by at least one space or horizontal tab with a space\n  // https://tools.ietf.org/html/rfc7230#section-3.2\n  var preProcessedHeaders = rawHeaders.replace(/\\r?\\n[\\t ]+/g, ' ')\n  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill\n  // https://github.com/github/fetch/issues/748\n  // https://github.com/zloirock/core-js/issues/751\n  preProcessedHeaders\n    .split('\\r')\n    .map(function(header) {\n      return header.indexOf('\\n') === 0 ? header.substr(1, header.length) : header\n    })\n    .forEach(function(line) {\n      var parts = line.split(':')\n      var key = parts.shift().trim()\n      if (key) {\n        var value = parts.join(':').trim()\n        try {\n          headers.append(key, value)\n        } catch (error) {\n          console.warn('Response ' + error.message)\n        }\n      }\n    })\n  return headers\n}\n\nBody.call(Request.prototype)\n\nfunction Response(bodyInit, options) {\n  if (!(this instanceof Response)) {\n    throw new TypeError('Please use the \"new\" operator, this DOM object constructor cannot be called as a function.')\n  }\n  if (!options) {\n    options = {}\n  }\n\n  this.type = 'default'\n  this.status = options.status === undefined ? 200 : options.status\n  if (this.status < 200 || this.status > 599) {\n    throw new RangeError(\"Failed to construct 'Response': The status provided (0) is outside the range [200, 599].\")\n  }\n  this.ok = this.status >= 200 && this.status < 300\n  this.statusText = options.statusText === undefined ? '' : '' + options.statusText\n  this.headers = new Headers(options.headers)\n  this.url = options.url || ''\n  this._initBody(bodyInit)\n}\n\nBody.call(Response.prototype)\n\nResponse.prototype.clone = function() {\n  return new Response(this._bodyInit, {\n    status: this.status,\n    statusText: this.statusText,\n    headers: new Headers(this.headers),\n    url: this.url\n  })\n}\n\nResponse.error = function() {\n  var response = new Response(null, {status: 200, statusText: ''})\n  response.ok = false\n  response.status = 0\n  response.type = 'error'\n  return response\n}\n\nvar redirectStatuses = [301, 302, 303, 307, 308]\n\nResponse.redirect = function(url, status) {\n  if (redirectStatuses.indexOf(status) === -1) {\n    throw new RangeError('Invalid status code')\n  }\n\n  return new Response(null, {status: status, headers: {location: url}})\n}\n\nvar DOMException = g.DOMException\ntry {\n  new DOMException()\n} catch (err) {\n  DOMException = function(message, name) {\n    this.message = message\n    this.name = name\n    var error = Error(message)\n    this.stack = error.stack\n  }\n  DOMException.prototype = Object.create(Error.prototype)\n  DOMException.prototype.constructor = DOMException\n}\n\nfunction fetch(input, init) {\n  return new Promise(function(resolve, reject) {\n    var request = new Request(input, init)\n\n    if (request.signal && request.signal.aborted) {\n      return reject(new DOMException('Aborted', 'AbortError'))\n    }\n\n    var xhr = new XMLHttpRequest()\n\n    function abortXhr() {\n      xhr.abort()\n    }\n\n    xhr.onload = function() {\n      var options = {\n        statusText: xhr.statusText,\n        headers: parseHeaders(xhr.getAllResponseHeaders() || '')\n      }\n      // This check if specifically for when a user fetches a file locally from the file system\n      // Only if the status is out of a normal range\n      if (request.url.indexOf('file://') === 0 && (xhr.status < 200 || xhr.status > 599)) {\n        options.status = 200;\n      } else {\n        options.status = xhr.status;\n      }\n      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')\n      var body = 'response' in xhr ? xhr.response : xhr.responseText\n      setTimeout(function() {\n        resolve(new Response(body, options))\n      }, 0)\n    }\n\n    xhr.onerror = function() {\n      setTimeout(function() {\n        reject(new TypeError('Network request failed'))\n      }, 0)\n    }\n\n    xhr.ontimeout = function() {\n      setTimeout(function() {\n        reject(new TypeError('Network request timed out'))\n      }, 0)\n    }\n\n    xhr.onabort = function() {\n      setTimeout(function() {\n        reject(new DOMException('Aborted', 'AbortError'))\n      }, 0)\n    }\n\n    function fixUrl(url) {\n      try {\n        return url === '' && g.location.href ? g.location.href : url\n      } catch (e) {\n        return url\n      }\n    }\n\n    xhr.open(request.method, fixUrl(request.url), true)\n\n    if (request.credentials === 'include') {\n      xhr.withCredentials = true\n    } else if (request.credentials === 'omit') {\n      xhr.withCredentials = false\n    }\n\n    if ('responseType' in xhr) {\n      if (support.blob) {\n        xhr.responseType = 'blob'\n      } else if (\n        support.arrayBuffer\n      ) {\n        xhr.responseType = 'arraybuffer'\n      }\n    }\n\n    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers || (g.Headers && init.headers instanceof g.Headers))) {\n      var names = [];\n      Object.getOwnPropertyNames(init.headers).forEach(function(name) {\n        names.push(normalizeName(name))\n        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))\n      })\n      request.headers.forEach(function(value, name) {\n        if (names.indexOf(name) === -1) {\n          xhr.setRequestHeader(name, value)\n        }\n      })\n    } else {\n      request.headers.forEach(function(value, name) {\n        xhr.setRequestHeader(name, value)\n      })\n    }\n\n    if (request.signal) {\n      request.signal.addEventListener('abort', abortXhr)\n\n      xhr.onreadystatechange = function() {\n        // DONE (success or failure)\n        if (xhr.readyState === 4) {\n          request.signal.removeEventListener('abort', abortXhr)\n        }\n      }\n    }\n\n    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)\n  })\n}\n\nfetch.polyfill = true\n\nif (!g.fetch) {\n  g.fetch = fetch\n  g.Headers = Headers\n  g.Request = Request\n  g.Response = Response\n}\n\n\n//# sourceURL=webpack://weather-app-project/./node_modules/whatwg-fetch/fetch.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app-project/./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _modules_ReportDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ReportDOM */ \"./src/modules/ReportDOM.js\");\n/* harmony import */ var _modules_API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/API */ \"./src/modules/API.js\");\n\n\n\n\n\nconst reportDOM = new _modules_ReportDOM__WEBPACK_IMPORTED_MODULE_1__.ReportDOM().init();\n\n\n//# sourceURL=webpack://weather-app-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/API.js":
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var pexels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pexels */ \"./node_modules/pexels/dist/main.module.js\");\n\n\nclass API {\n  #WEATHER_API_KEY = \"UBF9896CAYV5UP9SWEMYTQRLK\";\n  #PEXELS_API_KEY = \"2BPG8lSPMJIn16bHLUXJiP6HgOtRZ2nObmG776SSr0pSnxmSIGvBBvZW\";\n\n  constructor() {\n    this.coordination = null;\n    this.weather = null;\n    this.backgroundURL = null;\n  }\n\n  async init() {\n    await this.setCoordinates();\n    await this.setWeatherForecast();\n    await this.setBackgroundWeather();\n\n    return this;\n    // console.log(this.coordination);\n  }\n\n  async setCoordinates() {\n    try {\n      if (localStorage.getItem(\"coordination\")) {\n        this.coordination = JSON.parse(localStorage.getItem(\"coordination\"));\n\n        return;\n      }\n      const location = await new Promise((resolve, reject) => {\n        navigator.geolocation.getCurrentPosition(resolve, reject);\n      });\n\n      this.coordination = {\n        latitude: location.coords.latitude,\n        longtitude: location.coords.longitude,\n      };\n      console.log(this.coordination);\n      localStorage.setItem(\"coordination\", JSON.stringify(this.coordination));\n    } catch (error) {\n      console.log(\"Failed to get coordination: \", error);\n    }\n  }\n\n  async setWeatherForecast(location = null) {\n    if (localStorage.getItem(\"weather\") && !location) {\n      this.weather = JSON.parse(localStorage.getItem(\"weather\"));\n      // console.log(\"ABC\");\n      return;\n    }\n    let searchedResultWeather = null;\n    if (location) {\n      try {\n        searchedResultWeather = await fetch(\n          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${\n            this.#WEATHER_API_KEY\n          }&contentType=json`\n        );\n\n        this.weather = await searchedResultWeather.json();\n\n        // this.setBackgroundWeather(location);\n\n        console.log(location);\n      } catch (error) {\n        console.log(error);\n      }\n\n      // console.log(this.weather);\n    } else {\n      searchedResultWeather = await fetch(\n        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${\n          this.coordination.latitude\n        },${this.coordination.longtitude}?unitGroup=us&key=${\n          this.#WEATHER_API_KEY\n        }&contentType=json`\n      );\n\n      this.weather = await searchedResultWeather.json();\n      localStorage.setItem(\"weather\", JSON.stringify(this.weather));\n      // localStorage.setItem(\"backgroundURL\", this.backgroundURL);\n    }\n  }\n\n  async setBackgroundWeather(location = null) {\n    if (localStorage.getItem(\"backgroundURL\") && !location) {\n      // console.log(JSON.parse(localStorage.getItem(\"weather\")).timezone);\n      this.backgroundURL = localStorage.getItem(\"backgroundURL\");\n      return;\n    }\n\n    if (!localStorage.getItem(\"backgroundURL\")) {\n      location = this.getFormattedLocation();\n      const client = (0,pexels__WEBPACK_IMPORTED_MODULE_0__.createClient)(this.#PEXELS_API_KEY);\n\n      const query = location;\n\n      const searchedphotos = await client.photos.search({\n        query,\n        per_page: 1,\n      });\n\n      this.backgroundURL = searchedphotos.photos[0].src.original;\n      localStorage.setItem(\"backgroundURL\", this.backgroundURL);\n      return;\n    }\n\n    const client = (0,pexels__WEBPACK_IMPORTED_MODULE_0__.createClient)(this.#PEXELS_API_KEY);\n\n    const query = location;\n\n    await client.photos\n      .search({\n        query,\n        per_page: 1,\n      })\n      .then((searchedphotos) => {\n        this.backgroundURL = searchedphotos.photos[0].src.original;\n      })\n      .catch((error) => {\n        console.log(\"The image not found: \" + error);\n      });\n\n    // const searchedphoto = await client.photos.show({\n    //   id: \" 9877276\",\n    // });\n\n    // console.log(this.backgroundURL);\n  }\n\n  getCoordinates() {\n    return this.coordination;\n  }\n\n  getTimeZone() {\n    return this.weather.timezone;\n  }\n\n  getCurrentOverview() {\n    return {\n      address: this.weather.resolvedAddress,\n      timezone: this.weather.timezone,\n      localDescription: this.weather.description,\n      weatherIcon: this.weather.days[0].icon,\n      date: this.weather.days[0].datetime,\n    };\n  }\n\n  getTodayWeather() {\n    const todayweather = this.weather.days[0];\n    return {\n      date: todayweather.datetime,\n      maxTemp: todayweather.tempmax,\n      minTemp: todayweather.tempmin,\n      avgTemp: todayweather.temp,\n      humidity: todayweather.humidity,\n      uvindex: todayweather.uvindex,\n      sunrise: todayweather.sunrise,\n      sunset: todayweather.sunset,\n      conditions: todayweather.description,\n    };\n  }\n\n  getHourlyWeather() {\n    // console.log(this.weather.days[0]);\n    const hourlyWeather = this.weather.days[0].hours.map((hour) => ({\n      hour: hour.datetime,\n      temp: hour.temp,\n      feelslike: hour.feelslike,\n      humidity: hour.humidity,\n      conditions: hour.conditions,\n      icon: hour.icon,\n    }));\n\n    return hourlyWeather;\n  }\n\n  getdailyWeather() {\n    const dailyWeather = this.weather.days.map((day) => ({\n      day: day.datetime,\n      conditions: day.conditions,\n      maxTemp: day.tempmax,\n      minTemp: day.tempmin,\n      feelslike: day.feelslike,\n      humidity: day.humidity,\n      weatherIcon: day.icon,\n    }));\n\n    return dailyWeather;\n  }\n\n  getBackgroundURL() {\n    return this.backgroundURL;\n  }\n\n  setLocation(location) {}\n\n  getWeather() {\n    return this.weather;\n  }\n\n  getFormattedLocation() {\n    const timezone = this.weather.timezone;\n    const underscoreLocation = timezone.split(\"/\")[1];\n    const removedUnderscoreLocation = underscoreLocation.replace(/_/g, \" \");\n\n    return removedUnderscoreLocation;\n  }\n\n  getSearchedLocation() {\n    return this.weather.address;\n  }\n}\n\nconst api = new API().init();\n\n\n//# sourceURL=webpack://weather-app-project/./src/modules/API.js?");

/***/ }),

/***/ "./src/modules/HelperFunctions.js":
/*!****************************************!*\
  !*** ./src/modules/HelperFunctions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   celsiusToFahrenheit: () => (/* binding */ celsiusToFahrenheit),\n/* harmony export */   fahrenheitToCelsius: () => (/* binding */ fahrenheitToCelsius)\n/* harmony export */ });\nfunction fahrenheitToCelsius(fahrenheit) {\n  return Math.round((fahrenheit - 32) / 1.8);\n}\n\nfunction celsiusToFahrenheit(celsius) {\n  return Math.round(celsius * 1.8 + 32);\n}\n\n\n\n\n//# sourceURL=webpack://weather-app-project/./src/modules/HelperFunctions.js?");

/***/ }),

/***/ "./src/modules/ReportDOM.js":
/*!**********************************!*\
  !*** ./src/modules/ReportDOM.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ReportDOM: () => (/* binding */ ReportDOM)\n/* harmony export */ });\n/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ \"./src/modules/API.js\");\n/* harmony import */ var _resources_icon_small_weather_cloudy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/icon/small-weather/cloudy.png */ \"./src/resources/icon/small-weather/cloudy.png\");\n/* harmony import */ var _HelperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HelperFunctions */ \"./src/modules/HelperFunctions.js\");\n\n\n\n\nclass ReportDOM {\n  constructor() {\n    this.timezoneTitle = document.querySelector(\".timezone-location\");\n\n    this.getAPI = null;\n  }\n\n  async init() {\n    this.getAPI = await _API__WEBPACK_IMPORTED_MODULE_0__.api;\n\n    // console.log(this.getAPI);\n    this.displayOverview();\n    this.displayHourlyWeather();\n    this.displayDailyWeather();\n    this.displayBackgroundPhoto();\n    this.displaySearchResult();\n    this.convertUnit();\n  }\n\n  displayOverview(location = null) {\n    this.displayOverviewHeader(location);\n    this.displaytWeatherDetails();\n  }\n\n  displayOverviewHeader(location = null) {\n    const currentOverview = this.getAPI.getCurrentOverview();\n    // console.log(currentOverview);\n    const searchedLocation = location\n      ? currentOverview.address\n      : this.getAPI.getFormattedLocation(currentOverview.timezone);\n\n    // console.log(searchedLocation);\n    this.displayLocalTimezone(searchedLocation);\n    this.displayLocalWeatherCondition(currentOverview.localDescription);\n    this.displayCurrentWeatherIcon(currentOverview.weatherIcon);\n    this.displayCurrentDatetime();\n  }\n\n  displaytWeatherDetails() {\n    const todayWeatherDiv = document.querySelector(\".today-weather\");\n    const todayTempUnitSpans = Array.from(\n      todayWeatherDiv.querySelectorAll(\".temperature-unit\")\n    );\n\n    const todayDetails = todayWeatherDiv.querySelector(\".today-details\");\n    const todayMinTempSpan = todayDetails.querySelector(\".today-min-temp\");\n    const todayMaxTempSpan = todayDetails.querySelector(\".today-max-temp\");\n    const todayAvgTempSpan = todayDetails.querySelector(\".today-avg-temp\");\n    const todayHumiditySpan = todayDetails.querySelector(\".today-humidity\");\n    const todayUVindexSpan = todayDetails.querySelector(\".today-uvindex\");\n    const todaySunriseSpan = todayDetails.querySelector(\".today-sunrise\");\n    const todaySunsetSpan = todayDetails.querySelector(\".today-sunset\");\n\n    const todayWeather = this.getAPI.getTodayWeather();\n\n    todayMinTempSpan.textContent = (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(todayWeather.minTemp);\n    todayMaxTempSpan.textContent = (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(todayWeather.maxTemp);\n    todayAvgTempSpan.textContent = (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(todayWeather.avgTemp);\n    todayHumiditySpan.textContent = todayWeather.humidity;\n    todayUVindexSpan.textContent = todayWeather.uvindex;\n    todaySunriseSpan.textContent = todayWeather.sunrise;\n    todaySunsetSpan.textContent = todayWeather.sunset;\n\n    todayTempUnitSpans.forEach((todayTempUnitSpan) => {\n      todayTempUnitSpan.innerHTML = \"&deg;C\";\n    });\n  }\n\n  displayHourlyWeather() {\n    const hourlyWeathers = this.getAPI.getHourlyWeather();\n    const hourlyWrapper = document.querySelector(\".hourly-list\");\n\n    hourlyWrapper.innerHTML = \"\";\n\n    hourlyWeathers.forEach((hourlyWeather) => {\n      const hourlyWeatherDiv = document.createElement(\"div\");\n      const hourlySpan = document.createElement(\"div\");\n      const hourlyWeatherIcon = document.createElement(\"img\");\n      const hourlyConditionSpan = document.createElement(\"div\");\n      const hourlyWeatherDetails = document.createElement(\"div\");\n      const hourlyFeelsLikeTempSpan = document.createElement(\"div\");\n      const hourlyTempSpan = document.createElement(\"div\");\n      const hourlyHumiditySpan = document.createElement(\"div\");\n\n      hourlyWeatherDiv.classList.add(\"hourly-item\");\n      hourlyTempSpan.classList.add(\"hourly-temp\");\n      hourlyFeelsLikeTempSpan.classList.add(\"hourly-feelslike-temp\");\n      hourlySpan.classList.add(\"hourly-hour\");\n      hourlyHumiditySpan.classList.add(\"hourly-humidity\");\n      hourlyConditionSpan.classList.add(\"hourly-condition\");\n      hourlyWeatherDetails.classList.add(\"hourly-weather-details\");\n      hourlyWeatherIcon.classList.add(\"hourly-weather-icon\");\n\n      hourlySpan.innerHTML = hourlyWeather.hour.slice(0, 5);\n      hourlyConditionSpan.innerHTML = hourlyWeather.conditions;\n      hourlyTempSpan.innerHTML =\n        \"Temp: \" +\n        \"<span class ='hourly-temp-value'>\" +\n        (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(hourlyWeather.temp) +\n        \"</span>\" +\n        \"<span class ='temperature-unit'>\" +\n        \" &deg;C\" +\n        \"</span>\";\n      hourlyFeelsLikeTempSpan.innerHTML =\n        \"Feelslike: \" +\n        \"<span class ='hourly-feelslike-value'>\" +\n        (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(hourlyWeather.feelslike) +\n        \"</span>\" +\n        \"<span class='temperature-unit'>\" +\n        \" &deg;C\" +\n        \"</span>\";\n      hourlyHumiditySpan.innerHTML =\n        \"Hum: \" +\n        \"<span class='hourly-humidity-value'>\" +\n        hourlyWeather.humidity +\n        \"</span>\";\n      // console.log(hourlyWeather.icon);\n      __webpack_require__(\"./src/resources/icon/small-weather lazy recursive ^\\\\.\\\\/.*\\\\.png$\")(`./${hourlyWeather.icon}.png`)\n        .then((module) => {\n          hourlyWeatherIcon.src = module.default;\n        })\n        .catch((error) => {\n          hourlyWeatherIcon.src = _resources_icon_small_weather_cloudy_png__WEBPACK_IMPORTED_MODULE_1__;\n          console.log(\"not found\" + error);\n        });\n\n      hourlyWeatherDiv.append(\n        hourlySpan,\n        hourlyWeatherIcon,\n        hourlyConditionSpan\n      );\n\n      hourlyWeatherDetails.append(\n        hourlyTempSpan,\n        hourlyFeelsLikeTempSpan,\n        hourlyHumiditySpan\n      );\n\n      hourlyWeatherDiv.appendChild(hourlyWeatherDetails);\n      hourlyWrapper.append(hourlyWeatherDiv);\n    });\n  }\n\n  displayDailyWeather() {\n    const dailyWeathers = this.getAPI.getdailyWeather();\n    const dailyWrapper = document.querySelector(\".daily-list\");\n    dailyWrapper.innerHTML = \"\";\n    // console.log(dailyWeathers);\n    dailyWeathers.forEach((dailyWeather) => {\n      const dailyWeatherDiv = document.createElement(\"div\");\n      const dailyConditionSpan = document.createElement(\"div\");\n      const dailyWeatherValuesDiv = document.createElement(\"div\");\n      const dailyMaxTempSpan = document.createElement(\"div\");\n      const dailyMinTempSpan = document.createElement(\"div\");\n      const dailyFeelsLikeTempSpan = document.createElement(\"div\");\n      const dailySpan = document.createElement(\"div\");\n      const weatherIcon = document.createElement(\"img\");\n      const dailyHumiditySpan = document.createElement(\"div\");\n\n      dailyWeatherDiv.classList.add(\"daily-item\");\n      dailySpan.classList.add(\"daily-hour\");\n      weatherIcon.classList.add(\"daily-weather-icon\");\n      dailyConditionSpan.classList.add(\"daily-condition\");\n      dailyWeatherValuesDiv.classList.add(\"daily-weather-values\");\n      dailyMaxTempSpan.classList.add(\"daily-max-temp\");\n      dailyMinTempSpan.classList.add(\"daily-min-temp\");\n      dailyFeelsLikeTempSpan.classList.add(\"daily-feelslike-temp\");\n      dailyHumiditySpan.classList.add(\"daily-humidity\");\n\n      dailySpan.textContent = dailyWeather.day;\n      // console.log(dailyWeather.weatherIcon);\n      // import(\n      //   `../resources/icon/small-weather/${dailyWeather.weatherIcon}.png`\n      // ).then((module) => {\n      //   weatherIcon.src = module.default;\n      // });\n\n      __webpack_require__(\"./src/resources/icon/small-weather lazy recursive ^\\\\.\\\\/.*\\\\.png$\")(`./${dailyWeather.weatherIcon}.png`)\n        .then((module) => {\n          weatherIcon.src = module.default;\n        })\n        .catch((error) => {\n          weatherIcon.src = _resources_icon_small_weather_cloudy_png__WEBPACK_IMPORTED_MODULE_1__;\n          console.log(\"not found\" + error);\n        });\n\n      dailyConditionSpan.innerHTML = dailyWeather.conditions;\n      dailyMaxTempSpan.innerHTML =\n        \"Max: \" +\n        \"<span class='daily-max-temp-value'>\" +\n        (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(dailyWeather.maxTemp) +\n        \"</span>\" +\n        \"<span class='temperature-unit'>\" +\n        \" &deg;C\" +\n        \"</span>\";\n      dailyMinTempSpan.innerHTML =\n        \"Min: \" +\n        \"<span class = 'daily-min-temp-value'>\" +\n        (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(dailyWeather.minTemp) +\n        \"</span>\" +\n        \"<span class = 'temperature-unit'>\" +\n        \" &deg;C\" +\n        \"</span>\";\n      dailyFeelsLikeTempSpan.innerHTML =\n        \"Feelslike: \" +\n        \"<span class='daily-feelslike-temp-value'>\" +\n        (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(dailyWeather.feelslike) +\n        \"</span>\" +\n        \"<span class='temperature-unit'>\" +\n        \" &deg;C\" +\n        \"</span>\";\n      dailyHumiditySpan.innerHTML =\n        \"Hum: \" +\n        \"<span class='daily-humidity-value'>\" +\n        dailyWeather.humidity +\n        \"</span>\";\n\n      dailyWeatherDiv.append(dailySpan, weatherIcon, dailyConditionSpan);\n\n      dailyWeatherValuesDiv.append(\n        dailyMaxTempSpan,\n        dailyMinTempSpan,\n        dailyFeelsLikeTempSpan,\n        dailyHumiditySpan\n      );\n\n      dailyWeatherDiv.appendChild(dailyWeatherValuesDiv);\n\n      dailyWrapper.append(dailyWeatherDiv);\n    });\n  }\n\n  displayBackgroundPhoto() {\n    const backgroundDiv = document.querySelector(\"section\");\n    // console.log(this.getAPI.getBackgroundURL());\n    backgroundDiv.style.backgroundImage = `url(${this.getAPI.getBackgroundURL()}`;\n  }\n\n  displayCurrentWeatherIcon(weatherIcon) {\n    const weatherIconDiv = document.querySelector(\".description-weather-icon\");\n    weatherIconDiv.innerHTML = \"\";\n    const weatherIconImg = document.createElement(\"img\");\n\n    __webpack_require__(\"./src/resources/icon/large-weather lazy recursive ^\\\\.\\\\/.*\\\\.png$\")(`./${weatherIcon}.png`)\n      .then((module) => {\n        weatherIconImg.src = module.default;\n      })\n      .catch((error) => {\n        weatherIconImg.src = _resources_icon_small_weather_cloudy_png__WEBPACK_IMPORTED_MODULE_1__;\n        console.log(\"not found\" + error);\n      });\n\n    weatherIconDiv.appendChild(weatherIconImg);\n  }\n\n  displayCurrentDatetime() {\n    const currentDaySpan = document.querySelector(\".today-date\");\n\n    // console.log(currentOverview);\n\n    const currentDateTime = new Date();\n    const dayOption = { weekday: \"long\" };\n    const monthOption = { month: \"long\" };\n\n    const currentDay = new Intl.DateTimeFormat(\"en-US\", dayOption).format(\n      currentDateTime\n    );\n\n    const currentMonth = new Intl.DateTimeFormat(\"en-US\", monthOption).format(\n      currentDateTime\n    );\n\n    let formatedCurrentDateTime =\n      currentDay +\n      \",\" +\n      currentDateTime.getDate() +\n      \" \" +\n      currentMonth +\n      \" \" +\n      \"at\" +\n      \" \" +\n      currentDateTime.getHours() +\n      \":\" +\n      currentDateTime.getMinutes();\n    currentDaySpan.textContent = formatedCurrentDateTime;\n  }\n\n  displayLocalWeatherCondition(localDescription) {\n    const localWeatherCondition = document.querySelector(\".local-description\");\n    localWeatherCondition.textContent = localDescription;\n  }\n\n  displayLocalTimezone(localTimezone) {\n    const currentOverviewDiv = document.querySelector(\".current-overview\");\n    this.timezoneTitle.textContent = localTimezone;\n  }\n\n  displaySearchResult() {\n    const searchForm = document.querySelector(\".search-form\");\n    const searchLocationInput = searchForm.querySelector(\".search-location\");\n    const hourlyList = document.querySelector(\".hourly-list\");\n    const dailyList = document.querySelector(\".daily-list\");\n\n    const hourlyItemDiv = hourlyList.querySelectorAll(\".hourly-item\");\n    const dailyItemDiv = dailyList.querySelectorAll(\".daily-item\");\n\n    // console.log(searchForm);\n    searchForm.addEventListener(\"submit\", async (event) => {\n      event.preventDefault();\n      // console.log(searchLocationInput.value);\n      await this.getAPI.setWeatherForecast(searchLocationInput.value);\n      await this.getAPI.setBackgroundWeather(this.getAPI.getSearchedLocation());\n      const searchedLocation = this.getAPI.getSearchedLocation();\n      const hourlyWeathers = this.getAPI.getHourlyWeather();\n      const dailyWeathers = this.getAPI.getdailyWeather();\n\n      this.displayOverview(searchedLocation);\n\n      hourlyItemDiv.forEach((hourlyItem, index) => {\n        hourlyItem.querySelector(\".hourly-condition\").textContent =\n          hourlyWeathers[index].conditions;\n        hourlyItem.querySelector(\".hourly-temp-value\").textContent =\n          (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(hourlyWeathers[index].temp);\n        hourlyItem.querySelector(\".hourly-feelslike-value\").textContent =\n          (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(hourlyWeathers[index].feelslike);\n        hourlyItem.querySelector(\".hourly-humidity-value\").textContent =\n          hourlyWeathers[index].humidity;\n      });\n\n      dailyItemDiv.forEach((dailyItem, index) => {\n        dailyItem.querySelector(\".daily-max-temp-value\").textContent =\n          (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(dailyWeathers[index].maxTemp);\n        dailyItem.querySelector(\".daily-min-temp-value\").textContent =\n          (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(dailyWeathers[index].minTemp);\n        dailyItem.querySelector(\".daily-feelslike-temp-value\").textContent =\n          (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(dailyWeathers[index].feelslike);\n        dailyItem.querySelector(\".daily-humidity-value\").textContent =\n          dailyWeathers[index].humidity;\n      });\n\n      // this.displayHourlyWeather();\n      // this.displayDailyWeather();\n      this.displayBackgroundPhoto();\n    });\n  }\n\n  convertUnit() {\n    const todayDetailsDiv = document.querySelector(\".today-details\");\n    const todayMinTempSpan = todayDetailsDiv.querySelector(\".today-min-temp\");\n    const todayMaxTempSpan = todayDetailsDiv.querySelector(\".today-max-temp\");\n    const todayAvgTempSpan = todayDetailsDiv.querySelector(\".today-avg-temp\");\n\n    const hourlyListDiv = document.querySelector(\".hourly-list\");\n    const hourlyTempValueSpans =\n      hourlyListDiv.querySelectorAll(\".hourly-temp-value\");\n    const hourlyFeelsLikeTempSpans = hourlyListDiv.querySelectorAll(\n      \".hourly-feelslike-value\"\n    );\n    const dailyListDiv = document.querySelector(\".daily-list\");\n\n    // const temperatureUnitSpans = Array.from(\n    //   hourlyListDiv.querySelectorAll(\".temperature-unit\")\n    // ).push(...Array.from(dailyListDiv.querySelectorAll(\".temperature-unit\")));\n    const todayTempUnitSpans = Array.from(\n      todayDetailsDiv.querySelectorAll(\".temperature-unit\")\n    );\n    const hourlyTempUnitSpans = Array.from(\n      hourlyListDiv.querySelectorAll(\".temperature-unit\")\n    );\n    const dailyTempUnitSpans = Array.from(\n      dailyListDiv.querySelectorAll(\".temperature-unit\")\n    );\n    const allTempUnitSpans = [\n      ...todayTempUnitSpans,\n      ...hourlyTempUnitSpans,\n      ...dailyTempUnitSpans,\n    ];\n\n    // tempUnitSpans.forEach((item) => {\n    //   console.log(item);\n    // });\n    // console.log(hourlyTempUnitSpans);\n    const dailyMaxTempSpans = dailyListDiv.querySelectorAll(\n      \".daily-max-temp-value\"\n    );\n    const dailyMinTempSpans = dailyListDiv.querySelectorAll(\n      \".daily-min-temp-value\"\n    );\n    const dailyFeelslikeTempSpans = dailyListDiv.querySelectorAll(\n      \".daily-feelslike-temp-value\"\n    );\n    // console.log(todayWeather);\n\n    const fahrenheitChoiceInput = document.querySelector(\"#fahrenheit\");\n    fahrenheitChoiceInput.addEventListener(\"change\", (event) => {\n      const todayWeather = this.getAPI.getTodayWeather();\n      const hourlyWeathers = this.getAPI.getHourlyWeather();\n      const dailyWeathers = this.getAPI.getdailyWeather();\n      // console.log(hourlyWeathers);\n      todayMinTempSpan.textContent = todayWeather.minTemp;\n      todayMaxTempSpan.textContent = todayWeather.maxTemp;\n      todayAvgTempSpan.textContent = todayWeather.avgTemp;\n      // console.log(hourlyTempValueSpans);\n      hourlyTempValueSpans.forEach((hourlyTempSpan, index) => {\n        hourlyTempSpan.textContent = hourlyWeathers[index].temp;\n        // console.log(hourlyTempSpan.textContent);\n      });\n\n      hourlyFeelsLikeTempSpans.forEach((hourlyTempSpan, index) => {\n        hourlyTempSpan.textContent = hourlyWeathers[index].feelslike;\n      });\n\n      allTempUnitSpans.forEach((temperatureUnitSpan) => {\n        temperatureUnitSpan.innerHTML = \"&deg;F\";\n      });\n\n      dailyMaxTempSpans.forEach((dailyMaxTempSpan, index) => {\n        dailyMaxTempSpan.textContent = dailyWeathers[index].maxTemp;\n      });\n\n      dailyMinTempSpans.forEach((dailyMinTempSpan, index) => {\n        dailyMinTempSpan.textContent = dailyWeathers[index].minTemp;\n      });\n\n      dailyFeelslikeTempSpans.forEach((dailyFeelslikeTempSpan, index) => {\n        dailyFeelslikeTempSpan.textContent = dailyWeathers[index].feelslike;\n      });\n    });\n\n    // const tempRadioInputs = document.querySelectorAll(\n    //   \"input[name=temperature]\"\n    // );\n\n    // tempRadioInputs.forEach((tempRadioInput) => {\n    //   if (tempRadioInput.value == \"fahrenheit\" && tempRadioInput.checked) {\n    //     console.log(tempRadioInput.value);\n    //   } else if (tempRadioInput.value == \"celsius\" && tempRadioInput.checked) {\n    //     console.log(tempRadioInput.value);\n    //   }\n\n    // });\n\n    const celsiusChoiceInput = document.querySelector(\"#celsius\");\n    celsiusChoiceInput.addEventListener(\"change\", (event) => {\n      // const todayWeather = this.getAPI.getTodayWeather();\n      // const hourlyWeathers = this.getAPI.getHourlyWeather();\n\n      // todayMinTempSpan.textContent = fahrenheitToCelsius(todayWeather.minTemp);\n      // todayMaxTempSpan.textContent = fahrenheitToCelsius(todayWeather.maxTemp);\n      // todayAvgTempSpan.textContent = fahrenheitToCelsius(todayWeather.avgTemp);\n\n      // hourlyTempSpans.forEach((hourlyTempSpan, index) => {\n      //   hourlyTempSpan.textContent = fahrenheitToCelsius(\n      //     hourlyWeathers[index].temp\n      //   );\n      // });\n\n      const todayWeather = this.getAPI.getTodayWeather();\n      const hourlyWeathers = this.getAPI.getHourlyWeather();\n      const dailyWeathers = this.getAPI.getdailyWeather();\n\n      todayMinTempSpan.textContent = (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(todayWeather.minTemp);\n      todayMaxTempSpan.textContent = (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(todayWeather.maxTemp);\n      todayAvgTempSpan.textContent = (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(todayWeather.avgTemp);\n\n      hourlyTempValueSpans.forEach((hourlyTempSpan, index) => {\n        hourlyTempSpan.textContent = (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(\n          hourlyWeathers[index].temp\n        );\n      });\n\n      hourlyFeelsLikeTempSpans.forEach((hourlyTempSpan, index) => {\n        hourlyTempSpan.textContent = (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(\n          hourlyWeathers[index].feelslike\n        );\n      });\n\n      allTempUnitSpans.forEach((temperatureUnitSpan) => {\n        temperatureUnitSpan.innerHTML = \"&deg;C\";\n      });\n\n      dailyMaxTempSpans.forEach((dailyMaxTempSpan, index) => {\n        dailyMaxTempSpan.textContent = (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(\n          dailyWeathers[index].maxTemp\n        );\n      });\n\n      dailyMinTempSpans.forEach((dailyMinTempSpan, index) => {\n        dailyMinTempSpan.textContent = (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(\n          dailyWeathers[index].minTemp\n        );\n      });\n\n      dailyFeelslikeTempSpans.forEach((dailyFeelslikeTempSpan, index) => {\n        dailyFeelslikeTempSpan.textContent = (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius)(\n          dailyWeathers[index].feelslike\n        );\n      });\n    });\n  }\n}\n\n\n\n//# sourceURL=webpack://weather-app-project/./src/modules/ReportDOM.js?");

/***/ }),

/***/ "./src/resources/fonts/Poppins-Medium.ttf":
/*!************************************************!*\
  !*** ./src/resources/fonts/Poppins-Medium.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"673ed42382ab264e0bf5.ttf\";\n\n//# sourceURL=webpack://weather-app-project/./src/resources/fonts/Poppins-Medium.ttf?");

/***/ }),

/***/ "./src/resources/fonts/Poppins-Regular.ttf":
/*!*************************************************!*\
  !*** ./src/resources/fonts/Poppins-Regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"35d26b781dc5fda684cc.ttf\";\n\n//# sourceURL=webpack://weather-app-project/./src/resources/fonts/Poppins-Regular.ttf?");

/***/ }),

/***/ "./src/resources/fonts/Poppins-SemiBold.ttf":
/*!**************************************************!*\
  !*** ./src/resources/fonts/Poppins-SemiBold.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ac8d04b620e54be9b0f0.ttf\";\n\n//# sourceURL=webpack://weather-app-project/./src/resources/fonts/Poppins-SemiBold.ttf?");

/***/ }),

/***/ "./src/resources/icon/large-weather lazy recursive ^\\.\\/.*\\.png$":
/*!*******************************************************************************!*\
  !*** ./src/resources/icon/large-weather/ lazy ^\.\/.*\.png$ namespace object ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./clear-night.png\": [\n\t\t\"./src/resources/icon/large-weather/clear-night.png\",\n\t\t\"src_resources_icon_large-weather_clear-night_png\"\n\t],\n\t\"./cloudy.png\": [\n\t\t\"./src/resources/icon/large-weather/cloudy.png\",\n\t\t\"src_resources_icon_large-weather_cloudy_png\"\n\t],\n\t\"./partly-cloudy-day.png\": [\n\t\t\"./src/resources/icon/large-weather/partly-cloudy-day.png\",\n\t\t\"src_resources_icon_large-weather_partly-cloudy-day_png\"\n\t],\n\t\"./rain.png\": [\n\t\t\"./src/resources/icon/large-weather/rain.png\",\n\t\t\"src_resources_icon_large-weather_rain_png\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__.t(id, 1 | 16);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"./src/resources/icon/large-weather lazy recursive ^\\\\.\\\\/.*\\\\.png$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://weather-app-project/./src/resources/icon/large-weather/_lazy_^\\.\\/.*\\.png$_namespace_object?");

/***/ }),

/***/ "./src/resources/icon/small-weather lazy recursive ^\\.\\/.*\\.png$":
/*!*******************************************************************************!*\
  !*** ./src/resources/icon/small-weather/ lazy ^\.\/.*\.png$ namespace object ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./clear-night.png\": [\n\t\t\"./src/resources/icon/small-weather/clear-night.png\",\n\t\t\"src_resources_icon_small-weather_clear-night_png\"\n\t],\n\t\"./cloudy.png\": [\n\t\t\"./src/resources/icon/small-weather/cloudy.png\"\n\t],\n\t\"./partly-cloudy-day.png\": [\n\t\t\"./src/resources/icon/small-weather/partly-cloudy-day.png\",\n\t\t\"src_resources_icon_small-weather_partly-cloudy-day_png\"\n\t],\n\t\"./partly-cloudy-night.png\": [\n\t\t\"./src/resources/icon/small-weather/partly-cloudy-night.png\",\n\t\t\"src_resources_icon_small-weather_partly-cloudy-night_png\"\n\t],\n\t\"./rain.png\": [\n\t\t\"./src/resources/icon/small-weather/rain.png\",\n\t\t\"src_resources_icon_small-weather_rain_png\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {\n\t\treturn __webpack_require__.t(id, 1 | 16);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"./src/resources/icon/small-weather lazy recursive ^\\\\.\\\\/.*\\\\.png$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://weather-app-project/./src/resources/icon/small-weather/_lazy_^\\.\\/.*\\.png$_namespace_object?");

/***/ }),

/***/ "./src/resources/icon/small-weather/cloudy.png":
/*!*****************************************************!*\
  !*** ./src/resources/icon/small-weather/cloudy.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"da9c1c2d22134e25b44e.png\";\n\n//# sourceURL=webpack://weather-app-project/./src/resources/icon/small-weather/cloudy.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "weather-app-project:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweather_app_project"] = self["webpackChunkweather_app_project"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;