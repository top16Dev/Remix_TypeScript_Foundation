var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgCheckIcon = function SvgCheckIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 16 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M1.348 4.82 6 9.472l8.64-8.64",
    stroke: "#fff",
    strokeWidth: 1.911,
    strokeMiterlimit: 10,
    strokeLinejoin: "round"
  })));
};

export default SvgCheckIcon;