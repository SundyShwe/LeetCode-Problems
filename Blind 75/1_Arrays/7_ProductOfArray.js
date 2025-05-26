/**
 * Given an integer array nums, return an array answer such that 
 * answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 */

/**
 Brute-force way : loop through each item of array, get product of all expect it's , and push to result array => O(n^2)

 Better way : multiply from the start and then from the end - O(n)
 */
function productExceptSelf(nums) {
    const output = [];

    //from the start, multiply with next num and save into output
    let leftMultiplyValue = 1;
    for (let i = 0; i < nums.length; i++) {
        output.push(leftMultiplyValue);
        leftMultiplyValue *= nums[i];
    }

    //from the back, multiply what's aldy in output with nums
    let rightMultiplyValue = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= rightMultiplyValue;
        rightMultiplyValue *= nums[i];
    }

    return output;
}
const nums = [1, 2, 3, 4];
console.log('output ', productExceptSelf(nums));
