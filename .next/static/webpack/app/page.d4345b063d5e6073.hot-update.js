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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_IO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/IO */ \"(app-pages-browser)/./app/components/IO.jsx\");\n/* harmony import */ var _components_Recent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Recent */ \"(app-pages-browser)/./app/components/Recent.jsx\");\n/* harmony import */ var _utils_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/AppContext */ \"(app-pages-browser)/./app/utils/AppContext.js\");\n/* harmony import */ var _components_AddTransaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AddTransaction */ \"(app-pages-browser)/./app/components/AddTransaction.jsx\");\n/* harmony import */ var _UI_Elements_Btn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI Elements/Btn */ \"(app-pages-browser)/./app/UI Elements/Btn.jsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_firebase_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/firebase-config */ \"(app-pages-browser)/./app/utils/firebase-config.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const { showAddTrans, setShowAddTrans, setIsLogIn, currentUser, setCurrentUser } = (0,_utils_AppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext)();\n    const { transactions, setTransactions } = (0,_utils_AppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext)();\n    const userTransactionsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_utils_firebase_config__WEBPACK_IMPORTED_MODULE_8__.db, \"users/\".concat(currentUser.id, \"/transactions\"));\n    console.log(currentUser);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (currentUser == \"Guest\") {\n            if (true) {\n                const storedTrans = JSON.parse(localStorage.getItem(\"TransactionsList\"));\n                if (storedTrans) {\n                    setTransactions(storedTrans);\n                    console.log(currentUser);\n                }\n            }\n        } else {\n            try {\n                const storedTrans = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDocs)(userTransactionsRef);\n                console.log(storedTrans);\n            } catch (err) {\n                console.log(err);\n            }\n            console.log(currentUser);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex max-w-[380px]  flex-col  justify-start items-center \",\n        children: [\n            !showAddTrans && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-[40px]  flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_IO__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\page.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\page.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\page.jsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this),\n            showAddTrans && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full absolute bottom-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddTransaction__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\page.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\page.jsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\page.jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"00mBEbvvbJnJvPNQVTMwHe422mg=\", false, function() {\n    return [\n        _utils_AppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext,\n        _utils_AppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3FEO0FBQ2Q7QUFDTjtBQUNRO0FBQ1U7QUFDTTtBQUVyQjtBQUM2QjtBQUNwQjtBQUU5QixTQUFTYTs7SUFDdEIsTUFBTSxFQUNKQyxZQUFZLEVBQ1pDLGVBQWUsRUFDZkMsVUFBVSxFQUNWQyxXQUFXLEVBQ1hDLGNBQWMsRUFDZixHQUFHWixnRUFBYUE7SUFDakIsTUFBTSxFQUFFYSxZQUFZLEVBQUVDLGVBQWUsRUFBRSxHQUFHZCxnRUFBYUE7SUFDdkQsTUFBTWUsc0JBQXNCWiw4REFBVUEsQ0FDcENHLHNEQUFFQSxFQUNGLFNBQXdCLE9BQWZLLFlBQVlLLEVBQUUsRUFBQztJQUUxQkMsUUFBUUMsR0FBRyxDQUFDUDtJQUNaZixnREFBU0EsQ0FBQztRQUNSLElBQUllLGVBQWUsU0FBUztZQUMxQixJQUFJLElBQTZCLEVBQUU7Z0JBQ2pDLE1BQU1RLGNBQWNDLEtBQUtDLEtBQUssQ0FDNUJDLGFBQWFDLE9BQU8sQ0FBQztnQkFFdkIsSUFBSUosYUFBYTtvQkFDZkwsZ0JBQWdCSztvQkFDaEJGLFFBQVFDLEdBQUcsQ0FBQ1A7Z0JBRWQ7WUFDRjtRQUNGLE9BQU07WUFFSixJQUFHO2dCQUVELE1BQU1RLGNBQWNkLDJEQUFPQSxDQUFDVTtnQkFDNUJFLFFBQVFDLEdBQUcsQ0FBQ0M7WUFDZCxFQUFFLE9BQU1LLEtBQUk7Z0JBQ1ZQLFFBQVFDLEdBQUcsQ0FBQ007WUFDZDtZQUNEUCxRQUFRQyxHQUFHLENBQUNQO1FBQ2I7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2M7UUFBSUMsV0FBVTs7WUFFWixDQUFDbEIsOEJBQ0EsOERBQUNpQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUM1QixzREFBRUE7Ozs7O2tDQUVILDhEQUFDQywwREFBTUE7Ozs7Ozs7Ozs7O1lBSVZTLDhCQUNDLDhEQUFDaUI7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUN6QixrRUFBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekI7R0F6RHdCTTs7UUFPbEJQLDREQUFhQTtRQUN5QkEsNERBQWFBOzs7S0FSakNPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzeD82ZTQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBJTyBmcm9tIFwiLi9jb21wb25lbnRzL0lPXCI7XHJcbmltcG9ydCBSZWNlbnQgZnJvbSBcIi4vY29tcG9uZW50cy9SZWNlbnRcIjtcclxuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gXCIuL3V0aWxzL0FwcENvbnRleHRcIjtcclxuaW1wb3J0IEFkZFRyYW5zYWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQWRkVHJhbnNhY3Rpb25cIjtcclxuXHJcbmltcG9ydCBCdG4gZnJvbSBcIi4vVUkgRWxlbWVudHMvQnRuXCI7XHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvYywgZ2V0RG9jcyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi91dGlscy9maXJlYmFzZS1jb25maWdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgc2hvd0FkZFRyYW5zLFxyXG4gICAgc2V0U2hvd0FkZFRyYW5zLFxyXG4gICAgc2V0SXNMb2dJbixcclxuICAgIGN1cnJlbnRVc2VyLFxyXG4gICAgc2V0Q3VycmVudFVzZXIsXHJcbiAgfSA9IHVzZUFwcENvbnRleHQoKTtcclxuICBjb25zdCB7IHRyYW5zYWN0aW9ucywgc2V0VHJhbnNhY3Rpb25zIH0gPSB1c2VBcHBDb250ZXh0KCk7XHJcbiAgY29uc3QgdXNlclRyYW5zYWN0aW9uc1JlZiA9IGNvbGxlY3Rpb24oXHJcbiAgICBkYixcclxuICAgIGB1c2Vycy8ke2N1cnJlbnRVc2VyLmlkfS90cmFuc2FjdGlvbnNgXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjdXJyZW50VXNlciA9PSBcIkd1ZXN0XCIpIHtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBjb25zdCBzdG9yZWRUcmFucyA9IEpTT04ucGFyc2UoXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRyYW5zYWN0aW9uc0xpc3RcIilcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChzdG9yZWRUcmFucykge1xyXG4gICAgICAgICAgc2V0VHJhbnNhY3Rpb25zKHN0b3JlZFRyYW5zKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2V7XHJcblxyXG4gICAgICB0cnl7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0b3JlZFRyYW5zID0gZ2V0RG9jcyh1c2VyVHJhbnNhY3Rpb25zUmVmKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0b3JlZFRyYW5zKTtcclxuICAgICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH1cclxuICAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1heC13LVszODBweF0gIGZsZXgtY29sICBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgey8qIDxMb2dpbi8+ICovfVxyXG4gICAgICB7IXNob3dBZGRUcmFucyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC1bNDBweF0gIGZsZXgtY29sXCI+XHJcbiAgICAgICAgICA8SU8gLz5cclxuICAgICAgICAgIHsvKiA8QnRuIG5hbWUgb25DbGljaz17aGFuZGxlTG9nb3V0fS8+ICovfVxyXG4gICAgICAgICAgPFJlY2VudCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge3Nob3dBZGRUcmFucyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYWJzb2x1dGUgYm90dG9tLTBcIj5cclxuICAgICAgICAgIDxBZGRUcmFuc2FjdGlvbiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwibW90aW9uIiwiSU8iLCJSZWNlbnQiLCJ1c2VBcHBDb250ZXh0IiwiQWRkVHJhbnNhY3Rpb24iLCJCdG4iLCJjb2xsZWN0aW9uIiwiZ2V0RG9jIiwiZ2V0RG9jcyIsImRiIiwiUGFnZSIsInNob3dBZGRUcmFucyIsInNldFNob3dBZGRUcmFucyIsInNldElzTG9nSW4iLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwidHJhbnNhY3Rpb25zIiwic2V0VHJhbnNhY3Rpb25zIiwidXNlclRyYW5zYWN0aW9uc1JlZiIsImlkIiwiY29uc29sZSIsImxvZyIsInN0b3JlZFRyYW5zIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVyciIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});