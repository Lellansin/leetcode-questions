/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  var res = [];
  for (var i = 0; i <= num; i++) {
    var bin = i.toString(2), count = 0;
    for (var j = 0; j < bin.length; j++) {
      if (bin[j] === '1') {
        count++
      }
    }
    res.push(count)
  }
  return res
};

console.log(countBits(0))
console.log(countBits(1))
console.log(countBits(2))
console.log(countBits(3))
console.log(countBits(4))
console.log(countBits(5))
console.log(countBits(6))
console.log(countBits(7))
