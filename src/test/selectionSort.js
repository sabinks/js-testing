function selectionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var lowestIndex = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        lowestIndex = j;
      }
    }
    if (i !== lowestIndex) {
      var temp = array[i];
      array[i] = array[lowestIndex];
      array[lowestIndex] = temp;
    }
  }
  return array;
}

console.log(
  selectionSort([100, 39, 1, 40, 5, 10, 99, 199, 35, 200, 3, 300, 6]),
);
// console.log(
//   selectionSort([100, 39, 1, 40, 5, 10, 99, 199, 35, 200, 3, 300, 6]),
// );
// console.log(selectionSort([14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));
