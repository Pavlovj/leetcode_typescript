// https://leetcode.com/problems/reverse-vowels-of-a-string/

export function reverseVowels(s: string): string {
  const VOWELS = ["a", "e", "i", "o", "u"];

  const indexOfVowels: number[] = [];

  for (let i = 0; i < s.length; i++) {
    // Check if the lowercase version of the current character is a vowel
    if (VOWELS.includes(s[i].toLowerCase())) indexOfVowels.push(i);
  }
  return s
    .split("")
    .map((char) => {
      // Check if the lowercase version of the current character is a vowel
      if (VOWELS.includes(char.toLowerCase())) {
        // If it is a vowel, get the index of the last vowel from indexOfVowels
        const pop = indexOfVowels.pop();
        if (pop === undefined) return char;
        return s[pop]; // Return the vowel at the found index to reverse the order of vowels
      } else {
        return char;
      }
    })
    .join("");
}
