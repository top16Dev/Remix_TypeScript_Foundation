var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

var SvgMiniTrashIcon = function SvgMiniTrashIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M20 9v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9M1 5h22M8 5V1h8v4M15 11.985l-6 6M15 17.985l-6-6",
    stroke: "#B3B3B3",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "square"
  })));
};

export default SvgMiniTrashIcon;