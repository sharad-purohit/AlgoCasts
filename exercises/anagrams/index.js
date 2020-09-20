// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function getCleanStr(str) {
  return str.replace(/[^\w]/, '');
}

function anagrams(stringA, stringB) {
  // Get cleaned up string to remove puntuations and spaces
  const cleanStringA = getCleanStr(stringA).toLowerCase();
  const cleanStringB = getCleanStr(stringB).toLowerCase();

  // Sort charachters strings
  const strASorted = cleanStringA.split('').sort().join('');
  const strBSorted = cleanStringB.split('').sort().join('');

  return strASorted === strBSorted;
}

module.exports = anagrams;
// function anagrams(stringA, stringB) {
//   // Get cleaned up string to remove puntuations and spaces
//   const cleanStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   const cleanStringB = stringB.replace(/[^\w]/g, '').toLowerCase();
//   // Return false if cleanup strings are not of equal length
//   if (cleanStringA.length !== cleanStringB.length) {
//     return false;
//   }
//   const stringACharMap = getCharCountMapFromString(cleanStringA);
//   const stringBCharMap = getCharCountMapFromString(cleanStringB);
//   let isAnagram = true;
//   for(let char in stringACharMap) {
//     if(stringACharMap[char] !== stringBCharMap[char]) {
//       isAnagram = false;
//     }
//     break;
//   }
//   return isAnagram;
// }


//
// function getCharCountMapFromString(str) {
//   return str.split('').reduce((map, curr) => {
//     return {
//       ...map,
//       [curr]: map[curr] + 1 || 1
//     }
//   }, {})
// }
//
// function anagrams(stringA, stringB) {
//   // Get cleaned up string to remove puntuations and spaces
//   const cleanStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   const cleanStringB = stringB.replace(/[^\w]/g, '').toLowerCase();
//   // Return false if cleanup strings are not of equal length
//   if (cleanStringA.length !== cleanStringB.length) {
//     return false;
//   }
//   const stringACharMap = getCharCountMapFromString(cleanStringA);
//   const stringBCharMap = getCharCountMapFromString(cleanStringB);
//   let isAnagram = true;
//   return Object.keys(stringACharMap).every((char) => stringACharMap[char] === stringBCharMap[char]);
// }
