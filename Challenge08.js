/*
First, the code filters out any number that is below 0 to single out positive numbers.
Then we sort the array in numerical order and remove all indexes after the first 2.
Then to add them up and send them back.
*/

function sumTwoSmallestNums(arr) {
  let posArr = arr.filter(a => a >= 0);
  posArr = posArr.sort((a, b) => a - b).slice(0, 2);
  return posArr[0] + posArr[1];
}


console.log(sumTwoSmallestNums([19, 5, 42, 2, 77])); // ➞ 7
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])); // ➞ 3453455
console.log(sumTwoSmallestNums([2, 9, 6, -1])); // ➞ 8
