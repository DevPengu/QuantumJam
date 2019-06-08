/*
This is essential the same concept as my ending of challenge 1.
Use Modulus on the number to get a 1 or 0 back and then by using ternary operators to send 'Odd' if 1 or 'Even' if 0.
*/

function isEvenOrOdd(num) {
  return (num % 2 ? 'Odd' : 'Even');
}

console.log(isEvenOrOdd(3)); // ➞ "odd"
console.log(isEvenOrOdd(146)); // ➞ "even"
console.log(isEvenOrOdd(19)); // ➞ "odd"
