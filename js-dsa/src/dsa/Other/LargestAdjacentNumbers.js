export const adjacentElementsProduct = (nums) => {
  let first = 0;
  let second = first + 1;
  let maxProduct = nums[first] * nums[second];
  let tmpProduct = maxProduct;
  for(first; second < nums.length; first++) {
    tmpProduct = nums[first] * nums[second]
    maxProduct = Math.max(tmpProduct, maxProduct);
    second++;
  }
  console.log('maxProduct', maxProduct)
  return maxProduct
}
