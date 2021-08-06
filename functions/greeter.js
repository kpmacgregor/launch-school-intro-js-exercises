let rlsync = require('readline-sync');

function getName(prompt) {
  return rlsync.question(prompt);
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);
