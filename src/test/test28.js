function same(array1, array2) {
  if (array1.length != array2.length) return false;
  for (var i = 0; i < array1.length; i++) {
    var index = array2.indexOf(array1[i] ** 2);
    if (index === -1) {
      return false;
    }
    array2.splice(index, 1);
  }
  return true;
}

const result1 = same([1, 2, 3], [9, 1, 4]);
const result2 = same([1, 2, 3, 9], [9, 1, 4, 64]);
const result3 = same([1, 2, 1], [9, 14, 1]);
const result4 = same([1, 2], [9, 1, 4]);
const result5 = same([1, 2, 5, 9], [81, 25, 1, 4]);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
