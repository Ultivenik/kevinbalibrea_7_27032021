/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://package/./src/style.css?");

/***/ }),

/***/ "./src/Pages/MainPage.js":
/*!*******************************!*\
  !*** ./src/Pages/MainPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainPage)\n/* harmony export */ });\n/* harmony import */ var _js_Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/Element */ \"./src/js/Element.js\");\n/* harmony import */ var _js_Img__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/Img */ \"./src/js/Img.js\");\n\r\n\r\n\r\nclass MainPage\r\n{\r\n    static create()\r\n    {\r\n        const header = _js_Element__WEBPACK_IMPORTED_MODULE_0__.default.create(\"header\")\r\n        const img = _js_Img__WEBPACK_IMPORTED_MODULE_1__.default.create({\r\n            nameClass:\"mx-auto, d-block, w-3\",\r\n            source: \"./logo.png\",\r\n            altText: \"logo\"})\r\n            console.log(img);\r\n    }\r\n}\n\n//# sourceURL=webpack://package/./src/Pages/MainPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

eval("/* harmony import */ var _Pages_MainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pages/MainPage */ \"./src/Pages/MainPage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\nclass App {\r\n    static create()\r\n    {\r\n        _Pages_MainPage__WEBPACK_IMPORTED_MODULE_0__.default.create()\r\n    }\r\n}\r\ndocument.addEventListener(\"DOMContentLoaded\", App.create)\n\n//# sourceURL=webpack://package/./src/index.js?");

/***/ }),

/***/ "./src/js/Element.js":
/*!***************************!*\
  !*** ./src/js/Element.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Element)\n/* harmony export */ });\nclass Element {\r\n    static create(elm, nameClass)\r\n    {\r\n        const Elm = document.createElement(elm)\r\n        Elm.classList.add(nameClass)\r\n        return Elm\r\n    }\r\n}\n\n//# sourceURL=webpack://package/./src/js/Element.js?");

/***/ }),

/***/ "./src/js/Img.js":
/*!***********************!*\
  !*** ./src/js/Img.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Img)\n/* harmony export */ });\nclass Img {\r\n    static create({nameClass, source, altText})\r\n    {\r\n        const Elm = document.createElement(\"img\")\r\n        Elm.classList.add(nameClass)\r\n        Elm.src = source\r\n        Elm.alt = altText\r\n        return Elm\r\n    }\r\n}\n\n//# sourceURL=webpack://package/./src/js/Img.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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