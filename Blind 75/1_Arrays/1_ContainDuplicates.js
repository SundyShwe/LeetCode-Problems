/*
Given an integer array nums, 
return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true
*/

const containDuplicates = (nums) => {
    const uniques = new Set(nums);
    return uniques.size !== nums.length;
}
const nums = [1, 3, 4, 6, 3];
console.log(' contain duplicates?', containDuplicates(nums));
