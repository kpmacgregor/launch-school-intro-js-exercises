function numberRange(number) {
  let logString;
  if (number < 0) logString = 'is less than 0';
  if (number >= 0) logString = 'is between 0 and 50';
  if (number > 50) logString = 'is between 51 and 100';
  if (number > 100) logString = 'is greater than 100';
  let result = `${number} ${logString}`;
  console.log(result);
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

