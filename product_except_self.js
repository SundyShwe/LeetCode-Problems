/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answers= []
    nums.forEach((n,i)=>{
        const prd =  nums.reduce((p, curn, curi)=>{
                                    if(curi != i) return p * curn;
                                    else return p;
                                },1);
        answers.push(prd);
    });
    return answers;
};
var productExceptSelf2 = function(nums) {
     const resultArr = []
     nums.forEach((n,i)=>{
        let prd = n;
        prd = resultArr.length? prd * resultArr[i-1] : n;
        resultArr.push(prd);
     })
    // for(let i=0; i<nums.length; i++){
    //     let productVal = nums[i]
    //     console.log(resultArr[i-1]);
    //     if(resultArr.length !== 0)
    //         productVal = productVal * resultArr[i-1]
    //     resultArr.push(productVal)
    //     console.log(resultArr);
    // }
    // console.log("-------");
    // let productVal = 1
    // let i=nums.length-1
    // for(i; i > 0; i--){
    //     resultArr[i] = resultArr[i-1] * productVal
    //     productVal = nums[i] * productVal
    //     console.log(productVal,'-',resultArr);
    // }
    // resultArr[i] = productVal
    return resultArr
};

nums =  [-1,1,0,-3,3]
nums =  [1,2,3,4]
console.log(productExceptSelf2(nums))