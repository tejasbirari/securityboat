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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _barrel_optimize_names_MdOutlineDeleteOutline_react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=MdOutlineDeleteOutline!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    let token = null;\n    // store reterived products data in array\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    if (true) {\n        // Accessing localStorage only in the browser \n        token = localStorage.getItem(\"adminToken\");\n    }\n    // function to logout admin\n    const handleLogout = ()=>{\n        localStorage.removeItem(\"adminToken\");\n        router.push(\"/\");\n    };\n    // function to check if token is valid or not\n    const isValidToken = (token)=>{\n        const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__.jwtDecode)(token);\n        const currentTime = Date.now() / 1000;\n        if (decodedToken.exp < currentTime) {\n            localStorage.removeItem(\"adminToken\");\n            return false;\n        }\n        return true;\n    };\n    // function to check user and redirect accordingly\n    const handleCheckUser = ()=>{\n        if (token && isValidToken(token)) {\n            //  if user is logged in & token is valid, redirect to add product page\n            router.push(\"/add_product\");\n        } else {\n            router.push(\"/admin\");\n            alert(\"Please log in to proceed\");\n        }\n    };\n    // this will fetch products every time page gets refresh\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // check user and redirect accordingly\n        handleCheckUser();\n        // fetch products\n        const fetchProducts = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:5000/api/get_product\");\n                setProducts(response.data.products);\n            } catch (error) {\n                console.log(\"Internal Server Error\", error);\n            }\n        };\n        fetchProducts();\n    }, []);\n    // product delete\n    const handleDeleteProduct = async (productId)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:5000/api/delete_product/\".concat(productId));\n            if (response.status === 200) {\n                alert(\"Product Deleted\");\n                // update the products state by removing the deleted product\n                setProducts(products.filter((product)=>product._id !== productId));\n            } else {\n                alert(\"Please try again\");\n            }\n        } catch (error) {\n            console.log(\"Internal Server Error\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-20 bg-slate-950 text-white flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"logo\",\n                        className: \"ml-12 text-2xl font-bold cursor-pointer max-lg:ml-4\",\n                        children: \"Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between mr-12 basis-2/12 font-semibold max-lg:mr-4 max-lg:basis-6/12 max-lg: text-sm\",\n                        children: [\n                            token ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-red-400 cursor-pointer\",\n                                onClick: handleLogout,\n                                children: \"Log Out\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 97,\n                                columnNumber: 23\n                            }, undefined) : null,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: handleCheckUser,\n                                className: \"py-1 px-6 border-2 border-white rounded-lg cursor-pointer max-lg:px-2 hover:scale-110\",\n                                children: \"Add Product\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-6 max-md:mx-2 mx-20 flex flex-col justify-center items-center\",\n                children: products.map((product)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-4/12 max-md:w-11/12 border-2 rounded flex items-center justify-between mb-4 py-2 max-md:px-2 px-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-semibold basis-2/6\",\n                                children: product.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 109,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: product.category\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 110,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"₹\",\n                                    product.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 111,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>handleDeleteProduct(product._id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdOutlineDeleteOutline_react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdOutlineDeleteOutline, {\n                                    className: \"text-xl text-red-500 cursor-pointer hover:scale-110\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                                lineNumber: 114,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, product._id, true, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                        lineNumber: 108,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Acer\\\\OneDrive\\\\Desktop\\\\test\\\\frontend\\\\src\\\\app\\\\dashboard\\\\page.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"InOxK72V0sFEKc2MZBFC7aBqBBE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRDtBQUNQO0FBQ2xCO0FBQzhCO0FBQ2pCO0FBRXZDLE1BQU1PLE9BQU87O0lBRVgsTUFBTUMsU0FBU0wsMERBQVNBO0lBQ3hCLElBQUlNLFFBQVE7SUFFWix5Q0FBeUM7SUFDekMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFM0MsSUFBSSxJQUFrQixFQUFhO1FBQ2pDLDhDQUE4QztRQUM5Q08sUUFBUUcsYUFBYUMsT0FBTyxDQUFDO0lBQy9CO0lBRUEsMkJBQTJCO0lBQzNCLE1BQU1DLGVBQWU7UUFDbkJGLGFBQWFHLFVBQVUsQ0FBQztRQUN4QlAsT0FBT1EsSUFBSSxDQUFDO0lBQ2Q7SUFFQSw2Q0FBNkM7SUFDN0MsTUFBTUMsZUFBZSxDQUFDUjtRQUNwQixNQUFNUyxlQUFlWixxREFBU0EsQ0FBQ0c7UUFDL0IsTUFBTVUsY0FBY0MsS0FBS0MsR0FBRyxLQUFLO1FBRWpDLElBQUdILGFBQWFJLEdBQUcsR0FBR0gsYUFBWTtZQUNoQ1AsYUFBYUcsVUFBVSxDQUFDO1lBQ3hCLE9BQU87UUFDVDtRQUNBLE9BQU87SUFDVDtJQUVBLGtEQUFrRDtJQUNsRCxNQUFNUSxrQkFBa0I7UUFDdEIsSUFBSWQsU0FBU1EsYUFBYVIsUUFBUTtZQUNoQyx1RUFBdUU7WUFDdkVELE9BQU9RLElBQUksQ0FBQztRQUNkLE9BQU87WUFDTFIsT0FBT1EsSUFBSSxDQUFDO1lBQ1pRLE1BQU07UUFDUjtJQUNGO0lBRUEsd0RBQXdEO0lBQ3hEdkIsZ0RBQVNBLENBQUM7UUFFUixzQ0FBc0M7UUFDdENzQjtRQUVBLGlCQUFpQjtRQUNqQixNQUFNRSxnQkFBZ0I7WUFDcEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU10Qiw2Q0FBS0EsQ0FBQ3VCLEdBQUcsQ0FBQztnQkFDakNoQixZQUFZZSxTQUFTRSxJQUFJLENBQUNsQixRQUFRO1lBQ3BDLEVBQUUsT0FBT21CLE9BQU87Z0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQyx5QkFBeUJGO1lBQ3ZDO1FBQ0Y7UUFDQUo7SUFDRixHQUFHLEVBQUU7SUFHTCxpQkFBaUI7SUFDakIsTUFBTU8sc0JBQXNCLE9BQU1DO1FBQ2hDLElBQUk7WUFDRixNQUFNUCxXQUFXLE1BQU10Qiw2Q0FBS0EsQ0FBQzhCLElBQUksQ0FBQyw0Q0FBc0QsT0FBVkQ7WUFDOUUsSUFBR1AsU0FBU1MsTUFBTSxLQUFLLEtBQUk7Z0JBQ3pCWCxNQUFNO2dCQUNOLDREQUE0RDtnQkFDNURiLFlBQVlELFNBQVMwQixNQUFNLENBQUNDLENBQUFBLFVBQVdBLFFBQVFDLEdBQUcsS0FBS0w7WUFDekQsT0FBTztnQkFDTFQsTUFBTTtZQUNSO1FBQ0YsRUFBRSxPQUFPSyxPQUFPO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQyx5QkFBeUJGO1FBQ3ZDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlFLElBQUc7d0JBQU9ELFdBQVU7a0NBQXNEOzs7Ozs7a0NBSS9FLDhEQUFDRDt3QkFBSUMsV0FBVTs7NEJBSVQvQixzQkFBUSw4REFBQzhCO2dDQUFJQyxXQUFVO2dDQUE4QkUsU0FBUzVCOzBDQUFjOzs7Ozs0Q0FBZ0I7MENBSTlGLDhEQUFDeUI7Z0NBQUtHLFNBQVNuQjtnQ0FBaUJpQixXQUFVOzBDQUF3Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl4SSw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1g5QixTQUFTaUMsR0FBRyxDQUFDLENBQUNOO29CQUNaLHFCQUNFLDhEQUFDRTt3QkFBc0JDLFdBQVU7OzBDQUMvQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQTJCSCxRQUFRTyxLQUFLOzs7Ozs7MENBQ3ZELDhEQUFDTDswQ0FBS0YsUUFBUVEsUUFBUTs7Ozs7OzBDQUN0Qiw4REFBQ047O29DQUFJO29DQUFRRixRQUFRUyxLQUFLOzs7Ozs7OzBDQUcxQiw4REFBQ1A7Z0NBQUlHLFNBQVUsSUFBTVYsb0JBQW9CSyxRQUFRQyxHQUFHOzBDQUNsRCw0RUFBQ2pDLGdIQUFzQkE7b0NBQUNtQyxXQUFVOzs7Ozs7Ozs7Ozs7dUJBUDVCSCxRQUFRQyxHQUFHOzs7OztnQkFXM0I7Ozs7Ozs7Ozs7OztBQU1SO0dBckhNL0I7O1FBRVdKLHNEQUFTQTs7O0FBcUgxQiwrREFBZUksSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZC9wYWdlLmpzP2QyYjgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBNZE91dGxpbmVEZWxldGVPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gXCJqd3QtZGVjb2RlXCI7XHJcblxyXG5jb25zdCBwYWdlID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBsZXQgdG9rZW4gPSBudWxsO1xyXG5cclxuICAvLyBzdG9yZSByZXRlcml2ZWQgcHJvZHVjdHMgZGF0YSBpbiBhcnJheVxyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vIEFjY2Vzc2luZyBsb2NhbFN0b3JhZ2Ugb25seSBpbiB0aGUgYnJvd3NlciBcclxuICAgIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FkbWluVG9rZW4nKTtcclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHRvIGxvZ291dCBhZG1pblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhZG1pblRva2VuJyk7XHJcbiAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gIH1cclxuXHJcbiAgLy8gZnVuY3Rpb24gdG8gY2hlY2sgaWYgdG9rZW4gaXMgdmFsaWQgb3Igbm90XHJcbiAgY29uc3QgaXNWYWxpZFRva2VuID0gKHRva2VuKSA9PiB7XHJcbiAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSBqd3REZWNvZGUodG9rZW4pO1xyXG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpIC8gMTAwMDtcclxuXHJcbiAgICBpZihkZWNvZGVkVG9rZW4uZXhwIDwgY3VycmVudFRpbWUpe1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWRtaW5Ub2tlbicpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHRvIGNoZWNrIHVzZXIgYW5kIHJlZGlyZWN0IGFjY29yZGluZ2x5XHJcbiAgY29uc3QgaGFuZGxlQ2hlY2tVc2VyID0gKCkgPT4ge1xyXG4gICAgaWYgKHRva2VuICYmIGlzVmFsaWRUb2tlbih0b2tlbikpIHtcclxuICAgICAgLy8gIGlmIHVzZXIgaXMgbG9nZ2VkIGluICYgdG9rZW4gaXMgdmFsaWQsIHJlZGlyZWN0IHRvIGFkZCBwcm9kdWN0IHBhZ2VcclxuICAgICAgcm91dGVyLnB1c2goJy9hZGRfcHJvZHVjdCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9hZG1pbicpO1xyXG4gICAgICBhbGVydCgnUGxlYXNlIGxvZyBpbiB0byBwcm9jZWVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0aGlzIHdpbGwgZmV0Y2ggcHJvZHVjdHMgZXZlcnkgdGltZSBwYWdlIGdldHMgcmVmcmVzaFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgLy8gY2hlY2sgdXNlciBhbmQgcmVkaXJlY3QgYWNjb3JkaW5nbHlcclxuICAgIGhhbmRsZUNoZWNrVXNlcigpO1xyXG5cclxuICAgIC8vIGZldGNoIHByb2R1Y3RzXHJcbiAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvZ2V0X3Byb2R1Y3QnKTtcclxuICAgICAgICBzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhLnByb2R1Y3RzKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkludGVybmFsIFNlcnZlciBFcnJvclwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoUHJvZHVjdHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICAvLyBwcm9kdWN0IGRlbGV0ZVxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVByb2R1Y3QgPSBhc3luYyhwcm9kdWN0SWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9kZWxldGVfcHJvZHVjdC8ke3Byb2R1Y3RJZH1gKTtcclxuICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgIGFsZXJ0KFwiUHJvZHVjdCBEZWxldGVkXCIpXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBwcm9kdWN0cyBzdGF0ZSBieSByZW1vdmluZyB0aGUgZGVsZXRlZCBwcm9kdWN0XHJcbiAgICAgICAgc2V0UHJvZHVjdHMocHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5faWQgIT09IHByb2R1Y3RJZCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIHRyeSBhZ2FpblwiKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkludGVybmFsIFNlcnZlciBFcnJvclwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCc+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtMjAgYmctc2xhdGUtOTUwIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICA8ZGl2IGlkPSdsb2dvJyBjbGFzc05hbWU9J21sLTEyIHRleHQtMnhsIGZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlciBtYXgtbGc6bWwtNCc+XHJcbiAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1yLTEyIGJhc2lzLTIvMTIgZm9udC1zZW1pYm9sZCBtYXgtbGc6bXItNCBtYXgtbGc6YmFzaXMtNi8xMiBtYXgtbGc6IHRleHQtc20nPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0b2tlbiA/IDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXJlZC00MDAgY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nIE91dDwvZGl2PiA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgey8qIFJlZGlyZWN0IHRvIC9hZGRfcHJvZHVjdCBwYWdlIG9uIGNsaWNrICovfVxyXG4gICAgICAgICAgICA8ZGl2ICBvbkNsaWNrPXtoYW5kbGVDaGVja1VzZXJ9IGNsYXNzTmFtZT0ncHktMSBweC02IGJvcmRlci0yIGJvcmRlci13aGl0ZSByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIG1heC1sZzpweC0yIGhvdmVyOnNjYWxlLTExMCc+QWRkIFByb2R1Y3Q8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktNiBtYXgtbWQ6bXgtMiBteC0yMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgeyBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdC5faWR9IGNsYXNzTmFtZT0ndy00LzEyIG1heC1tZDp3LTExLzEyIGJvcmRlci0yIHJvdW5kZWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTQgcHktMiBtYXgtbWQ6cHgtMiBweC0xMicgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgYmFzaXMtMi82Jz57cHJvZHVjdC50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e3Byb2R1Y3QuY2F0ZWdvcnl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PiYjODM3Nzt7cHJvZHVjdC5wcmljZX08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7Lyogb24gY2xpY2sgaXQgc2VuZCBfaWQgdG8gZGVsZXRlIHByb2R1Y3QgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyAoKSA9PiBoYW5kbGVEZWxldGVQcm9kdWN0KHByb2R1Y3QuX2lkKSB9PlxyXG4gICAgICAgICAgICAgICAgICA8TWRPdXRsaW5lRGVsZXRlT3V0bGluZSBjbGFzc05hbWU9J3RleHQteGwgdGV4dC1yZWQtNTAwIGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTExMCcgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgICAgICB9IFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiYXhpb3MiLCJNZE91dGxpbmVEZWxldGVPdXRsaW5lIiwiand0RGVjb2RlIiwicGFnZSIsInJvdXRlciIsInRva2VuIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwicHVzaCIsImlzVmFsaWRUb2tlbiIsImRlY29kZWRUb2tlbiIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsIm5vdyIsImV4cCIsImhhbmRsZUNoZWNrVXNlciIsImFsZXJ0IiwiZmV0Y2hQcm9kdWN0cyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURlbGV0ZVByb2R1Y3QiLCJwcm9kdWN0SWQiLCJwb3N0Iiwic3RhdHVzIiwiZmlsdGVyIiwicHJvZHVjdCIsIl9pZCIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwib25DbGljayIsIm1hcCIsInRpdGxlIiwiY2F0ZWdvcnkiLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.js\n"));

/***/ })

});