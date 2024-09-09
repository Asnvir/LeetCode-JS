function twoSum(nums: number[], target: number): number[] {
  return nums.flatMap((firstNum, firstIndex) => {
    const secondNum = target - firstNum;
    const secondIndex = nums.indexOf(secondNum, firstIndex + 1);
    return secondIndex !== -1 ? [firstIndex, secondIndex] : [];
  });
}
