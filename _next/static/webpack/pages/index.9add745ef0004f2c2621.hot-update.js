webpackHotUpdate_N_E("pages/index",{

/***/ "./components/countdown.tsx":
/*!**********************************!*\
  !*** ./components/countdown.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countdown */ \"./node_modules/react-countdown/dist/index.es.js\");\n\n\nvar _jsxFileName = \"/Users/aditya/Developer/github/hackai.github.io/components/countdown.tsx\",\n    _this = undefined;\n\n\n\nvar Countdown = function Countdown() {\n  var renderer = function renderer(props) {\n    var day = props.days > 1 ? 'days' : 'day';\n    var hour = props.hours > 1 ? 'hours' : 'hour';\n    var minutes = props.minutes > 1 ? 'minutes' : 'minute';\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: [props.days, \" \", day]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"w-full py-1 text-center bg-black\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: \"text-md font-medium\",\n      children: \"A\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, _this);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"text-center text-xl mx-auto py-2 bg-wisteria text-black select-none font-medium\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: \"Applications open in \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_countdown__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      date: 1610172000000,\n      renderer: renderer\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: \"!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Countdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Countdown);\n\nvar _c;\n\n$RefreshReg$(_c, \"Countdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGRvd24udHN4P2M4YmUiXSwibmFtZXMiOlsiQ291bnRkb3duIiwicmVuZGVyZXIiLCJwcm9wcyIsImRheSIsImRheXMiLCJob3VyIiwiaG91cnMiLCJtaW51dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7QUFFQSxJQUFNQSxTQUFhLEdBQUcsU0FBaEJBLFNBQWdCLEdBQU07QUFDMUIsTUFBTUMsUUFBNkIsR0FBRyxTQUFoQ0EsUUFBZ0MsQ0FBQUMsS0FBSyxFQUFJO0FBQzdDLFFBQU1DLEdBQUcsR0FBR0QsS0FBSyxDQUFDRSxJQUFOLEdBQWEsQ0FBYixHQUFpQixNQUFqQixHQUEwQixLQUF0QztBQUNBLFFBQU1DLElBQUksR0FBR0gsS0FBSyxDQUFDSSxLQUFOLEdBQWMsQ0FBZCxHQUFrQixPQUFsQixHQUE0QixNQUF6QztBQUNBLFFBQU1DLE9BQU8sR0FBR0wsS0FBSyxDQUFDSyxPQUFOLEdBQWdCLENBQWhCLEdBQW9CLFNBQXBCLEdBQWdDLFFBQWhEO0FBQ0Esd0JBQ0U7QUFBQSxpQkFDR0wsS0FBSyxDQUFDRSxJQURULE9BQ2dCRCxHQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtELEdBVEQ7O0FBV0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsa0NBQWY7QUFBQSwyQkFDRTtBQUFNLGVBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxpRkFBZjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyx1REFBRDtBQUFPLFVBQUksRUFBRSxhQUFiO0FBQTRCLGNBQVEsRUFBRUY7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBekJEOztLQUFNRCxTO0FBMkJTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY291bnRkb3duLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ291bnQsIHsgQ291bnRkb3duUmVuZGVyZXJGbiB9IGZyb20gJ3JlYWN0LWNvdW50ZG93bidcblxuY29uc3QgQ291bnRkb3duOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgcmVuZGVyZXI6IENvdW50ZG93blJlbmRlcmVyRm4gPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgZGF5ID0gcHJvcHMuZGF5cyA+IDEgPyAnZGF5cycgOiAnZGF5J1xuICAgIGNvbnN0IGhvdXIgPSBwcm9wcy5ob3VycyA+IDEgPyAnaG91cnMnIDogJ2hvdXInXG4gICAgY29uc3QgbWludXRlcyA9IHByb3BzLm1pbnV0ZXMgPiAxID8gJ21pbnV0ZXMnIDogJ21pbnV0ZSdcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4+XG4gICAgICAgIHtwcm9wcy5kYXlzfSB7ZGF5fVxuICAgICAgPC9zcGFuPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBweS0xIHRleHQtY2VudGVyIGJnLWJsYWNrJz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1tZCBmb250LW1lZGl1bSc+QTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQteGwgbXgtYXV0byBweS0yIGJnLXdpc3RlcmlhIHRleHQtYmxhY2sgc2VsZWN0LW5vbmUgZm9udC1tZWRpdW0nPlxuICAgICAgPHNwYW4+QXBwbGljYXRpb25zIG9wZW4gaW4gPC9zcGFuPlxuICAgICAgPENvdW50IGRhdGU9ezE2MTAxNzIwMDAwMDB9IHJlbmRlcmVyPXtyZW5kZXJlcn0gLz5cbiAgICAgIDxzcGFuPiE8L3NwYW4+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/countdown.tsx\n");

/***/ })

})