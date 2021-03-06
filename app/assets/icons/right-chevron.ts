var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgRightChevron = function SvgRightChevron(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 8,
    height: 16,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M1.445 0 7.77 7.381a.95.95 0 0 1 0 1.238L1.445 16 0 14.761 5.796 8 .001 1.238 1.445 0Z",
    fill: "#000"
  })));
};

export default SvgRightChevron;