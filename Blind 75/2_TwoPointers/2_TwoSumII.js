/*
Given an SORTED array of integers nums and an integer target,
return the indices of the two numbers such that they add up to target
return should be 1 based, not 0
Input: nums = [2, 7,11 15], target = 18
Output: [2, 3]  // Because nums[1] + nums[2] = 7 + 11 = 18
*/

/*
Idea - since it is sorted array, we can use two pointer 
//if sum of left+right smaller than target, move left to get bigger values
else move right to get smaller values
*/

const twoSumII = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) return [left + 1, right + 1];
        sum < target ? left++ : right--;
    }
    return [];
}
const nums = [2, 7, 11, 15], target = 9;
console.log('two sum ', twoSumII(nums, target));


