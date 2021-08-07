function evenValues(arr) {
  return arr.filter(val => !(val % 2));
}

let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];

evenValues(myArray).forEach(val => console.log(val));
