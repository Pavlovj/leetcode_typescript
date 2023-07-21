"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canPlaceFlowers = void 0;
function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        const previous = flowerbed[i - 1];
        const next = flowerbed[i + 1];
        const current = flowerbed[i];
        const hasNeighbors = Boolean(previous) || Boolean(next);
        if (current)
            continue;
        if (!hasNeighbors) {
            flowerbed[i] = 1;
            count++;
        }
    }
    return count >= n;
}
exports.canPlaceFlowers = canPlaceFlowers;
;
