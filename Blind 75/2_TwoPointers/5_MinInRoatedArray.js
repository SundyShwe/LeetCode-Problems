/**
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
 * For example, the array nums = [0,1,2,4,5,6,7] might become:
[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.

Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
 */

/*
solution idea - since this is sorted array(even if roated) and we want O(log n), must use Binary search with left and right pointer
logic 
1. use left , right pointer and find Mid
2. in sorted order, mid will always be smaller than right
3. if mid is greater than right, than this is roation happed
4. return left value as it's the min of a sorted array
*/

const findMin = (nums) => {
    let min = 0;
    let left = 0; //supposed to be minum value of the array
    let right = nums.length - 1; //supposed to be max value

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) { //mid is greater than right => rotation occured
            left = mid + 1; //then min might be just next to mid
        } else {
            right = mid; //make mid as new max(right)
        }
    }
    return nums[left];
}
const nums = [4, 5, 6, 7, 0, 1, 2];
console.log('min is', findMin(nums));