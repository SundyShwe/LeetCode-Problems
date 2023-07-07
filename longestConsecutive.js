/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length ==0) return 0
    const sorted = nums.sort(function(a, b){return a-b});

    let sequence = new Set();
    let start = sorted[0];
    sequence.add(start);
    let longest = 0;
    for(let num of sorted){
        if(num - start == 1) {
            if(!sequence.has(start)){
                longest = Math.max(longest,sequence.size)
                sequence.clear();
                sequence.add(start);
                sequence.add(num);
            }
            else{
                
                sequence.add(num);  
            }
        }
        start = num;
    }
          
    longest = Math.max(longest,sequence.size)
    return longest;
};




let num1 = [100,4,200,1,3,2];
let num2 = [0,3,7,2,5,8,4,6,0,1];
let num3 = [9,1,4,7,3,-1,0,5,8,-1,6];

const lc = longestConsecutive(num3);
console.log(lc);