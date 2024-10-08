// 1) frequncy counter

function same(array1, array2) {
  if (array1.length != array2.length) return false;

  const freq1 = {};
  const freq2 = {};

  for (var val of array1) {
    freq1[val] = (freq1[val] || 0) + 1;
  }
  for (var val of array2) {
    freq2[val] = (freq2[val] || 0) + 1;
  }

  for (var key in freq1) {
    if (!(key ** 2 in freq2)) {
      return false;
    }
    if (freq2[key ** 2] !== freq1[key]) {
      return false;
    }
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
