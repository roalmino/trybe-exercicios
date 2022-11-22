const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten() {
  // escreva seu código aqui
  const red = arrays.reduce((acc, cur) => (acc += cur), []);
  return red;
}

console.log(flatten());
