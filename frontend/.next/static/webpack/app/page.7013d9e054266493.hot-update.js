"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/Category.js":
/*!*****************************!*\
  !*** ./src/app/Category.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Category = (param)=>{\n    let { handleCategoryClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-12 bg-slate-200 flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"basis-3/12 max-md:basis-8/12 flex items-center justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-semibold cursor-pointer hover:scale-110\",\n                    onClick: ()=>handleCategoryClick(\"cloths\"),\n                    children: \"Cloths\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\Category.js\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-semibold cursor-pointer hover:scale-110\",\n                    onClick: ()=>handleCategoryClick(\"electronics\"),\n                    children: \"Electronics\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\Category.js\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-semibold cursor-pointer hover:scale-110\",\n                    onClick: ()=>handleCategoryClick(\"toys\"),\n                    children: \"Toys\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\Category.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\Category.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\Category.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2F0ZWdvcnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUI7QUFFekIsTUFBTUMsV0FBVztRQUFDLEVBQUVDLG1CQUFtQixFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUVYLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFFWCw4REFBQ0Q7b0JBQUlDLFdBQVU7b0JBQStDQyxTQUFVLElBQU1ILG9CQUFvQjs4QkFBWTs7Ozs7OzhCQUU5Ryw4REFBQ0M7b0JBQUlDLFdBQVU7b0JBQStDQyxTQUFVLElBQU1ILG9CQUFvQjs4QkFBaUI7Ozs7Ozs4QkFFbkgsOERBQUNDO29CQUFJQyxXQUFVO29CQUErQ0MsU0FBVSxJQUFNSCxvQkFBb0I7OEJBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhIO0tBaEJNRDtBQWtCTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NhdGVnb3J5LmpzP2Y0NTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ2F0ZWdvcnkgPSAoeyBoYW5kbGVDYXRlZ29yeUNsaWNrIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2gtMTIgYmctc2xhdGUtMjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jhc2lzLTMvMTIgbWF4LW1kOmJhc2lzLTgvMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuJz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTExMCcgb25DbGljaz17ICgpID0+IGhhbmRsZUNhdGVnb3J5Q2xpY2soJ2Nsb3RocycpfSA+Q2xvdGhzPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciBob3ZlcjpzY2FsZS0xMTAnIG9uQ2xpY2s9eyAoKSA9PiBoYW5kbGVDYXRlZ29yeUNsaWNrKCdlbGVjdHJvbmljcycpfSA+RWxlY3Ryb25pY3M8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTExMCcgb25DbGljaz17ICgpID0+IGhhbmRsZUNhdGVnb3J5Q2xpY2soJ3RveXMnKX0gPlRveXM8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ2F0ZWdvcnkiLCJoYW5kbGVDYXRlZ29yeUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Category.js\n"));

/***/ })

});