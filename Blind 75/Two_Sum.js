//Given an array of integers nums and an integer target,
// return the indices of the two numbers such that they add up to target
// Input: nums = [2, 11, 7, 15], target = 9
// Output: [0, 1]  // Because nums[0] + nums[1] = 2 + 7 = 9

//Idea - keep the numbers in a map and check with difference 


function twoSum(nums, target) {
    const map = new Map(); //will hold [number, index]
    for (let i = 0; i < nums.length; i++) {
        //let's check for diff
        const diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
}

const nums = [2, 11, 7, 15];
const target = 9;
console.log('output', twoSum(nums, target));