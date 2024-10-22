/* eslint-disable no-undef */
const isOdd = (val) => {
  console.log('isOdd', val);

  return val % 2 !== 0;
};
const isGreater = (val) => val > 10;
function someRecursive(array, callback) {
  console.log('top', array);
  // add whatever parameters you deem necessary - good luck!
  if (array.length == 0) return false;
  if (callback(array.pop())) {
    return true;
  }
  console.log('bottom', array);
  return someRecursive(array, callback);
}
console.log(someRecursive([1, 2, 3, 4], isOdd));
console.log(someRecursive([2, 4, 6, 8], isOdd));
console.log(someRecursive([2, 4, 6, 8], isGreater));
