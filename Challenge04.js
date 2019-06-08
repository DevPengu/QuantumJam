/*
This function is essential the same as Challenge 1, instead of getting charCode,
I just check if the leetSpeak object has the current char and then either replace it or leave it.
*/

const leetSpeak = { o: '0', l: '1', e: '3', a: '4', s: '5' };

function hackerSpeak(str) {
  return [...str].map((c) => leetSpeak.hasOwnProperty(c) ? leetSpeak[c] : c).join('');
}

console.log(hackerSpeak('javascript is cool')); // ➞ "j4v45cr1pt 15 c00l"
console.log(hackerSpeak('programming is fun')); // ➞ "pr0gr4mm1ng 15 fun"
console.log(hackerSpeak('become a coder')); // ➞ "b3c0m3 4 c0d3r"
