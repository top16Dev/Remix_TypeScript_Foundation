var _circle, _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgCircleBackIcon = function SvgCircleBackIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 50 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    cx: 25,
    cy: 25,
    r: 24,
    stroke: "#000",
    strokeWidth: 2
  })), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M37 25H17",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    d: "m24 32-7-7 7-7",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "square"
  })));
};

export default SvgCircleBackIcon;