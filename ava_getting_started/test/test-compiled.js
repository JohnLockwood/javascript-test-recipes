'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava2.default)('can easily pass a test', function (t) {
	t.pass();
});

(0, _ava2.default)('can easily fail a test', function (t) {
	//t.fail();
});

(0, _ava2.default)('can use true or false', function (t) {
	// t.true asserts a value true
	t.true(42 === 42);
	t.false(1 === 2);

	// This of course would fail
	//t.false(true);
});

(0, _ava2.default)('can assert equal or not equal', function (t) {

	// Naturally a pig is not a pig.
	t.is('pig', 'pig');

	// But a Pig isn't, because it's capitalized.
	t.not('Pig', 'pig');

	// And we all know a canary isn't
	t.not('canary', 'pig');
});

(0, _ava2.default)('bar', async function (t) {
	var bar = Promise.resolve('bar');

	t.is((await bar), 'bar');
});

//# sourceMappingURL=test-compiled.js.map