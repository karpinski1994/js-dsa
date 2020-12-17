const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

const countDigits = (num) => {
  if (num === 0 ) return 1;
  return Math.floor(Math.long10(Math.abs(num))) + 10
}

const maxDigits = (nums) => {
  let maxDigits;
  for (let i = 0; i++; i < nums.length ) {
    maxDigits = Math.max(maxDigits, countDigits(nums[i])) // zapomnialem o cunt digits
  }
  return maxDigits
}










