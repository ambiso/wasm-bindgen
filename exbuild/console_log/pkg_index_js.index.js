"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["pkg_index_js"],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__wbg_log_00fa6d531d56c191\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_log_00fa6d531d56c191),\n/* harmony export */   \"__wbg_log_147e873043e41c14\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_log_147e873043e41c14),\n/* harmony export */   \"__wbg_log_4584557def6005e9\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_log_4584557def6005e9),\n/* harmony export */   \"__wbg_log_4a4a987f783d8fd3\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_log_4a4a987f783d8fd3),\n/* harmony export */   \"__wbg_log_fbd13631356d44e4\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_log_fbd13631356d44e4),\n/* harmony export */   \"__wbindgen_number_new\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_number_new),\n/* harmony export */   \"__wbindgen_object_drop_ref\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_object_drop_ref),\n/* harmony export */   \"__wbindgen_string_new\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_string_new),\n/* harmony export */   \"__wbindgen_throw\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw),\n/* harmony export */   \"run\": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.run)\n/* harmony export */ });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_bg_js__WEBPACK_IMPORTED_MODULE_0__, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n([_index_bg_js__WEBPACK_IMPORTED_MODULE_0__, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_start();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.js":
/*!*************************!*\
  !*** ./pkg/index_bg.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"run\": () => (/* binding */ run),\n/* harmony export */   \"__wbindgen_string_new\": () => (/* binding */ __wbindgen_string_new),\n/* harmony export */   \"__wbindgen_number_new\": () => (/* binding */ __wbindgen_number_new),\n/* harmony export */   \"__wbg_log_4a4a987f783d8fd3\": () => (/* binding */ __wbg_log_4a4a987f783d8fd3),\n/* harmony export */   \"__wbg_log_147e873043e41c14\": () => (/* binding */ __wbg_log_147e873043e41c14),\n/* harmony export */   \"__wbg_log_4584557def6005e9\": () => (/* binding */ __wbg_log_4584557def6005e9),\n/* harmony export */   \"__wbg_log_fbd13631356d44e4\": () => (/* binding */ __wbg_log_fbd13631356d44e4),\n/* harmony export */   \"__wbg_log_00fa6d531d56c191\": () => (/* binding */ __wbg_log_00fa6d531d56c191),\n/* harmony export */   \"__wbindgen_object_drop_ref\": () => (/* binding */ __wbindgen_object_drop_ref),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw)\n/* harmony export */ });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var TextDecoder = __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"];\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n/**\n*/\nfunction run() {\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.run();\n}\n\nfunction logError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n            } catch(_) {\n                return \"<failed to stringify thrown value>\";\n            }\n        }());\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n        throw e;\n    }\n}\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    const ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_number_new(arg0) {\n    const ret = arg0;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_log_4a4a987f783d8fd3() { return logError(function (arg0, arg1) {\n    console.log(getStringFromWasm0(arg0, arg1));\n}, arguments) };\n\nfunction __wbg_log_147e873043e41c14() { return logError(function (arg0) {\n    console.log(arg0 >>> 0);\n}, arguments) };\n\nfunction __wbg_log_4584557def6005e9() { return logError(function (arg0, arg1, arg2, arg3) {\n    console.log(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));\n}, arguments) };\n\nfunction __wbg_log_fbd13631356d44e4() { return logError(function (arg0) {\n    console.log(getObject(arg0));\n}, arguments) };\n\nfunction __wbg_log_00fa6d531d56c191() { return logError(function (arg0, arg1) {\n    console.log(getObject(arg0), getObject(arg1));\n}, arguments) };\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///./pkg/index_bg.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {\n\treturn __webpack_require__.v(exports, module.id, \"78f5c1c89d4df62c2d24\", {\n\t\t\"./index_bg.js\": {\n\t\t\t\"__wbindgen_string_new\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_string_new,\n\t\t\t\"__wbindgen_number_new\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_number_new,\n\t\t\t\"__wbg_log_4a4a987f783d8fd3\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_4a4a987f783d8fd3,\n\t\t\t\"__wbg_log_147e873043e41c14\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_147e873043e41c14,\n\t\t\t\"__wbg_log_4584557def6005e9\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_4584557def6005e9,\n\t\t\t\"__wbg_log_fbd13631356d44e4\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_fbd13631356d44e4,\n\t\t\t\"__wbg_log_00fa6d531d56c191\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_00fa6d531d56c191,\n\t\t\t\"__wbindgen_object_drop_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n}\n__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {\n\ttry {\n\t/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\n\tvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);\n\tvar [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;\n\tawait __webpack_require__.v(exports, module.id, \"78f5c1c89d4df62c2d24\", {\n\t\t\"./index_bg.js\": {\n\t\t\t\"__wbindgen_string_new\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_string_new,\n\t\t\t\"__wbindgen_number_new\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_number_new,\n\t\t\t\"__wbg_log_4a4a987f783d8fd3\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_4a4a987f783d8fd3,\n\t\t\t\"__wbg_log_147e873043e41c14\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_147e873043e41c14,\n\t\t\t\"__wbg_log_4584557def6005e9\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_4584557def6005e9,\n\t\t\t\"__wbg_log_fbd13631356d44e4\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_fbd13631356d44e4,\n\t\t\t\"__wbg_log_00fa6d531d56c191\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_00fa6d531d56c191,\n\t\t\t\"__wbindgen_object_drop_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,\n\t\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw\n\t\t}\n\t});\n\t__webpack_async_result__();\n\t} catch(e) { __webpack_async_result__(e); }\n}, 1);\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);