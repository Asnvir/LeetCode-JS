class Solution {

    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);

        List<List<Integer>> results = new ArrayList<>();
        
        for(int i = 0; i < nums.length; i++) {
            int targetSum = -nums[i];

            // Skip duplicates for the current element nums[i]
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }

            int left = i + 1;
            int right = nums.length - 1;

            while(left < right) {
                int currentSum = nums[left] + nums[right];

                if(currentSum == targetSum) {
                    // Create a list for the triplet and add it to results
                    results.add(Arrays.asList(nums[i], nums[left], nums[right]));

                    // Skip duplicates for nums[left] and nums[right]
                    while (left < right && nums[left] == nums[left + 1]) {
                        left++;
                    }
                    while (left < right && nums[right] == nums[right - 1]) {
                        right--;
                    }

                    // Move the pointers after finding a valid triplet
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
