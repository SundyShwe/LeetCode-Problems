/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = new Map()
    strs.forEach(str=>{
        let sorted = str.split("").sort().join("");
        if(result.has(sorted)){
            result.set(sorted, [...result.get(sorted),str])
        }
        else{
            result.set(sorted, [str])
        }
    });
    return Array.from(result.values());
    
};

var groupAnagrams2 = function(strs) {
    // let obj = {};
    // for (let str of strs) {
    //     let letters = str.split("").sort().join("");
    //     obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
    // }
    // return Object.values(obj);

    let result = {};
    strs.forEach(str=>{
        let sorted = str.split("").sort().join("");
        result[sorted]? result[sorted].push(str) : result[sorted] = [str];
        
    });
    return Object.values(result);
    
};


strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs));