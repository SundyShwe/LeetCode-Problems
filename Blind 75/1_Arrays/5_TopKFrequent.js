/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
*/
/*
solution idea - creat an occurance Map and sort them and get the top K numbers
O(n logn)
*/

const topKFrequent = (nums, k) => {
    const occuranceMap = {};  //will hold [num, occuranceCount]
    //get occurance
    for (let num of nums) {
        if (!occuranceMap[num]) {
            occuranceMap[num] = 1;
        } else {
            occuranceMap[num] += 1;
        }
    }
    //sort the occurance
    const sorted = Object.entries(occuranceMap).sort((a, b) => b[1] - a[1]);
    //slice the top K elements
    const topK = sorted.slice(0, k + 1);
    //since obj key becomes string, need to change to number
    return topK.map(item => item[0] * 1);
}
const nums = [1, 1, 1, 2, 2, 3], k = 1;
console.log('top frequent occurance', topKFrequent(nums, k));

