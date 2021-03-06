var _circle, _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgCircleCloseIcon = function SvgCircleCloseIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 50,
    height: 50,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    cx: 25,
    cy: 25,
    r: 24,
    stroke: "#000",
    strokeWidth: 2
  })), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M32 18 18 32M32 32 18 18",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

export default SvgCircleCloseIcon;