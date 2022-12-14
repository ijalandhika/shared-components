"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Skeleton = require("./Skeleton/Skeleton");
Object.keys(_Skeleton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Skeleton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Skeleton[key];
    }
  });
});
var _Card = require("./Card/Card");
Object.keys(_Card).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Card[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Card[key];
    }
  });
});
//# sourceMappingURL=index.js.map