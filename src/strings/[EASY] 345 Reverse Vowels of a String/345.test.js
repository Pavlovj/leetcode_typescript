// https://leetcode.com/problems/reverse-vowels-of-a-string/
const {reverseVowels} = require('./345');

describe('345 Reverse Vowels of a String', () => {
    test(`Example 1`, () => {
        expect(reverseVowels('hello')).toBe('holle');
    });
    
    test(`Example 2`, () => {
        expect(reverseVowels('leetcode')).toBe('leotcede');
    });
    
    test(`Example 3`, () => {
        expect(reverseVowels('aA')).toBe('Aa');
    });
    }
);