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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category */ \"(app-pages-browser)/./src/app/Category.js\");\n/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Topbar */ \"(app-pages-browser)/./src/app/Topbar.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    // store reterived products data in array\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredProducts, setFilteredProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // this will fetch products every time page gets refresh\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProducts = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:5000/api/get_product\");\n                setProducts(response.data.products);\n            } catch (error) {\n                console.log(\"Internal Server Error\", error);\n            }\n        };\n        fetchProducts();\n    }, []);\n    // check if token is valid or not\n    const isValidToken = (token)=>{\n        const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_5__.jwtDecode)(token);\n        const currentTime = Date.now() / 1000;\n        if (decodedToken.exp < currentTime) {\n            localStorage.removeItem(\"Token\");\n            return false;\n        }\n        return true;\n    };\n    const handleCheckUser = ()=>{\n        const token = localStorage.getItem(\"Token\");\n        if (token && isValidToken(token)) {\n            //  if user is logged in & token is valid, redirect to checkout page\n            router.push(\"/checkout\");\n        } else {\n            alert(\"Please log in to proceed\");\n        }\n    };\n    // Filter products based on selected category\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (selectedCategory) {\n            const filtered = products.filter((product)=>product.category === selectedCategory);\n            setFilteredProducts(filtered);\n        } else {\n            setFilteredProducts(products);\n        }\n    }, [\n        selectedCategory,\n        products\n    ]);\n    const handleCategoryClick = (category)=>{\n        setSelectedCategory(category);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        id: \"homepage\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Topbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                handleCategoryClick: handleCategoryClick\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-10/12 my-12 flex flex-wrap max-md:flex-col items-center gap-4\",\n                    children: products.map((product)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-2/12 max-md:w-11/12 border-2 border-slate-300 rounded-lg mb-4 py-2 px-6 max-md:px-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"w-80 h-48 object-contain\",\n                                        src: product.image,\n                                        alt: product.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-between font-bold\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: product.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                \"₹\",\n                                                product.price\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-sm text-slate-600\",\n                                    children: product.category\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-2 mx-2 py-1 px-6 rounded-lg border-2 border-slate-200 hover:scale-105 hover:border-slate-400 cursor-pointer text-center \",\n                                    onClick: handleCheckUser,\n                                    children: \" Buy Now\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, product._id, true, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 75,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"2CRIRMqxo7MBH53bI1j9xPpbxg0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vQ2F0ZWdvcnlcIjtcbmltcG9ydCBUb3BiYXIgZnJvbSBcIi4vVG9wYmFyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgand0RGVjb2RlIH0gZnJvbSBcImp3dC1kZWNvZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gc3RvcmUgcmV0ZXJpdmVkIHByb2R1Y3RzIGRhdGEgaW4gYXJyYXlcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmaWx0ZXJlZFByb2R1Y3RzLCBzZXRGaWx0ZXJlZFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIHRoaXMgd2lsbCBmZXRjaCBwcm9kdWN0cyBldmVyeSB0aW1lIHBhZ2UgZ2V0cyByZWZyZXNoXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvZ2V0X3Byb2R1Y3QnKTtcbiAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YS5wcm9kdWN0cyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkludGVybmFsIFNlcnZlciBFcnJvclwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoUHJvZHVjdHMoKTtcbiAgfSwgW10pO1xuXG4gIC8vIGNoZWNrIGlmIHRva2VuIGlzIHZhbGlkIG9yIG5vdFxuICBjb25zdCBpc1ZhbGlkVG9rZW4gPSAodG9rZW4pID0+IHtcbiAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSBqd3REZWNvZGUodG9rZW4pO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKSAvIDEwMDA7XG5cbiAgICBpZihkZWNvZGVkVG9rZW4uZXhwIDwgY3VycmVudFRpbWUpe1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ1Rva2VuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tVc2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rva2VuJyk7XG4gICAgaWYgKHRva2VuICYmIGlzVmFsaWRUb2tlbih0b2tlbikpIHtcbiAgICAgIC8vICBpZiB1c2VyIGlzIGxvZ2dlZCBpbiAmIHRva2VuIGlzIHZhbGlkLCByZWRpcmVjdCB0byBjaGVja291dCBwYWdlXG4gICAgICByb3V0ZXIucHVzaCgnL2NoZWNrb3V0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdQbGVhc2UgbG9nIGluIHRvIHByb2NlZWQnKTtcbiAgICB9XG4gIH1cblxuICAvLyBGaWx0ZXIgcHJvZHVjdHMgYmFzZWQgb24gc2VsZWN0ZWQgY2F0ZWdvcnlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgICAgY29uc3QgZmlsdGVyZWQgPSBwcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LmNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5KTtcbiAgICAgIHNldEZpbHRlcmVkUHJvZHVjdHMoZmlsdGVyZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzKHByb2R1Y3RzKTtcbiAgICB9XG4gIH0sIFtzZWxlY3RlZENhdGVnb3J5LCBwcm9kdWN0c10pO1xuXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3J5Q2xpY2sgPSAoY2F0ZWdvcnkpID0+IHtcbiAgICBzZXRTZWxlY3RlZENhdGVnb3J5KGNhdGVnb3J5KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGlkPVwiaG9tZXBhZ2VcIj5cbiAgICAgIDxUb3BiYXIgLz5cbiAgICAgIDxDYXRlZ29yeSBoYW5kbGVDYXRlZ29yeUNsaWNrPXtoYW5kbGVDYXRlZ29yeUNsaWNrfSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAvMTIgbXktMTIgZmxleCBmbGV4LXdyYXAgbWF4LW1kOmZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuXG4gICAgICAgIHsgcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdC5faWR9IGNsYXNzTmFtZT0ndy0yLzEyIG1heC1tZDp3LTExLzEyIGJvcmRlci0yIGJvcmRlci1zbGF0ZS0zMDAgcm91bmRlZC1sZyBtYi00IHB5LTIgcHgtNiBtYXgtbWQ6cHgtMicgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctODAgaC00OCBvYmplY3QtY29udGFpblwiIFxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2V9IGFsdD17cHJvZHVjdC50aXRsZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+e3Byb2R1Y3QudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PiYjODM3Nzt7cHJvZHVjdC5wcmljZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS02MDBcIj57cHJvZHVjdC5jYXRlZ29yeX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBteC0yIHB5LTEgcHgtNiByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1zbGF0ZS0yMDAgaG92ZXI6c2NhbGUtMTA1IGhvdmVyOmJvcmRlci1zbGF0ZS00MDAgY3Vyc29yLXBvaW50ZXIgdGV4dC1jZW50ZXIgXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNoZWNrVXNlcn1cbiAgICAgICAgICAgICAgICA+IEJ1eSBOb3c8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIH0gXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhdGVnb3J5IiwiVG9wYmFyIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJqd3REZWNvZGUiLCJIb21lIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImZpbHRlcmVkUHJvZHVjdHMiLCJzZXRGaWx0ZXJlZFByb2R1Y3RzIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJyb3V0ZXIiLCJmZXRjaFByb2R1Y3RzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaXNWYWxpZFRva2VuIiwidG9rZW4iLCJkZWNvZGVkVG9rZW4iLCJjdXJyZW50VGltZSIsIkRhdGUiLCJub3ciLCJleHAiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiaGFuZGxlQ2hlY2tVc2VyIiwiZ2V0SXRlbSIsInB1c2giLCJhbGVydCIsImZpbHRlcmVkIiwiZmlsdGVyIiwicHJvZHVjdCIsImNhdGVnb3J5IiwiaGFuZGxlQ2F0ZWdvcnlDbGljayIsIm1haW4iLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwidGl0bGUiLCJwcmljZSIsIm9uQ2xpY2siLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});