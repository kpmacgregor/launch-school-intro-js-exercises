let rlsync = require('readline-sync');
let age = Number(rlsync.question('How old are you? '));

console.log(`You are ${age} years old.`);

for (let i = 1; i < 5; ++i) {
  console.log(`In ${10 * i} years, you will be ${age + 10 * i } years old.`);
}

