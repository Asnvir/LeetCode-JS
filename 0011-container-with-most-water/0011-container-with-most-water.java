class Solution {

    public int maxArea(int[] height) {
        int resultArea = 0;
        int left = 0;
        int right = height.length - 1;

        while(left < right) {
            int leftHeight = height[left];
            int rightHeight = height[right];

            int currentHeight = (leftHeight < rightHeight) ? leftHeight : rightHeight;
            int width = right - left;

            int currentArea = currentHeight * width;
            
            resultArea = (resultArea > currentArea) ? resultArea : currentArea;

            if(leftHeight < rightHeight){
                left++;
            } else{
                right--;
            }
        }

        return resultArea;
    }

}