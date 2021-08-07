function isNegZero(num) {
  return (1 / num) === -Infinity;
}

console.log(isNegZero(0)); //false
console.log(isNegZero(-0)); //true
