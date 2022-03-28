webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/lib/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query/devtools */ "./node_modules/react-query/devtools/index.js");
/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\boredguys\\Desktop\\ts-react-query\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];



var client = new react_query__WEBPACK_IMPORTED_MODULE_3__["QueryClient"]();

function fetchTodos() {
  var res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fetchTodos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res = [{
            id: '1',
            first_name: 'aaa',
            last_name: 'aaa'
          }, {
            id: '2',
            first_name: 'bbb',
            last_name: 'bbb'
          }, {
            id: '3',
            first_name: 'ccc',
            last_name: 'ccc'
          }];
          return _context.abrupt("return", res);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a);
}

function useTodos(options) {
  return Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(['todos'], fetchTodos, options);
}

function TodoCounter() {
  var _counterQuery$data;

  // subscribe only to changes in the 'data' prop, which will be the
  // amount of todos because of the select function
  var counterQuery = useTodos({
    select: function select(data) {
      return data.items.length;
    },
    notifyOnChangeProps: ['data']
  });
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    console.log('rendering counterxxx');
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 10
    }
  }, "TodoCounter: ", (_counterQuery$data = counterQuery.data) !== null && _counterQuery$data !== void 0 ? _counterQuery$data : 0);
}

function App() {
  return __jsx(react_query__WEBPACK_IMPORTED_MODULE_3__["QueryClientProvider"], {
    client: client,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(TodoCounter, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx(react_query_devtools__WEBPACK_IMPORTED_MODULE_4__["ReactQueryDevtools"], {
    initialIsOpen: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.6528a0c3321753e18130.hot-update.js.map