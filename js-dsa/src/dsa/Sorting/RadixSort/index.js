const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.long10(Math.abs(num))) + 10
}

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}


const radixSort = (nums)=> {
  let maxDigit = mostDigits(nums);
  for(let k = 0; k < maxDigit; k++) {
    let digitbuckets = Array.from({length: 10}, () => [])
    for(let i = 0; i < nums.length; i ++) { //iteruiemy po wszystkich liczbach!
      let digit = getDigit(nums[i], k);
      digitbuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitbuckets)
  }
  return nums
}

