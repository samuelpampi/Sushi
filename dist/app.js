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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const util=__webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst pedido=[];\nconst MAX_PEDIDOS=3;\nconst carrito=document.getElementById('carrito');\nvar sushi_items = document.getElementsByClassName(\"sushi_item\");\n\nfunction nuevoElm(elm){\n    if(pedido.length<MAX_PEDIDOS){\n        carrito.innerHTML=carrito.innerHTML+\"<span>\"+elm.currentTarget.innerHTML+\"</span>\";\n        pedido.push(elm.currentTarget);\n        util.log(\"[NUEVO] \"+elm.currentTarget);\n    }else{\n        util.log(\"[CARRRITO] Carrito lleno\");\n    }\n}\n\nfunction borrarElm(ind){\n    pedido.splice(ind,1);\n    util.log(\"[BORRADO] \"+ind);\n}\n\nfor (var i = 0; i < sushi_items.length; i++) {\n    sushi_items[i].addEventListener('click', nuevoElm, false);\n}\n\n//# sourceURL=webpack://sushi/./src/app.js?");

/***/ }),

/***/ "./src/register.js":
/*!*************************!*\
  !*** ./src/register.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\r\n\r\nfunction registroPerfil(){\r\n    util.log(\"[REGISTRO] email\");   \r\n}\r\n\r\nregistroPerfil(\"samuel.pampillon@gmail.com\")\n\n//# sourceURL=webpack://sushi/./src/register.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = {\r\n    log:(texto)=>{\r\n        console.log(texto);\r\n    }\r\n}\n\n//# sourceURL=webpack://sushi/./src/utils.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/app.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/register.js");
/******/ 	
/******/ })()
;