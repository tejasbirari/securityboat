"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/page.js":
/*!***********************************!*\
  !*** ./src/app/dashboard/page.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _barrel_optimize_names_MdOutlineDeleteOutline_react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=MdOutlineDeleteOutline!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Initialize token state\n    // Logout admin\n    const handleLogout = ()=>{\n        localStorage.removeItem(\"adminToken\");\n        router.push(\"/\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch products\n        const fetchProducts = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:5000/api/get_product\");\n                setProducts(response.data.products);\n            } catch (error) {\n                console.log(\"Internal Server Error\", error);\n            }\n        };\n        // Check token validity\n        const isValidToken1 = (token)=>{\n            if (!token) return false;\n            const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__.jwtDecode)(token);\n            const currentTime = Date.now() / 1000;\n            if (decodedToken.exp < currentTime) {\n                localStorage.removeItem(\"adminToken\");\n                return false;\n            }\n            return true;\n        };\n        // Set token from localStorage\n        const storedToken = localStorage.getItem(\"adminToken\");\n        if (true) {\n            setToken(storedToken);\n            if (storedToken && isValidToken1(storedToken)) {\n                router.push(\"/add_product\");\n            }\n        }\n        fetchProducts();\n    }, [\n        router\n    ]);\n    // Redirect to add_product page on click\n    const handleCheckUser = ()=>{\n        if (token && isValidToken(token)) {\n            // If the user is logged in & the token is valid, redirect to the add product page\n            router.push(\"/add_product\");\n        } else {\n            alert(\"Please log in to proceed\");\n            router.push(\"/admin\");\n        }\n    };\n    // Product Delete\n    const handleDeleteProduct = async (productId)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:5000/api/delete_product/\".concat(productId));\n            if (response.status === 200) {\n                alert(\"Product Deleted\");\n                // Update the products state by removing the deleted product\n                setProducts(products.filter((product)=>product._id !== productId));\n            } else {\n                alert(\"Please try again\");\n            }\n        } catch (error) {\n            console.log(\"Internal Server Error\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-20 bg-slate-950 text-white flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"logo\",\n                        className: \"ml-12 text-2xl font-bold cursor-pointer max-lg:ml-4\",\n                        children: \"Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between mr-12 basis-2/12 font-semibold max-lg:mr-4 max-lg:basis-6/12 max-lg: text-sm\",\n                        children: [\n                            token ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-red-400 cursor-pointer\",\n                                onClick: handleLogout,\n                                children: \"Log Out\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 95,\n                                columnNumber: 23\n                            }, undefined) : null,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: handleCheckUser,\n                                className: \"py-1 px-6 border-2 border-white rounded-lg cursor-pointer max-lg:px-2 hover:scale-110\",\n                                children: \"Add Product\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-6 max-md:mx-2 mx-20 flex flex-col justify-center items-center\",\n                children: products.map((product)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-4/12 max-md:w-11/12 border-2 rounded flex items-center justify-between mb-4 py-2 max-md:px-2 px-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-semibold basis-2/6\",\n                                children: product.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: product.category\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 108,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"₹\",\n                                    product.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 109,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>handleDeleteProduct(product._id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdOutlineDeleteOutline_react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdOutlineDeleteOutline, {\n                                    className: \"text-xl text-red-500 cursor-pointer hover:scale-110\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 112,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, product._id, true, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                        lineNumber: 106,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\securityboat\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"XKXhq8nM9lzTt4xIIbA/jHJ6T7M=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRDtBQUNQO0FBQ2xCO0FBQzhCO0FBQ2pCO0FBRXZDLE1BQU1PLE9BQU87O0lBRVgsTUFBTUMsU0FBU0wsMERBQVNBO0lBQ3RCLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQyxPQUFPLHlCQUF5QjtJQUVuRSxlQUFlO0lBQ2YsTUFBTVcsZUFBZTtRQUNqQkMsYUFBYUMsVUFBVSxDQUFDO1FBQ3hCUCxPQUFPUSxJQUFJLENBQUM7SUFDaEI7SUFFQWYsZ0RBQVNBLENBQUM7UUFDTixpQkFBaUI7UUFDakIsTUFBTWdCLGdCQUFnQjtZQUNsQixJQUFJO2dCQUNBLE1BQU1DLFdBQVcsTUFBTWQsNkNBQUtBLENBQUNlLEdBQUcsQ0FBQztnQkFDakNULFlBQVlRLFNBQVNFLElBQUksQ0FBQ1gsUUFBUTtZQUN0QyxFQUFFLE9BQU9ZLE9BQU87Z0JBQ1pDLFFBQVFDLEdBQUcsQ0FBQyx5QkFBeUJGO1lBQ3pDO1FBQ0o7UUFFQSx1QkFBdUI7UUFDdkIsTUFBTUcsZ0JBQWUsQ0FBQ2I7WUFDbEIsSUFBSSxDQUFDQSxPQUFPLE9BQU87WUFDbkIsTUFBTWMsZUFBZW5CLHFEQUFTQSxDQUFDSztZQUMvQixNQUFNZSxjQUFjQyxLQUFLQyxHQUFHLEtBQUs7WUFDakMsSUFBSUgsYUFBYUksR0FBRyxHQUFHSCxhQUFhO2dCQUNoQ1osYUFBYUMsVUFBVSxDQUFDO2dCQUN4QixPQUFPO1lBQ1g7WUFDQSxPQUFPO1FBQ1g7UUFFQSw4QkFBOEI7UUFDOUIsTUFBTWUsY0FBY2hCLGFBQWFpQixPQUFPLENBQUM7UUFDekMsSUFBSSxJQUFrQixFQUFhO1lBQy9CbkIsU0FBU2tCO1lBQ1QsSUFBSUEsZUFBZU4sY0FBYU0sY0FBYztnQkFDMUN0QixPQUFPUSxJQUFJLENBQUM7WUFDaEI7UUFDSjtRQUVBQztJQUNKLEdBQUc7UUFBQ1Q7S0FBTztJQUVYLHdDQUF3QztJQUN4QyxNQUFNd0Isa0JBQWtCO1FBQ3RCLElBQUlyQixTQUFTYSxhQUFhYixRQUFRO1lBQzlCLGtGQUFrRjtZQUNsRkgsT0FBT1EsSUFBSSxDQUFDO1FBQ2hCLE9BQU87WUFDSGlCLE1BQU07WUFDTnpCLE9BQU9RLElBQUksQ0FBQztRQUNoQjtJQUNGO0lBR0YsaUJBQWlCO0lBQ2pCLE1BQU1rQixzQkFBc0IsT0FBTUM7UUFDaEMsSUFBSTtZQUNGLE1BQU1qQixXQUFXLE1BQU1kLDZDQUFLQSxDQUFDZ0MsSUFBSSxDQUFDLDRDQUFzRCxPQUFWRDtZQUM5RSxJQUFHakIsU0FBU21CLE1BQU0sS0FBSyxLQUFJO2dCQUN6QkosTUFBTTtnQkFDTiw0REFBNEQ7Z0JBQzVEdkIsWUFBWUQsU0FBUzZCLE1BQU0sQ0FBQ0MsQ0FBQUEsVUFBV0EsUUFBUUMsR0FBRyxLQUFLTDtZQUN6RCxPQUFPO2dCQUNMRixNQUFNO1lBQ1I7UUFDRixFQUFFLE9BQU9aLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDLHlCQUF5QkY7UUFDdkM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDb0I7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlFLElBQUc7d0JBQU9ELFdBQVU7a0NBQXNEOzs7Ozs7a0NBSS9FLDhEQUFDRDt3QkFBSUMsV0FBVTs7NEJBSVQvQixzQkFBUSw4REFBQzhCO2dDQUFJQyxXQUFVO2dDQUE4QkUsU0FBUy9COzBDQUFjOzs7Ozs0Q0FBZ0I7MENBSTlGLDhEQUFDNEI7Z0NBQUtHLFNBQVNaO2dDQUFpQlUsV0FBVTswQ0FBd0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJeEksOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYakMsU0FBU29DLEdBQUcsQ0FBQyxDQUFDTjtvQkFDWixxQkFDRSw4REFBQ0U7d0JBQXNCQyxXQUFVOzswQ0FDL0IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUEyQkgsUUFBUU8sS0FBSzs7Ozs7OzBDQUN2RCw4REFBQ0w7MENBQUtGLFFBQVFRLFFBQVE7Ozs7OzswQ0FDdEIsOERBQUNOOztvQ0FBSTtvQ0FBUUYsUUFBUVMsS0FBSzs7Ozs7OzswQ0FHMUIsOERBQUNQO2dDQUFJRyxTQUFVLElBQU1WLG9CQUFvQkssUUFBUUMsR0FBRzswQ0FDbEQsNEVBQUNuQyxnSEFBc0JBO29DQUFDcUMsV0FBVTs7Ozs7Ozs7Ozs7O3VCQVA1QkgsUUFBUUMsR0FBRzs7Ozs7Z0JBVzNCOzs7Ozs7Ozs7Ozs7QUFNUjtHQW5ITWpDOztRQUVXSixzREFBU0E7OztBQW1IMUIsK0RBQWVJLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvcGFnZS5qcz9kMmI4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTWRPdXRsaW5lRGVsZXRlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgeyBqd3REZWNvZGUgfSBmcm9tIFwiand0LWRlY29kZVwiO1xyXG5cclxuY29uc3QgcGFnZSA9ICgpID0+IHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUobnVsbCk7IC8vIEluaXRpYWxpemUgdG9rZW4gc3RhdGVcclxuXHJcbiAgICAvLyBMb2dvdXQgYWRtaW5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWRtaW5Ub2tlbicpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBGZXRjaCBwcm9kdWN0c1xyXG4gICAgICAgIGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9nZXRfcHJvZHVjdCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YS5wcm9kdWN0cyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkludGVybmFsIFNlcnZlciBFcnJvclwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIHRva2VuIHZhbGlkaXR5XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZFRva2VuID0gKHRva2VuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdG9rZW4pIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgY29uc3QgZGVjb2RlZFRva2VuID0gand0RGVjb2RlKHRva2VuKTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpIC8gMTAwMDtcclxuICAgICAgICAgICAgaWYgKGRlY29kZWRUb2tlbi5leHAgPCBjdXJyZW50VGltZSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FkbWluVG9rZW4nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCB0b2tlbiBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIGNvbnN0IHN0b3JlZFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FkbWluVG9rZW4nKTtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgc2V0VG9rZW4oc3RvcmVkVG9rZW4pO1xyXG4gICAgICAgICAgICBpZiAoc3RvcmVkVG9rZW4gJiYgaXNWYWxpZFRva2VuKHN0b3JlZFRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9hZGRfcHJvZHVjdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmZXRjaFByb2R1Y3RzKCk7XHJcbiAgICB9LCBbcm91dGVyXSk7XHJcblxyXG4gICAgLy8gUmVkaXJlY3QgdG8gYWRkX3Byb2R1Y3QgcGFnZSBvbiBjbGlja1xyXG4gICAgY29uc3QgaGFuZGxlQ2hlY2tVc2VyID0gKCkgPT4ge1xyXG4gICAgICBpZiAodG9rZW4gJiYgaXNWYWxpZFRva2VuKHRva2VuKSkge1xyXG4gICAgICAgICAgLy8gSWYgdGhlIHVzZXIgaXMgbG9nZ2VkIGluICYgdGhlIHRva2VuIGlzIHZhbGlkLCByZWRpcmVjdCB0byB0aGUgYWRkIHByb2R1Y3QgcGFnZVxyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9hZGRfcHJvZHVjdCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoJ1BsZWFzZSBsb2cgaW4gdG8gcHJvY2VlZCcpO1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9hZG1pbicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAvLyBQcm9kdWN0IERlbGV0ZVxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVByb2R1Y3QgPSBhc3luYyhwcm9kdWN0SWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9kZWxldGVfcHJvZHVjdC8ke3Byb2R1Y3RJZH1gKTtcclxuICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgIGFsZXJ0KFwiUHJvZHVjdCBEZWxldGVkXCIpXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBwcm9kdWN0cyBzdGF0ZSBieSByZW1vdmluZyB0aGUgZGVsZXRlZCBwcm9kdWN0XHJcbiAgICAgICAgc2V0UHJvZHVjdHMocHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5faWQgIT09IHByb2R1Y3RJZCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIHRyeSBhZ2FpblwiKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkludGVybmFsIFNlcnZlciBFcnJvclwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCc+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtMjAgYmctc2xhdGUtOTUwIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICA8ZGl2IGlkPSdsb2dvJyBjbGFzc05hbWU9J21sLTEyIHRleHQtMnhsIGZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlciBtYXgtbGc6bWwtNCc+XHJcbiAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1yLTEyIGJhc2lzLTIvMTIgZm9udC1zZW1pYm9sZCBtYXgtbGc6bXItNCBtYXgtbGc6YmFzaXMtNi8xMiBtYXgtbGc6IHRleHQtc20nPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0b2tlbiA/IDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXJlZC00MDAgY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nIE91dDwvZGl2PiA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgey8qIFJlZGlyZWN0IHRvIC9hZGRfcHJvZHVjdCBwYWdlIG9uIGNsaWNrICovfVxyXG4gICAgICAgICAgICA8ZGl2ICBvbkNsaWNrPXtoYW5kbGVDaGVja1VzZXJ9IGNsYXNzTmFtZT0ncHktMSBweC02IGJvcmRlci0yIGJvcmRlci13aGl0ZSByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIG1heC1sZzpweC0yIGhvdmVyOnNjYWxlLTExMCc+QWRkIFByb2R1Y3Q8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktNiBtYXgtbWQ6bXgtMiBteC0yMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgeyBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdC5faWR9IGNsYXNzTmFtZT0ndy00LzEyIG1heC1tZDp3LTExLzEyIGJvcmRlci0yIHJvdW5kZWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTQgcHktMiBtYXgtbWQ6cHgtMiBweC0xMicgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgYmFzaXMtMi82Jz57cHJvZHVjdC50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e3Byb2R1Y3QuY2F0ZWdvcnl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PiYjODM3Nzt7cHJvZHVjdC5wcmljZX08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7Lyogb24gY2xpY2sgaXQgc2VuZCBfaWQgdG8gZGVsZXRlIHByb2R1Y3QgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyAoKSA9PiBoYW5kbGVEZWxldGVQcm9kdWN0KHByb2R1Y3QuX2lkKSB9PlxyXG4gICAgICAgICAgICAgICAgICA8TWRPdXRsaW5lRGVsZXRlT3V0bGluZSBjbGFzc05hbWU9J3RleHQteGwgdGV4dC1yZWQtNTAwIGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTExMCcgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgICAgICB9IFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiYXhpb3MiLCJNZE91dGxpbmVEZWxldGVPdXRsaW5lIiwiand0RGVjb2RlIiwicGFnZSIsInJvdXRlciIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJ0b2tlbiIsInNldFRva2VuIiwiaGFuZGxlTG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJmZXRjaFByb2R1Y3RzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaXNWYWxpZFRva2VuIiwiZGVjb2RlZFRva2VuIiwiY3VycmVudFRpbWUiLCJEYXRlIiwibm93IiwiZXhwIiwic3RvcmVkVG9rZW4iLCJnZXRJdGVtIiwiaGFuZGxlQ2hlY2tVc2VyIiwiYWxlcnQiLCJoYW5kbGVEZWxldGVQcm9kdWN0IiwicHJvZHVjdElkIiwicG9zdCIsInN0YXR1cyIsImZpbHRlciIsInByb2R1Y3QiLCJfaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsIm9uQ2xpY2siLCJtYXAiLCJ0aXRsZSIsImNhdGVnb3J5IiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.js\n"));

/***/ })

});