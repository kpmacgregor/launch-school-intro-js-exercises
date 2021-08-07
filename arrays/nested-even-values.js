function flatten(arr) {
  let result = [];
  arr.forEach(subArray => result.push(...subArray));
  return result;
}

function evenValues(arr) {
  return arr.filter(val => !(val % 2));
}

function nestedEvenValues(arr) {
  return evenValues(flatten(arr));
}


let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

nestedEvenValues(myArray).forEach(val => console.log(val));
