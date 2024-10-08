function isAlphaNumeric(char) {
  var code;
  code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !((code > 64) & (code < 91)) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}
function charCounts2(string) {
  var result = {};
  for (var char of string) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      if (result[char]) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}

function charCounts(string) {
  var result = {};
  for (var i = 0; i < string.length; i++) {
    var char = string[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char]) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}

var result1 = charCounts(
  'Hello 123 there 123 1 123 1 12 1 23 12 3 12 3 123 1231231 3u',
);
var result2 = charCounts2(
  'Hello 123 there 123 1 123 1 12 1 23 12 3 12 3 123 1231231 3u',
);

console.log(result1);
console.log(result2);
