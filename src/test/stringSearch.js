function stringSearch(longStr, shortStr) {
  if (!shortStr) return 0;
  if (!longStr) return 0;
  var count = 0;
  for (let i = 0; i < longStr.length; i++) {
    var innerCount = 0;
    for (let j = 0; j < shortStr.length; j++) {
      if (shortStr[j] == longStr[i]) {
        i++;
        innerCount++;
      }
      if (innerCount == shortStr.length) {
        count++;
      }
    }
  }
  return count;
}
function anotherStringNaiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        //if long and short char is not same on secon loop, break
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}
console.log(stringSearch('iamiamiamiam123123ami1am', 'am'));
console.log(anotherStringNaiveSearch('iamiamiamiam123123ami1am', 'am'));
