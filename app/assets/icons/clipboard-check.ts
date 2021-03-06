var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgClipboardCheck = function SvgClipboardCheck(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 16 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M6 11a1 1 0 0 1-.707-.293L.586 6 2 4.586l4 4 8-8L15.414 2l-8.707 8.707A1 1 0 0 1 6 11Z",
    fill: "#24BE74"
  })));
};

export default SvgClipboardCheck;