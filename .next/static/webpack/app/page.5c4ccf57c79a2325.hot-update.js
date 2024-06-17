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

/***/ "(app-pages-browser)/./app/components/Recent.jsx":
/*!***********************************!*\
  !*** ./app/components/Recent.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Recent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TransactionStripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TransactionStripe */ \"(app-pages-browser)/./app/components/TransactionStripe.jsx\");\n/* harmony import */ var _utils_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/AppContext */ \"(app-pages-browser)/./app/utils/AppContext.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/spinner/dist/chunk-5PH6ULNP.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Recent() {\n    _s();\n    const { transactions, setTransactions, showAddTrans } = (0,_utils_AppContext__WEBPACK_IMPORTED_MODULE_3__.useAppContext)();\n    const [seeAll, setSeeAll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [recentTransactions, setRecentTransactions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Initialize as an empty array\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Add a loading state\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch transactions and reverse them\n        const fetchedAndReversedTransactions = [\n            ...transactions\n        ].reverse();\n        setRecentTransactions(fetchedAndReversedTransactions); // Update the state with the reversed transactions\n        setIsLoading(false);\n    }, [\n        transactions\n    ]); // Dependency array includes transactions to refetch whenever it changes\n    // ,showAddTrans,recentTransactions\n    function handleSeeAll() {\n        setSeeAll(!seeAll);\n    }\n    // Determine which transactions to show based on the seeAll state\n    const transactionsToShow = seeAll ? recentTransactions : recentTransactions.slice(0, 3);\n    // const transactionsToShow = recentTransactions;\n    // \n    const renderRecentTransactions = transactionsToShow.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TransactionStripe__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            item: item\n        }, idx, false, {\n            fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\components\\\\Recent.jsx\",\n            lineNumber: 32,\n            columnNumber: 5\n        }, this));\n    const renderFallback = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spinner, {\n        color: \"blue.500\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\components\\\\Recent.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex overflow-scroll no-scrollbar justify-center w-[300px] gap-[20px] items-center flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full  justify-around  items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-medium text-nowrap w-full text-[16px]\",\n                        children: \"Recent Transactions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\components\\\\Recent.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    transactions.length > 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: handleSeeAll,\n                        className: \"p-2 w-full text-end cursor-pointer \".concat(seeAll ? \"text-red-600\" : \"text-blue-600\"),\n                        children: seeAll ? \"Show Fewer\" : \"See All\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\components\\\\Recent.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\components\\\\Recent.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex h-screen no-scrollbar overflow-scroll flex-col p-2 justify-start gap-[20px] items-center\",\n                children: isLoading ? renderFallback : renderRecentTransactions\n            }, void 0, false, {\n                fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\components\\\\Recent.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Cyces 888\\\\Cash Flow\\\\app\\\\components\\\\Recent.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(Recent, \"kgdA6GdAu3sqpIUxPGNvZ+CTsac=\", false, function() {\n    return [\n        _utils_AppContext__WEBPACK_IMPORTED_MODULE_3__.useAppContext\n    ];\n});\n_c = Recent;\nvar _c;\n$RefreshReg$(_c, \"Recent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1JlY2VudC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ1Q7QUFDQTtBQUNWO0FBRzNCLFNBQVNPOztJQUN0QixNQUFNLEVBQUVDLFlBQVksRUFBRUMsZUFBZSxFQUFDQyxZQUFZLEVBQUMsR0FBR0wsZ0VBQWFBO0lBQ25FLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNVLG9CQUFvQkMsc0JBQXNCLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUUsR0FBRywrQkFBK0I7SUFDakcsTUFBTSxDQUFDWSxXQUFXQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFDLE9BQU8sc0JBQXNCO0lBSXhFRCxnREFBU0EsQ0FBQztRQUNSLHNDQUFzQztRQUN0QyxNQUFNZSxpQ0FBaUM7ZUFBSVQ7U0FBYSxDQUFDVSxPQUFPO1FBQ2hFSixzQkFBc0JHLGlDQUFpQyxrREFBa0Q7UUFDekdELGFBQWE7SUFDZixHQUFHO1FBQUNSO0tBQWEsR0FBRyx3RUFBd0U7SUFDNUYsbUNBQW1DO0lBQ25DLFNBQVNXO1FBQ1BQLFVBQVUsQ0FBQ0Q7SUFDYjtJQUVBLGlFQUFpRTtJQUNqRSxNQUFNUyxxQkFBcUJULFNBQVFFLHFCQUFxQkEsbUJBQW1CUSxLQUFLLENBQUMsR0FBRztJQUNwRixpREFBaUQ7SUFFbkQsR0FBRztJQUNELE1BQU1DLDJCQUEyQkYsbUJBQW1CRyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsb0JBQzdELDhEQUFDckIsMERBQWlCQTtZQUFXb0IsTUFBTUE7V0FBWEM7Ozs7O0lBRzFCLE1BQU1DLCtCQUNKLDhEQUFDcEIscURBQU9BO1FBQUNxQixPQUFNOzs7Ozs7SUFHakIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUE2Qzs7Ozs7O29CQUUxRHJCLGFBQWF1QixNQUFNLEdBQUUsbUJBQ3RCLDhEQUFDQzt3QkFBRUMsU0FBU2Q7d0JBQWNVLFdBQVcsc0NBQTRFLE9BQXRDbEIsU0FBTyxpQkFBZTtrQ0FDOUZBLFNBQVEsZUFBZTs7Ozs7Ozs7Ozs7OzBCQUs1Qiw4REFBQ2lCO2dCQUFJQyxXQUFVOzBCQUlYZCxZQUFhVyxpQkFBZUo7Ozs7Ozs7Ozs7OztBQVd0QztHQTNEd0JmOztRQUNnQ0YsNERBQWFBOzs7S0FEN0NFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1JlY2VudC5qc3g/N2Q5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgU3VzcGVuc2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRyYW5zYWN0aW9uU3RyaXBlIGZyb20gXCIuL1RyYW5zYWN0aW9uU3RyaXBlXCI7XHJcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tIFwiLi4vdXRpbHMvQXBwQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNlbnQoKSB7XHJcbiAgY29uc3QgeyB0cmFuc2FjdGlvbnMsIHNldFRyYW5zYWN0aW9ucyxzaG93QWRkVHJhbnN9ID0gdXNlQXBwQ29udGV4dCgpO1xyXG4gIGNvbnN0IFtzZWVBbGwsIHNldFNlZUFsbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3JlY2VudFRyYW5zYWN0aW9ucywgc2V0UmVjZW50VHJhbnNhY3Rpb25zXSA9IHVzZVN0YXRlKFtdKTsgLy8gSW5pdGlhbGl6ZSBhcyBhbiBlbXB0eSBhcnJheVxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gQWRkIGEgbG9hZGluZyBzdGF0ZVxyXG5cclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBGZXRjaCB0cmFuc2FjdGlvbnMgYW5kIHJldmVyc2UgdGhlbVxyXG4gICAgY29uc3QgZmV0Y2hlZEFuZFJldmVyc2VkVHJhbnNhY3Rpb25zID0gWy4uLnRyYW5zYWN0aW9uc10ucmV2ZXJzZSgpO1xyXG4gICAgc2V0UmVjZW50VHJhbnNhY3Rpb25zKGZldGNoZWRBbmRSZXZlcnNlZFRyYW5zYWN0aW9ucyk7IC8vIFVwZGF0ZSB0aGUgc3RhdGUgd2l0aCB0aGUgcmV2ZXJzZWQgdHJhbnNhY3Rpb25zXHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgfSwgW3RyYW5zYWN0aW9uc10pOyAvLyBEZXBlbmRlbmN5IGFycmF5IGluY2x1ZGVzIHRyYW5zYWN0aW9ucyB0byByZWZldGNoIHdoZW5ldmVyIGl0IGNoYW5nZXNcclxuICAvLyAsc2hvd0FkZFRyYW5zLHJlY2VudFRyYW5zYWN0aW9uc1xyXG4gIGZ1bmN0aW9uIGhhbmRsZVNlZUFsbCgpIHtcclxuICAgIHNldFNlZUFsbCghc2VlQWxsKTtcclxuICB9XHJcblxyXG4gIC8vIERldGVybWluZSB3aGljaCB0cmFuc2FjdGlvbnMgdG8gc2hvdyBiYXNlZCBvbiB0aGUgc2VlQWxsIHN0YXRlXHJcbiAgY29uc3QgdHJhbnNhY3Rpb25zVG9TaG93ID0gc2VlQWxsPyByZWNlbnRUcmFuc2FjdGlvbnMgOiByZWNlbnRUcmFuc2FjdGlvbnMuc2xpY2UoMCwgMyk7XHJcbiAgLy8gY29uc3QgdHJhbnNhY3Rpb25zVG9TaG93ID0gcmVjZW50VHJhbnNhY3Rpb25zO1xyXG5cclxuLy8gXHJcbiAgY29uc3QgcmVuZGVyUmVjZW50VHJhbnNhY3Rpb25zID0gdHJhbnNhY3Rpb25zVG9TaG93Lm1hcCgoaXRlbSwgaWR4KSA9PiAoXHJcbiAgICA8VHJhbnNhY3Rpb25TdHJpcGUga2V5PXtpZHh9IGl0ZW09e2l0ZW19IC8+XHJcbiAgKSk7XHJcbiAgXHJcbiAgY29uc3QgcmVuZGVyRmFsbGJhY2sgPSAoXHJcbiAgICA8U3Bpbm5lciBjb2xvcj0nYmx1ZS41MDAnIC8+XHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG92ZXJmbG93LXNjcm9sbCBuby1zY3JvbGxiYXIganVzdGlmeS1jZW50ZXIgdy1bMzAwcHhdIGdhcC1bMjBweF0gaXRlbXMtY2VudGVyIGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgIGp1c3RpZnktYXJvdW5kICBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ub3dyYXAgdy1mdWxsIHRleHQtWzE2cHhdXCI+UmVjZW50IFRyYW5zYWN0aW9uczwvaDI+XHJcblxyXG4gICAgICAgIHt0cmFuc2FjdGlvbnMubGVuZ3RoID4zICAmJlxyXG4gICAgICAgIDxwIG9uQ2xpY2s9e2hhbmRsZVNlZUFsbH0gY2xhc3NOYW1lPXtgcC0yIHctZnVsbCB0ZXh0LWVuZCBjdXJzb3ItcG9pbnRlciAke3NlZUFsbD9cInRleHQtcmVkLTYwMFwiOlwidGV4dC1ibHVlLTYwMFwifWB9PlxyXG4gICAgICAgICAge3NlZUFsbD8gXCJTaG93IEZld2VyXCIgOiBcIlNlZSBBbGxcIn1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaC1zY3JlZW4gbm8tc2Nyb2xsYmFyIG92ZXJmbG93LXNjcm9sbCBmbGV4LWNvbCBwLTIganVzdGlmeS1zdGFydCBnYXAtWzIwcHhdIGl0ZW1zLWNlbnRlclwiPlxyXG5cclxuICAgICBcclxuXHJcbiAgICAgICAgeyBpc0xvYWRpbmcgID8gcmVuZGVyRmFsbGJhY2s6cmVuZGVyUmVjZW50VHJhbnNhY3Rpb25zfVxyXG4gICAgICAgIHsvKiB7aXNMb2FkaW5nID8gcmVuZGVyRmFsbGJhY2sgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBvdmVyZmxvdy15LWF1dG8gbWF4LWgtWzMwMHB4XSBmbGV4IGZsZXgtY29sIGdhcC1bMjBweF1cIj5cclxuICAgICAgICAgICAge3JlbmRlclJlY2VudFRyYW5zYWN0aW9uc31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9ICovfVxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdXNwZW5zZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVHJhbnNhY3Rpb25TdHJpcGUiLCJ1c2VBcHBDb250ZXh0IiwiU3Bpbm5lciIsIlJlY2VudCIsInRyYW5zYWN0aW9ucyIsInNldFRyYW5zYWN0aW9ucyIsInNob3dBZGRUcmFucyIsInNlZUFsbCIsInNldFNlZUFsbCIsInJlY2VudFRyYW5zYWN0aW9ucyIsInNldFJlY2VudFRyYW5zYWN0aW9ucyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImZldGNoZWRBbmRSZXZlcnNlZFRyYW5zYWN0aW9ucyIsInJldmVyc2UiLCJoYW5kbGVTZWVBbGwiLCJ0cmFuc2FjdGlvbnNUb1Nob3ciLCJzbGljZSIsInJlbmRlclJlY2VudFRyYW5zYWN0aW9ucyIsIm1hcCIsIml0ZW0iLCJpZHgiLCJyZW5kZXJGYWxsYmFjayIsImNvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJsZW5ndGgiLCJwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Recent.jsx\n"));

/***/ })

});