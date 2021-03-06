"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
	The Equality Class is just used to show
	that a Class has an ID that can be used to
	check for equality.

	Never use == or === when comparing
	objects in discord.js, they will be different
	instances sometimes.

	Instead, use objectThatExtendsEquality.equals()
*/
var Equality = function () {
	function Equality() {
		_classCallCheck(this, Equality);
	}

	_createClass(Equality, [{
		key: "equals",
		value: function equals(object) {
			return object && object[this.eqDiscriminator] === this[this.eqDiscriminator];
		}
	}, {
		key: "equalsStrict",
		value: function equalsStrict(object) {
			// override per class type
			return;
		}
	}, {
		key: "eqDiscriminator",
		get: function get() {
			return "id";
		}
	}]);

	return Equality;
}();

exports.default = Equality;
//# sourceMappingURL=Equality.js.map
