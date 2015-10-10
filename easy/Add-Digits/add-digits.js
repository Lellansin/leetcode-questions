/**
 * @url https://leetcode.com/problems/add-digits/
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
	var str = num.toString(),
		result = 0;

	for (var i = 0; i < str.length; i++) {
		result += parseInt(str[i]);
	}

	if (result >= 10) {
		return addDigits(result);
	}
	return result;
};
