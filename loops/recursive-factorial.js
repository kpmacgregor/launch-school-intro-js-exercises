function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

for (let i = 1; i < 9; ++i) {
  console.log(factorial(i));
}

