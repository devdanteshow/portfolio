"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/chakra.js":
/*!******************************!*\
  !*** ./components/chakra.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chakra; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var D_Codes_Projetos_Portfolio_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Codes_Projetos_Portfolio_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Codes_Projetos_Portfolio_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/theme */ \"./lib/theme.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nfunction Chakra(param) {\n    var cookies = param.cookies, children = param.children;\n    var colorModeManager = typeof cookies === \"string\" ? (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.cookieStorageManager)(cookies) : _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.localStorageManager;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {\n        theme: _lib_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        colorModeManager: colorModeManager,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Codes\\\\Projetos\\\\Portfolio\\\\components\\\\chakra.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n};\n_c = Chakra;\nfunction getServerSideProps(_) {\n    return _getServerSideProps.apply(this, arguments);\n}\nfunction _getServerSideProps() {\n    _getServerSideProps = _asyncToGenerator(D_Codes_Projetos_Portfolio_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var req, _cookie;\n        return D_Codes_Projetos_Portfolio_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    req = param.req;\n                    ;\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            cookies: (_cookie = req.headers.cookie) !== null && _cookie !== void 0 ? _cookie : \"\"\n                        }\n                    });\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getServerSideProps.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, \"Chakra\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYWtyYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTBCO0FBQ087QUFFbEIsU0FBU0ksTUFBTSxDQUFDLEtBQXFCLEVBQUU7UUFBckJDLE9BQU8sR0FBVCxLQUFxQixDQUFuQkEsT0FBTyxFQUFFQyxRQUFRLEdBQW5CLEtBQXFCLENBQVZBLFFBQVE7SUFDaEQsSUFBTUMsZ0JBQWdCLEdBQ3BCLE9BQU9GLE9BQU8sS0FBSyxRQUFRLEdBQ3ZCSixzRUFBb0IsQ0FBQ0ksT0FBTyxDQUFDLEdBQzdCSCxpRUFBbUI7SUFFekIscUJBQ0UsOERBQUNGLDREQUFjO1FBQUNHLEtBQUssRUFBRUEsa0RBQUs7UUFBRUksZ0JBQWdCLEVBQUVBLGdCQUFnQjtrQkFDN0RELFFBQVE7Ozs7O1lBQ00sQ0FDakI7Q0FDSDtBQVh1QkYsS0FBQUEsTUFBTTtBQWF2QixTQUFlSSxrQkFBa0IsQ0FBQyxDQUFPO1dBQTFCQSxtQkFBa0I7Q0FNdkM7U0FOcUJBLG1CQUFrQjtJQUFsQkEsbUJBQWtCLEdBQWpDLHlLQUFrQyxLQUFPLEVBQUU7WUFBUEMsR0FBRyxFQUcvQkEsT0FBa0I7Ozs7b0JBSFEsR0FBSyxHQUFMLEtBQU8sQ0FBTEEsR0FBRyxDQUFFOztpREFDdkM7d0JBQ0xDLEtBQUssRUFBRTs0QkFDTEwsT0FBTyxFQUFFSSxDQUFBQSxPQUFrQixHQUFsQkEsR0FBRyxDQUFDRSxPQUFPLENBQUNDLE1BQU0sY0FBbEJILE9BQWtCLGNBQWxCQSxPQUFrQixHQUFJLEVBQUU7eUJBQ2xDO3FCQUNGOzs7Ozs7S0FDRjtXQU5xQkQsbUJBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2hha3JhLmpzPzlmNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFrcmFQcm92aWRlcixcclxuICBjb29raWVTdG9yYWdlTWFuYWdlcixcclxuICBsb2NhbFN0b3JhZ2VNYW5hZ2VyXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9saWIvdGhlbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYWtyYSh7IGNvb2tpZXMsIGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBjb2xvck1vZGVNYW5hZ2VyID1cclxuICAgIHR5cGVvZiBjb29raWVzID09PSBcInN0cmluZ1wiXHJcbiAgICAgID8gY29va2llU3RvcmFnZU1hbmFnZXIoY29va2llcylcclxuICAgICAgOiBsb2NhbFN0b3JhZ2VNYW5hZ2VyO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0gY29sb3JNb2RlTWFuYWdlcj17Y29sb3JNb2RlTWFuYWdlcn0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSB9KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNvb2tpZXM6IHJlcS5oZWFkZXJzLmNvb2tpZSA/PyBcIlwiXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJjb29raWVTdG9yYWdlTWFuYWdlciIsImxvY2FsU3RvcmFnZU1hbmFnZXIiLCJ0aGVtZSIsIkNoYWtyYSIsImNvb2tpZXMiLCJjaGlsZHJlbiIsImNvbG9yTW9kZU1hbmFnZXIiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJwcm9wcyIsImhlYWRlcnMiLCJjb29raWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/chakra.js\n");

