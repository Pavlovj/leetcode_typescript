const { kidsWithCandies } = require("./1431.js");

//write tests
describe('Kids With the Greatest Number of Candies', () => {
    // candies = [4,2,1,1,2], extraCandies = 1
    it('test 1', () => {
        expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([true, false, false, false, false]);
    });
    // candies = [12,1,12], extraCandies = 10
    it('test 2', () => {
        expect(kidsWithCandies([12, 1, 12], 10)).toEqual([true, false, true]);
    });
}

);
