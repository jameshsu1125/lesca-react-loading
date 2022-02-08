"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

require("./style.less");

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var LoadingProcess = function LoadingProcess(props) {
  var theme = props.theme,
      text = props.text,
      position = props.position,
      style = props.style;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    id: theme,
    className: "lesca-loading",
    style: _objectSpread({
      position: position
    }, style),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "background"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "ico",
      children: (0, _toConsumableArray2["default"])(new Array(18).keys()).map(function (e) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {}, e);
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "text",
      children: text
    })]
  });
};

LoadingProcess.defaultProps = {
  text: '',
  position: 'fixed',
  theme: 'dark',
  style: {}
};
var _default = LoadingProcess;
exports["default"] = _default;