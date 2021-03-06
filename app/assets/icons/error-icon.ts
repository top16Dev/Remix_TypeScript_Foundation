var _circle, _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgErrorIcon = function SvgErrorIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    cx: 15,
    cy: 15,
    r: 15,
    fill: "#F93A3A"
  })), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "m19 11-8 8M19 19l-8-8",
    stroke: "#fff",
    strokeWidth: 1.714,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

export default SvgErrorIcon;