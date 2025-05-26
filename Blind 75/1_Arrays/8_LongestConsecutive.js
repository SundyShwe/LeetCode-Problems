/**
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
Example 3:
Input: nums = [1,0,1,2]
Output: 3
 */

//easy with sorting but it's O(n log n)

//so, we put the array in set to easy to manager
//then check for the start of sequence, i.e num-1
//eg. [100,4,200,1,3,2] <=  1 is start of sequence becos thre's no 0 in it, 100 is start of sequnce as there's no 99 etc
//and then from this start num, we'll check if there's num+1, if have, then sequenceCount++;

function longestConsecutive(nums) {
    const numsSet = new Set(nums);
    let maxSequenceCount = 0;
    for (let n of nums) {
        if (!numsSet.has(n - 1)) { //check to see the start of a sequence, if n-1 exist, then it's not a start
            //found a start, then we need to check for next consecutive numbers
            let curNum = n;
            let sequenceCount = 1;
            while (numsSet.has(curNum + 1)) {
                curNum++;
                sequenceCount++;
            }
            maxSequenceCount = Math.max(maxSequenceCount, sequenceCount);
        }
    }
    return maxSequenceCount;
}
const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log('longest consecutive sequence is ', longestConsecutive(nums));