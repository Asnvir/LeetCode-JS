/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let totalSum = nums[0];
    let curMax = nums[0], kadaneMax = nums[0];
    let curMin = nums[0], kadaneMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const currNumber = nums[i];
        totalSum += currNumber;

        curMax = Math.max(currNumber, curMax + currNumber);
        kadaneMax = Math.max(kadaneMax, curMax);

        curMin = Math.min(currNumber, curMin + currNumber);
        kadaneMin = Math.min(kadaneMin, curMin);
    }

    // kadaneMax < 0  => means all the array members are negative
    // all array members negative => we can not use circle calculation
    // because totalSum == kadaneMin => totalSum - kadaneMin = 0 => 0 == empty array
    // according to requirements we can not return empty array
    // that's why we'll return kadaneMax (the closest number to 0)
    return kadaneMax < 0 ? kadaneMax : Math.max(kadaneMax, totalSum - kadaneMin);
};