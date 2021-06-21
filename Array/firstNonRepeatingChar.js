/*
A function that takes a string and returns first non-repeating character
E.g For string "abcdcaf", index is 1 as 'b' is the first non-repeating character
 */
function firstNonRepeatingCharacter(string) {
	const hash = {};
	for(let char of string) {
		if(char in hash) {
			hash[char] += 1;
		}
		else {
			hash[char] = 1;
		}
	}

	const entry = Object.values(hash).indexOf(1);
	if(entry === -1) return -1;

	const char = Object.keys(hash)[entry];
	return string.indexOf(char);
}

const str = 'abcdcaf';
console.log(firstNonRepeatingCharacter(str));
