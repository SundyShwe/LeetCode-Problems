

var containsDuplicate = function(nums) {
    let unique = new Set(nums);
    return (unique.size == nums.length)? false : true; 
};

let nums = [1,2,3,1];
console.log(containsDuplicate(nums));