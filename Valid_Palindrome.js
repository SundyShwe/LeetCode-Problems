var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  reversed = s.split("").reverse().join("");
  console.log(s, reversed);
  return s === reversed ? true : false;
};

const s = "A man, a plan, a canal: Panama";
const s1 = "race a car";
const s3 = "0P";

console.log(isPalindrome(s3));
