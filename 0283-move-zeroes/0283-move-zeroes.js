var moveZeroes = function(nums) {
    let nonZeroIndx = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== 0) {
            nums[nonZeroIndx] = nums[i];

            if (i !== nonZeroIndx) {
                nums[i] = 0;
            }

            nonZeroIndx++;
        }

    }
};