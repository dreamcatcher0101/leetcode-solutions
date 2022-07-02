// Problem Url: https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  const length = nums.length;
  const resultMatch = {};

  for (let i = 0; i < length; i++) {
    const left = target - nums[i];

    if (resultMatch[left] !== undefined) {
      return [resultMatch[left], i];
    } else {
      resultMatch[nums[i]] = i;
    }
  }
};

/**
 * Sample Input
 * [2,7,11,15]
 * 9
 * Sample Output
 * [0,1]
 */

console.log(twoSum([2, 7, 11, 15], 9));
