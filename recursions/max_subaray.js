// Given an integer array nums, find the subarray with the largest sum, and return its sum.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let cur = nums[0]
    let best = nums[0]

    for (let i=1; i<nums.length; i++){
        const x = nums[i]
        cur = Math.max(x, cur + x)
        best = Math.max(best, cur)
    }
    return best
};

console.log(maxSubArray)