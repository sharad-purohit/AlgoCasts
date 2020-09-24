// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  if(!str) {
    return null;
  }
  // Loop 1 to create the map
  const charCountMap = str.split('').reduce((obj, currChar) => {
      return {
        ...obj,
        [currChar]: obj[currChar] > 0 ? obj[currChar] + 1 : 1
      }
  }, {});
  let maxChar = '';
  let max = 0;

  // Loop 2 to find the max
  for(let char in charCountMap) {
    if (charCountMap[char] > max) {
      max = charCountMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
