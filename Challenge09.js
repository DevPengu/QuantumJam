/*
First, split the integer into an array by making the int a string.
Then, make "sum" the first index of the array and use "Number" to get the integer again.
And then use a "for loop" for the indexes in the array and "*=" it to the "sum".
*/

function mysteryFunc(num) {
  const arr = num.toString().split('');
  let sum = Number(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    sum *= Number(arr[i]);
  }
  return sum;
}

console.log(mysteryFunc(152)); // ➞ 10
console.log(mysteryFunc(832)); // ➞ 48
console.log(mysteryFunc(19)); // ➞ 9
console.log(mysteryFunc(133)); // ➞ 9
