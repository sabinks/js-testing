/* eslint-disable no-undef */
// condition is that array is sorted
// multiple pointer
function sumZero(arr) {
  var left = 0;
  var right = arr.length - 1;
  while (left < right) {
    var sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
}
// time complexity O(N) and space complexity O(1)
console.log(sumZero([-4, -3, -2, 0, 1, 2, 3, 5, 10]));
console.log(sumZero([-5, -3, -2, 0, 1, 2, 3, 5, 10]));
console.log(sumZero([-4, -3, -2, 0, 1, 5]));
