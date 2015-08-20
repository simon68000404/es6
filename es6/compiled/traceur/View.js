"use strict";
var View = function() {
  function View(name) {
    this._name = name;
  }
  return ($traceurRuntime.createClass)(View, {name: function(name) {
      if (!arguments.length)
        return this._name;
      this._name = name;
      return this;
    }}, {});
}();
var $__default = View;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
