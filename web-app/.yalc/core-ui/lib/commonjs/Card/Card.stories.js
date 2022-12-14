"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Card = void 0;
var _react = _interopRequireDefault(require("react"));
var _Card = require("./Card");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: 'Component',
  component: _Card.Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
}; // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Card.Card, args);
};
var Card = Template.bind({});
exports.Card = Card;
Card.args = {
  facility: 'A’dvanced Center for Daycare Surgery Abu Dhabi (ACDS)',
  practitioner: 'Dr. Rashid al Ahmed',
  images: {
    url: 'https://img.okadoc.co/plain/200x200/uploads/doctor/photo/65657/okadoc-doctor-psychiatrist-azeri-mednet-out-network-20220208095351.jpg',
    alt: 'this is just testing '
  }
};
//# sourceMappingURL=Card.stories.js.map