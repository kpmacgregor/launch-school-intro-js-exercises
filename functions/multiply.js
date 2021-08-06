let rlsync = require('readline-sync');

const multiply = (n1, n2) => n1 * n2;

function getNum(prompt) {
  return Number(rlsync.question(prompt));
}

let firstNum = getNum('Enter the first number: ');
let secondNum = getNum('Enter the second number: ');

console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`);
