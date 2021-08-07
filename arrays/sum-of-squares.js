function sumOfSquares(arr) {
  return arr.map(val => val ** 2).reduce((acc, val) => acc + val, 0);
}

console.log(sumOfSquares([3, 5, 7]));
