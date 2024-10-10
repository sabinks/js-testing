function findLongestSubstring(string) {
  if (string.length === 0) return 0;

  var start = 0;
  var seen = {};
  var longest = 0;

  for (var i = 0; i < string.length; i++) {
    var char = string[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);

    seen[char] = i + 1;
  }

  return longest;
}

console.log(findLongestSubstring('summertime'));
