function selection(array: number[]): void {
  let index = array.length;
  for (let i = 0; i <= index - 2; i++) {
    let minimum = i;

    for (let j = i; j <= index - 1; j++) {
      if (array[j] < array[minimum]) {
        minimum = j;
      }
    }
    if (minimum != i) {
      const temp = array[i];
      array[i] = array[minimum];
      array[minimum] = temp;
    }
    console.log(array);
  }
  console.log(array);
}

selection([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]);
