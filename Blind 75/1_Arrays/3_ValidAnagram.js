/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
 */
/*
solution idea - use map to hold the characters [char, count]
for s, count ++
for t, count --
if count become -, then not Anagram
*/

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const charMap = new Map();

    //first, put char of s into map with count [char, count]
    for (let char of s) {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1);
        } else {
            charMap.set(char, 1);
        }
    }

    //then, for each char of t, deduct the count
    for (let char of t) {
        if (!charMap.has(char) || charMap.get(char) < 1) {
            return false;
        }
        charMap.set(char, charMap.get(char) - 1);
    }
    return true;
}

const s = 'anagram';
const t = 'nagraam';
console.log('is anagram', isAnagram(s, t));
console.log('is anagram', isAnagramTwo(s, t));

//easy ES6 way
function isAnagramTwo(s, t) {
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    return sortedS.toLowerCase() === sortedT.toLowerCase();
}