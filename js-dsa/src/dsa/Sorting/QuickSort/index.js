const swap = (arr, start, end) => {
  const tmp = arr[start];
  arr[start] = end;
  arr[end] = tmp;
}

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapId = start;

  for(let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapId++;
      swap(arr, swapId, i);
    }
  }
  swap(arr, start, swapId);
  return swapId
}

export const quickSort = (arr, left = 0, right = arr.length -1) => {
  if (left < right) {
    let pivotId = pivot(arr, left, right);

    quickSort(arr, left, pivotId - 1)

    quickSort(arr, pivotId + 1, right)
  }
  return arr;
}