
// write tests for this function
const {canPlaceFlowers} = require('./605.js');
describe('605 Can Place Flowers', () => {
    //write tests here
    it('test case 1', () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toEqual(true);
    }
    );
    it('test case 2', () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toEqual(false);
    }
    );
    it('test case 3', () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)).toEqual(false);
    }
    );
    it('test case 4', () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)).toEqual(true);
    }
    );
});