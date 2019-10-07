webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Todo.js":
/*!****************************!*\
  !*** ./components/Todo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/clevel-air/todo-next/components/Todo.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Todo = function Todo() {
  var _this$props = _this.props,
      completed = _this$props.completed,
      updateStatus = _this$props.updateStatus,
      note = _this$props.note,
      deleteTodo = _this$props.deleteTodo;
  return __jsx("div", {
    className: completed ? 'note completed' : 'note',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("input", {
    onChange: updateStatus,
    className: "note-toggle",
    type: "checkbox",
    checked: completed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, note)), __jsx("div", {
    className: "button",
    onClick: deleteTodo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "x"));
};

/* harmony default export */ __webpack_exports__["default"] = (Todo);

/***/ })

})
//# sourceMappingURL=index.js.ea5b482cb67a83a37e83.hot-update.js.map