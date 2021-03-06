var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgIpfsIcon = function SvgIpfsIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 20,
    height: 23,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M19.21 5.222 10.639.936a1.428 1.428 0 0 0-1.279 0L.789 5.222A1.431 1.431 0 0 0 0 6.5v10c0 .54.306 1.035.79 1.278l8.571 4.286a1.43 1.43 0 0 0 1.278 0l8.571-4.286A1.43 1.43 0 0 0 20 16.5v-10a1.43 1.43 0 0 0-.79-1.278ZM10 3.812 15.377 6.5 10 9.189 4.623 6.501 10 3.81Zm-7.143 5 5.714 2.857v6.806l-5.714-2.857V8.812Zm8.572 9.663v-6.806l5.714-2.857v6.806l-5.714 2.857Z",
    fill: "currentColor"
  })));
};

export default SvgIpfsIcon;