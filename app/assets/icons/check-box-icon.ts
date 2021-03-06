var _rect, _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgCheckBoxIcon = function SvgCheckBoxIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 20,
    height: 20,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _rect || (_rect = /*#__PURE__*/React.createElement("rect", {
    width: 20,
    height: 20,
    rx: 5,
    fill: "#000"
  })), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "m4 10 4 4 8-8",
    stroke: "#fff",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "square"
  })));
};

export default SvgCheckBoxIcon;