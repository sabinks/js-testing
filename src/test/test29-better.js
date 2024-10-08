function validAnagram(string1, string2) {
  if (string1 == '' && string2 == '') return true;
  if (string1.length !== string2.length) return false;
  var lookUp = {};
  for (var char of string1) {
    lookUp[char] = (lookUp[char] || 0) + 1;
  }

  for (var i = 0; i < second.length; i++) {
    var char = second[i];
    //can't find letter or letter is zero, return false and is not anagram
    if (!lookUp[char]) {
      return false;
    } else {
      lookUp[char] -= 1;
    }
  }
  return true;
}
const patterns = [
  ['123', '321'],
  ['abb', 'bac'],
  ['tiger', 'regit'],
  ['tiger', 'rege t'],
];
for (var pattern of patterns) {
  const result = validAnagram(pattern[0], pattern[1]);
  console.log(result);
}
