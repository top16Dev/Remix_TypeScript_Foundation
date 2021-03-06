var _circle, _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgInputCheckIcon = function SvgInputCheckIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 30,
    height: 30,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    cx: 15,
    cy: 15,
    r: 15,
    fill: "#000"
  })), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M8.77 14.838 13.13 19.2l8.1-8.1",
    stroke: "#fff",
    strokeWidth: 1.246,
    strokeMiterlimit: 10,
    strokeLinejoin: "round"
  })));
};

export default SvgInputCheckIcon;