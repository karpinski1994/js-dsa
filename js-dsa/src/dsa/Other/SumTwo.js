export const sumTwo = (nums, target) => {
    let first = 0;
    let second = first + 1;
    let lastId = nums.length - 1;
    let sum;
  
    while (sum !== target) {
      sum = nums[first] + nums[second];
      if (sum === target) {
        return [first, second];
      } else {
        if (second < lastId) {
          second++;
        } else {
          first++;
          second = first + 1;
        }
      }
    }
    return [first, second];
}
