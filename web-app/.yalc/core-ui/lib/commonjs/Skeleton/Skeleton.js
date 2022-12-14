"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Skeleton = void 0;
var _react = _interopRequireDefault(require("react"));
var _nativeBase = require("native-base");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react.default.createElement(_nativeBase.NativeBaseProvider, null, /*#__PURE__*/_react.default.createElement(_nativeBase.Center, {
    flex: 1,
    px: "3"
  }, /*#__PURE__*/_react.default.createElement(_nativeBase.VStack, {
    w: "90%",
    maxW: "400",
    borderWidth: "1",
    space: 8,
    overflow: "hidden",
    rounded: "md",
    _dark: {
      borderColor: 'coolGray.500'
    },
    _light: {
      borderColor: 'coolGray.200'
    }
  }, /*#__PURE__*/_react.default.createElement(_nativeBase.Skeleton, {
    h: "40"
  }), /*#__PURE__*/_react.default.createElement(_nativeBase.Skeleton.Text, {
    px: "4"
  }), /*#__PURE__*/_react.default.createElement(_nativeBase.Skeleton, {
    px: "4",
    my: "4",
    rounded: "md",
    startColor: "primary.100"
  }))));
};
exports.Skeleton = Skeleton;
//# sourceMappingURL=Skeleton.js.map