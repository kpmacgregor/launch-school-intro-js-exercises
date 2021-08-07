let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
let output = arr.map(str => str.length).filter(num => num % 2);
console.log(output);
