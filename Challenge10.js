/*
First we sort everything in decending order
Afterwards sort the numbers equal to each other in length in ascending order
*/

function digitSort(arr) {
  arr.sort((a, b) => b - a);
  return arr.sort((a, b) => {
    if (a.toString().length === b.toString().length) return a - b;
  });
}

console.log(digitSort([77, 23, 5, 7, 101])); // ➞ [101, 23, 77, 5, 7]
console.log(digitSort([1, 5, 9, 2, 789, 563, 444])); // ➞ [444, 563, 789, 1, 2, 5, 9]
console.log(digitSort([53219, 3772, 564, 32, 1])); // ➞ [53219, 3772, 564, 32, 1]
