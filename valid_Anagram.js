/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length <1 || t.length <1) return false;
    if(s.length != t.length) return false;

    const sArr = s.split('');
    const tArr = t.split('');
    sArr.sort();
    tArr.sort();
    return sArr.every((v, index)=> v == tArr[index]);
};

const s = "Sundy";
const t = "Sandy";

console.log(isAnagram(s,t));