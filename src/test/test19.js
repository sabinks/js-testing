function capitalizeWords(array) {
  var result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    var string = helperInput[0];

    result.push(string.toUpperCase());

    helper(array.slice(1));
  }
  helper(array);

  return result;
}

let words = ['i', 'am', 'learning', 'recursion'];
let result = capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
console.log(result);
