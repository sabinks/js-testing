function binarySearch(array, value) {
  // add whatever parameters you deem necessary - good luck!
  if (array.length == 0) return -1;
  var start = 0;
  var end = array.length;
  if (array[0] > value || array[end - 1] < value) return -1;

  var middle = Math.floor(array.length / 2);
  while (array[middle] !== value && start <= end) {
    if (array[middle] > value) {
      end = middle - 1;
      middle = Math.floor((start + end) / 2);
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return array[middle] == value ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 7, 8], 8));
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     10,
//   ),
// );
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     95,
//   ),
// );
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     100,
//   ),
// );
