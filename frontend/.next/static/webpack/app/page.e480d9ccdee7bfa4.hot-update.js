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

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category */ \"(app-pages-browser)/./src/app/Category.js\");\n/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Topbar */ \"(app-pages-browser)/./src/app/Topbar.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    // store reterived products data in array\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    // this will fetch products every time page gets refresh\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProducts = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"http://localhost:5000/api/get_product\");\n                setProducts(response.data.products);\n            } catch (error) {\n                console.log(\"Internal Server Error\", error);\n            }\n        };\n        fetchProducts();\n    }, []);\n    // check if token is valid or not\n    const isValidToken = (token)=>{\n        const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_6__.jwtDecode)(token);\n        const currentTime = Date.now() / 1000;\n        if (decodedToken.exp < currentTime) {\n            localStorage.removeItem(\"Token\");\n            return false;\n        }\n        return true;\n    };\n    const handleCheckUser = ()=>{\n        const token = localStorage.getItem(\"Token\");\n        if (token && isValidToken(token)) {\n            //  if user is logged in & token is valid, redirect to checkout page\n            router.push(\"/checkout\");\n        } else {\n            alert(\"Please log in to proceed\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        id: \"homepage\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Topbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-10/12 my-12 flex flex-wrap max-md:flex-col items-center gap-4 bg-red-300\",\n                    children: products.map((product)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-2/12 max-md:w-11/12 border-2 border-slate-300 rounded-lg mb-4 py-2 px-6 max-md:px-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"w-80 h-48 object-contain\",\n                                        src: product.image,\n                                        alt: product.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-between font-bold\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: product.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                \"₹\",\n                                                product.price\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-sm text-slate-600\",\n                                    children: product.category\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-2 mx-2 py-1 px-6 rounded-lg border-2 border-slate-200 hover:scale-105 hover:border-slate-400 cursor-pointer text-center \",\n                                    onClick: handleCheckUser,\n                                    children: \" Buy Now\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, product._id, true, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 60,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"3fTaWYocqEuV+s6TPVB+pVwKM+g=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDVjtBQUNKO0FBQ0o7QUFDRztBQUNlO0FBQ0w7QUFFeEIsU0FBU1E7O0lBQ3RCLHlDQUF5QztJQUN6QyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNVSxTQUFTTCwwREFBU0E7SUFFeEIsd0RBQXdEO0lBQ3hETixnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLGdCQUFnQjtZQUNwQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTVQsNkNBQUtBLENBQUNVLEdBQUcsQ0FBQztnQkFDakNKLFlBQVlHLFNBQVNFLElBQUksQ0FBQ04sUUFBUTtZQUNwQyxFQUFFLE9BQU9PLE9BQU87Z0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQyx5QkFBeUJGO1lBQ3ZDO1FBQ0Y7UUFDQUo7SUFDRixHQUFHLEVBQUU7SUFFTCxpQ0FBaUM7SUFDakMsTUFBTU8sZUFBZSxDQUFDQztRQUNwQixNQUFNQyxlQUFlZCxxREFBU0EsQ0FBQ2E7UUFDL0IsTUFBTUUsY0FBY0MsS0FBS0MsR0FBRyxLQUFLO1FBRWpDLElBQUdILGFBQWFJLEdBQUcsR0FBR0gsYUFBWTtZQUNoQ0ksYUFBYUMsVUFBVSxDQUFDO1lBQ3hCLE9BQU87UUFDVDtRQUNBLE9BQU87SUFDVDtJQUVBLE1BQU1DLGtCQUFrQjtRQUN0QixNQUFNUixRQUFRTSxhQUFhRyxPQUFPLENBQUM7UUFDbkMsSUFBSVQsU0FBU0QsYUFBYUMsUUFBUTtZQUNoQyxvRUFBb0U7WUFDcEVULE9BQU9tQixJQUFJLENBQUM7UUFDZCxPQUFPO1lBQ0xDLE1BQU07UUFDUjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUtDLElBQUc7OzBCQUNQLDhEQUFDOUIsK0NBQU1BOzs7OzswQkFDUCw4REFBQ0QsaURBQVFBOzs7OzswQkFFVCw4REFBQ2dDO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFFYjFCLFNBQVMyQixHQUFHLENBQUMsQ0FBQ0M7d0JBQ1oscUJBQ0UsOERBQUNIOzRCQUFzQkMsV0FBVTs7OENBQy9CLDhEQUFDRDs4Q0FDQyw0RUFBQ0k7d0NBQUlILFdBQVU7d0NBQ2JJLEtBQUtGLFFBQVFHLEtBQUs7d0NBQUVDLEtBQUtKLFFBQVFLLEtBQUs7Ozs7Ozs7Ozs7OzhDQUUxQyw4REFBQ1I7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDRDtzREFBS0csUUFBUUssS0FBSzs7Ozs7O3NEQUNuQiw4REFBQ1I7O2dEQUFJO2dEQUFRRyxRQUFRTSxLQUFLOzs7Ozs7Ozs7Ozs7OzhDQUU1Qiw4REFBQ1Q7b0NBQUlDLFdBQVU7OENBQTBCRSxRQUFRTyxRQUFROzs7Ozs7OENBQ3ZELDhEQUFDVjtvQ0FBSUMsV0FBVTtvQ0FDZlUsU0FBU2pCOzhDQUNWOzs7Ozs7OzJCQVpPUyxRQUFRUyxHQUFHOzs7OztvQkFlM0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUVI7R0F6RXdCdEM7O1FBR1BGLHNEQUFTQTs7O0tBSEZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL0NhdGVnb3J5XCI7XG5pbXBvcnQgVG9wYmFyIGZyb20gXCIuL1RvcGJhclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tIFwiand0LWRlY29kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBzdG9yZSByZXRlcml2ZWQgcHJvZHVjdHMgZGF0YSBpbiBhcnJheVxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gdGhpcyB3aWxsIGZldGNoIHByb2R1Y3RzIGV2ZXJ5IHRpbWUgcGFnZSBnZXRzIHJlZnJlc2hcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9nZXRfcHJvZHVjdCcpO1xuICAgICAgICBzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhLnByb2R1Y3RzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hQcm9kdWN0cygpO1xuICB9LCBbXSk7XG5cbiAgLy8gY2hlY2sgaWYgdG9rZW4gaXMgdmFsaWQgb3Igbm90XG4gIGNvbnN0IGlzVmFsaWRUb2tlbiA9ICh0b2tlbikgPT4ge1xuICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGp3dERlY29kZSh0b2tlbik7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpIC8gMTAwMDtcblxuICAgIGlmKGRlY29kZWRUb2tlbi5leHAgPCBjdXJyZW50VGltZSl7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnVG9rZW4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGVja1VzZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVG9rZW4nKTtcbiAgICBpZiAodG9rZW4gJiYgaXNWYWxpZFRva2VuKHRva2VuKSkge1xuICAgICAgLy8gIGlmIHVzZXIgaXMgbG9nZ2VkIGluICYgdG9rZW4gaXMgdmFsaWQsIHJlZGlyZWN0IHRvIGNoZWNrb3V0IHBhZ2VcbiAgICAgIHJvdXRlci5wdXNoKCcvY2hlY2tvdXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ1BsZWFzZSBsb2cgaW4gdG8gcHJvY2VlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gaWQ9XCJob21lcGFnZVwiPlxuICAgICAgPFRvcGJhciAvPlxuICAgICAgPENhdGVnb3J5IC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMC8xMiBteS0xMiBmbGV4IGZsZXgtd3JhcCBtYXgtbWQ6ZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC00IGJnLXJlZC0zMDBcIj5cblxuICAgICAgICB7IHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuX2lkfSBjbGFzc05hbWU9J3ctMi8xMiBtYXgtbWQ6dy0xMS8xMiBib3JkZXItMiBib3JkZXItc2xhdGUtMzAwIHJvdW5kZWQtbGcgbWItNCBweS0yIHB4LTYgbWF4LW1kOnB4LTInID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTgwIGgtNDggb2JqZWN0LWNvbnRhaW5cIiBcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QudGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2Pntwcm9kdWN0LnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj4mIzgzNzc7e3Byb2R1Y3QucHJpY2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNjAwXCI+e3Byb2R1Y3QuY2F0ZWdvcnl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgbXgtMiBweS0xIHB4LTYgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItc2xhdGUtMjAwIGhvdmVyOnNjYWxlLTEwNSBob3Zlcjpib3JkZXItc2xhdGUtNDAwIGN1cnNvci1wb2ludGVyIHRleHQtY2VudGVyIFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDaGVja1VzZXJ9XG4gICAgICAgICAgICAgICAgPiBCdXkgTm93PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICB9IFxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXRlZ29yeSIsIlRvcGJhciIsImF4aW9zIiwiTGluayIsInVzZVJvdXRlciIsImp3dERlY29kZSIsIkhvbWUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwicm91dGVyIiwiZmV0Y2hQcm9kdWN0cyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImlzVmFsaWRUb2tlbiIsInRva2VuIiwiZGVjb2RlZFRva2VuIiwiY3VycmVudFRpbWUiLCJEYXRlIiwibm93IiwiZXhwIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImhhbmRsZUNoZWNrVXNlciIsImdldEl0ZW0iLCJwdXNoIiwiYWxlcnQiLCJtYWluIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9kdWN0IiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsInByaWNlIiwiY2F0ZWdvcnkiLCJvbkNsaWNrIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});