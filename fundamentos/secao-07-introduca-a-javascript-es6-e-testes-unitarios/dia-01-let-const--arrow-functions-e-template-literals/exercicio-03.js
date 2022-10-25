const factorial = (number) => {
  number > 1 ? (number = number * factorial(number - 1)) : (number = 1);
  return number;
};

console.log(factorial(5));
