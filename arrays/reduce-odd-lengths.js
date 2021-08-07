let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let output = arr.reduce((acc, current) => {
//  console.log(acc);
  if (current.length % 2) {
    acc.push(current.length);
  }
  return acc;
}, []);

console.log(output);
