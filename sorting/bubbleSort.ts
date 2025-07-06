function bubble(array: number[]) {
  let index = array.length;

  for (let i = 0; i < index - 1; i++) {
    for (let j = 1; j < index; j++) {
      let temp: number;
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(array);
}

bubble([20, 50, 40, 30, 20]);
