function isNotANumber(thing) {
  return thing !== thing;
}

console.log(isNotANumber(5)); //false
console.log(isNotANumber(NaN)); //true
console.log(isNotANumber(0/0)); //true
