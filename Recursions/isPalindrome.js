/**
 Given a string, check if it's palindrome
 E.g. dad is palindrome
 **/

function isPalindrome(str) {
  function palindrome(s, start, end) {
    if (start >= end) return true;
    return s[start] === s[end] && palindrome(s, start + 1, end - 1);
  }
  return palindrome(str, 0, str.length - 1);
}
let str = "dads";
console.log(isPalindrome(str));
