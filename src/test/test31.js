/* eslint-disable no-undef */
function countUniqueValue(arr) {
  var pointer1 = 0;
  var pointer2 = 1;

  while (pointer2 < arr.length) {
    if (arr[pointer1] == arr[pointer2]) {
      pointer2++;
    } else {
      pointer1++;
      arr[pointer1] = arr[pointer2];
    }
  }

  return pointer1 + 1;
}

console.log(countUniqueValue([1, 1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 5, 6, 6, 6, 6]));
