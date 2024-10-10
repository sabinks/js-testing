/* eslint-disable no-undef */
function countUniqueValue(arr) {
  var pointer1 = 0;

  for (var pointer2 = 1; pointer2 < arr.length; pointer2++) {
    if (arr[pointer1] !== arr[pointer2]) {
      pointer1++;
      arr[pointer1] = arr[pointer2];
    }
  }

  return pointer1 + 1;
}
// time complexity O(N) and space complexity O(1)

console.log(countUniqueValue([1, 1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 5, 6, 6, 6, 6]));
