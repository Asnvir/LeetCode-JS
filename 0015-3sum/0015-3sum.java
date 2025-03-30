class Solution {

    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);

        List<List<Integer>> results = new ArrayList<>();
        
        for(int i = 0; i < nums.length; i++) {
        
            // Check if we've already searched triplets, for the same number
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }

            // -nums[i], preparation for 2sum algorithm
            int targetSum = -nums[i];
            int left = i + 1;
            int right = nums.length - 1;

            // 2 sum algorithm with 2 pointers
            while(left < right) {
                int currentSum = nums[left] + nums[right];

                if(currentSum == targetSum) {
                    results.add(Arrays.asList(nums[i], nums[left], nums[right]));

                    // Skip duplicates for nums[left] and nums[right]
                    while (left < right && nums[left] == nums[left + 1]) {
                        left++;
                    }
                    while (left < right && nums[right] == nums[right - 1]) {
                        right--;
                    }

                    left++;
                    right--;
                } else if (currentSum < targetSum) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return results;
    }
}
