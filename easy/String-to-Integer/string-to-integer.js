var ASCII = {
	a: 'a'.charCodeAt(),
	f: 'f'.charCodeAt(),
	A: 'A'.charCodeAt(),
	F: 'F'.charCodeAt(),
	0: '0'.charCodeAt(),
	8: '8'.charCodeAt(),
	9: '9'.charCodeAt(),
};

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	var i = 0, result = 0, digit = 1, minus = 1;
	var hex = false;

	str = str.trim();

	if (str[0] == '-') {
		i = 1;
		minus = -1;
	} else if (str[0] == '+') {
		i = 1;
	} else {
		if (str[0] === "0" && str[1] === "x") {
			i = 2;
			hex = true;
		}
	}

	for (; i < str.length; i++) {
		var n = str[i].charCodeAt();
		var val;

		if (hex) {
			val = intAtHex(n);
		} else {
			val = intAtCh(n);
		}

		if (isNaN(val) || val == null) {
			break;
		}

		if (hex) {
			result *= 16;
		} else {
			result *= 10;
		}

		result += minus * val;
	}

	if (result > 2147483647)
		return 2147483647;
	else if (result < -2147483648)
		return -2147483648;
	return result || 0;
};


var intAtCh = function(ascii) {
	if (ASCII[0] <= ascii && ascii <= ASCII[9]) {
		return ascii - ASCII[0];
	}
	return null;
};

var intAtHex = function(ascii, digit) {
	var ret = null;

	if (ASCII.a <= ascii && ascii <= ASCII.f) {
		ret = ascii - ASCII.a + 10;
	} else if (ASCII.A <= ascii && ascii <= ASCII.F) {
		ret = ascii - ASCII.A + 10;
	} else if (ASCII[0] <= ascii && ascii <= ASCII[9]) {
		ret = ascii - ASCII[0];
	} else {
		return null;
	}

	while (digit--) {
		ret *= 16;
	}
	return ret;
};

// console.log(myAtoi("+1"));
// console.log(myAtoi("-+1"));
// console.log(myAtoi("0xA0"));
// console.log(myAtoi("0xA1"));
console.log(myAtoi("  -0012a42"));