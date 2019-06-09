/*
This splits the string into an array for each character then map it.
From here, I get each character charCode and use Modulus on the charCode to see if it's odd or even.
From there, it's just using the ternary operator to decide if it should be lowerCase or upperCase and join it back together to a string.
*/

function asciiCapitalize(str) {
  return [...str].map((c) => c.charCodeAt() % 2 ? c.toLowerCase() : c.toUpperCase()).join('');
}

console.log(asciiCapitalize('to be or not to be!')); // ➞ "To Be oR NoT To Be!"
console.log(asciiCapitalize('THE LITTLE MERMAID')); // ➞ "THe LiTTLe meRmaiD"
console.log(asciiCapitalize('Oh what a beautiful morning.')); // ➞ "oH wHaT a BeauTiFuL moRNiNg."
