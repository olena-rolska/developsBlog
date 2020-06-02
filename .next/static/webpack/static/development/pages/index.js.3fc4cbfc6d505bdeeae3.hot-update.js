webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Posts.tsx":
/*!******************************!*\
  !*** ./components/Posts.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tooltip */ \"./node_modules/@material-ui/core/esm/Tooltip/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/olenarolskaya/FE/developsBlog/components/Posts.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(function (theme) {\n  return {\n    nav: {\n      marginTop: '30px',\n      color: '#314f1a',\n      fontWeight: 'bold',\n      fontSize: '20px',\n      paddingRight: '30px'\n    },\n    facts: {\n      margin: '24px',\n      minHeight: 'calc(96vh - 341px)',\n      boxSizing: 'border-box',\n      padding: '8px',\n      display: 'flex',\n      flexFlow: 'row wrap',\n      justifyContent: 'space-around',\n      alignItems: ''\n    },\n    card: {\n      width: 345,\n      height: 345,\n      overlay: 'hidden',\n      marginBottom: '30px',\n      backgroundColor: '#f0c09e',\n      '&:hover': {\n        opacity: '0.8'\n      }\n    },\n    text: {\n      marginBottom: '20px'\n    },\n    media: {\n      height: 0,\n      paddingTop: '56.25%' // 16:9\n\n    }\n  };\n});\n\nvar Posts = function Posts() {\n  _s();\n\n  var classes = useStyles();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      posts = _React$useState2[0],\n      setPosts = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"https://simple-blog-api.crew.red/posts\").then(function (response) {\n      setPosts(response.data);\n      console.log(response.data);\n    });\n  }, []);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    item: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    placement: \"top-start\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    className: classes.nav,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  }, \"Create a post\"))), __jsx(\"div\", {\n    className: classes.facts,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, posts.slice(0, 21).map(function (post) {\n    return __jsx(\"div\", {\n      className: \"facts-block__card\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      className: classes.card,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 11\n      }\n    }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 13\n      }\n    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      className: classes.text,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 15\n      }\n    }, post.title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      className: classes.text,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 15\n      }\n    }, post.body)), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      size: \"small\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 13\n      }\n    }, \"See More\"), __jsx(Route, {\n      path: \"/post/${}\",\n      component: UserInfo,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 13\n      }\n    })));\n  })));\n};\n\n_s(Posts, \"0IrisdAEFk18bWZ8wxUF2aI0j/Y=\", false, function () {\n  return [useStyles];\n});\n\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\n\nvar _c;\n\n$RefreshReg$(_c, \"Posts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RzLnRzeD9hOWExIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm5hdiIsIm1hcmdpblRvcCIsImNvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwicGFkZGluZ1JpZ2h0IiwiZmFjdHMiLCJtYXJnaW4iLCJtaW5IZWlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXhGbG93IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY2FyZCIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcmxheSIsIm1hcmdpbkJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsIm9wYWNpdHkiLCJ0ZXh0IiwibWVkaWEiLCJwYWRkaW5nVG9wIiwiUG9zdHMiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInBvc3RzIiwic2V0UG9zdHMiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2xpY2UiLCJtYXAiLCJwb3N0IiwidGl0bGUiLCJib2R5IiwiVXNlckluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxPQUFHLEVBQUU7QUFDSEMsZUFBUyxFQUFFLE1BRFI7QUFFSEMsV0FBSyxFQUFFLFNBRko7QUFHSEMsZ0JBQVUsRUFBRSxNQUhUO0FBSUhDLGNBQVEsRUFBRSxNQUpQO0FBS0hDLGtCQUFZLEVBQUU7QUFMWCxLQURnQztBQVFyQ0MsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxNQURIO0FBRUxDLGVBQVMsRUFBRSxvQkFGTjtBQUdMQyxlQUFTLEVBQUUsWUFITjtBQUlMQyxh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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkYsQ0FERixDQUR5RDtBQUFBLEdBQTNCLENBQWhDLENBTkYsQ0FERjtBQXdCRCxDQXBDRDs7R0FBTW5CLEs7VUFDWTVCLFM7OztLQURaNEIsSztBQXNDU0Esb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtMaW5rLCBSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFBvc3QgZnJvbSBcIi4vUG9zdFwiXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIG5hdjoge1xuICAgIG1hcmdpblRvcDogJzMwcHgnLFxuICAgIGNvbG9yOiAnIzMxNGYxYScsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgcGFkZGluZ1JpZ2h0OiAnMzBweCcsXG4gIH0sXG4gIGZhY3RzOiB7XG4gICAgbWFyZ2luOiAnMjRweCcsXG4gICAgbWluSGVpZ2h0OiAnY2FsYyg5NnZoIC0gMzQxcHgpJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAnOHB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleEZsb3c6ICdyb3cgd3JhcCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxuICAgIGFsaWduSXRlbXM6ICcnXG59LFxuICBjYXJkOiB7XG4gICAgd2lkdGg6IDM0NSxcbiAgICBoZWlnaHQ6IDM0NSxcbiAgICBvdmVybGF5OiAnaGlkZGVuJyxcbiAgICBtYXJnaW5Cb3R0b206ICczMHB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjBjMDllJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIG9wYWNpdHk6ICcwLjgnLFxuICAgIH1cbiAgfSxcbiAgdGV4dDoge1xuICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxuICB9LFxuICBtZWRpYToge1xuICAgIGhlaWdodDogMCxcbiAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJywgLy8gMTY6OVxuICB9LFxufSkpO1xuXG5jb25zdCBQb3N0cyA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChgaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHNgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBzZXRQb3N0cyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wLXN0YXJ0XCI+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZ9ID5DcmVhdGUgYSBwb3N0PC9CdXR0b24+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mYWN0c30+e3Bvc3RzLnNsaWNlKDAsIDIxKS5tYXAocG9zdCA9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmFjdHMtYmxvY2tfX2NhcmQnPlxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9Pntwb3N0LnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9Pntwb3N0LmJvZHl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgPlxuICAgICAgICAgICAgICBTZWUgTW9yZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wb3N0LyR7fVwiIGNvbXBvbmVudD17VXNlckluZm99IC8+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTsgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Posts.tsx\n");

/***/ }),

/***/ "./node_modules/history/esm/history.js":
false,

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
false,

/***/ "./node_modules/path-to-regexp/index.js":
false,

/***/ "./node_modules/path-to-regexp/node_modules/isarray/index.js":
false,

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
false,

/***/ "./node_modules/react-router/esm/react-router.js":
false,

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
false,

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
false,

/***/ "./node_modules/value-equal/esm/value-equal.js":
false

})