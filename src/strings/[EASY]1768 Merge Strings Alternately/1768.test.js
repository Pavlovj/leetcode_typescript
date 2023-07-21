const {mergeAlternately} = require("./1768.js");

test('Example 1', () => {
    expect(mergeAlternately("abc", "pqr")).toEqual("apbqcr");
});

test('Example 2', () => {
    expect(mergeAlternately("ab", "pqrs")).toEqual("apbqrs");
});

test('Example 3', () => {
    expect(mergeAlternately("abcd", "pq")).toEqual("apbqcd");
});