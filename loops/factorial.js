function factorial(n) {
  let result = 1;
  for (n; n > 0; --n) {
    result *= n;
  }
  return result;
}

for (let i = 1; i < 6; ++i) {
  console.log(factorial(i));
}
