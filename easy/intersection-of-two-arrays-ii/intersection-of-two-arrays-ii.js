/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  var res = [];
  var context = nums1.slice();

  for (var i = 0; i < nums2.length; i++) {
    var m = nums2[i];
    var pos = context.indexOf(m);
    if (pos != -1) {
      context[pos] = null;
      res.push(m);
    }
  }

  return res;
}
