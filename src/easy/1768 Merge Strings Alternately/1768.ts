// https://leetcode.com/problems/merge-strings-alternately/

/** 1768. Merge Strings Alternately */
export function mergeAlternately(word1: string, word2: string): string {
  const mergedString: string[] = [];
  const word1Length: number = word1.length;
  const word2Length: number = word2.length;

  if (word1Length < 1 || word1Length > 100) return "";

  for (let i = 0; i < word1Length || i < word2Length; i++) {
    if (word1[i]) mergedString.push(word1[i]);
    if (word2[i]) mergedString.push(word2[i]);
  }

  return mergedString.join("");
}
