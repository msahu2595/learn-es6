function multiply(multiplier, ...digits) {
  const wow = digits.map(function(digit) {
    return multiplier * digit;
  });
  console.log(wow);
  return wow;
}

multiply(5, 1, 2, 3, 4, 5);
