var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgCopyIcon = function SvgCopyIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "m10 5 2.575-2.575a5.011 5.011 0 0 1 7 0v0a5.011 5.011 0 0 1 0 7L17 12M12 17l-2.575 2.575a5.011 5.011 0 0 1-7 0v0a5.011 5.011 0 0 1 0-7L5 10M7 15l8-8",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "square"
  })));
};

export default SvgCopyIcon;