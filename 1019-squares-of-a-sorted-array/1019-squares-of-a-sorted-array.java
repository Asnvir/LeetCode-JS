class Solution {
    public int[] sortedSquares(int[] nums) {
        int[] results = new int[nums.length];

        int left = 0;
        int right = nums.length - 1;
        int currentIndex = nums.length - 1;

        while (left <= right) {  // Use <= to include the case where left == right
            int absoluteLeftNum = Math.abs(nums[left]);
            int absoluteRightNum = Math.abs(nums[right]);

            if (absoluteLeftNum < absoluteRightNum) {
                int poweredRightNum = (int) Math.pow(absoluteRightNum, 2);
                results[currentIndex--] = poweredRightNum;
                right--;
            } else {
                int poweredLeftNum = (int) Math.pow(absoluteLeftNum, 2);
                results[currentIndex--] = poweredLeftNum;
                left++;
            }
        }

        return results;
    }
}
