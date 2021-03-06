var _mask, _path, _circle, _path2, _defs;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgSuccessIcon = function SvgSuccessIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 32 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _mask || (_mask = /*#__PURE__*/React.createElement("mask", {
    id: "success-icon_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 1.004c0-.555.45-1.007 1.003-.973a16 16 0 1 1-2.69.058c.551-.058 1.02.375 1.044.928.024.554-.407 1.018-.957 1.082a13.993 13.993 0 1 0 2.603-.056C16.45 2.003 16 1.558 16 1.003Z"
  }))), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M16 1.004c0-.555.45-1.007 1.003-.973a16 16 0 1 1-2.69.058c.551-.058 1.02.375 1.044.928.024.554-.407 1.018-.957 1.082a13.993 13.993 0 1 0 2.603-.056C16.45 2.003 16 1.558 16 1.003Z",
    stroke: "url(#success-icon_svg__a)",
    strokeWidth: 8,
    strokeLinecap: "round",
    mask: "url(#success-icon_svg__b)"
  })), _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    cx: 16,
    cy: 16,
    r: 16,
    fill: "#000"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    d: "M9.348 15.82 14 20.472l8.64-8.64",
    stroke: "#fff",
    strokeWidth: 1.911,
    strokeMiterlimit: 10,
    strokeLinejoin: "round"
  })), _defs || (_defs = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "success-icon_svg__a",
    cx: 0,
    cy: 0,
    r: 1,
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "matrix(0 -12.8889 13.3424 0 16 16)"
  }, /*#__PURE__*/React.createElement("stop", {
    stopOpacity: 0
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1
  })))));
};

export default SvgSuccessIcon;