/***/ }),

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n\n\nvar styles = {\n    global: function(props) {\n        return {\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#f0e7db\", \"#202023\")(props)\n            }\n        };\n    }\n};\nvar components = {\n    Heading: {\n        variants: {\n            \"section-title\": {\n                textDecoration: \"underline\",\n                fontSize: 20,\n                textUnderlineOffset: 6,\n                textDecorationColor: \"#525252\",\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: function(props) {\n            return {\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#3d7aed\", \"#ff63c3\")(props),\n                textUnderlineOffset: 3\n            };\n        }\n    }\n};\nvar fonts = {\n    heading: \"'M PLUS Rounded 1c'\"\n};\nvar colors = {\n    grassTeal: \"#88ccca\"\n};\nvar config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: true\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: config,\n    styles: styles,\n    components: components,\n    fonts: fonts,\n    colors: colors\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQStDO0FBQ0Q7QUFFOUMsSUFBTUUsTUFBTSxHQUFHO0lBQ2JDLE1BQU0sRUFBRUMsU0FBQUEsS0FBSztlQUFLO1lBQ2hCQyxJQUFJLEVBQUU7Z0JBQ0pDLEVBQUUsRUFBRUwsNERBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUNHLEtBQUssQ0FBQzthQUN0QztTQUNGO0tBQUM7Q0FDSDtBQUVELElBQU1HLFVBQVUsR0FBRztJQUNqQkMsT0FBTyxFQUFFO1FBQ1BDLFFBQVEsRUFBRTtZQUNSLGVBQWUsRUFBRTtnQkFDZkMsY0FBYyxFQUFFLFdBQVc7Z0JBQzNCQyxRQUFRLEVBQUUsRUFBRTtnQkFDWkMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDdEJDLG1CQUFtQixFQUFFLFNBQVM7Z0JBQzlCQyx1QkFBdUIsRUFBRSxDQUFDO2dCQUMxQkMsU0FBUyxFQUFFLENBQUM7Z0JBQ1pDLFlBQVksRUFBRSxDQUFDO2FBQ2hCO1NBQ0Y7S0FDRjtJQUNEQyxJQUFJLEVBQUU7UUFDSkMsU0FBUyxFQUFFZCxTQUFBQSxLQUFLO21CQUFLO2dCQUNuQmUsS0FBSyxFQUFFbEIsNERBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUNHLEtBQUssQ0FBQztnQkFDeENRLG1CQUFtQixFQUFFLENBQUM7YUFDdkI7U0FBQztLQUNIO0NBQ0Y7QUFFRCxJQUFNUSxLQUFLLEdBQUc7SUFDWkMsT0FBTyxFQUFFLHFCQUFxQjtDQUMvQjtBQUVELElBQU1DLE1BQU0sR0FBRztJQUNiQyxTQUFTLEVBQUUsU0FBUztDQUNyQjtBQUVELElBQU1DLE1BQU0sR0FBRztJQUNiQyxnQkFBZ0IsRUFBRSxNQUFNO0lBQ3hCQyxrQkFBa0IsRUFBRSxJQUFJO0NBQ3pCO0FBRUQsSUFBTUMsS0FBSyxHQUFHM0IsNkRBQVcsQ0FBQztJQUFFd0IsTUFBTSxFQUFOQSxNQUFNO0lBQUV0QixNQUFNLEVBQU5BLE1BQU07SUFBRUssVUFBVSxFQUFWQSxVQUFVO0lBQUVhLEtBQUssRUFBTEEsS0FBSztJQUFFRSxNQUFNLEVBQU5BLE1BQU07Q0FBRSxDQUFDO0FBQ3hFLCtEQUFlSyxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3RoZW1lLmpzPzMzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBtb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBnbG9iYWw6IHByb3BzID0+ICh7XHJcbiAgICBib2R5OiB7XHJcbiAgICAgIGJnOiBtb2RlKFwiI2YwZTdkYlwiLCBcIiMyMDIwMjNcIikocHJvcHMpXHJcbiAgICB9XHJcbiAgfSlcclxufTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgSGVhZGluZzoge1xyXG4gICAgdmFyaWFudHM6IHtcclxuICAgICAgXCJzZWN0aW9uLXRpdGxlXCI6IHtcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIixcclxuICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldDogNixcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiBcIiM1MjUyNTJcIixcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvblRoaWNrbmVzczogNCxcclxuICAgICAgICBtYXJnaW5Ub3A6IDMsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiA0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIExpbms6IHtcclxuICAgIGJhc2VTdHlsZTogcHJvcHMgPT4gKHtcclxuICAgICAgY29sb3I6IG1vZGUoXCIjM2Q3YWVkXCIsIFwiI2ZmNjNjM1wiKShwcm9wcyksXHJcbiAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDNcclxuICAgIH0pXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZm9udHMgPSB7XHJcbiAgaGVhZGluZzogXCInTSBQTFVTIFJvdW5kZWQgMWMnXCJcclxufTtcclxuXHJcbmNvbnN0IGNvbG9ycyA9IHtcclxuICBncmFzc1RlYWw6IFwiIzg4Y2NjYVwiXHJcbn07XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgaW5pdGlhbENvbG9yTW9kZTogXCJkYXJrXCIsXHJcbiAgdXNlU3lzdGVtQ29sb3JNb2RlOiB0cnVlXHJcbn07XHJcblxyXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHsgY29uZmlnLCBzdHlsZXMsIGNvbXBvbmVudHMsIGZvbnRzLCBjb2xvcnMgfSk7XHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xyXG4iXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJtb2RlIiwic3R5bGVzIiwiZ2xvYmFsIiwicHJvcHMiLCJib2R5IiwiYmciLCJjb21wb25lbnRzIiwiSGVhZGluZyIsInZhcmlhbnRzIiwidGV4dERlY29yYXRpb24iLCJmb250U2l6ZSIsInRleHRVbmRlcmxpbmVPZmZzZXQiLCJ0ZXh0RGVjb3JhdGlvbkNvbG9yIiwidGV4dERlY29yYXRpb25UaGlja25lc3MiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJMaW5rIiwiYmFzZVN0eWxlIiwiY29sb3IiLCJmb250cyIsImhlYWRpbmciLCJjb2xvcnMiLCJncmFzc1RlYWwiLCJjb25maWciLCJpbml0aWFsQ29sb3JNb2RlIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_chakra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/chakra */ \"./components/chakra.js\");\n/* harmony import */ var _components_layouts_main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/main.js */ \"./components/layouts/main.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\nvar Website = function(param) {\n    var Component = param.Component, pageProps = param.pageProps, router = param.router;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChakraProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_main_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            router: router,\n            children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, _objectSpread({}, pageProps, {\n                key: router.route,\n                __source: {\n                    fileName: \"D:\\\\Codes\\\\Projetos\\\\Portfolio\\\\pages\\\\_app.js\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                },\n                __self: _this\n            }))\n        }, void 0, false, {\n            fileName: \"D:\\\\Codes\\\\Projetos\\\\Portfolio\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Codes\\\\Projetos\\\\Portfolio\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this);\n};\n_c = Website;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Website);\nvar _c;\n$RefreshReg$(_c, \"Website\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNTO0FBRW5ELElBQU1FLE9BQU8sR0FBRyxnQkFBc0M7UUFBbkNDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsTUFBTSxTQUFOQSxNQUFNO0lBQzdDLHFCQUNFLDhEQUFDQyxjQUFjO2tCQUNiLDRFQUFDTCxtRUFBTTtZQUFDSSxNQUFNLEVBQUVBLE1BQU07c0JBQ3BCLG1FQUFDRixTQUFTLG9CQUFLQyxTQUFTO2dCQUFFRyxHQUFHLEVBQUVGLE1BQU0sQ0FBQ0csS0FBSzs7Ozs7OztlQUFJOzs7OztpQkFDeEM7Ozs7O2FBQ00sQ0FDakI7Q0FDSDtBQVJLTixLQUFBQSxPQUFPO0FBVWIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYWtyYSBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGFrcmFcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRzL21haW4uanNcIjtcclxuXHJcbmNvbnN0IFdlYnNpdGUgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENoYWtyYVByb3ZpZGVyPlxyXG4gICAgICA8TGF5b3V0IHJvdXRlcj17cm91dGVyfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17cm91dGVyLnJvdXRlfSAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYnNpdGU7XHJcbiJdLCJuYW1lcyI6WyJDaGFrcmEiLCJMYXlvdXQiLCJXZWJzaXRlIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiQ2hha3JhUHJvdmlkZXIiLCJrZXkiLCJyb3V0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});