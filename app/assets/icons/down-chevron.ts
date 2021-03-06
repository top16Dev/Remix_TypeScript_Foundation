var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgDownChevron = function SvgDownChevron(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 20 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "m20 1.806-9.227 7.908a1.188 1.188 0 0 1-1.546 0L0 1.806 1.548 0l8.453 7.245L18.45.001 20 1.806Z",
    fill: "currentColor"
  })));
};

export default SvgDownChevron;