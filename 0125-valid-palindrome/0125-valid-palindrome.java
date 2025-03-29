class Solution {
    public boolean isPalindrome(String s) {
        char[] str = s.toCharArray();
        int left = 0;
        int right = str.length - 1;

        while(left < right){
            if(!Character.isLetterOrDigit(str[left])){
                left++;
                continue;
            }
            if(!Character.isLetterOrDigit(str[right])){
                right--;
                continue;
            }
            char leftLetter = Character.toLowerCase(str[left]);
            char rightLetter = Character.toLowerCase(str[right]);

            if(leftLetter != rightLetter){
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}