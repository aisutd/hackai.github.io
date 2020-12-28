webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navbar.tsx":
/*!*******************************!*\
  !*** ./components/navbar.tsx ***!
  \*******************************/
/*! exports provided: NavbarItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavbarItem\", function() { return NavbarItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/aditya/Developer/github/hackai.github.io/components/navbar.tsx\",\n    _this = undefined;\n\n\nvar NavbarItem = function NavbarItem(_ref) {\n  var text = _ref.text,\n      href = _ref.href;\n\n  var link = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"link text-center cursor-pointer font-medium text-xl text-wisteria hover:text-black hover:bg-wisteria px-1 py-3\",\n    children: text\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, _this);\n\n  return href ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: href,\n    children: link\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 17\n  }, _this) : link;\n};\n_c = NavbarItem;\n\nvar Navbar = function Navbar() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"navbar\",\n    className: \"w-full flex items-center justify-center bg-black bg-opacity-20 mb-16\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 w-full max-w-3xl\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NavbarItem, {\n        text: \"Home\",\n        href: \"/\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NavbarItem, {\n        text: \"Interest Form\",\n        href: \"//form.typeform.com/to/NJCsokJY\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NavbarItem, {\n        text: \"Past Sponsors\",\n        href: \"/#past-sponsors\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NavbarItem, {\n        text: \"FAQs\",\n        href: \"/#faqs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"NavbarItem\");\n$RefreshReg$(_c2, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIudHN4P2Y4OTEiXSwibmFtZXMiOlsiTmF2YmFySXRlbSIsInRleHQiLCJocmVmIiwibGluayIsIk5hdmJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTtBQU9PLElBQU1BLFVBQStCLEdBQUcsU0FBbENBLFVBQWtDLE9BQXFDO0FBQUEsTUFBbENDLElBQWtDLFFBQWxDQSxJQUFrQztBQUFBLE1BQTVCQyxJQUE0QixRQUE1QkEsSUFBNEI7O0FBQ2xGLE1BQU1DLElBQUksZ0JBQ1I7QUFBSyxhQUFTLEVBQUMsZ0hBQWY7QUFBQSxjQUNHRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjs7QUFLQSxTQUFPQyxJQUFJLGdCQUFHLHFFQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFQSxJQUFaO0FBQUEsY0FBbUJDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSCxHQUFxQ0EsSUFBaEQ7QUFDRCxDQVBNO0tBQU1ILFU7O0FBU2IsSUFBTUksTUFBVSxHQUFHLFNBQWJBLE1BQWEsR0FBTTtBQUN2QixzQkFDRTtBQUNFLE1BQUUsRUFBQyxRQURMO0FBRUUsYUFBUyxFQUFDLHNFQUZaO0FBQUEsMkJBR0U7QUFBSyxlQUFTLEVBQUMsK0ZBQWY7QUFBQSw4QkFDRSxxRUFBQyxVQUFEO0FBQVksWUFBSSxFQUFDLE1BQWpCO0FBQXdCLFlBQUksRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyxVQUFEO0FBQVksWUFBSSxFQUFDLGVBQWpCO0FBQWlDLFlBQUksRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSxxRUFBQyxVQUFEO0FBQVksWUFBSSxFQUFDLGVBQWpCO0FBQWlDLFlBQUksRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFLRSxxRUFBQyxVQUFEO0FBQVksWUFBSSxFQUFDLE1BQWpCO0FBQXdCLFlBQUksRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FkRDs7TUFBTUEsTTtBQWdCU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbnRlcmZhY2UgTmF2YmFySXRlbVByb3BzIHtcbiAgdGV4dDogc3RyaW5nXG4gIGhyZWY/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IE5hdmJhckl0ZW06IEZDPE5hdmJhckl0ZW1Qcm9wcz4gPSAoeyB0ZXh0LCBocmVmIH06IE5hdmJhckl0ZW1Qcm9wcykgPT4ge1xuICBjb25zdCBsaW5rID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyIGZvbnQtbWVkaXVtIHRleHQteGwgdGV4dC13aXN0ZXJpYSBob3Zlcjp0ZXh0LWJsYWNrIGhvdmVyOmJnLXdpc3RlcmlhIHB4LTEgcHktMyc+XG4gICAgICB7dGV4dH1cbiAgICA8L2Rpdj5cbiAgKVxuICByZXR1cm4gaHJlZiA/IDxMaW5rIGhyZWY9e2hyZWZ9PntsaW5rfTwvTGluaz4gOiBsaW5rXG59XG5cbmNvbnN0IE5hdmJhcjogRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgaWQ9J25hdmJhcidcbiAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktMjAgbWItMTYnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTQgeGw6Z3JpZC1jb2xzLTQgdy1mdWxsIG1heC13LTN4bCc+XG4gICAgICAgIDxOYXZiYXJJdGVtIHRleHQ9J0hvbWUnIGhyZWY9Jy8nIC8+XG4gICAgICAgIDxOYXZiYXJJdGVtIHRleHQ9J0ludGVyZXN0IEZvcm0nIGhyZWY9Jy8vZm9ybS50eXBlZm9ybS5jb20vdG8vTkpDc29rSlknIC8+XG4gICAgICAgIDxOYXZiYXJJdGVtIHRleHQ9J1Bhc3QgU3BvbnNvcnMnIGhyZWY9Jy8jcGFzdC1zcG9uc29ycycgLz5cbiAgICAgICAgey8qIDxOYXZiYXJJdGVtIHRleHQ9J1NjaGVkdWxlJyBocmVmPScvJyAvPiAqL31cbiAgICAgICAgPE5hdmJhckl0ZW0gdGV4dD0nRkFRcycgaHJlZj0nLyNmYXFzJyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar.tsx\n");

/***/ })

})