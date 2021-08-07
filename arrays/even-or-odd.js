function evenOrOdd(arr) {
  return arr.map(val => val % 2 ? 'odd' : 'even');
}

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

console.log(evenOrOdd(myArray));
