

export const merge = (arr1, arr2) => {

  const result = [];
  let i = 0;
  let j = 0;


  while (i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++;
    }
    if(arr1[i] > arr2[j]) {
      result.push(arr2[j])
      j++;
    }
  }

  while(i < arr1.length) {
    result.push(arr1[i])
  }
  while(j < arr1.length) {
    result.push(arr1[j])
  }
  return result;
}