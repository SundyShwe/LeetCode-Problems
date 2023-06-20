/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  
    for (let i = 0; i < nums.length; i++) {
        let diff = target  - nums[i];
        let index = nums.indexOf(diff);
        
        if(index>-1 && index != i){
            return [i, index];
        }
    }
};

var twoSum2 = function(nums, target){
    //create a map with diff of target
    let diff = new Map();
    nums.forEach((n,index) => {
        diff.set(target-n,index);
    });
    
    //check for diff and add to result
    for (let i = 0; i < nums.length; i++) {
        const index = diff.get(nums[i]);
        if(diff.has(nums[i]) && index != i){
            return [i, index];
        }
    }

}

const nums = [3,2,4]; 
const target = 6

console.log(twoSum(nums,target));
console.log(twoSum2(nums,target));