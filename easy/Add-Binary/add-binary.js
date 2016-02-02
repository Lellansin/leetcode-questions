/**
 * @url https://leetcode.com/problems/add-binary/
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {
	if (a.length > b.length) {
		return strBinAdd(a, b);
	}
	return strBinAdd(b, a);
};

var strBinAdd = function(Long, Short) {
	var arr = [0];

	for (var i = 0; i < Long.length; i++) {
		arr.push(parseInt(Long[i]));
	}

	var len = arr.length - 1;

	for (i = Short.length - 1; len > 0; i--) {
		addBit(arr, parseInt(Short[i]) || 0, len--);
	}

	if (arr[0] === 0) {
		arr.shift();
	}

	return arr.join("");
};

var addBit = function(num, bin, bit) {
	switch (num[bit] + bin) {
		case 0:
			return num;
		case 1:
			num[bit] = 1;
			return num;
		case 2:
			num[bit] = 0;
			return addBit(num, 1, bit - 1);
		default:
			throw new Error("num[bit] is " + num[bit] + ", bit is " + bit + ", bin is " + bin);
	}
};

var a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
var b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";
console.log(addBinary(a, b) == "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000");
