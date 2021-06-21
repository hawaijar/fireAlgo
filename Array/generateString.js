/*
Given a string s1 and string s2, check if s2 can be generated from s1

E.g. The string 'hello wOrld' can be generated from 'helloworldO '
 */

function generateString(str1, str2) {
  if (str2 === "") return true;
  // remove spaces from both strings
  let s1 = str1.replace(/\s/g, "");
  let s2 = str2.replace(/\s/g, "");

  for (let char of str2) {
    const c1 = getFrequency(char, str2);
    const c2 = getFrequency(char, str1);
    if (c1 > c2) return false;
  }
  return true;
}
function getFrequency(char, target) {
  let count = 0;
  for (let ch of target) {
    if (char === ch) count++;
  }
  return count;
}

const str1 = "helloworldO";
const str2 = "hello wOrld";

console.log(generateString(str1, str2));
