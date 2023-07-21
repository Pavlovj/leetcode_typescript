"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kidsWithCandies = void 0;
function kidsWithCandies(candies, extraCandies) {
    const max = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= max);
}
exports.kidsWithCandies = kidsWithCandies;
;
