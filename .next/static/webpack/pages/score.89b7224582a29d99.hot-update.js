"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/score",{

/***/ "./src/pages/score.tsx":
/*!*****************************!*\
  !*** ./src/pages/score.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": function() { return /* binding */ data; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"options\": function() { return /* binding */ options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nconst options = {\n    responsive: true,\n    plugins: {\n        legend: {\n            position: \"top\"\n        },\n        title: {\n            display: true,\n            text: \"Waf Attack Score\"\n        }\n    }\n};\nconst labels = [\n    \"Score\",\n    \"XSS Score\",\n    \"March\",\n    \"April\",\n    \"May\",\n    \"June\",\n    \"July\"\n];\nconst data = {\n    labels,\n    datasets: [\n        {\n            label: \"Dataset 1\",\n            data: [\n                1,\n                2,\n                3,\n                4,\n                5,\n                6,\n                7,\n                8,\n                9,\n                1,\n                2,\n                3,\n                4,\n                5\n            ],\n            backgroundColor: \"rgba(255, 99, 132, 0.5)\"\n        },\n        {\n            label: \"Dataset 2\",\n            data: [\n                1,\n                2,\n                3,\n                4,\n                5,\n                6,\n                7,\n                8,\n                9,\n                1,\n                2,\n                3,\n                4,\n                5\n            ],\n            backgroundColor: \"rgba(53, 162, 235, 0.5)\"\n        }\n    ]\n};\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        display: \"flex\",\n        my: \"150px\",\n        mx: \"auto\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Bar, {\n                options: options,\n                data: data\n            }, void 0, false, {\n                fileName: \"/Users/marinastavares/Projects/hackaday-2023/src/pages/score.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/marinastavares/Projects/hackaday-2023/src/pages/score.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2NvcmUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNvQztBQVNsQjtBQUNvQjtBQUV0Q0Usb0RBQWdCLENBQ2RDLG1EQUFhQSxFQUNiQyxpREFBV0EsRUFDWEMsZ0RBQVVBLEVBQ1ZDLDJDQUFLQSxFQUNMQyw2Q0FBT0EsRUFDUEMsNENBQU1BO0FBR0QsTUFBTUcsVUFBVTtJQUNyQkMsWUFBWSxJQUFJO0lBQ2hCQyxTQUFTO1FBQ1BDLFFBQVE7WUFDTkMsVUFBVTtRQUNaO1FBQ0FDLE9BQU87WUFDTEMsU0FBUyxJQUFJO1lBQ2JDLE1BQU07UUFDUjtJQUNGO0FBQ0YsRUFBRTtBQUVGLE1BQU1DLFNBQVM7SUFBQztJQUFTO0lBQWE7SUFBUztJQUFTO0lBQU87SUFBUTtDQUFPO0FBRXZFLE1BQU1DLE9BQU87SUFDbEJEO0lBQ0FFLFVBQVU7UUFDUjtZQUNFQyxPQUFPO1lBQ1BGLE1BQU07Z0JBQUM7Z0JBQUc7Z0JBQUc7Z0JBQUc7Z0JBQUc7Z0JBQUc7Z0JBQUc7Z0JBQUc7Z0JBQUc7Z0JBQUc7Z0JBQUc7Z0JBQUc7Z0JBQUc7Z0JBQUc7YUFBRTtZQUNoREcsaUJBQWlCO1FBQ25CO1FBQ0E7WUFDRUQsT0FBTztZQUNQRixNQUFNO2dCQUFDO2dCQUFHO2dCQUFHO2dCQUFHO2dCQUFHO2dCQUFHO2dCQUFHO2dCQUFHO2dCQUFHO2dCQUFHO2dCQUFHO2dCQUFHO2dCQUFHO2dCQUFHO2FBQUU7WUFDaERHLGlCQUFpQjtRQUNuQjtLQUNEO0FBQ0gsRUFBRTtBQUVhLFNBQVNDLE9BQU87SUFDN0IscUJBQ0UsOERBQUN4Qiw4Q0FBR0E7UUFDRmlCLFNBQVE7UUFDUlEsSUFBRztRQUNIQyxJQUFHO1FBQ0hDLFlBQVc7UUFDWEMsZ0JBQWU7OzBCQUVmLDhEQUFDbkIsZ0RBQUdBO2dCQUFDRSxTQUFTQTtnQkFBU1MsTUFBTUE7Ozs7OztZQUFTOzs7Ozs7O0FBRzVDLENBQUM7S0FadUJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zY29yZS50c3g/OTI2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybSBmcm9tIFwiQC9jb21wb25lbnRzL0Zvcm1cIjtcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQge1xuICBDaGFydCBhcyBDaGFydEpTLFxuICBDYXRlZ29yeVNjYWxlLFxuICBMaW5lYXJTY2FsZSxcbiAgQmFyRWxlbWVudCxcbiAgVGl0bGUsXG4gIFRvb2x0aXAsXG4gIExlZ2VuZCxcbn0gZnJvbSBcImNoYXJ0LmpzXCI7XG5pbXBvcnQgeyBCYXIgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5cbkNoYXJ0SlMucmVnaXN0ZXIoXG4gIENhdGVnb3J5U2NhbGUsXG4gIExpbmVhclNjYWxlLFxuICBCYXJFbGVtZW50LFxuICBUaXRsZSxcbiAgVG9vbHRpcCxcbiAgTGVnZW5kXG4pO1xuXG5leHBvcnQgY29uc3Qgb3B0aW9ucyA9IHtcbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgcGx1Z2luczoge1xuICAgIGxlZ2VuZDoge1xuICAgICAgcG9zaXRpb246IFwidG9wXCIgYXMgY29uc3QsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgIHRleHQ6IFwiV2FmIEF0dGFjayBTY29yZVwiLFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBsYWJlbHMgPSBbXCJTY29yZVwiLCBcIlhTUyBTY29yZVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiXTtcblxuZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG4gIGxhYmVscyxcbiAgZGF0YXNldHM6IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCJEYXRhc2V0IDFcIixcbiAgICAgIGRhdGE6IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxLCAyLCAzLCA0LCA1XSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgOTksIDEzMiwgMC41KVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiRGF0YXNldCAyXCIsXG4gICAgICBkYXRhOiBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMSwgMiwgMywgNCwgNV0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg1MywgMTYyLCAyMzUsIDAuNSlcIixcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICBteT1cIjE1MHB4XCJcbiAgICAgIG14PVwiYXV0b1wiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICA+XG4gICAgICA8QmFyIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e2RhdGF9IC8+e1wiIFwifVxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJveCIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIkJhckVsZW1lbnQiLCJUaXRsZSIsIlRvb2x0aXAiLCJMZWdlbmQiLCJCYXIiLCJyZWdpc3RlciIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsImxhYmVscyIsImRhdGEiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiSG9tZSIsIm15IiwibXgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/score.tsx\n"));

/***/ })

});