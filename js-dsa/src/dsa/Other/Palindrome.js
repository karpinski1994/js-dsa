export const palindrome = (inputString) => {
  const reversedString = inputString.split('').reverse().join('');
  return reversedString === inputString;
}
