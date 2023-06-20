/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //create a map with frequecy count
    let map = new Map();
    nums.forEach(n=>{
        //if map doesn't have number, set count as 1
        //else set count = count +1
        map.has(n)? map.set(n, map.get(n)+1) : map.set(n, 1);
    })
    //sort by frequency counts (most to less)
    const arr = [...map.entries()].sort((a, b) => b[1]-a[1]);

    //get elements with top frequency by K number
    let result = [];
    for(let i = 0; i < k; i++) {
        result.push(arr[i][0]);
    }
    return result;
};

var topKFrequent2 = function(nums, k) {
    let res = [], map = new Map();
    
    nums.forEach(n => map.set(n, map.get(n) + 1 || 1));
    
    let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
    
    for(let i = 0; i < k; i++) {
        res.push(sortedArray[i][0]);
    }
    
    return res;
};
nums = [3,2,1,3,1,2,2,2,1]; 
k = 2
console.log(topKFrequent(nums,k));