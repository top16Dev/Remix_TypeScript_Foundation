var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgLockIcon = function SvgLockIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M12 4C13.6477 4 15 5.35228 15 7V10H9V7C9 5.35228 10.3523 4 12 4ZM17 10V7C17 4.24772 14.7523 2 12 2C9.24771 2 7 4.24772 7 7V10H6C4.89543 10 4 10.8954 4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12C20 10.8954 19.1046 10 18 10H17ZM6 12H18V20H6V12Z",
    fill: "currentColor"
  })));
};

export default SvgLockIcon;