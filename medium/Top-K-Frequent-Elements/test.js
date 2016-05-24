/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var frequent = {};
  var indexs = Array(k).fill(0);
  var values = Array(k).fill(0);

  for (var i = nums.length - 1; i >= 0; i--) {
    var n = nums[i];
    if (frequent[n] === undefined)
      frequent[n] = 0;
    frequent[n] += 1;
  }

  for (var index in frequent) {
    var times = frequent[index];
    for (var j = 0; j < k; j++) {
      if (times > values[j]) {
        indexs.splice(j, 0, index)
        values.splice(j, 0, times)
        break;
      }
    }
  }

  return indexs.slice(0, k).map(function(n) { return parseInt(n) })
};

// console.log(topKFrequent([1,1,1,2,2,3,3,3], 2))
// console.log(topKFrequent([1,1,2,3,2,2,2,5,5,8,8,8,6,6,6,1,1,1,1,3,2,4,5,6], 5))
// console.log(topKFrequent([1,1,2,3,2,2,2,5,5,8,8,8,6,6,3,2,4,5,6], 3))
