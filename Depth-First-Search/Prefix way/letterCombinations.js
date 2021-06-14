/*
	Letter Combinations of a Phone Number
	Given a string containing digits from 2-9 inclusive, return all possible letter combinations
	that the number could represent. Return the answer in any order.

	A mapping of digit to letters (just like on the telephone buttons) is given below.
	Note that 1 does not map to any letters.
	https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */

const MAPPING = {
	2: 'abc'.split(''),
	3: 'def'.split(''),
	4: 'ghi'.split(''),
	5:'jkl'.split(''),
	6: 'mno'.split(''),
	7: 'pqrs'.split(''),
	8: 'tuv'.split(''),
	9: 'wxyz'.split('')
}

function letterCombinations(digits) {
	const result = [];
	function combination(prefix = '', remainingDigits) {
		if(remainingDigits === '') {
			result.push(prefix);
		}
		else {
			const letters = MAPPING[remainingDigits[0]];
			for(let i = 0; i < letters.length; i++) {
				combination(prefix + letters[i], remainingDigits.slice(1));
			}
		}
	}
	combination('', digits);
	return result;
}

console.log(letterCombinations('23'))
