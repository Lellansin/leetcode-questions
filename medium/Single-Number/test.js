/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	for (var pre = 0; pre < nums.length - 1; pre++) {
		if (nums[pre] === null)
			continue;

		var flag = true;
		for (var next = pre + 1; next < nums.length; next++) {
			if (nums[pre] === nums[next]) {
				nums[next] = null;
				flag = false;
				break;
			}
		}

		if (flag) {
			return nums[pre];
		}
	}
	return nums[nums.length - 1];
};