/**
 * There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:
Input: nums = [1], target = 0
Output: -1
 */

//since it is sorted, we'll use binary search two pointer - left and right
//as usual, we'll get mid value and comapre with target
//but if mid > right = occurations occurs,

function searchInRoated(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;

        if (nums[mid] > nums[right]) {
            //rotation oaccured!
            //so we'd better go to left side as the right side may be out of order
            //make sure target is in the left side and go there
            if (target < nums[mid] && target >= nums[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            //as usual, if mid is smaller , we need to go to right side to get bigger number
            //just make sure if target is between mid and right before going there
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

const nums = [4, 5, 6, 7, 0, 1, 2], target = 0;
console.log('search in rotation', searchInRoated(nums, target));
