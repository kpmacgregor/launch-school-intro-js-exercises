function findMax(list) {
  return list.reduce((acc, cur) => cur > acc ? cur : acc);
}

console.log(findMax([1, 6, 3, 2]));
console.log(findMax([-1, -6, -3, -2]));
console.log(findMax([2, 2]));

