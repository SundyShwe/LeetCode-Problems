/**
 A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. 
 Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:
Input: s = " "
Output: true
 */

//use two pointers : start and end
//if start !== end, then not valid 
//O(log n)

function isPalindrome(str) {
    //need to clear non-alphanumaric characters eg : ,
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    //set start and end pointer
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str.charAt(start) !== str.charAt(end)) return false;
        start++;
        end--;
    }
    return true;

}
const s = "A man, a plan, a canal: Panama";
console.log('is Valid Palindrome', isPalindrome(s));