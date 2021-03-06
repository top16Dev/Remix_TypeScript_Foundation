var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgCursorIcon = function SvgCursorIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M20 7 2 2l5 18 3-7 8 8a2.122 2.122 0 0 0 3-3l-8-8 7-3Z",
    stroke: "#B3B3B3",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "square"
  })));
};

export default SvgCursorIcon;