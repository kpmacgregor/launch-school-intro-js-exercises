function findIntegers(arr) {
  return arr.filter(val => Number.isInteger(val));
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
console.log(findIntegers(things));
