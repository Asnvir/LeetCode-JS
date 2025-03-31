/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let resultArea = 0;
    let left = 0;
    let right = height.length - 1;

    while(left < right) {
        const leftHeight = height[left];
        const rightHeight = height[right];

        const currentHeight = (leftHeight < rightHeight) ? leftHeight : rightHeight;
        const width = right - left;
        const currentArea = currentHeight * width;
        resultArea = Math.max(resultArea, currentArea);
        
        leftHeight < rightHeight ? left++ : right--;
    }

    return resultArea;
    
};