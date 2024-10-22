var newArray = [];
function capitalizeFirst(array) {
  // add whatever parameters you deem necessary - good luck!
  if (array.length < 1) return newArray;
  var string = array[0];
  newArray.push(string[0].toUpperCase() + string.slice(1));
  return capitalizeFirst(array.slice(1));
}

var result = capitalizeFirst(['car', 'taco', 'banana']); // ['Car','Taco','Banana']
console.log(result);
