function evenOrOdd (number) {
  if (!Number.isInteger(number)) {
    console.error(`Error: ${number} is not an integer.`);
    return;
  }
  let result = number % 2 ? 'odd' : 'even';
  console.log(result);
}

for (let i = -5; i < 15; ++i) {
  console.log(i);
  evenOrOdd(i);
}

evenOrOdd(3.14);
evenOrOdd(6.28);
