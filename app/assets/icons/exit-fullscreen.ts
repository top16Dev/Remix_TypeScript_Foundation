var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgExitFullscreen = function SvgExitFullscreen(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 17 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M.4 11.4H4l-4 4 1.4 1.4 4-4v3.6h2v-7h-7v2ZM15.4 0l-4 4V.4h-2v7h7v-2h-3.6l4-4L15.4 0Z",
    fill: "currentColor"
  })));
};

export default SvgExitFullscreen;