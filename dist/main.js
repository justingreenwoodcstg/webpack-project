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

/***/ "./src/game-engine.ts":
/*!****************************!*\
  !*** ./src/game-engine.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n\r\nvar CANVAS_ID = 'canvasGame';\r\nvar GameEngine = /** @class */ (function () {\r\n    function GameEngine() {\r\n        this.screenHeight = 0;\r\n        this.screenWidth = 0;\r\n        // run() {\r\n        //     this.initialize();\r\n        //     this.paint();\r\n        // }\r\n        this.enableLooping = false;\r\n    }\r\n    GameEngine.prototype.initialize = function () {\r\n        var _this = this;\r\n        this.canvasId = (0,nanoid__WEBPACK_IMPORTED_MODULE_0__.nanoid)(11);\r\n        this.body = document.getElementsByTagName(\"body\")[0];\r\n        this.body.style.padding = '0';\r\n        this.body.style.margin = '0';\r\n        this.body.style.overflow = 'hidden';\r\n        var canvas = document.createElement('canvas');\r\n        canvas.id = CANVAS_ID;\r\n        canvas.style.position = 'absolute';\r\n        canvas.style.top = '0';\r\n        canvas.style.left = '0';\r\n        canvas.style.display = 'block';\r\n        this.canvas = this.body.appendChild(canvas);\r\n        this.onWindowResized();\r\n        window.addEventListener(\"resize\", function () { _this.onWindowResized(); });\r\n    };\r\n    GameEngine.prototype.onWindowResized = function () {\r\n        this.canvas.height = this.screenHeight = window.innerHeight || document.body.clientHeight;\r\n        this.canvas.width = this.screenWidth = window.innerWidth || document.body.clientWidth;\r\n        this.paint();\r\n    };\r\n    GameEngine.prototype.startLoop = function () {\r\n        if (!this.enableLooping) {\r\n            this.enableLooping = true;\r\n            this.loop(Date.now());\r\n        }\r\n    };\r\n    GameEngine.prototype.pauseLoop = function () {\r\n    };\r\n    GameEngine.prototype.resetLoop = function () {\r\n    };\r\n    GameEngine.prototype.loop = function (timestamp) {\r\n        if (this.enableLooping) {\r\n            // this.updateGameData();\r\n            // this.paint();\r\n            window.requestAnimationFrame(this.loop);\r\n        }\r\n    };\r\n    // function update(progress) {\r\n    //     // Update the state of the world for the elapsed time since last render\r\n    //   }\r\n    //   function draw() {\r\n    //     // Draw the state of the world\r\n    //   }\r\n    //   function loop(timestamp) {\r\n    //     var progress = timestamp - lastRender\r\n    //     update(progress)\r\n    //     draw()\r\n    //     lastRender = timestamp\r\n    //     window.requestAnimationFrame(loop)\r\n    //   }\r\n    //   var lastRender = 0\r\n    //   window.requestAnimationFrame(loop)\r\n    GameEngine.prototype.paint = function () {\r\n        if (!this.paintingContext)\r\n            this.paintingContext = this.canvas.getContext(\"2d\");\r\n        if (this.paintingContext) {\r\n            this.paintingContext.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n            this.paintingContext.fillStyle = \"red\";\r\n            this.paintingContext.fillRect(0, 0, this.canvas.width, this.canvas.height);\r\n            this.paintingContext.lineWidth = 4;\r\n            this.paintingContext.strokeStyle = \"orange\";\r\n            this.paintingContext.beginPath();\r\n            this.paintingContext.rect(0, 0, this.canvas.width, this.canvas.height);\r\n            this.paintingContext.stroke();\r\n            if (this.paintingContext.isLoaded) {\r\n                for (var i = 0; i < 10; i++) {\r\n                    //clipX, clipY, clipW, clipH, x, y, h, w\r\n                    this.paintingContext.drawImage(tiles, i * 32, 0, 32, 32, i * 32 * scale, 0, 32 * scale, 32 * scale);\r\n                }\r\n            }\r\n        }\r\n    };\r\n    return GameEngine;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameEngine);\r\n\n\n//# sourceURL=webpack://justin-game-engine/./src/game-engine.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-engine */ \"./src/game-engine.ts\");\n\r\nvar game = new _game_engine__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\ngame.initialize();\r\n\n\n//# sourceURL=webpack://justin-game-engine/./src/index.ts?");

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"customAlphabet\": () => (/* binding */ customAlphabet),\n/* harmony export */   \"customRandom\": () => (/* binding */ customRandom),\n/* harmony export */   \"nanoid\": () => (/* binding */ nanoid),\n/* harmony export */   \"random\": () => (/* binding */ random),\n/* harmony export */   \"urlAlphabet\": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)\n/* harmony export */ });\n/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ \"./node_modules/nanoid/url-alphabet/index.js\");\n\nlet random = bytes => crypto.getRandomValues(new Uint8Array(bytes))\nlet customRandom = (alphabet, defaultSize, getRandom) => {\n  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1\n  let step = -~((1.6 * mask * defaultSize) / alphabet.length)\n  return (size = defaultSize) => {\n    let id = ''\n    while (true) {\n      let bytes = getRandom(step)\n      let j = step\n      while (j--) {\n        id += alphabet[bytes[j] & mask] || ''\n        if (id.length === size) return id\n      }\n    }\n  }\n}\nlet customAlphabet = (alphabet, size = 21) =>\n  customRandom(alphabet, size, random)\nlet nanoid = (size = 21) =>\n  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {\n    byte &= 63\n    if (byte < 36) {\n      id += byte.toString(36)\n    } else if (byte < 62) {\n      id += (byte - 26).toString(36).toUpperCase()\n    } else if (byte > 62) {\n      id += '-'\n    } else {\n      id += '_'\n    }\n    return id\n  }, '')\n\n\n//# sourceURL=webpack://justin-game-engine/./node_modules/nanoid/index.browser.js?");

/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"urlAlphabet\": () => (/* binding */ urlAlphabet)\n/* harmony export */ });\nconst urlAlphabet =\n  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'\n\n\n//# sourceURL=webpack://justin-game-engine/./node_modules/nanoid/url-alphabet/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;