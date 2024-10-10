/* eslint-disable no-undef */
//multipel pointers
// condition is that array is sorted

function sumZero(arr) {
  var len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
}
// time complexity O(N^2)
console.log(sumZero([-4, -3, -2, 0, 1, 2, 3, 5]));
