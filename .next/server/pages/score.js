"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/score";
exports.ids = ["pages/score"];
exports.modules = {

/***/ "./src/pages/score.tsx":
/*!*****************************!*\
  !*** ./src/pages/score.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BAR_WAF_CHART_BUCKETS\": () => (/* binding */ BAR_WAF_CHART_BUCKETS),\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getThresholdForScore\": () => (/* binding */ getThresholdForScore),\n/* harmony export */   \"options\": () => (/* binding */ options),\n/* harmony export */   \"wafScoreThresholds\": () => (/* binding */ wafScoreThresholds)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"chart.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"react-chartjs-2\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([chart_js__WEBPACK_IMPORTED_MODULE_2__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__]);\n([chart_js__WEBPACK_IMPORTED_MODULE_2__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nconst options = {\n    responsive: true,\n    scales: {\n        x: {\n            stacked: true\n        },\n        y: {\n            stacked: true,\n            suggestedMax: 100\n        }\n    },\n    plugins: {\n        legend: {\n            position: \"top\"\n        },\n        title: {\n            display: true,\n            text: \"Waf Attack Score\"\n        }\n    }\n};\nconst labels = [\n    \"Score\",\n    \"XSS Score\",\n    \"SQLI Score\",\n    \"RCE Score\"\n];\nvar BAR_WAF_CHART_BUCKETS;\n(function(BAR_WAF_CHART_BUCKETS) {\n    BAR_WAF_CHART_BUCKETS[\"ATTACK\"] = \"attack\";\n    BAR_WAF_CHART_BUCKETS[\"LIKELY_ATTACK\"] = \"likely_attack\";\n    BAR_WAF_CHART_BUCKETS[\"LIKELY_CLEAN\"] = \"likely_clean\";\n    BAR_WAF_CHART_BUCKETS[\"CLEAN\"] = \"clean\";\n    BAR_WAF_CHART_BUCKETS[\"NOT_SCORED\"] = \"not_scored\";\n})(BAR_WAF_CHART_BUCKETS || (BAR_WAF_CHART_BUCKETS = {}));\nconst wafScoreThresholds = {\n    [BAR_WAF_CHART_BUCKETS.ATTACK]: {\n        geq: 1,\n        leq: 20\n    },\n    [BAR_WAF_CHART_BUCKETS.LIKELY_ATTACK]: {\n        geq: 21,\n        leq: 50\n    },\n    [BAR_WAF_CHART_BUCKETS.LIKELY_CLEAN]: {\n        geq: 51,\n        leq: 80\n    },\n    [BAR_WAF_CHART_BUCKETS.CLEAN]: {\n        geq: 81,\n        leq: 99\n    }\n};\nconst getThresholdForScore = (score)=>Object.keys(wafScoreThresholds).find((threshold)=>score >= wafScoreThresholds[threshold].geq && score <= wafScoreThresholds[threshold].leq);\n// case BAR_WAF_CHART_BUCKETS.CLEAN: #104122\n// case BAR_WAF_CHART_BUCKETS.LIKELY_CLEAN: #2db35e\n// case BAR_WAF_CHART_BUCKETS.ATTACK: #780a02\n// case BAR_WAF_CHART_BUCKETS.LIKELY_ATTACK: #fc574a\nconst example = {\n    \"waf.score\": 10,\n    \"waf.xss.score\": 25,\n    \"waf.spli.score\": 75,\n    \"waf.rce.score\": 99\n};\nfunction Home() {\n    console.log(\"\\n\\uD83D\\uDE80 -> example:\", getThresholdForScore(example[\"waf.score\"]));\n    const renderData = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{\n        const currentValues = Object.values(example).map((value)=>getThresholdForScore(value));\n        const getDataType = (type)=>Object.values(example).map((value)=>getThresholdForScore(value) === type ? value : 0);\n        return {\n            labels,\n            datasets: [\n                {\n                    label: \"Clean\",\n                    data: getDataType(BAR_WAF_CHART_BUCKETS.CLEAN),\n                    backgroundColor: \"#104122\"\n                },\n                {\n                    label: \"Likely Clean\",\n                    data: getDataType(BAR_WAF_CHART_BUCKETS.LIKELY_CLEAN),\n                    backgroundColor: \"#2db35e\"\n                },\n                {\n                    label: \"Likely Attack\",\n                    data: getDataType(BAR_WAF_CHART_BUCKETS.LIKELY_ATTACK),\n                    backgroundColor: \"#780a02\"\n                },\n                {\n                    label: \"Attack\",\n                    data: getDataType(BAR_WAF_CHART_BUCKETS.ATTACK),\n                    backgroundColor: \"#fc574a\"\n                }\n            ]\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        display: \"flex\",\n        my: \"150px\",\n        mx: \"auto\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Bar, {\n            options: options,\n            data: renderData\n        }, void 0, false, {\n            fileName: \"/Users/marinastavares/Projects/hackaday-2023/src/pages/score.tsx\",\n            lineNumber: 140,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/marinastavares/Projects/hackaday-2023/src/pages/score.tsx\",\n        lineNumber: 133,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhDQUFHQTtRQUNGdUIsU0FBUTtRQUNSaUMsSUFBRztRQUNIQyxJQUFHO1FBQ0hDLFlBQVc7UUFDWEMsZ0JBQWU7a0JBRWYsNEVBQUNqRCxnREFBR0E7WUFBQ0UsU0FBU0E7WUFBUzBDLE1BQU1UOzs7Ozs7Ozs7OztBQUduQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2FkYXktMjAyMy8uL3NyYy9wYWdlcy9zY29yZS50c3g/OTI2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybSBmcm9tIFwiQC9jb21wb25lbnRzL0Zvcm1cIjtcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQge1xuICBDaGFydCBhcyBDaGFydEpTLFxuICBDYXRlZ29yeVNjYWxlLFxuICBMaW5lYXJTY2FsZSxcbiAgQmFyRWxlbWVudCxcbiAgVGl0bGUsXG4gIFRvb2x0aXAsXG4gIExlZ2VuZCxcbn0gZnJvbSBcImNoYXJ0LmpzXCI7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYXIgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5cbkNoYXJ0SlMucmVnaXN0ZXIoXG4gIENhdGVnb3J5U2NhbGUsXG4gIExpbmVhclNjYWxlLFxuICBCYXJFbGVtZW50LFxuICBUaXRsZSxcbiAgVG9vbHRpcCxcbiAgTGVnZW5kXG4pO1xuXG5leHBvcnQgY29uc3Qgb3B0aW9ucyA9IHtcbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgc2NhbGVzOiB7XG4gICAgeDoge1xuICAgICAgc3RhY2tlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHk6IHtcbiAgICAgIHN0YWNrZWQ6IHRydWUsXG4gICAgICBzdWdnZXN0ZWRNYXg6IDEwMCxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiB7XG4gICAgbGVnZW5kOiB7XG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIiBhcyBjb25zdCxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgdGV4dDogXCJXYWYgQXR0YWNrIFNjb3JlXCIsXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IGxhYmVscyA9IFtcIlNjb3JlXCIsIFwiWFNTIFNjb3JlXCIsIFwiU1FMSSBTY29yZVwiLCBcIlJDRSBTY29yZVwiXTtcblxuZXhwb3J0IGVudW0gQkFSX1dBRl9DSEFSVF9CVUNLRVRTIHtcbiAgQVRUQUNLID0gXCJhdHRhY2tcIixcbiAgTElLRUxZX0FUVEFDSyA9IFwibGlrZWx5X2F0dGFja1wiLFxuICBMSUtFTFlfQ0xFQU4gPSBcImxpa2VseV9jbGVhblwiLFxuICBDTEVBTiA9IFwiY2xlYW5cIixcbiAgTk9UX1NDT1JFRCA9IFwibm90X3Njb3JlZFwiLFxufVxuXG5leHBvcnQgY29uc3Qgd2FmU2NvcmVUaHJlc2hvbGRzID0ge1xuICBbQkFSX1dBRl9DSEFSVF9CVUNLRVRTLkFUVEFDS106IHtcbiAgICBnZXE6IDEsXG4gICAgbGVxOiAyMCxcbiAgfSxcbiAgW0JBUl9XQUZfQ0hBUlRfQlVDS0VUUy5MSUtFTFlfQVRUQUNLXToge1xuICAgIGdlcTogMjEsXG4gICAgbGVxOiA1MCxcbiAgfSxcbiAgW0JBUl9XQUZfQ0hBUlRfQlVDS0VUUy5MSUtFTFlfQ0xFQU5dOiB7XG4gICAgZ2VxOiA1MSxcbiAgICBsZXE6IDgwLFxuICB9LFxuICBbQkFSX1dBRl9DSEFSVF9CVUNLRVRTLkNMRUFOXToge1xuICAgIGdlcTogODEsXG4gICAgbGVxOiA5OSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUaHJlc2hvbGRGb3JTY29yZSA9IChzY29yZTogbnVtYmVyKSA9PlxuICBPYmplY3Qua2V5cyh3YWZTY29yZVRocmVzaG9sZHMpLmZpbmQoXG4gICAgKHRocmVzaG9sZCkgPT5cbiAgICAgIHNjb3JlID49IHdhZlNjb3JlVGhyZXNob2xkc1t0aHJlc2hvbGRdLmdlcSAmJlxuICAgICAgc2NvcmUgPD0gd2FmU2NvcmVUaHJlc2hvbGRzW3RocmVzaG9sZF0ubGVxXG4gICk7XG5cbi8vIGNhc2UgQkFSX1dBRl9DSEFSVF9CVUNLRVRTLkNMRUFOOiAjMTA0MTIyXG4vLyBjYXNlIEJBUl9XQUZfQ0hBUlRfQlVDS0VUUy5MSUtFTFlfQ0xFQU46ICMyZGIzNWVcbi8vIGNhc2UgQkFSX1dBRl9DSEFSVF9CVUNLRVRTLkFUVEFDSzogIzc4MGEwMlxuLy8gY2FzZSBCQVJfV0FGX0NIQVJUX0JVQ0tFVFMuTElLRUxZX0FUVEFDSzogI2ZjNTc0YVxuXG5jb25zdCBleGFtcGxlID0ge1xuICBcIndhZi5zY29yZVwiOiAxMCxcbiAgXCJ3YWYueHNzLnNjb3JlXCI6IDI1LFxuICBcIndhZi5zcGxpLnNjb3JlXCI6IDc1LFxuICBcIndhZi5yY2Uuc2NvcmVcIjogOTksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zb2xlLmxvZyhcIlxcbvCfmoAgLT4gZXhhbXBsZTpcIiwgZ2V0VGhyZXNob2xkRm9yU2NvcmUoZXhhbXBsZVtcIndhZi5zY29yZVwiXSkpO1xuICBjb25zdCByZW5kZXJEYXRhID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZXhhbXBsZSkubWFwKCh2YWx1ZSkgPT5cbiAgICAgIGdldFRocmVzaG9sZEZvclNjb3JlKHZhbHVlKVxuICAgICk7XG5cbiAgICBjb25zdCBnZXREYXRhVHlwZSA9ICh0eXBlKSA9PlxuICAgICAgT2JqZWN0LnZhbHVlcyhleGFtcGxlKS5tYXAoKHZhbHVlKSA9PlxuICAgICAgICBnZXRUaHJlc2hvbGRGb3JTY29yZSh2YWx1ZSkgPT09IHR5cGUgPyB2YWx1ZSA6IDBcbiAgICAgICk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVscyxcbiAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJDbGVhblwiLFxuICAgICAgICAgIGRhdGE6IGdldERhdGFUeXBlKEJBUl9XQUZfQ0hBUlRfQlVDS0VUUy5DTEVBTiksXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMxMDQxMjJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkxpa2VseSBDbGVhblwiLFxuICAgICAgICAgIGRhdGE6IGdldERhdGFUeXBlKEJBUl9XQUZfQ0hBUlRfQlVDS0VUUy5MSUtFTFlfQ0xFQU4pLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMmRiMzVlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJMaWtlbHkgQXR0YWNrXCIsXG4gICAgICAgICAgZGF0YTogZ2V0RGF0YVR5cGUoQkFSX1dBRl9DSEFSVF9CVUNLRVRTLkxJS0VMWV9BVFRBQ0spLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNzgwYTAyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBdHRhY2tcIixcbiAgICAgICAgICBkYXRhOiBnZXREYXRhVHlwZShCQVJfV0FGX0NIQVJUX0JVQ0tFVFMuQVRUQUNLKSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZjNTc0YVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICBteT1cIjE1MHB4XCJcbiAgICAgIG14PVwiYXV0b1wiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICA+XG4gICAgICA8QmFyIG9wdGlvbnM9e29wdGlvbnN9IGRhdGE9e3JlbmRlckRhdGF9IC8+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQm94IiwiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiQmFyRWxlbWVudCIsIlRpdGxlIiwiVG9vbHRpcCIsIkxlZ2VuZCIsInVzZU1lbW8iLCJCYXIiLCJyZWdpc3RlciIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwic2NhbGVzIiwieCIsInN0YWNrZWQiLCJ5Iiwic3VnZ2VzdGVkTWF4IiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsImxhYmVscyIsIkJBUl9XQUZfQ0hBUlRfQlVDS0VUUyIsIkFUVEFDSyIsIkxJS0VMWV9BVFRBQ0siLCJMSUtFTFlfQ0xFQU4iLCJDTEVBTiIsIk5PVF9TQ09SRUQiLCJ3YWZTY29yZVRocmVzaG9sZHMiLCJnZXEiLCJsZXEiLCJnZXRUaHJlc2hvbGRGb3JTY29yZSIsInNjb3JlIiwiT2JqZWN0Iiwia2V5cyIsImZpbmQiLCJ0aHJlc2hvbGQiLCJleGFtcGxlIiwiSG9tZSIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJEYXRhIiwiY3VycmVudFZhbHVlcyIsInZhbHVlcyIsIm1hcCIsInZhbHVlIiwiZ2V0RGF0YVR5cGUiLCJ0eXBlIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJteSIsIm14IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/score.tsx\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "chart.js":
/*!***************************!*\
  !*** external "chart.js" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("chart.js");;

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-chartjs-2");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/score.tsx"));
module.exports = __webpack_exports__;

})();