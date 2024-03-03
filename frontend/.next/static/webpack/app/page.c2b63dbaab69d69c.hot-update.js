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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category */ \"(app-pages-browser)/./src/app/Category.js\");\n/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Topbar */ \"(app-pages-browser)/./src/app/Topbar.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    // store reterived products data in array\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredProducts, setFilteredProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // this will fetch products every time page gets refresh\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProducts = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:5000/api/get_product\");\n                setProducts(response.data.products);\n            } catch (error) {\n                console.log(\"Internal Server Error\", error);\n            }\n        };\n        fetchProducts();\n    }, []);\n    // check if token is valid or not\n    const isValidToken = (token)=>{\n        const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_5__.jwtDecode)(token);\n        const currentTime = Date.now() / 1000;\n        if (decodedToken.exp < currentTime) {\n            localStorage.removeItem(\"Token\");\n            return false;\n        }\n        return true;\n    };\n    const handleCheckUser = (price)=>{\n        const token = localStorage.getItem(\"Token\");\n        if (token && isValidToken(token)) {\n            //  if user is logged in & token is valid, redirect to checkout page\n            router.push(\"/checkout?price=\".concat(price));\n        } else {\n            alert(\"Please log in to proceed\");\n        }\n    };\n    // Filter products based on selected category\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (selectedCategory) {\n            const filtered = products.filter((product)=>product.category === selectedCategory);\n            setFilteredProducts(filtered);\n        } else {\n            setFilteredProducts(products);\n        }\n    }, [\n        selectedCategory,\n        products\n    ]);\n    const handleCategoryClick = (category)=>{\n        setSelectedCategory(category);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        id: \"homepage\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Topbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                handleCategoryClick: handleCategoryClick\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-10/12 my-12 flex flex-wrap max-md:flex-col items-center gap-4\",\n                    children: filteredProducts.map((product)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-2/12 max-md:w-11/12 border-2 border-slate-300 rounded-lg mb-4 py-2 px-6 max-md:px-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"w-80 h-48 object-contain\",\n                                        src: product.image,\n                                        alt: product.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-between font-bold\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: product.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                \"₹\",\n                                                product.price\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-sm text-slate-600\",\n                                    children: product.category\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-2 mx-2 py-1 px-6 rounded-lg border-2 border-slate-200 hover:scale-105 hover:border-slate-400 cursor-pointer text-center \",\n                                    onClick: ()=>handleCheckUser(product.price),\n                                    children: \" Buy Now\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, product._id, true, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 75,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\page.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"2CRIRMqxo7MBH53bI1j9xPpbxg0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vQ2F0ZWdvcnlcIjtcbmltcG9ydCBUb3BiYXIgZnJvbSBcIi4vVG9wYmFyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgand0RGVjb2RlIH0gZnJvbSBcImp3dC1kZWNvZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gc3RvcmUgcmV0ZXJpdmVkIHByb2R1Y3RzIGRhdGEgaW4gYXJyYXlcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmaWx0ZXJlZFByb2R1Y3RzLCBzZXRGaWx0ZXJlZFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIHRoaXMgd2lsbCBmZXRjaCBwcm9kdWN0cyBldmVyeSB0aW1lIHBhZ2UgZ2V0cyByZWZyZXNoXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvZ2V0X3Byb2R1Y3QnKTtcbiAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YS5wcm9kdWN0cyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkludGVybmFsIFNlcnZlciBFcnJvclwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoUHJvZHVjdHMoKTtcbiAgfSwgW10pO1xuXG4gIC8vIGNoZWNrIGlmIHRva2VuIGlzIHZhbGlkIG9yIG5vdFxuICBjb25zdCBpc1ZhbGlkVG9rZW4gPSAodG9rZW4pID0+IHtcbiAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSBqd3REZWNvZGUodG9rZW4pO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKSAvIDEwMDA7XG5cbiAgICBpZihkZWNvZGVkVG9rZW4uZXhwIDwgY3VycmVudFRpbWUpe1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ1Rva2VuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tVc2VyID0gKHByaWNlKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVG9rZW4nKTtcbiAgICBpZiAodG9rZW4gJiYgaXNWYWxpZFRva2VuKHRva2VuKSkge1xuICAgICAgLy8gIGlmIHVzZXIgaXMgbG9nZ2VkIGluICYgdG9rZW4gaXMgdmFsaWQsIHJlZGlyZWN0IHRvIGNoZWNrb3V0IHBhZ2VcbiAgICAgIHJvdXRlci5wdXNoKGAvY2hlY2tvdXQ/cHJpY2U9JHtwcmljZX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ1BsZWFzZSBsb2cgaW4gdG8gcHJvY2VlZCcpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbHRlciBwcm9kdWN0cyBiYXNlZCBvbiBzZWxlY3RlZCBjYXRlZ29yeVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZENhdGVnb3J5KSB7XG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QuY2F0ZWdvcnkgPT09IHNlbGVjdGVkQ2F0ZWdvcnkpO1xuICAgICAgc2V0RmlsdGVyZWRQcm9kdWN0cyhmaWx0ZXJlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpbHRlcmVkUHJvZHVjdHMocHJvZHVjdHMpO1xuICAgIH1cbiAgfSwgW3NlbGVjdGVkQ2F0ZWdvcnksIHByb2R1Y3RzXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2F0ZWdvcnlDbGljayA9IChjYXRlZ29yeSkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gaWQ9XCJob21lcGFnZVwiPlxuICAgICAgPFRvcGJhciAvPlxuICAgICAgPENhdGVnb3J5IGhhbmRsZUNhdGVnb3J5Q2xpY2s9e2hhbmRsZUNhdGVnb3J5Q2xpY2t9IC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMC8xMiBteS0xMiBmbGV4IGZsZXgtd3JhcCBtYXgtbWQ6ZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC00XCI+XG5cbiAgICAgICAgeyBmaWx0ZXJlZFByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuX2lkfSBjbGFzc05hbWU9J3ctMi8xMiBtYXgtbWQ6dy0xMS8xMiBib3JkZXItMiBib3JkZXItc2xhdGUtMzAwIHJvdW5kZWQtbGcgbWItNCBweS0yIHB4LTYgbWF4LW1kOnB4LTInID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTgwIGgtNDggb2JqZWN0LWNvbnRhaW5cIiBcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QudGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2Pntwcm9kdWN0LnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj4mIzgzNzc7e3Byb2R1Y3QucHJpY2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNjAwXCI+e3Byb2R1Y3QuY2F0ZWdvcnl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgbXgtMiBweS0xIHB4LTYgcm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItc2xhdGUtMjAwIGhvdmVyOnNjYWxlLTEwNSBob3Zlcjpib3JkZXItc2xhdGUtNDAwIGN1cnNvci1wb2ludGVyIHRleHQtY2VudGVyIFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gaGFuZGxlQ2hlY2tVc2VyKHByb2R1Y3QucHJpY2UpIH1cbiAgICAgICAgICAgICAgICA+IEJ1eSBOb3c8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIH0gXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhdGVnb3J5IiwiVG9wYmFyIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJqd3REZWNvZGUiLCJIb21lIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImZpbHRlcmVkUHJvZHVjdHMiLCJzZXRGaWx0ZXJlZFByb2R1Y3RzIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJyb3V0ZXIiLCJmZXRjaFByb2R1Y3RzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaXNWYWxpZFRva2VuIiwidG9rZW4iLCJkZWNvZGVkVG9rZW4iLCJjdXJyZW50VGltZSIsIkRhdGUiLCJub3ciLCJleHAiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiaGFuZGxlQ2hlY2tVc2VyIiwicHJpY2UiLCJnZXRJdGVtIiwicHVzaCIsImFsZXJ0IiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJwcm9kdWN0IiwiY2F0ZWdvcnkiLCJoYW5kbGVDYXRlZ29yeUNsaWNrIiwibWFpbiIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsIm9uQ2xpY2siLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});