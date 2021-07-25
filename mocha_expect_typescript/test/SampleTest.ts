const expect = require('expect')

describe('Sample', () => {
    describe('#hello world test', () => {
        it('Hello world should say hello world', () => {
            var actual : string = "Hello world";
            expect(actual).toEqual("Hello world");            
        });
    });

    describe('#test something else', () => {
        it('Another test should work', () => {
            expect(1).toNotEqual(9);
        });
    });

});


