/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  var uniques = [], res = []
  for (var i = 0; i < nums2.length; i++) {
    var n = nums2[i]
    if (uniques.indexOf(n) == -1) {
      uniques.push(n)
    }
  }

  for (var j = 0; j < uniques.length; j++) {
    var m = uniques[j]
    if (nums1.indexOf(m) != -1) {
      res.push(m)
    }
  }

  return res
}

console.log(intersection([1, 2, 2, 1], [2, 2, 3]))
