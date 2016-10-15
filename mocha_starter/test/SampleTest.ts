// import expect from 'expect';
// See http://stackoverflow.com/questions/35812221/typescript-default-import-failing for 
// the why of next two lines
import * as _expect from 'expect';
const expect = _expect as any as typeof _expect.default;

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


