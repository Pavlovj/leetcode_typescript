"use strict";
// https://leetcode.com/problems/merge-strings-alternately/
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeAlternately = void 0;
/** 1768. Merge Strings Alternately */
function mergeAlternately(word1, word2) {
    const mergedString = [];
    const word1Length = word1.length;
    const word2Length = word2.length;
    if (word1Length < 1 || word1Length > 100)
        return "";
    for (let i = 0; i < word1Length || i < word2Length; i++) {
        if (word1[i])
            mergedString.push(word1[i]);
        if (word2[i])
            mergedString.push(word2[i]);
    }
    return mergedString.join("");
}
exports.mergeAlternately = mergeAlternately;
