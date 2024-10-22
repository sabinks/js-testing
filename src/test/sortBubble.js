function sortSimpleBubble(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

function sortOptimizeBubble(array) {
  for (var i = array.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

function nearlSortOptimizeBubble(array) {
  var swap;
  for (var i = array.length; i > 0; i--) {
    swap = false;
    for (var j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swap = true;
      }
    }
    if (!swap) {
      break;
    }
  }

  return array;
}

console.log(
  sortSimpleBubble([100, 39, 1, 40, 5, 10, 99, 199, 35, 200, 3, 300, 6]),
);
console.log(
  sortOptimizeBubble([100, 39, 1, 40, 5, 10, 99, 199, 35, 200, 3, 300, 6]),
);
console.log(
  nearlSortOptimizeBubble([14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
);
