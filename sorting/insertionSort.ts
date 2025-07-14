function insertion(arr: number[]) {
  let n = arr.length;
  for (let i = 0; i <= n - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;

      j--;
    }
  }
  console.log(arr);
}

insertion([4, 6, 7, 84, 3]);
