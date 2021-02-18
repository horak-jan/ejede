(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./client/src/views/Car.js":
/*!*********************************!*\
  !*** ./client/src/views/Car.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ \"./client/src/state.js\");\n\n\n\nconst Car = () => {\n  const [{\n    selectedCar\n  }, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_1__[\"useStateValue\"])();\n  let {\n    make,\n    year,\n    model,\n    seats,\n    doors,\n    rating,\n    range\n  } = selectedCar.car;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, make, \" \", model));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Car);\n\n//# sourceURL=webpack:///./client/src/views/Car.js?");

/***/ })

}]);