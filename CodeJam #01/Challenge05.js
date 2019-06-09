/*
First we make a loop for each staircase layer where inside of we make another loop for the layers themselves.
In the layer loop, we push the building block or "_" depending on if the layer level is higher or equal to current layer part.
Afterwards push the layer into the "staircase" and loop for each layer until it's done.
*/

function buildStaircase(height, block) {
  const staircase = [];
  for (let i = 0; i < height; i++) {
    const layer = [];
    for (let y = 0; y < height; y++) {
      layer.push(i >= y ? block : '_');
    }
    staircase.push(layer);
  }
  return staircase;
}

console.log(buildStaircase(3, '#')); /* ➞ [
  ["#", "_", "_"],
  ["#", "#", "_"],
  ["#", "#", "#"]
] */

console.log(buildStaircase(4, '#')); /* ➞ [
  ["#", "_", "_", "_"],
  ["#", "#", "_", "_"],
  ["#", "#", "#", "_"],
  ["#", "#", "#", "#"]
] */
