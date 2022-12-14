"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Skeleton = void 0;
var _react = _interopRequireDefault(require("react"));
var _Skeleton = require("./Skeleton");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Component',
  component: _Skeleton.Skeleton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports.default = _default;
var Template = function Template() {
  return /*#__PURE__*/_react.default.createElement(_Skeleton.Skeleton, null);
};
var Skeleton = Template.bind({});
exports.Skeleton = Skeleton;
//# sourceMappingURL=Skeleton.stories.js.map