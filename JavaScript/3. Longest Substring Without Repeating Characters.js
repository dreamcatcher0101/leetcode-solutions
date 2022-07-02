// Problem url: https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */

const TOTAL_CHAR_COUNT = 256;

const lengthOfLongestSubstring = function (s) {
  const length = s.length;
  let indices = new Array(TOTAL_CHAR_COUNT).fill(-1);
  let start = 0,
    longestLength = 0;

  for (let i = 0; i < length; i++) {
    start = Math.max(start, indices[s.charCodeAt(i)] + 1);
    longestLength = Math.max(longestLength, i - start + 1);
    indices[s.charCodeAt(i)] = i;
  }

  return longestLength;
};

/**
 * Sample Input
 * "abcabcbb"
 * Sample Output
 * 3
 */
console.log(lengthOfLongestSubstring("abcabcab"));
