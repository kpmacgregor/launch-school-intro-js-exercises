/* should have used Array.prototype.includes() */

function checkFor3(arr) {
  if (arr.find(e => e === 3) === undefined) {
    return false;
  } else return true;
}

console.log(checkFor3([1, 3, 5, 7, 9, 11]));
console.log(checkFor3([]));
console.log(checkFor3([2, 4, 6, 8]));

