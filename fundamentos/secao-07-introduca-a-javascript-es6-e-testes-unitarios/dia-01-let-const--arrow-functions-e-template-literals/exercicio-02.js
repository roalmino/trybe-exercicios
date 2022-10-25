const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (oddsAndEvens) => {
  const ordem = oddsAndEvens.sort((a, b) => a - b);
  return `Os números ${ordem} estão em ordem crescente`;
};
console.log(sortOddsAndEvens(oddsAndEvens)); // será necessário alterar essa linha 😉
