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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_IO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/IO */ \"(app-pages-browser)/./app/components/IO.jsx\");\n/* harmony import */ var _components_Recent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Recent */ \"(app-pages-browser)/./app/components/Recent.jsx\");\n/* harmony import */ var _utils_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/AppContext */ \"(app-pages-browser)/./app/utils/AppContext.js\");\n/* harmony import */ var _components_AddTransaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AddTransaction */ \"(app-pages-browser)/./app/components/AddTransaction.jsx\");\n/* harmony import */ var _UI_Elements_Btn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI Elements/Btn */ \"(app-pages-browser)/./app/UI Elements/Btn.jsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_firebase_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/firebase-config */ \"(app-pages-browser)/./app/utils/firebase-config.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const { showAddTrans, setShowAddTrans, setIsLogIn, currentUser, setCurrentUser } = (0,_utils_AppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext)();\n    const { transactions, setTransactions } = (0,_utils_AppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext)();\n    const userTransactionsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_utils_firebase_config__WEBPACK_IMPORTED_MODULE_8__.db, \"users/\".concat(currentUser.id, \"/transactions\"));\n    console.log(currentUser);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            const storedTrans = JSON.parse(localStorage.getItem(\"TransactionsList\"));\n            if (storedTrans) {\n                setTransactions(storedTrans);\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex max-w-[380px]  flex-col  justify-start items-center \",\n        children: [\n            !showAddTrans && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-[40px]  flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_IO__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\page.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\page.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\page.jsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this),\n            showAddTrans && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full absolute bottom-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddTransaction__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\page.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\page.jsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\page.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"/LtChHwa/+LZsjsyhlZTzdR9bzo=\", false, function() {\n    return [\n        _utils_AppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext,\n        _utils_AppContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3FEO0FBQ2Q7QUFDTjtBQUNRO0FBQ1U7QUFDTTtBQUVyQjtBQUNZO0FBQ0g7QUFFOUIsU0FBU1c7O0lBQ3RCLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxlQUFlLEVBQUVDLFVBQVUsRUFBQ0MsV0FBVyxFQUFFQyxjQUFjLEVBQUUsR0FBR1YsZ0VBQWFBO0lBQy9GLE1BQU0sRUFBRVcsWUFBWSxFQUFFQyxlQUFlLEVBQUUsR0FBR1osZ0VBQWFBO0lBQ3ZELE1BQU1hLHNCQUFzQlYsOERBQVVBLENBQUNDLHNEQUFFQSxFQUFFLFNBQXdCLE9BQWZLLFlBQVlLLEVBQUUsRUFBQztJQUNyRUMsUUFBUUMsR0FBRyxDQUFDUDtJQUNWYixnREFBU0EsQ0FBQztRQUNSLElBQUksSUFBNkIsRUFBRTtZQUNqQyxNQUFNcUIsY0FBY0MsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7WUFDcEQsSUFBSUosYUFBYTtnQkFDZkwsZ0JBQWdCSztZQUNsQjtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7O1lBRVosQ0FBQ2pCLDhCQUNBLDhEQUFDZ0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDekIsc0RBQUVBOzs7OztrQ0FFSCw4REFBQ0MsMERBQU1BOzs7Ozs7Ozs7OztZQUlWTyw4QkFDQyw4REFBQ2dCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDdEIsa0VBQWNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3pCO0dBaEN3Qkk7O1FBQzRETCw0REFBYUE7UUFDckRBLDREQUFhQTs7O0tBRmpDSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qc3g/NmU0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgSU8gZnJvbSBcIi4vY29tcG9uZW50cy9JT1wiO1xyXG5pbXBvcnQgUmVjZW50IGZyb20gXCIuL2NvbXBvbmVudHMvUmVjZW50XCI7XHJcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tIFwiLi91dGlscy9BcHBDb250ZXh0XCI7XHJcbmltcG9ydCBBZGRUcmFuc2FjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0FkZFRyYW5zYWN0aW9uXCI7XHJcblxyXG5pbXBvcnQgQnRuIGZyb20gXCIuL1VJIEVsZW1lbnRzL0J0blwiO1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuL3V0aWxzL2ZpcmViYXNlLWNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcclxuICBjb25zdCB7IHNob3dBZGRUcmFucywgc2V0U2hvd0FkZFRyYW5zLCBzZXRJc0xvZ0luLGN1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlciB9ID0gdXNlQXBwQ29udGV4dCgpO1xyXG4gIGNvbnN0IHsgdHJhbnNhY3Rpb25zLCBzZXRUcmFuc2FjdGlvbnMgfSA9IHVzZUFwcENvbnRleHQoKTtcclxuICBjb25zdCB1c2VyVHJhbnNhY3Rpb25zUmVmID0gY29sbGVjdGlvbihkYiwgYHVzZXJzLyR7Y3VycmVudFVzZXIuaWR9L3RyYW5zYWN0aW9uc2ApO1xyXG5jb25zb2xlLmxvZyhjdXJyZW50VXNlcik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGNvbnN0IHN0b3JlZFRyYW5zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRyYW5zYWN0aW9uc0xpc3RcIikpO1xyXG4gICAgICBpZiAoc3RvcmVkVHJhbnMpIHtcclxuICAgICAgICBzZXRUcmFuc2FjdGlvbnMoc3RvcmVkVHJhbnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1heC13LVszODBweF0gIGZsZXgtY29sICBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgey8qIDxMb2dpbi8+ICovfVxyXG4gICAgICB7IXNob3dBZGRUcmFucyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC1bNDBweF0gIGZsZXgtY29sXCI+XHJcbiAgICAgICAgICA8SU8gLz5cclxuICAgICAgICAgIHsvKiA8QnRuIG5hbWUgb25DbGljaz17aGFuZGxlTG9nb3V0fS8+ICovfVxyXG4gICAgICAgICAgPFJlY2VudCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge3Nob3dBZGRUcmFucyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYWJzb2x1dGUgYm90dG9tLTBcIj5cclxuICAgICAgICAgIDxBZGRUcmFuc2FjdGlvbiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwibW90aW9uIiwiSU8iLCJSZWNlbnQiLCJ1c2VBcHBDb250ZXh0IiwiQWRkVHJhbnNhY3Rpb24iLCJCdG4iLCJjb2xsZWN0aW9uIiwiZGIiLCJQYWdlIiwic2hvd0FkZFRyYW5zIiwic2V0U2hvd0FkZFRyYW5zIiwic2V0SXNMb2dJbiIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJ0cmFuc2FjdGlvbnMiLCJzZXRUcmFuc2FjdGlvbnMiLCJ1c2VyVHJhbnNhY3Rpb25zUmVmIiwiaWQiLCJjb25zb2xlIiwibG9nIiwic3RvcmVkVHJhbnMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});