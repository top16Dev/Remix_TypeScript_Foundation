var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgNotAllowed = function SvgNotAllowed(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 16,
    height: 16,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm0 2c1.3 0 2.5.4 3.5 1.1l-8.4 8.4C2.4 10.5 2 9.3 2 8c0-3.3 2.7-6 6-6Zm0 12c-1.3 0-2.5-.4-3.5-1.1l8.4-8.4c.7 1 1.1 2.2 1.1 3.5 0 3.3-2.7 6-6 6Z",
    fill: "#F93A3A"
  })));
};

export default SvgNotAllowed;