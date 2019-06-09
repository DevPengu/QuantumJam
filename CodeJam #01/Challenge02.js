/*
Here it's simply just multiplying "a + b" and then to take away "-1" since if the third side had the same length, then it wouldn't be a triangle, just a line :thinking:
*/

function nextEdge(a, b) {
  return a + b - 1;
}

console.log(nextEdge(8, 10)); // ➞ 17
console.log(nextEdge(5, 7)); // ➞ 11
console.log(nextEdge(9, 2)); // ➞ 10
