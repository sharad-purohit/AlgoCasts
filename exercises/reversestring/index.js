// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  if(!str) {
    return null;
  }
  debugger;
  return str.split('').reduce((rev, curr) => curr + rev, '');
}
// reverse('abc');
module.exports = reverse;

// function reverse(str) {
//   if(!str) {
//     return null;
//   }
//   const len = str.length;
//   let reversedString = '';
//   for(let char of str) {
//     reversedString = char + reversedString;
//   }
//   return reversedString;
// }
// function reverse(str) {
//   if(!str) {
//     return null;
//   }
//   const len = str.length;
//   let reversedString = '';
//   for(let i = len - 1; i >= 0; i--) {
//     reversedString += str.charAt(i)
//   }
//   return reversedString;
// }
