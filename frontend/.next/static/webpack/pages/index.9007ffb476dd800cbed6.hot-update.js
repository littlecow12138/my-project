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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/upload */ \"./node_modules/antd/lib/upload/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var _Users_jankinsun_Documents_learning_my_project_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var antd_lib_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/calendar */ \"./node_modules/antd/lib/calendar/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_articles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/articles */ \"./components/articles.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/seo */ \"./components/seo.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/jankinsun/Documents/learning/my-project/frontend/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_jankinsun_Documents_learning_my_project_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n// import { Upload } from \"antd\"\n\n\nvar Home = function Home(_ref) {\n  _s();\n\n  var fields = _ref.fields,\n      articles = _ref.articles,\n      categories = _ref.categories,\n      homepage = _ref.homepage;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    index: \"\"\n  }),\n      fieldItem = _useState[0],\n      setFieldItem = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      fieldImg = _useState2[0],\n      setFieldImg = _useState2[1];\n\n  var props = {\n    name: \"file\",\n    action: \"\",\n    headers: {\n      authorization: \"authorization-text\"\n    }\n  };\n\n  var handleUpload = function handleUpload() {};\n\n  var handleChange = function handleChange(e) {\n    console.log(e);\n    setFieldImg(e.file);\n  };\n\n  var handleSubmit = function handleSubmit() {\n    console.log(fieldItem);\n    var formData = new FormData();\n    var time = new Date();\n    console.log(fieldImg);\n    formData.append(\"files.QRCode\", fieldImg.originFileObj, \"\".concat(time.getTime()));\n    formData.append(\"data\", JSON.stringify(fieldItem));\n    console.log(formData);\n    axios__WEBPACK_IMPORTED_MODULE_6___default().post(\"http://localhost:1337/api/fields\", formData).then(function (res) {\n      console.log(res);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_4__.default, {\n    categories: categories,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_5__.default, {\n      seo: homepage.attributes.seo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"js-title\",\n      children: homepage.attributes.hero.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"js-container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"js-content\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"js-calendar\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_7__.default, {\n            fullscreen: false\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"js-form\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_8__.default, {\n            className: \"js-form-item\",\n            placeholder: \"\\u8BF7\\u8F93\\u5165\\u573A\\u5730\\u53F7\",\n            value: fieldItem === null || fieldItem === void 0 ? void 0 : fieldItem.index,\n            onChange: function onChange(e) {\n              return setFieldItem(function (data) {\n                console.log(data);\n                data.index = e.target.value;\n                return _objectSpread({}, data);\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_8__.default, {\n            className: \"js-form-item\",\n            placeholder: \"\\u8BF7\\u8F93\\u5165\\u5F00\\u59CB\\u65F6\\u95F4\",\n            value: fieldItem === null || fieldItem === void 0 ? void 0 : fieldItem.startTime,\n            onChange: function onChange(e) {\n              return setFieldItem(function (data) {\n                data.startTime = e.target.value;\n                return _objectSpread({}, data);\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_8__.default, {\n            className: \"js-form-item\",\n            placeholder: \"\\u8BF7\\u8F93\\u5165\\u7ED3\\u675F\\u65F6\\u95F4\",\n            value: fieldItem === null || fieldItem === void 0 ? void 0 : fieldItem.endTime,\n            onChange: function onChange(e) {\n              return setFieldItem(function (data) {\n                data.endTime = e.target.value;\n                return _objectSpread({}, data);\n              });\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_upload__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread(_objectSpread({}, props), {}, {\n            onChange: handleChange,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              className: \"js-upload\",\n              onClick: function onClick() {\n                return handleUpload();\n              },\n              children: \"\\u4E0A\\u4F20\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 15\n            }, _this)\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd_lib_button__WEBPACK_IMPORTED_MODULE_10__.default, {\n            type: \"primary\",\n            onClick: handleSubmit,\n            children: \"\\u63D0\\u4EA4\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"0nlNv9r9LUaiktWCayOFCLtOxTU=\");\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiZmllbGRzIiwiYXJ0aWNsZXMiLCJjYXRlZ29yaWVzIiwiaG9tZXBhZ2UiLCJ1c2VTdGF0ZSIsImluZGV4IiwiZmllbGRJdGVtIiwic2V0RmllbGRJdGVtIiwiZmllbGRJbWciLCJzZXRGaWVsZEltZyIsInByb3BzIiwibmFtZSIsImFjdGlvbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiaGFuZGxlVXBsb2FkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJmaWxlIiwiaGFuZGxlU3VibWl0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInRpbWUiLCJEYXRlIiwiYXBwZW5kIiwib3JpZ2luRmlsZU9iaiIsImdldFRpbWUiLCJKU09OIiwic3RyaW5naWZ5IiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiZXJyIiwiYXR0cmlidXRlcyIsInNlbyIsImhlcm8iLCJ0aXRsZSIsImRhdGEiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0YXJ0VGltZSIsImVuZFRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFnRDtBQUFBOztBQUFBLE1BQTdDQyxNQUE2QyxRQUE3Q0EsTUFBNkM7QUFBQSxNQUFyQ0MsUUFBcUMsUUFBckNBLFFBQXFDO0FBQUEsTUFBM0JDLFVBQTJCLFFBQTNCQSxVQUEyQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDekJDLCtDQUFRLENBQUM7QUFDekNDLFNBQUssRUFBRTtBQURrQyxHQUFELENBRGlCO0FBQUEsTUFDcERDLFNBRG9EO0FBQUEsTUFDekNDLFlBRHlDOztBQUFBLG1CQUkzQkgsK0NBQVEsRUFKbUI7QUFBQSxNQUlwREksUUFKb0Q7QUFBQSxNQUkxQ0MsV0FKMEM7O0FBSzNELE1BQU1DLEtBQUssR0FBRztBQUNaQyxRQUFJLEVBQUUsTUFETTtBQUVaQyxVQUFNLEVBQUUsRUFGSTtBQUdaQyxXQUFPLEVBQUU7QUFDUEMsbUJBQWEsRUFBRTtBQURSO0FBSEcsR0FBZDs7QUFPQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNLENBQUUsQ0FBN0I7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBUixlQUFXLENBQUNRLENBQUMsQ0FBQ0csSUFBSCxDQUFYO0FBQ0QsR0FIRDs7QUFJQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCSCxXQUFPLENBQUNDLEdBQVIsQ0FBWWIsU0FBWjtBQUNBLFFBQU1nQixRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFqQjtBQUNBLFFBQU1DLElBQUksR0FBRyxJQUFJQyxJQUFKLEVBQWI7QUFDQVAsV0FBTyxDQUFDQyxHQUFSLENBQVlYLFFBQVo7QUFDQWMsWUFBUSxDQUFDSSxNQUFULENBQWdCLGNBQWhCLEVBQWdDbEIsUUFBUSxDQUFDbUIsYUFBekMsWUFBMkRILElBQUksQ0FBQ0ksT0FBTCxFQUEzRDtBQUNBTixZQUFRLENBQUNJLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0JHLElBQUksQ0FBQ0MsU0FBTCxDQUFleEIsU0FBZixDQUF4QjtBQUNBWSxXQUFPLENBQUNDLEdBQVIsQ0FBWUcsUUFBWjtBQUNBUyxxREFBQSxDQUNRLGtDQURSLEVBQzRDVCxRQUQ1QyxFQUVHVSxJQUZILENBRVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JmLGFBQU8sQ0FBQ0MsR0FBUixDQUFZYyxHQUFaO0FBQ0QsS0FKSCxXQUtTLFVBQUNDLEdBQUQsRUFBUztBQUNkaEIsYUFBTyxDQUFDQyxHQUFSLENBQVllLEdBQVo7QUFDRCxLQVBIO0FBUUQsR0FoQkQ7O0FBaUJBLHNCQUNFLDhEQUFDLHVEQUFEO0FBQVEsY0FBVSxFQUFFaEMsVUFBcEI7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUFLLFNBQUcsRUFBRUMsUUFBUSxDQUFDZ0MsVUFBVCxDQUFvQkM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLGdCQUEyQmpDLFFBQVEsQ0FBQ2dDLFVBQVQsQ0FBb0JFLElBQXBCLENBQXlCQztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsNkJBRUU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGlDQUNFO0FBQVUsc0JBQVUsRUFBRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUssbUJBQVMsRUFBQyxTQUFmO0FBQUEsa0NBQ0U7QUFDRSxxQkFBUyxFQUFDLGNBRFo7QUFFRSx1QkFBVyxFQUFDLHNDQUZkO0FBR0UsaUJBQUssRUFBRWhDLFNBQUYsYUFBRUEsU0FBRix1QkFBRUEsU0FBUyxDQUFFRCxLQUhwQjtBQUlFLG9CQUFRLEVBQUUsa0JBQUNZLENBQUQ7QUFBQSxxQkFDUlYsWUFBWSxDQUFDLFVBQUNnQyxJQUFELEVBQVU7QUFDckJyQix1QkFBTyxDQUFDQyxHQUFSLENBQVlvQixJQUFaO0FBQ0FBLG9CQUFJLENBQUNsQyxLQUFMLEdBQWFZLENBQUMsQ0FBQ3VCLE1BQUYsQ0FBU0MsS0FBdEI7QUFDQSx5Q0FBWUYsSUFBWjtBQUNELGVBSlcsQ0FESjtBQUFBO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQWFFO0FBQ0UscUJBQVMsRUFBQyxjQURaO0FBRUUsdUJBQVcsRUFBQyw0Q0FGZDtBQUdFLGlCQUFLLEVBQUVqQyxTQUFGLGFBQUVBLFNBQUYsdUJBQUVBLFNBQVMsQ0FBRW9DLFNBSHBCO0FBSUUsb0JBQVEsRUFBRSxrQkFBQ3pCLENBQUQ7QUFBQSxxQkFDUlYsWUFBWSxDQUFDLFVBQUNnQyxJQUFELEVBQVU7QUFDckJBLG9CQUFJLENBQUNHLFNBQUwsR0FBaUJ6QixDQUFDLENBQUN1QixNQUFGLENBQVNDLEtBQTFCO0FBQ0EseUNBQVlGLElBQVo7QUFDRCxlQUhXLENBREo7QUFBQTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBYkYsZUF3QkU7QUFDRSxxQkFBUyxFQUFDLGNBRFo7QUFFRSx1QkFBVyxFQUFDLDRDQUZkO0FBR0UsaUJBQUssRUFBRWpDLFNBQUYsYUFBRUEsU0FBRix1QkFBRUEsU0FBUyxDQUFFcUMsT0FIcEI7QUFJRSxvQkFBUSxFQUFFLGtCQUFDMUIsQ0FBRDtBQUFBLHFCQUNSVixZQUFZLENBQUMsVUFBQ2dDLElBQUQsRUFBVTtBQUNyQkEsb0JBQUksQ0FBQ0ksT0FBTCxHQUFlMUIsQ0FBQyxDQUFDdUIsTUFBRixDQUFTQyxLQUF4QjtBQUNBLHlDQUFZRixJQUFaO0FBQ0QsZUFIVyxDQURKO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhCRixlQW1DRSxvSkFBWTdCLEtBQVo7QUFBbUIsb0JBQVEsRUFBRU0sWUFBN0I7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUEyQixxQkFBTyxFQUFFO0FBQUEsdUJBQU1ELFlBQVksRUFBbEI7QUFBQSxlQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkNGLGVBd0NFO0FBQVEsZ0JBQUksRUFBQyxTQUFiO0FBQXVCLG1CQUFPLEVBQUVNLFlBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMERELENBNUZEOztHQUFNdEIsSTs7S0FBQUEsSTs7QUF1SE4sK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQ2FsZW5kYXIsIElucHV0LCBVcGxvYWQgfSBmcm9tIFwiYW50ZFwiXG5pbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEFydGljbGVzIGZyb20gXCIuLi9jb21wb25lbnRzL2FydGljbGVzXCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBTZW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VvXCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuLy8gaW1wb3J0IHsgVXBsb2FkIH0gZnJvbSBcImFudGRcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cbmNvbnN0IEhvbWUgPSAoeyBmaWVsZHMsIGFydGljbGVzLCBjYXRlZ29yaWVzLCBob21lcGFnZSB9KSA9PiB7XG4gIGNvbnN0IFtmaWVsZEl0ZW0sIHNldEZpZWxkSXRlbV0gPSB1c2VTdGF0ZSh7XG4gICAgaW5kZXg6IFwiXCIsXG4gIH0pXG4gIGNvbnN0IFtmaWVsZEltZywgc2V0RmllbGRJbWddID0gdXNlU3RhdGUoKVxuICBjb25zdCBwcm9wcyA9IHtcbiAgICBuYW1lOiBcImZpbGVcIixcbiAgICBhY3Rpb246IFwiXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgYXV0aG9yaXphdGlvbjogXCJhdXRob3JpemF0aW9uLXRleHRcIixcbiAgICB9LFxuICB9XG4gIGNvbnN0IGhhbmRsZVVwbG9hZCA9ICgpID0+IHt9XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBzZXRGaWVsZEltZyhlLmZpbGUpXG4gIH1cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZpZWxkSXRlbSlcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKClcbiAgICBjb25zb2xlLmxvZyhmaWVsZEltZylcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlcy5RUkNvZGVcIiwgZmllbGRJbWcub3JpZ2luRmlsZU9iaiwgYCR7dGltZS5nZXRUaW1lKCl9YClcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJkYXRhXCIsIEpTT04uc3RyaW5naWZ5KGZpZWxkSXRlbSkpXG4gICAgY29uc29sZS5sb2coZm9ybURhdGEpXG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9maWVsZHNcIiwgZm9ybURhdGEpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB9KVxuICB9XG4gIHJldHVybiAoXG4gICAgPExheW91dCBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfT5cbiAgICAgIDxTZW8gc2VvPXtob21lcGFnZS5hdHRyaWJ1dGVzLnNlb30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwianMtdGl0bGVcIj57aG9tZXBhZ2UuYXR0cmlidXRlcy5oZXJvLnRpdGxlfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcy1jb250YWluZXJcIj5cbiAgICAgICAgey8qIDxBcnRpY2xlcyBhcnRpY2xlcz17YXJ0aWNsZXN9IC8+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzLWNhbGVuZGFyXCI+XG4gICAgICAgICAgICA8Q2FsZW5kYXIgZnVsbHNjcmVlbj17ZmFsc2V9PjwvQ2FsZW5kYXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcy1mb3JtXCI+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwianMtZm9ybS1pdGVtXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXlnLrlnLDlj7dcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRJdGVtPy5pbmRleH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgIHNldEZpZWxkSXRlbSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICAgIGRhdGEuaW5kZXggPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqcy1mb3JtLWl0ZW1cIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeW8gOWni+aXtumXtFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmaWVsZEl0ZW0/LnN0YXJ0VGltZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgIHNldEZpZWxkSXRlbSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgZGF0YS5zdGFydFRpbWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uZGF0YSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqcy1mb3JtLWl0ZW1cIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpee7k+adn+aXtumXtFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmaWVsZEl0ZW0/LmVuZFRpbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICBzZXRGaWVsZEl0ZW0oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRhdGEuZW5kVGltZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFVwbG9hZCB7Li4ucHJvcHN9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzLXVwbG9hZFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVwbG9hZCgpfT5cbiAgICAgICAgICAgICAgICDkuIrkvKBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1VwbG9hZD5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICDmj5DkuqRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gUnVuIEFQSSBjYWxscyBpbiBwYXJhbGxlbFxuICBjb25zdCBbZmllbGRzUmVzLCBhcnRpY2xlc1JlcywgY2F0ZWdvcmllc1JlcywgaG9tZXBhZ2VSZXNdID1cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBmZXRjaEFQSShcIi9maWVsZHNcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9hcnRpY2xlc1wiLCB7IHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICAgIGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9ob21lcGFnZVwiLCB7XG4gICAgICAgIHBvcHVsYXRlOiB7XG4gICAgICAgICAgaGVybzogXCIqXCIsXG4gICAgICAgICAgc2VvOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZmllbGRzOiBmaWVsZHNSZXMuZGF0YSxcbiAgICAgIGFydGljbGVzOiBhcnRpY2xlc1Jlcy5kYXRhLFxuICAgICAgY2F0ZWdvcmllczogY2F0ZWdvcmllc1Jlcy5kYXRhLFxuICAgICAgaG9tZXBhZ2U6IGhvbWVwYWdlUmVzLmRhdGEsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});