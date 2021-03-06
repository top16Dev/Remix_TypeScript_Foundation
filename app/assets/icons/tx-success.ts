var _circle, _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgTxSuccess = function SvgTxSuccess(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    cx: 13,
    cy: 13,
    r: 13,
    fill: "currentColor"
  })), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M11 19a1 1 0 0 1-.707-.293L5.586 14 7 12.586l4 4 8-8L20.414 10l-8.707 8.707A1 1 0 0 1 11 19Z",
    fill: "#fff"
  })));
};

export default SvgTxSuccess;