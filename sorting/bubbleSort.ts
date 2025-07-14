function bubble(array: number[]) {
  let index = array.length;

  for (let i = 0; i < index - 1; i++) {
    let flag = 0;
    for (let j = 0; j < index - 1 - i; j++) {
      let temp: number;

      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        flag = 1;
      }
    }
    if (flag == 0) return;
  }
  console.log(array);
}

bubble([1000, 50, 40, 30, 20]);
