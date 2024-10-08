function validAnagram(string1, string2) {
  if (string1 == '' && string2 == '') return true;
  if (string1.length !== string2.length) return false;
  var object1 = {};
  var object2 = {};
  for (var char of string1) {
    object1[char] = (object1[char] || 0) + 1;
  }
  for (var char of string2) {
    object2[char] = (object2[char] || 0) + 1;
  }
  var loopObject =
    Object.keys(object1).length > Object.keys(object2).length
      ? object1
      : object2;
  for (var char of Object.keys(loopObject)) {
    if (object1[char] !== object2[char]) {
      return false;
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
