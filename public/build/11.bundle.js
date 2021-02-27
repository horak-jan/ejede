(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./client/src/components/ui/BrowseFilter.js":
/*!**************************************************!*\
  !*** ./client/src/components/ui/BrowseFilter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst BrowseFilter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"browse-filter\"\n  }, \"yo filters here\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BrowseFilter);\n\n//# sourceURL=webpack:///./client/src/components/ui/BrowseFilter.js?");

/***/ }),

/***/ "./client/src/components/ui/BrowseTop.js":
/*!***********************************************!*\
  !*** ./client/src/components/ui/BrowseTop.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst BrowseTop = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"browse-top\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"tak tady neco bude\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BrowseTop);\n\n//# sourceURL=webpack:///./client/src/components/ui/BrowseTop.js?");

/***/ }),

/***/ "./client/src/components/ui/SingleCar.js":
/*!***********************************************!*\
  !*** ./client/src/components/ui/SingleCar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state */ \"./client/src/state.js\");\n/* harmony import */ var _SingleCarContentText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SingleCarContentText */ \"./client/src/components/ui/SingleCarContentText.js\");\n/* harmony import */ var _SingleCarContentTablet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SingleCarContentTablet.js */ \"./client/src/components/ui/SingleCarContentTablet.js\");\n\n\n\n\n\n\nconst SingleCar = props => {\n  let {\n    make,\n    year,\n    model,\n    seats,\n    doors,\n    rating,\n    range,\n    image\n  } = props.car;\n  const [{\n    selectedCar\n  }, dispatch] = Object(_state__WEBPACK_IMPORTED_MODULE_2__[\"useStateValue\"])();\n  let history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useHistory\"])();\n\n  const pickThisCar = async data => {\n    try {\n      dispatch({\n        type: \"pickCar\",\n        setCar: data\n      }); //redirect to one house\n\n      history.push(\"/car\");\n    } catch (error) {\n      console.log(error);\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"singleCar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, make, \" \", model), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"singleCar-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"singleCar-content-img\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: image[0],\n    alt: make\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleCarContentTablet_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleCarContentText__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    seats: seats,\n    doors: doors,\n    range: range\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"singleCar-bottom\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Z\\xE1kaznick\\xE9 hodnocen\\xED \", rating, \"*\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: () => pickThisCar(props)\n  }, \"Rezervovat\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCar);\n\n//# sourceURL=webpack:///./client/src/components/ui/SingleCar.js?");

/***/ }),

/***/ "./client/src/components/ui/SingleCarContentTablet.js":
/*!************************************************************!*\
  !*** ./client/src/components/ui/SingleCarContentTablet.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst SingleCarContentTablet = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"singleCar-content-tablet\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://img.icons8.com/color/48/000000/checked-2--v1.png\"\n  }), \" \", \"Zimn\\xED v\\xFDbava\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://img.icons8.com/color/48/000000/checked-2--v1.png\"\n  }), \" \", \"Dezinfikovan\\xE9 auto\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://img.icons8.com/color/48/000000/checked-2--v1.png\"\n  }), \" \", \"Bez limitu najet\\xFDch kilometr\\u016F\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCarContentTablet);\n\n//# sourceURL=webpack:///./client/src/components/ui/SingleCarContentTablet.js?");

/***/ }),

/***/ "./client/src/components/ui/SingleCarContentText.js":
/*!**********************************************************!*\
  !*** ./client/src/components/ui/SingleCarContentText.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst SingleCarContentText = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"singleCar-content-text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://img.icons8.com/ios-glyphs/24/000000/passenger.png\",\n    alt: \"sedadla\"\n  }), props.seats), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://img.icons8.com/material-rounded/24/000000/car-door.png\",\n    alt: \"doors\"\n  }), props.doors), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://img.icons8.com/windows/32/000000/full-battery.png\",\n    alt: \"dojezd\"\n  }), props.range, \"Km\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://img.icons8.com/fluent-systems-regular/24/000000/cooling.png\",\n    alt: \"klimatizace\"\n  }), \"A/C\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCarContentText);\n\n//# sourceURL=webpack:///./client/src/components/ui/SingleCarContentText.js?");

/***/ }),

/***/ "./client/src/views/Browse.js":
/*!************************************!*\
  !*** ./client/src/views/Browse.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_SingleCar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/SingleCar */ \"./client/src/components/ui/SingleCar.js\");\n/* harmony import */ var _components_ui_BrowseTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/BrowseTop */ \"./client/src/components/ui/BrowseTop.js\");\n/* harmony import */ var _components_ui_BrowseFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/BrowseFilter */ \"./client/src/components/ui/BrowseFilter.js\");\n\n\n\n\n\n\nconst Browse = () => {\n  const [cars, setCars] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [page, setPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1);\n  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  const [isError, setIsError] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [sortType, setSortType] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"color\");\n  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    //nacti vse z db\n    async function getData() {\n      setIsError(false);\n\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/api/car?page=${page}`);\n        setCars(res.data.car);\n      } catch (error) {\n        setIsError(true);\n      }\n\n      setIsLoading(false);\n    }\n\n    getData();\n  }, [page]); //filters\n  // make: \"make\",\n  //       color: \"color\",\n  //       model: \"model\",\n  // SORT\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const sortCars = type => {\n      const types = {\n        rating: \"rating\",\n        range: \"range\"\n      };\n      const sortProperty = types[type];\n      const sorted = [...cars].sort((a, b) => b[sortProperty] - a[sortProperty]);\n      setData(sorted);\n    };\n\n    sortCars(sortType);\n  }, [sortType]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"browse\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"browse-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ui_BrowseTop__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"hello lorem ipsum and so on an so forth\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ui_BrowseFilter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    onChange: e => setSortType(e.target.value)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"rating\"\n  }, \"Rating\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"range\"\n  }, \"dojezd\")), \"//vypis erroru\", isError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"N\\u011Bkde se stala chyba ...\"), isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"'Na\\u010D\\xEDt\\xE1m...'\") : data.length === 0 ? cars.map(car => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ui_SingleCar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    key: car._id,\n    car: car\n  })) : data.map(car => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ui_SingleCar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    key: car._id,\n    car: car\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Browse);\n\n//# sourceURL=webpack:///./client/src/views/Browse.js?");

/***/ })

}]);