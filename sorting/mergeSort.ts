function mergeSort(arr: number[], low: number, high: number) {
  if (low >= high) return;

  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

function merge(arr: number[], low: number, mid: number, high: number) {
  const temp: number[] = [];
  let i = low;
  let j = mid + 1;

  while (i <= mid && j <= high) {
    if (arr[i] < arr[j]) {
      temp.push(arr[i++]);
    } else {
      temp.push(arr[j++]);
    }
  }

  while (i <= mid) {
    temp.push(arr[i++]);
  }

  while (j <= high) {
    temp.push(arr[j++]);
  }

  for (let k = 0; k < temp.length; k++) {
    arr[k + low] = temp[k];
  }
}

const arr = [38, 27, 43, 3, 9, 82, 10];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
