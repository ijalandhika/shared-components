"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;
var _react = _interopRequireDefault(require("react"));
var _nativeBase = require("native-base");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Card = function Card(_ref) {
  var practitioner = _ref.practitioner,
    facility = _ref.facility,
    _ref$images = _ref.images,
    images = _ref$images === void 0 ? {} : _ref$images;
  return /*#__PURE__*/_react.default.createElement(_nativeBase.NativeBaseProvider, null, /*#__PURE__*/_react.default.createElement(_nativeBase.Center, {
    flex: 1,
    px: "3"
  }, /*#__PURE__*/_react.default.createElement(_nativeBase.Box, {
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_nativeBase.Box, {
    maxW: "80",
    rounded: "lg",
    overflow: "hidden",
    borderColor: "coolGray.200",
    borderWidth: "1",
    _dark: {
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    },
    _web: {
      shadow: 2,
      borderWidth: 0
    },
    _light: {
      backgroundColor: "gray.50"
    }
  }, /*#__PURE__*/_react.default.createElement(_nativeBase.Box, null, /*#__PURE__*/_react.default.createElement(_nativeBase.AspectRatio, {
    w: "100%",
    ratio: 16 / 9
  }, /*#__PURE__*/_react.default.createElement(_nativeBase.Image, {
    source: {
      uri: images === null || images === void 0 ? void 0 : images.url
    },
    alt: images === null || images === void 0 ? void 0 : images.alt
  }))), /*#__PURE__*/_react.default.createElement(_nativeBase.Stack, {
    p: "4",
    space: 3
  }, /*#__PURE__*/_react.default.createElement(_nativeBase.Stack, {
    space: 2
  }, /*#__PURE__*/_react.default.createElement(_nativeBase.Heading, {
    size: "md",
    ml: "-1"
  }, practitioner), /*#__PURE__*/_react.default.createElement(_nativeBase.Text, {
    fontSize: "xs",
    _light: {
      color: "violet.500"
    },
    _dark: {
      color: "violet.400"
    },
    fontWeight: "500",
    ml: "-0.5",
    mt: "-1"
  }, facility)))))));
};
exports.Card = Card;
//# sourceMappingURL=Card.js.map