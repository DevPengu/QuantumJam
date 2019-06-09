/*
First, split the string on spaces so the code only edits the sentence ending.
Then we get the last index in the array so it's easier to work with.
By using replace on the array and using Regex, it's a simple way to clean up.

Understanding the Regex:
"(\?|\!)" is the capture group of what to search/match for.
"(?=.*\1)" This matches 1 of everything (because of the ".*") and doesn't include it in the result.
*/

function noYelling(str) {
  const arr = str.split(' ');
  const argsL = arr.length - 1;
  arr[argsL] = arr[argsL].replace(/(\?|!)(?=.*\1)/g, '');
  return arr.join(' ');
}


console.log(noYelling('What went wrong?????????')); // ➞ "What went wrong?"
console.log(noYelling('Oh my goodness!!!')); // ➞ "Oh my goodness!"
console.log(noYelling('What went wrong?????????!!!!!!!')); // ➞ "What went wrong?!"
