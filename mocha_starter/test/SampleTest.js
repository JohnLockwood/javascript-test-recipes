"use strict";
var chai_1 = require('chai');
describe('Sample', function () {
    describe('#hello world test', function () {
        it('Hello world should say hello world', function () {
            var actual = "Hello world";
            chai_1.expect(actual).to.equal("Hello world");
        });
    });
    describe('#test something else', function () {
        it('Another test should work', function () {
            chai_1.expect(1).to.not.equal(9);
        });
    });
});
//# sourceMappingURL=SampleTest.js.map