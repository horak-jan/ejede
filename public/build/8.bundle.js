(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./client/src/components/ui/SingleCar.js":
/*!***********************************************!*\
  !*** ./client/src/components/ui/SingleCar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst SingleCar = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"im here\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCar);\n\n//# sourceURL=webpack:///./client/src/components/ui/SingleCar.js?");

/***/ }),

/***/ "./client/src/views/Browse.js":
/*!************************************!*\
  !*** ./client/src/views/Browse.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_SingleCar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/SingleCar */ \"./client/src/components/ui/SingleCar.js\");\n\n\n\n\nconst Browse = () => {\n  const [cars, setCars] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const [page, setPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1);\n  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  const [isError, setIsError] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    async function getData() {\n      setIsError(false);\n\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/api/car?page=${page}`);\n        setCars(res.data);\n      } catch (error) {\n        setIsError(true);\n      }\n\n      setIsLoading(false);\n    }\n  }, [page]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"browse\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"hello\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ui_SingleCar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Browse);\n\n//# sourceURL=webpack:///./client/src/views/Browse.js?");

/***/ })

}]);