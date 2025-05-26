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
    const occuranceMap = new Map();  //will hold [num, occuranceCount]
    //get occurance
    for (let n of nums) {
        if (!occuranceMap.has(n)) {
            occuranceMap.set(n, 1);
        } else {
            occuranceMap.set(n, occuranceMap.get(n) + 1);
        }
    }
    //sort the occurance
    const sorted = Array.from(occuranceMap).sort((a, b) => b[1] - a[1]);
    //slice the top K elements
    const topK = sorted.slice(0, k + 1).map(item => item[0]);
    //since obj key becomes string, need to change to number
    return topK;
}
const nums = [1, 1, 1, 2, 2, 3], k = 1;
console.log('top frequent occurance', topKFrequent(nums, k));

//BETTER VERSION - how we can do it without sorting???
//we'll key frequecy array [0....to...length],
// 0 = no occurance, 2= 2 occurances,
// if(num.length is 6), then maximun occurance is 6
//O(n*k)

function topKFrequentWithoutSorting(nums, k) {
    const occuranceMap = new Map();
    //the same as before, we'll get [num, occurance] map
    for (let n of nums) {
        if (!occuranceMap.has(n)) {
            occuranceMap.set(n, 1);
        } else {
            occuranceMap.set(n, occuranceMap.get(n) + 1);
        }
    }

    //we'll have an array for no.of frequencies
    //0 = 0 occurance, 2= 2 occurance etc
    //if num.lenght is 6, then max occurance is 6
    const frequencies = new Array(nums.length).fill(null);
    occuranceMap.forEach((n, occ) => {
        frequencies[occ] = n;
    });
    //afther this, num are assigned to their frequency index in the array

    const result = [];
    //iterate frequencies array backward to get the top k frequesncy
    for (let i = frequencies.length - 1; i >= 0 && result.length <= k; i--) {
        if (frequencies[i]) result.push(frequencies[i]); //if not null, put into result
    }
    return result;

}
console.log('top frequent occurance without sorting', topKFrequentWithoutSorting(nums, k));

