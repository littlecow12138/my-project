/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/upload */ \"./node_modules/antd/lib/upload/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var _Users_jankinsun_Documents_learning_my_project_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var antd_lib_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/calendar */ \"./node_modules/antd/lib/calendar/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_articles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/articles */ \"./components/articles.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/seo */ \"./components/seo.js\");\n/* harmony import */ var _assets_player_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/player.png */ \"./assets/player.png\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/jankinsun/Documents/learning/my-project/frontend/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_jankinsun_Documents_learning_my_project_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar getImgStr = function getImgStr(path) {\n  return \"http://localhost:1337\" + path;\n};\n\nvar Home = function Home(_ref) {\n  _s();\n\n  var fields = _ref.fields,\n      articles = _ref.articles,\n      categories = _ref.categories,\n      homepage = _ref.homepage;\n  console.log(fields);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),\n      fieldItem = _useState[0],\n      setFieldItem = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      fieldImg = _useState2[0],\n      setFieldImg = _useState2[1];\n\n  var props = {\n    name: \"file\",\n    action: \"\",\n    headers: {\n      authorization: \"authorization-text\"\n    }\n  };\n\n  var handleUpload = function handleUpload() {};\n\n  var handleChange = function handleChange(e) {\n    console.log(e);\n    setFieldImg(e.file);\n  };\n\n  var handleSubmit = function handleSubmit() {\n    console.log(fieldItem);\n    var formData = new FormData();\n    var time = new Date();\n    console.log(fieldImg);\n    formData.append(\"files.QRCode\", fieldImg.originFileObj, \"\".concat(time.getTime()));\n    formData.append(\"data\", JSON.stringify(fieldItem));\n    console.log(formData);\n    axios__WEBPACK_IMPORTED_MODULE_7___default().post(\"http://localhost:1337/api/fields\", formData).then(function (res) {\n      console.log(res);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_4__.default, {\n    categories: categories,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_5__.default, {\n      seo: homepage.attributes.seo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"js-title\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n        src: _assets_player_png__WEBPACK_IMPORTED_MODULE_6__.default.src,\n        style: {\n          width: \"2rem\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this), homepage.attributes.hero.title]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"js-container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"js-content\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"js-calendar\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_8__.default, {\n            fullscreen: false\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"js-form\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_9__.default, {\n            className: \"js-form-item\",\n            placeholder: \"\\u8BF7\\u8F93\\u5165\\u573A\\u5730\\u53F7\",\n            value: fieldItem === null || fieldItem === void 0 ? void 0 : fieldItem.index,\n            onChange: function onChange(e) {\n              return setFieldItem(function (data) {\n                console.log(data);\n                data.index = e.target.value;\n                return _objectSpread({}, data);\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_9__.default, {\n            className: \"js-form-item\",\n            placeholder: \"\\u8BF7\\u8F93\\u5165\\u5F00\\u59CB\\u65F6\\u95F4\",\n            value: fieldItem === null || fieldItem === void 0 ? void 0 : fieldItem.startTime,\n            onChange: function onChange(e) {\n              return setFieldItem(function (data) {\n                data.startTime = e.target.value;\n                return _objectSpread({}, data);\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_9__.default, {\n            className: \"js-form-item\",\n            placeholder: \"\\u8BF7\\u8F93\\u5165\\u7ED3\\u675F\\u65F6\\u95F4\",\n            value: fieldItem === null || fieldItem === void 0 ? void 0 : fieldItem.endTime,\n            onChange: function onChange(e) {\n              return setFieldItem(function (data) {\n                data.endTime = e.target.value;\n                return _objectSpread({}, data);\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_upload__WEBPACK_IMPORTED_MODULE_10__.default, _objectSpread(_objectSpread({}, props), {}, {\n            onChange: handleChange,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              className: \"js-upload\",\n              onClick: function onClick() {\n                return handleUpload();\n              },\n              children: \"\\u4E0A\\u4F20\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 15\n            }, _this)\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_button__WEBPACK_IMPORTED_MODULE_11__.default, {\n            type: \"primary\",\n            onClick: handleSubmit,\n            children: \"\\u63D0\\u4EA4\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"js-field-list\",\n          children: fields && fields.map(function (item, index) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              className: \"js-field-list-item\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"js-field-list-item-desc\",\n                children: [\"\\u573A\\u5730\\uFF1A\", item.attributes.index]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 110,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"js-field-list-item-desc\",\n                children: [\"\\u65F6\\u95F4\\uFF1A\", item.attributes.startTime.substring(0, 5), \" ~\", \" \", item.attributes.endTime.substring(0, 5)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 113,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"js-field-list-item-desc\",\n                children: [\"\\u5730\\u70B9\\uFF1A\", item.attributes.location]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 117,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"js-field-list-item-img\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                  src: getImgStr(item.attributes.QRCode.data.attributes.formats.thumbnail.url)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 121,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 120,\n                columnNumber: 21\n              }, _this)]\n            }, index, true, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 19\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"WF3drvlLNQEU0PHskEYHuU7YVwA=\");\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJnZXRJbWdTdHIiLCJwYXRoIiwiSG9tZSIsImZpZWxkcyIsImFydGljbGVzIiwiY2F0ZWdvcmllcyIsImhvbWVwYWdlIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwiZmllbGRJdGVtIiwic2V0RmllbGRJdGVtIiwiZmllbGRJbWciLCJzZXRGaWVsZEltZyIsInByb3BzIiwibmFtZSIsImFjdGlvbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiaGFuZGxlVXBsb2FkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImZpbGUiLCJoYW5kbGVTdWJtaXQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwidGltZSIsIkRhdGUiLCJhcHBlbmQiLCJvcmlnaW5GaWxlT2JqIiwiZ2V0VGltZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJlcnIiLCJhdHRyaWJ1dGVzIiwic2VvIiwidGl0bGVJY29uIiwid2lkdGgiLCJoZXJvIiwidGl0bGUiLCJpbmRleCIsImRhdGEiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJtYXAiLCJpdGVtIiwic3Vic3RyaW5nIiwibG9jYXRpb24iLCJRUkNvZGUiLCJmb3JtYXRzIiwidGh1bWJuYWlsIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBVTtBQUMxQixTQUFPLDBCQUEwQkEsSUFBakM7QUFDRCxDQUZEOztBQUlBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWdEO0FBQUE7O0FBQUEsTUFBN0NDLE1BQTZDLFFBQTdDQSxNQUE2QztBQUFBLE1BQXJDQyxRQUFxQyxRQUFyQ0EsUUFBcUM7QUFBQSxNQUEzQkMsVUFBMkIsUUFBM0JBLFVBQTJCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzNEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsTUFBWjs7QUFEMkQsa0JBRXpCTSwrQ0FBUSxDQUFDLEVBQUQsQ0FGaUI7QUFBQSxNQUVwREMsU0FGb0Q7QUFBQSxNQUV6Q0MsWUFGeUM7O0FBQUEsbUJBRzNCRiwrQ0FBUSxFQUhtQjtBQUFBLE1BR3BERyxRQUhvRDtBQUFBLE1BRzFDQyxXQUgwQzs7QUFJM0QsTUFBTUMsS0FBSyxHQUFHO0FBQ1pDLFFBQUksRUFBRSxNQURNO0FBRVpDLFVBQU0sRUFBRSxFQUZJO0FBR1pDLFdBQU8sRUFBRTtBQUNQQyxtQkFBYSxFQUFFO0FBRFI7QUFIRyxHQUFkOztBQU9BLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU0sQ0FBRSxDQUE3Qjs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDMUJkLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYSxDQUFaO0FBQ0FSLGVBQVcsQ0FBQ1EsQ0FBQyxDQUFDQyxJQUFILENBQVg7QUFDRCxHQUhEOztBQUlBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJoQixXQUFPLENBQUNDLEdBQVIsQ0FBWUUsU0FBWjtBQUNBLFFBQU1jLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosRUFBYjtBQUNBcEIsV0FBTyxDQUFDQyxHQUFSLENBQVlJLFFBQVo7QUFDQVksWUFBUSxDQUFDSSxNQUFULENBQWdCLGNBQWhCLEVBQWdDaEIsUUFBUSxDQUFDaUIsYUFBekMsWUFBMkRILElBQUksQ0FBQ0ksT0FBTCxFQUEzRDtBQUNBTixZQUFRLENBQUNJLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0JHLElBQUksQ0FBQ0MsU0FBTCxDQUFldEIsU0FBZixDQUF4QjtBQUNBSCxXQUFPLENBQUNDLEdBQVIsQ0FBWWdCLFFBQVo7QUFDQVMscURBQUEsQ0FDUSxrQ0FEUixFQUM0Q1QsUUFENUMsRUFFR1UsSUFGSCxDQUVRLFVBQUNDLEdBQUQsRUFBUztBQUNiNUIsYUFBTyxDQUFDQyxHQUFSLENBQVkyQixHQUFaO0FBQ0QsS0FKSCxXQUtTLFVBQUNDLEdBQUQsRUFBUztBQUNkN0IsYUFBTyxDQUFDQyxHQUFSLENBQVk0QixHQUFaO0FBQ0QsS0FQSDtBQVFELEdBaEJEOztBQWlCQSxzQkFDRSw4REFBQyx1REFBRDtBQUFRLGNBQVUsRUFBRS9CLFVBQXBCO0FBQUEsNEJBQ0UsOERBQUMsb0RBQUQ7QUFBSyxTQUFHLEVBQUVDLFFBQVEsQ0FBQytCLFVBQVQsQ0FBb0JDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBRUMsMkRBQVY7QUFBeUIsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRTtBQUFUO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVHbEMsUUFBUSxDQUFDK0IsVUFBVCxDQUFvQkksSUFBcEIsQ0FBeUJDLEtBRjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBTUU7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDZCQUVFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxpQ0FDRTtBQUFVLHNCQUFVLEVBQUU7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUMsU0FBZjtBQUFBLGtDQUNFO0FBQ0UscUJBQVMsRUFBQyxjQURaO0FBRUUsdUJBQVcsRUFBQyxzQ0FGZDtBQUdFLGlCQUFLLEVBQUVoQyxTQUFGLGFBQUVBLFNBQUYsdUJBQUVBLFNBQVMsQ0FBRWlDLEtBSHBCO0FBSUUsb0JBQVEsRUFBRSxrQkFBQ3RCLENBQUQ7QUFBQSxxQkFDUlYsWUFBWSxDQUFDLFVBQUNpQyxJQUFELEVBQVU7QUFDckJyQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlvQyxJQUFaO0FBQ0FBLG9CQUFJLENBQUNELEtBQUwsR0FBYXRCLENBQUMsQ0FBQ3dCLE1BQUYsQ0FBU0MsS0FBdEI7QUFDQSx5Q0FBWUYsSUFBWjtBQUNELGVBSlcsQ0FESjtBQUFBO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQWFFO0FBQ0UscUJBQVMsRUFBQyxjQURaO0FBRUUsdUJBQVcsRUFBQyw0Q0FGZDtBQUdFLGlCQUFLLEVBQUVsQyxTQUFGLGFBQUVBLFNBQUYsdUJBQUVBLFNBQVMsQ0FBRXFDLFNBSHBCO0FBSUUsb0JBQVEsRUFBRSxrQkFBQzFCLENBQUQ7QUFBQSxxQkFDUlYsWUFBWSxDQUFDLFVBQUNpQyxJQUFELEVBQVU7QUFDckJBLG9CQUFJLENBQUNHLFNBQUwsR0FBaUIxQixDQUFDLENBQUN3QixNQUFGLENBQVNDLEtBQTFCO0FBQ0EseUNBQVlGLElBQVo7QUFDRCxlQUhXLENBREo7QUFBQTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBYkYsZUF3QkU7QUFDRSxxQkFBUyxFQUFDLGNBRFo7QUFFRSx1QkFBVyxFQUFDLDRDQUZkO0FBR0UsaUJBQUssRUFBRWxDLFNBQUYsYUFBRUEsU0FBRix1QkFBRUEsU0FBUyxDQUFFc0MsT0FIcEI7QUFJRSxvQkFBUSxFQUFFLGtCQUFDM0IsQ0FBRDtBQUFBLHFCQUNSVixZQUFZLENBQUMsVUFBQ2lDLElBQUQsRUFBVTtBQUNyQkEsb0JBQUksQ0FBQ0ksT0FBTCxHQUFlM0IsQ0FBQyxDQUFDd0IsTUFBRixDQUFTQyxLQUF4QjtBQUNBLHlDQUFZRixJQUFaO0FBQ0QsZUFIVyxDQURKO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhCRixlQW1DRSxxSkFBWTlCLEtBQVo7QUFBbUIsb0JBQVEsRUFBRU0sWUFBN0I7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUEyQixxQkFBTyxFQUFFO0FBQUEsdUJBQU1ELFlBQVksRUFBbEI7QUFBQSxlQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkNGLGVBd0NFO0FBQVEsZ0JBQUksRUFBQyxTQUFiO0FBQXVCLG1CQUFPLEVBQUVJLFlBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFnREU7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxvQkFDR3BCLE1BQU0sSUFDTEEsTUFBTSxDQUFDOEMsR0FBUCxDQUFXLFVBQUNDLElBQUQsRUFBT1AsS0FBUCxFQUFpQjtBQUMxQixnQ0FDRTtBQUFpQix1QkFBUyxFQUFDLG9CQUEzQjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyx5QkFBZjtBQUFBLGlEQUNNTyxJQUFJLENBQUNiLFVBQUwsQ0FBZ0JNLEtBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQUsseUJBQVMsRUFBQyx5QkFBZjtBQUFBLGlEQUNNTyxJQUFJLENBQUNiLFVBQUwsQ0FBZ0JVLFNBQWhCLENBQTBCSSxTQUExQixDQUFvQyxDQUFwQyxFQUF1QyxDQUF2QyxDQUROLFFBQ21ELEdBRG5ELEVBRUdELElBQUksQ0FBQ2IsVUFBTCxDQUFnQlcsT0FBaEIsQ0FBd0JHLFNBQXhCLENBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGLGVBUUU7QUFBSyx5QkFBUyxFQUFDLHlCQUFmO0FBQUEsaURBQ01ELElBQUksQ0FBQ2IsVUFBTCxDQUFnQmUsUUFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVJGLGVBV0U7QUFBSyx5QkFBUyxFQUFDLHdCQUFmO0FBQUEsdUNBQ0U7QUFDRSxxQkFBRyxFQUFFcEQsU0FBUyxDQUNaa0QsSUFBSSxDQUFDYixVQUFMLENBQWdCZ0IsTUFBaEIsQ0FBdUJULElBQXZCLENBQTRCUCxVQUE1QixDQUF1Q2lCLE9BQXZDLENBQ0dDLFNBREgsQ0FDYUMsR0FGRDtBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYRjtBQUFBLGVBQVViLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQXNCRCxXQXZCRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdGRCxDQXpIRDs7R0FBTXpDLEk7O0tBQUFBLEk7O0FBb0pOLCtEQUFlQSxJQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIENhbGVuZGFyLCBJbnB1dCwgVXBsb2FkIH0gZnJvbSBcImFudGRcIlxuaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBBcnRpY2xlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9hcnRpY2xlc1wiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiXG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL3Nlb1wiXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi9saWIvYXBpXCJcbmltcG9ydCB0aXRsZUljb24gZnJvbSBcIi4uL2Fzc2V0cy9wbGF5ZXIucG5nXCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5jb25zdCBnZXRJbWdTdHIgPSAocGF0aCkgPT4ge1xuICByZXR1cm4gXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIiArIHBhdGhcbn1cblxuY29uc3QgSG9tZSA9ICh7IGZpZWxkcywgYXJ0aWNsZXMsIGNhdGVnb3JpZXMsIGhvbWVwYWdlIH0pID0+IHtcbiAgY29uc29sZS5sb2coZmllbGRzKVxuICBjb25zdCBbZmllbGRJdGVtLCBzZXRGaWVsZEl0ZW1dID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFtmaWVsZEltZywgc2V0RmllbGRJbWddID0gdXNlU3RhdGUoKVxuICBjb25zdCBwcm9wcyA9IHtcbiAgICBuYW1lOiBcImZpbGVcIixcbiAgICBhY3Rpb246IFwiXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgYXV0aG9yaXphdGlvbjogXCJhdXRob3JpemF0aW9uLXRleHRcIixcbiAgICB9LFxuICB9XG4gIGNvbnN0IGhhbmRsZVVwbG9hZCA9ICgpID0+IHt9XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBzZXRGaWVsZEltZyhlLmZpbGUpXG4gIH1cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZpZWxkSXRlbSlcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKClcbiAgICBjb25zb2xlLmxvZyhmaWVsZEltZylcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlcy5RUkNvZGVcIiwgZmllbGRJbWcub3JpZ2luRmlsZU9iaiwgYCR7dGltZS5nZXRUaW1lKCl9YClcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJkYXRhXCIsIEpTT04uc3RyaW5naWZ5KGZpZWxkSXRlbSkpXG4gICAgY29uc29sZS5sb2coZm9ybURhdGEpXG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9maWVsZHNcIiwgZm9ybURhdGEpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB9KVxuICB9XG4gIHJldHVybiAoXG4gICAgPExheW91dCBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfT5cbiAgICAgIDxTZW8gc2VvPXtob21lcGFnZS5hdHRyaWJ1dGVzLnNlb30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwianMtdGl0bGVcIj5cbiAgICAgICAgPGltZyBzcmM9e3RpdGxlSWNvbi5zcmN9IHN0eWxlPXt7IHdpZHRoOiBcIjJyZW1cIiB9fSAvPlxuICAgICAgICB7aG9tZXBhZ2UuYXR0cmlidXRlcy5oZXJvLnRpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzLWNvbnRhaW5lclwiPlxuICAgICAgICB7LyogPEFydGljbGVzIGFydGljbGVzPXthcnRpY2xlc30gLz4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianMtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianMtY2FsZW5kYXJcIj5cbiAgICAgICAgICAgIDxDYWxlbmRhciBmdWxsc2NyZWVuPXtmYWxzZX0+PC9DYWxlbmRhcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzLWZvcm1cIj5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqcy1mb3JtLWl0ZW1cIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWcuuWcsOWPt1wiXG4gICAgICAgICAgICAgIHZhbHVlPXtmaWVsZEl0ZW0/LmluZGV4fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgc2V0RmllbGRJdGVtKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgICAgZGF0YS5pbmRleCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImpzLWZvcm0taXRlbVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5byA5aeL5pe26Ze0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2ZpZWxkSXRlbT8uc3RhcnRUaW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgc2V0RmllbGRJdGVtKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICBkYXRhLnN0YXJ0VGltZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImpzLWZvcm0taXRlbVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl57uT5p2f5pe26Ze0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2ZpZWxkSXRlbT8uZW5kVGltZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgIHNldEZpZWxkSXRlbSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgZGF0YS5lbmRUaW1lID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmRhdGEgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VXBsb2FkIHsuLi5wcm9wc30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianMtdXBsb2FkXCIgb25DbGljaz17KCkgPT4gaGFuZGxlVXBsb2FkKCl9PlxuICAgICAgICAgICAgICAgIOS4iuS8oFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvVXBsb2FkPlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgIOaPkOS6pFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcy1maWVsZC1saXN0XCI+XG4gICAgICAgICAgICB7ZmllbGRzICYmXG4gICAgICAgICAgICAgIGZpZWxkcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwianMtZmllbGQtbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianMtZmllbGQtbGlzdC1pdGVtLWRlc2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICDlnLrlnLDvvJp7aXRlbS5hdHRyaWJ1dGVzLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcy1maWVsZC1saXN0LWl0ZW0tZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgIOaXtumXtO+8mntpdGVtLmF0dHJpYnV0ZXMuc3RhcnRUaW1lLnN1YnN0cmluZygwLCA1KX0gfntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5hdHRyaWJ1dGVzLmVuZFRpbWUuc3Vic3RyaW5nKDAsIDUpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcy1maWVsZC1saXN0LWl0ZW0tZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICAgIOWcsOeCue+8mntpdGVtLmF0dHJpYnV0ZXMubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzLWZpZWxkLWxpc3QtaXRlbS1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2dldEltZ1N0cihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hdHRyaWJ1dGVzLlFSQ29kZS5kYXRhLmF0dHJpYnV0ZXMuZm9ybWF0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aHVtYm5haWwudXJsXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gUnVuIEFQSSBjYWxscyBpbiBwYXJhbGxlbFxuICBjb25zdCBbZmllbGRzUmVzLCBhcnRpY2xlc1JlcywgY2F0ZWdvcmllc1JlcywgaG9tZXBhZ2VSZXNdID1cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBmZXRjaEFQSShcIi9maWVsZHNcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9hcnRpY2xlc1wiLCB7IHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICAgIGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9ob21lcGFnZVwiLCB7XG4gICAgICAgIHBvcHVsYXRlOiB7XG4gICAgICAgICAgaGVybzogXCIqXCIsXG4gICAgICAgICAgc2VvOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZmllbGRzOiBmaWVsZHNSZXMuZGF0YSxcbiAgICAgIGFydGljbGVzOiBhcnRpY2xlc1Jlcy5kYXRhLFxuICAgICAgY2F0ZWdvcmllczogY2F0ZWdvcmllc1Jlcy5kYXRhLFxuICAgICAgaG9tZXBhZ2U6IGhvbWVwYWdlUmVzLmRhdGEsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});