/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  var list = [];
  return s.replace(/[aeiouAEIOU]/g, function (ch) {
    list.push(ch);
    return '$'
  }).replace(/\$/g, function () {
    return list.pop();
  })
}
