const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 10
}

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}


export const radixSort = (nums)=> {
  let maxDigit = mostDigits(nums);
  for(let k = 0; k < maxDigit; k++) { //tyle ile najdluzsza liczba ma cyfr
    let digitbuckets = Array.from({length: 10}, () => [])
    for(let i = 0; i < nums.length; i ++) { //iteruiemy po wszystkich liczbach!
      let digit = getDigit(nums[i], k); // wsadzajac kazda aktualna liczbe
      digitbuckets[digit].push(nums[i]) // do pojemnika o takim indeksie jak liczba!
    }
    nums = [].concat(...digitbuckets)
  }
  return nums
}

