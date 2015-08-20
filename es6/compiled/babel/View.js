"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = (function () {
    function View(name) {
        _classCallCheck(this, View);

        this._name = name;
    }

    _createClass(View, [{
        key: "name",
        value: function name(_name) {
            if (!arguments.length) return this._name;
            this._name = _name;
            return this;
        }
    }]);

    return View;
})();

exports["default"] = View;
module.exports = exports["default"];