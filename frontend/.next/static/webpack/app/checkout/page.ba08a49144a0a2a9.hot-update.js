"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/checkout/page",{

/***/ "(app-pages-browser)/./src/app/checkout/page.js":
/*!**********************************!*\
  !*** ./src/app/checkout/page.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst page = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const price = searchParams.get(\"price\");\n    console.log(price);\n    // useEffect(() => {\n    //   // Get the price from the query parameter\n    //   const {price} = router.query;\n    //   setTotal(price);\n    //   console.log(price);\n    // }, );\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-20 mx-48 max-md:mx-2 flex flex-col items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-2 border-slate-400 rounded-lg w-4/12 max-md:w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center text-xl font-bold mt-4 mb-4 underline\",\n                            children: \"Order\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\checkout\\\\page.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col mx-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"font-semibold\",\n                                    children: \"Address\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\checkout\\\\page.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"border-2 border-black rounded-lg py-2 px-4 mb-4\",\n                                    type: \"text\",\n                                    placeholder: \"Address\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\checkout\\\\page.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\checkout\\\\page.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col mx-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"font-semibold\",\n                                    children: \"Mobile No\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\checkout\\\\page.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"border-2 border-black rounded-lg py-2 px-4 mb-4\",\n                                    type: \"text\",\n                                    placeholder: \"Mobile No\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\checkout\\\\page.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\checkout\\\\page.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-between mx-6 max-md:mx-8 mb-4 font-bold\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Total:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\checkout\\\\page.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, undefined),\n                                total ? total : \"Loading...\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\checkout\\\\page.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\checkout\\\\page.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-8 text-center text-white fon-bold bg-slate-950 border-2 border-white py-2 px-8 rounded-lg cursor-pointer hover:scale-110\",\n                    children: \"Place Order\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\checkout\\\\page.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\checkout\\\\page.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\checkout\\\\page.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"dzwGmhQuzBbpBrp70rF+Rgyq5EA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2hlY2tvdXQvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ1A7QUFDSztBQUVqRCxNQUFNSyxPQUFPOztJQUNYLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTU8sZUFBZUwsZ0VBQWVBO0lBRXBDLE1BQU1NLFFBQVFELGFBQWFFLEdBQUcsQ0FBQztJQUMvQkMsUUFBUUMsR0FBRyxDQUFDSDtJQUVaLG9CQUFvQjtJQUNwQiw4Q0FBOEM7SUFDOUMsa0NBQWtDO0lBQ2xDLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsUUFBUTtJQUdSLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFHYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUViLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FBb0Q7Ozs7OztzQ0FFbkUsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0M7b0NBQU1ELFdBQVU7OENBQWdCOzs7Ozs7OENBQ2pDLDhEQUFDRTtvQ0FBTUYsV0FBVTtvQ0FDZkcsTUFBSztvQ0FBT0MsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUc1Qiw4REFBQ0w7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDQztvQ0FBTUQsV0FBVTs4Q0FBZ0I7Ozs7Ozs4Q0FDakMsOERBQUNFO29DQUFNRixXQUFVO29DQUNmRyxNQUFLO29DQUFPQyxhQUFZOzs7Ozs7Ozs7Ozs7c0NBRzVCLDhEQUFDTDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNDOzhDQUFNOzs7Ozs7Z0NBQ05ULFFBQVFBLFFBQVE7Ozs7Ozs7Ozs7Ozs7OEJBS3JCLDhEQUFDTztvQkFBSUMsV0FBVTs4QkFBOEg7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JKO0dBbkRNVjs7UUFDV0Ysc0RBQVNBO1FBRUhDLDREQUFlQTs7O0FBa0R0QywrREFBZUMsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NoZWNrb3V0L3BhZ2UuanM/ZTMzOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuXHJcbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcclxuXHJcbiAgY29uc3QgcHJpY2UgPSBzZWFyY2hQYXJhbXMuZ2V0KCdwcmljZScpXHJcbiAgY29uc29sZS5sb2cocHJpY2UpO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgLy8gR2V0IHRoZSBwcmljZSBmcm9tIHRoZSBxdWVyeSBwYXJhbWV0ZXJcclxuICAvLyAgIGNvbnN0IHtwcmljZX0gPSByb3V0ZXIucXVlcnk7XHJcbiAgLy8gICBzZXRUb3RhbChwcmljZSk7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhwcmljZSk7XHJcbiAgLy8gfSwgKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J215LTIwIG14LTQ4IG1heC1tZDpteC0yIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3JkZXItMiBib3JkZXItc2xhdGUtNDAwIHJvdW5kZWQtbGcgdy00LzEyIG1heC1tZDp3LWZ1bGwnPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciB0ZXh0LXhsIGZvbnQtYm9sZCBtdC00IG1iLTQgdW5kZXJsaW5lJz5PcmRlcjwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG14LTQnPiBcclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+QWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2JvcmRlci0yIGJvcmRlci1ibGFjayByb3VuZGVkLWxnIHB5LTIgcHgtNCBtYi00JyBcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdBZGRyZXNzJy8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBteC00Jz4gXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPk1vYmlsZSBObzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2JvcmRlci0yIGJvcmRlci1ibGFjayByb3VuZGVkLWxnIHB5LTIgcHgtNCBtYi00JyBcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdNb2JpbGUgTm8nLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXgtNiBtYXgtbWQ6bXgtOCBtYi00IGZvbnQtYm9sZCc+XHJcbiAgICAgICAgICAgIDxsYWJlbD5Ub3RhbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICB7dG90YWwgPyB0b3RhbCA6ICdMb2FkaW5nLi4uJ31cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTggdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBmb24tYm9sZCBiZy1zbGF0ZS05NTAgYm9yZGVyLTIgYm9yZGVyLXdoaXRlIHB5LTIgcHgtOCByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTExMCc+XHJcbiAgICAgICAgICBQbGFjZSBPcmRlclxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInVzZVNlYXJjaFBhcmFtcyIsInBhZ2UiLCJyb3V0ZXIiLCJ0b3RhbCIsInNldFRvdGFsIiwic2VhcmNoUGFyYW1zIiwicHJpY2UiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/checkout/page.js\n"));

/***/ })

});