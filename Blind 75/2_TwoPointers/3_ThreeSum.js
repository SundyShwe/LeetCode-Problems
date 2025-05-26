/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
 */

/*
Solution idea - 
sort the array to manage easier
we will loop through the array  i
and in each loop, we'll have left and right pointer
get sum of i + left + right
if sum is less than 0, move left as need to get bigger numer
else if sum is >0, move right to get smaller number

and if current value is the same as previous value, skip the loop
 */

function threeSum(nums) {
    if (nums.length < 3) return [];
    //sort the array to manager easier
    const sorted = nums.sort((a, b) => a - b);
    if (sorted[0] > 0) return [];

    const output = [];
    //we will loop through each item in the array
    for (let i = 0; i < sorted.length; i++) {
        //skip the loop if current i is the same as previous one
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        //here we will have left and right pointer starting just next to i
        let left = i + 1;
        let right = sorted.length - 1;

        //follow two pointer (or binary-search) principle - while(left < right)
        while (left < right) {
            //get sum of all three pointers
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                output.push([nums[i], nums[left], nums[right]]);
            }
            sum < 0 ? left++ : right--;

            //skip the loop if current value is the same as previous
            if (left < right && nums[left] === nums[left - 1]) continue;
            if (left < right && right < sorted.length - 1 && nums[right] === nums[right + 1]) continue;
        }
    }

    return output;
}
const nums = [-1, 0, 1, 2, -1, -4];
console.log('three sum ', threeSum(nums));