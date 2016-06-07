/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  var len = num.toString(2).length - 1
  if (len & 1 == 1) {
    return false
  }
  return (num ^ (1 << len)) === 0;
};

console.log(isPowerOfFour(1))
console.log(isPowerOfFour(2))
console.log(isPowerOfFour(4))
console.log(isPowerOfFour(5))
console.log(isPowerOfFour(16))
console.log(isPowerOfFour(17))