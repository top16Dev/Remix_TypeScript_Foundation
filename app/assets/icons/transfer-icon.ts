var _path, _mask, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgTransferIcon = function SvgTransferIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M17 0h-7v2h4.6L8.3 8.3l1.4 1.4L16 3.4V8h2V1c0-.6-.4-1-1-1Z",
    fill: "currentColor"
  })), _mask || (_mask = /*#__PURE__*/React.createElement("mask", {
    id: "transfer-icon_svg__a",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 10.5A7.5 7.5 0 1 1 7.5 3v2.382a5.118 5.118 0 1 0 5.118 5.118H15Z"
  }))), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    d: "M15 10.5A7.5 7.5 0 1 1 7.5 3v2.382a5.118 5.118 0 1 0 5.118 5.118H15Z",
    stroke: "currentColor",
    strokeWidth: 4,
    mask: "url(#transfer-icon_svg__a)"
  })));
};

export default SvgTransferIcon;