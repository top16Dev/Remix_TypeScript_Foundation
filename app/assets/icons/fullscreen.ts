var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgFullscreen = function SvgFullscreen(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M9 2h3.6l-4 4L10 7.4l4-4V7h2V0H9v2ZM6 8.6l-4 4V9H0v7h7v-2H3.4l4-4L6 8.6Z",
    fill: "currentColor"
  })));
};

export default SvgFullscreen;