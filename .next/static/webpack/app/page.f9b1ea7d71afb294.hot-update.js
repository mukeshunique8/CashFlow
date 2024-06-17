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

/***/ "(app-pages-browser)/./app/page.jsx":
/*!**********************!*\
  !*** ./app/page.jsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_IO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/IO */ \"(app-pages-browser)/./app/components/IO.jsx\");\n/* harmony import */ var _components_Recent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Recent */ \"(app-pages-browser)/./app/components/Recent.jsx\");\n/* harmony import */ var _utils_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/AppContext */ \"(app-pages-browser)/./app/utils/AppContext.js\");\n/* harmony import */ var _components_AddTransaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AddTransaction */ \"(app-pages-browser)/./app/components/AddTransaction.jsx\");\n/* harmony import */ var _UI_Elements_Btn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI Elements/Btn */ \"(app-pages-browser)/./app/UI Elements/Btn.jsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_firebase_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/firebase-config */ \"(app-pages-browser)/./app/utils/firebase-config.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const { showAddTrans, setShowAddTrans, setIsLogIn, currentUser, setCurrentUser } = (0,_utils_AppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext)();\n    const { transactions, setTransactions } = (0,_utils_AppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext)();\n    const userTransactionsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_utils_firebase_config__WEBPACK_IMPORTED_MODULE_8__.db, \"users/\".concat(currentUser.id, \"/transactions\"));\n    console.log(currentUser);\n    const getTransactions = async ()=>{\n        try {\n            const response = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDocs)(userTransactionsRef);\n            const fetchedTrans = response.map((tran)=>tran.doc());\n            console.log(fetchedTrans);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (currentUser == \"Guest\") {\n            if (true) {\n                const storedTrans = JSON.parse(localStorage.getItem(\"TransactionsList\"));\n                if (storedTrans) {\n                    setTransactions(storedTrans);\n                    console.log(currentUser);\n                }\n            }\n        } else {\n            getTransactions();\n            console.log(currentUser);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex max-w-[380px]  flex-col  justify-start items-center \",\n        children: [\n            !showAddTrans && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-[40px]  flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_IO__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\page.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\page.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\page.jsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this),\n            showAddTrans && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full absolute bottom-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddTransaction__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\page.jsx\",\n                    lineNumber: 70,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\page.jsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\page.jsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"00mBEbvvbJnJvPNQVTMwHe422mg=\", false, function() {\n    return [\n        _utils_AppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext,\n        _utils_AppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3FEO0FBQ2Q7QUFDTjtBQUNRO0FBQ1U7QUFDTTtBQUVyQjtBQUM2QjtBQUNwQjtBQUU5QixTQUFTYTs7SUFDdEIsTUFBTSxFQUNKQyxZQUFZLEVBQ1pDLGVBQWUsRUFDZkMsVUFBVSxFQUNWQyxXQUFXLEVBQ1hDLGNBQWMsRUFDZixHQUFHWixnRUFBYUE7SUFDakIsTUFBTSxFQUFFYSxZQUFZLEVBQUVDLGVBQWUsRUFBRSxHQUFHZCxnRUFBYUE7SUFDdkQsTUFBTWUsc0JBQXNCWiw4REFBVUEsQ0FDcENHLHNEQUFFQSxFQUNGLFNBQXdCLE9BQWZLLFlBQVlLLEVBQUUsRUFBQztJQUUxQkMsUUFBUUMsR0FBRyxDQUFDUDtJQUVaLE1BQU1RLGtCQUFrQjtRQUN0QixJQUFJO1lBQ0YsTUFBTUMsV0FBWSxNQUFNZiwyREFBT0EsQ0FBQ1U7WUFDaEMsTUFBTU0sZUFBZUQsU0FBU0UsR0FBRyxDQUFDLENBQUNDLE9BQ2pDQSxLQUFLQyxHQUFHO1lBRVZQLFFBQVFDLEdBQUcsQ0FBQ0c7UUFDZCxFQUFFLE9BQU9JLEtBQUs7WUFDWlIsUUFBUUMsR0FBRyxDQUFDTztRQUNkO0lBQ0Y7SUFFQTdCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWUsZUFBZSxTQUFTO1lBQzFCLElBQUksSUFBNkIsRUFBRTtnQkFDakMsTUFBTWUsY0FBY0MsS0FBS0MsS0FBSyxDQUM1QkMsYUFBYUMsT0FBTyxDQUFDO2dCQUV2QixJQUFJSixhQUFhO29CQUNmWixnQkFBZ0JZO29CQUNoQlQsUUFBUUMsR0FBRyxDQUFDUDtnQkFDZDtZQUNGO1FBQ0YsT0FBTztZQUNMUTtZQUNBRixRQUFRQyxHQUFHLENBQUNQO1FBQ2Q7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ29CO1FBQUlDLFdBQVU7O1lBRVosQ0FBQ3hCLDhCQUNBLDhEQUFDdUI7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDbEMsc0RBQUVBOzs7OztrQ0FFSCw4REFBQ0MsMERBQU1BOzs7Ozs7Ozs7OztZQUlWUyw4QkFDQyw4REFBQ3VCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDL0Isa0VBQWNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3pCO0dBOUR3Qk07O1FBT2xCUCw0REFBYUE7UUFDeUJBLDREQUFhQTs7O0tBUmpDTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qc3g/NmU0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgSU8gZnJvbSBcIi4vY29tcG9uZW50cy9JT1wiO1xyXG5pbXBvcnQgUmVjZW50IGZyb20gXCIuL2NvbXBvbmVudHMvUmVjZW50XCI7XHJcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tIFwiLi91dGlscy9BcHBDb250ZXh0XCI7XHJcbmltcG9ydCBBZGRUcmFuc2FjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0FkZFRyYW5zYWN0aW9uXCI7XHJcblxyXG5pbXBvcnQgQnRuIGZyb20gXCIuL1VJIEVsZW1lbnRzL0J0blwiO1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2MsIGdldERvY3MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4vdXRpbHMvZmlyZWJhc2UtY29uZmlnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gIGNvbnN0IHtcclxuICAgIHNob3dBZGRUcmFucyxcclxuICAgIHNldFNob3dBZGRUcmFucyxcclxuICAgIHNldElzTG9nSW4sXHJcbiAgICBjdXJyZW50VXNlcixcclxuICAgIHNldEN1cnJlbnRVc2VyLFxyXG4gIH0gPSB1c2VBcHBDb250ZXh0KCk7XHJcbiAgY29uc3QgeyB0cmFuc2FjdGlvbnMsIHNldFRyYW5zYWN0aW9ucyB9ID0gdXNlQXBwQ29udGV4dCgpO1xyXG4gIGNvbnN0IHVzZXJUcmFuc2FjdGlvbnNSZWYgPSBjb2xsZWN0aW9uKFxyXG4gICAgZGIsXHJcbiAgICBgdXNlcnMvJHtjdXJyZW50VXNlci5pZH0vdHJhbnNhY3Rpb25zYFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xyXG5cclxuICBjb25zdCBnZXRUcmFuc2FjdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9ICBhd2FpdCBnZXREb2NzKHVzZXJUcmFuc2FjdGlvbnNSZWYpO1xyXG4gICAgICBjb25zdCBmZXRjaGVkVHJhbnMgPSByZXNwb25zZS5tYXAoKHRyYW4pPT4oXHJcbiAgICAgICAgdHJhbi5kb2MoKVxyXG4gICAgICApKVxyXG4gICAgICBjb25zb2xlLmxvZyhmZXRjaGVkVHJhbnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdXJyZW50VXNlciA9PSBcIkd1ZXN0XCIpIHtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBjb25zdCBzdG9yZWRUcmFucyA9IEpTT04ucGFyc2UoXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRyYW5zYWN0aW9uc0xpc3RcIilcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChzdG9yZWRUcmFucykge1xyXG4gICAgICAgICAgc2V0VHJhbnNhY3Rpb25zKHN0b3JlZFRyYW5zKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdldFRyYW5zYWN0aW9ucygpXHJcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWF4LXctWzM4MHB4XSAgZmxleC1jb2wgIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICB7LyogPExvZ2luLz4gKi99XHJcbiAgICAgIHshc2hvd0FkZFRyYW5zICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLVs0MHB4XSAgZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxJTyAvPlxyXG4gICAgICAgICAgey8qIDxCdG4gbmFtZSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9Lz4gKi99XHJcbiAgICAgICAgICA8UmVjZW50IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7c2hvd0FkZFRyYW5zICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBhYnNvbHV0ZSBib3R0b20tMFwiPlxyXG4gICAgICAgICAgPEFkZFRyYW5zYWN0aW9uIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJJTyIsIlJlY2VudCIsInVzZUFwcENvbnRleHQiLCJBZGRUcmFuc2FjdGlvbiIsIkJ0biIsImNvbGxlY3Rpb24iLCJnZXREb2MiLCJnZXREb2NzIiwiZGIiLCJQYWdlIiwic2hvd0FkZFRyYW5zIiwic2V0U2hvd0FkZFRyYW5zIiwic2V0SXNMb2dJbiIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJ0cmFuc2FjdGlvbnMiLCJzZXRUcmFuc2FjdGlvbnMiLCJ1c2VyVHJhbnNhY3Rpb25zUmVmIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZ2V0VHJhbnNhY3Rpb25zIiwicmVzcG9uc2UiLCJmZXRjaGVkVHJhbnMiLCJtYXAiLCJ0cmFuIiwiZG9jIiwiZXJyIiwic3RvcmVkVHJhbnMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});