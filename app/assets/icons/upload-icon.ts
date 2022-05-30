var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgUploadIcon = function SvgUploadIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 22,
    height: 22,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M11 16V1M17 7l-6-6-6 6M21 21H1",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

export default SvgUploadIcon;