function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    var currentVal = array[i];
    var j;
    for (j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentVal;
  }
  return array;
}
console.log(insertionSort([2, 3, 1, 4]));
console.log(
  insertionSort([100, 39, 1, 40, 5, 10, 99, 199, 35, 200, 3, 300, 6]),
);
// console.log(
//   insertionSort([100, 39, 1, 40, 5, 10, 99, 199, 35, 200, 3, 300, 6]),
// );
// console.log(insertionSort([14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));
