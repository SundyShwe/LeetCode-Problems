/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
*/

//use Object [key: value] to hold the same anagrams 
// key = sorted string ==> O (m * nlogn)

const groupAnagrams = (strs) => {
    const output = {};

    for (let str of strs) {
        //creat the key - sort the string 
        const key = str.split('').sort().join('');

        //use this key to put it in the Object
        if (!output[key]) {
            output[key] = [str]; //first found, put it as array as we need to group them
        } else {
            output[key].push(str);
        }
    }

    //we need array for the result
    return Object.values(output);
}
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log('Group Anagrams - ', groupAnagrams(strs));

//key with charCodeAt()  ==> O(m*n)
//using arr.sort() is causing us O(log n), 
//so if we use this way, we can remove log n and become better

const groupAnagramsBetter = (strs) => {
    const output = {};
    for (let str of strs) {
        //get charMap for each char of the string 
        const charMap = new Array(26).fill(0); //now charMap is [0,0,0,0,0........]
        for (let char of str) {
            const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0); //here a = 0, b = 1, c= 2, d=3 etc 
            charMap[charCode] = 1;
        }
        //after this, charMap will be [1,1,1,0,0,0...] for 'abc'

        const key = charMap.join(''); //now we get an id-like number, so 'abc', 'bac', cba' all wll have '11100000....'

        //this is the same as before, put the str to the key
        if (!output[key]) {
            output[key] = [str];
        } else {
            output[key].push(str);
        }
    }
    return Object.values(output);
}
console.log('Group Anagrams Better- ', groupAnagramsBetter(strs));