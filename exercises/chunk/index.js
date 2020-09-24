// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunks = [];
  const arrLen = array.length;
  let i = 0;
  while(i < arrLen) {
    chunks.push(array.slice(i, i +size));
    i += size;
  }
  return chunks;
}

module.exports = chunk;


// function chunk(array, size) {
//   const chunked = [];
//   for(let element of array) {
//     const last = chunked[chunked.length - 1];
//     if(!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }
//
// function chunk(array, size) {
//   const chunks = [];
//   const arrLen = array.length;
//   let i = 0;
//   while(i < arrLen) {
//     chunks.push(array.slice(0, size - 1))
//     i = i + size;
//   }
//   chunks.push(array.slice(i, array.length -1));
//   return chunks;
// }
