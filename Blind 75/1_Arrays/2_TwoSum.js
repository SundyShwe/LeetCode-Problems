/*
Given an array of integers nums and an integer target,
return the indices of the two numbers such that they add up to target
Input: nums = [2, 11, 7, 15], target = 9
Output: [0, 1]  // Because nums[0] + nums[1] = 2 + 7 = 9
*/

/*
solution idea - use Map to hold numbers and check for difference
*/

const twoSum = (nums, target) => {
    const map = new Map(); // will hold [num, index]

    for (let i = 0; i < nums.length; i++) {
        //get diff from target
        const difference = target - nums[i];
        if (map.has(difference)) {
            //this means difference + nums[i] = target!
            return [map.get(difference), i];

        } else {
            map.set(nums[i], i);
        }
    }
}

const nums = [2, 11, 7, 15];
const target = 9;
console.log('output', twoSum(nums, target));
