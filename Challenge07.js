/*
To validate the email the easiest then we go with Regex again.

Understanding the Regex:
"(.+)@" This is so that anything in front of "@" counts and not just nothing.
"([a-zA-Z]+)\." Here we say after "@" anything between "a-zA-Z" counts and has to have a "." after.
"([a-z]{2,})" Here again we say anything between "a-z" after "." counts and at least 2 charecters or more.
*/

function validateEmail(email) {
  return /(.+)@([a-zA-Z]+)\.([a-z]{2,})/.test(email);
}

console.log(validateEmail('@gmail.com')); // ➞ False
console.log(validateEmail('hello.gmail@com')); // ➞ False
console.log(validateEmail('hello@gmail.com')); // ➞ True
console.log(validateEmail('hello@..com')); // ➞ False
